# Headless-Chrome driver for lesson-09-11-qa.html.
# Injects an error collector and a driver, runs Chrome --dump-dom, returns the collected JSON.
# usage: python3 harness.py <html> <out.json> [cards...]
import sys, os, subprocess, json, re, tempfile, shutil

CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

ERRS = r'''<script>window.__errs=[];window.addEventListener('error',e=>window.__errs.push(String(e.message)+' @'+e.lineno));window.addEventListener('unhandledrejection',e=>window.__errs.push('rej '+e.reason));</script>'''

DRIVER = r'''<script>
(function(){
  const out={errs:null,cards:{}};
  if(__OPEN__) document.querySelectorAll('details').forEach(d=>d.open=true);   // audit text inside closed <details> too
  const strip=h=>{ const d=document.createElement('div'); d.innerHTML=h; return d.innerText; };
  function tipsOf(root){ const res=[]; root.querySelectorAll('.pt').forEach(el=>{ const t=TIPS.get(el); if(!t) { res.push({k:el.dataset.k,missing:true}); return; } const o=typeof t==='function'?t():t; res.push({k:el.dataset.k,html:strip(tipHTML(o))}); }); return res; }
  function snap(card){ const s={}; s.math=[...card.querySelectorAll('.math,.stepcap,.evidence,.res,table.deriv,.known,.fpanel,.chips,figcaption,.goal')].map(e=>(e.id||e.className)+': '+e.innerText); s.tips=tipsOf(card); s.svgtext=[...card.querySelectorAll('svg text')].map(t=>t.textContent); return s; }
  const CARDS=__CARDS__;
  for(const id of CARDS){
    const card=document.getElementById(id); if(!card){ out.cards[id]='MISSING'; continue; }
    const states=[]; states.push({state:'initial',...snap(card)});
    const btns=[...card.querySelectorAll('button.btn')].filter(b=>!/copy/i.test(b.id));
    for(const b of btns){ const lbl=(b.id||b.className)+'|'+b.textContent.trim(); try{ if(!b.disabled) b.click(); }catch(e){ states.push({state:lbl,err:String(e)}); continue; } states.push({state:lbl,...snap(card)}); }
    const sl=[...card.querySelectorAll('input[type=range]')];
    for(const s of sl){ for(const v of [s.min,s.max,s.defaultValue]){ s.value=v; s.dispatchEvent(new Event('input',{bubbles:true})); states.push({state:'range '+s.id+'='+v,...snap(card)}); } }
    // steppers: dots
    card.querySelectorAll('.dots').forEach(dd=>{ [...dd.children].forEach((b,i)=>{ b.click(); states.push({state:'dot '+dd.id+' '+i,...snap(card)}); }); });
    out.cards[id]=states;
  }
  out.errs=window.__errs;
  const pre=document.createElement('pre'); pre.id='__dump'; pre.textContent=JSON.stringify(out); document.body.appendChild(pre);
})();
</script>'''

def run(html_path, out_path, cards):
    src = open(html_path, encoding='utf-8').read()
    src = src.replace('<head>', '<head>' + ERRS, 1) if '<head>' in src else ERRS + src
    drv = DRIVER.replace('__CARDS__', json.dumps(cards)).replace('__OPEN__', 'true' if os.environ.get('OPEN_DETAILS') else 'false')
    idx = src.rfind('</body>')
    src = src[:idx] + drv + src[idx:]
    tmpdir = os.path.dirname(os.path.abspath(html_path))
    tmp = os.path.join(tmpdir, '__harness_tmp_%d.html' % os.getpid())
    open(tmp, 'w', encoding='utf-8').write(src)
    prof = tempfile.mkdtemp(prefix='chr')
    try:
        import signal, time, threading
        proc = subprocess.Popen([CHROME, '--headless=new', '--disable-gpu', '--no-first-run', '--user-data-dir=' + prof,
                            '--window-size=1920,1080', '--virtual-time-budget=30000', '--dump-dom', 'file://' + tmp],
                           stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True, start_new_session=True)
        buf = []
        def reader():
            for chunk in iter(lambda: proc.stdout.read(65536), ''):
                buf.append(chunk)
        th = threading.Thread(target=reader, daemon=True); th.start()
        t0 = time.time(); limit = int(os.environ.get('HT', '300'))
        while time.time() - t0 < limit:
            time.sleep(0.5)
            if proc.poll() is not None: break
            tail = ''.join(buf[-3:])
            if '</html>' in tail: time.sleep(0.5); break
        if proc.poll() is None:
            os.killpg(proc.pid, signal.SIGKILL)   # only the process group this script started
        th.join(timeout=5)
        class P: pass
        p = P(); p.stdout = ''.join(buf); p.stderr = ''
        print('chrome seconds: %.1f' % (time.time() - t0))
    finally:
        shutil.rmtree(prof, ignore_errors=True)
        os.remove(tmp)
    m = re.search(r'<pre id="__dump">(.*?)</pre>', p.stdout, re.S)
    if not m:
        print('NO DUMP. stderr tail:', p.stderr[-2000:])
        sys.exit(1)
    import html as H
    data = json.loads(H.unescape(m.group(1)))
    json.dump(data, open(out_path, 'w'), ensure_ascii=False, indent=0)
    print('errors:', data['errs'])
    for k, v in data['cards'].items():
        print(k, 'states:', len(v) if isinstance(v, list) else v)

if __name__ == '__main__':
    run(sys.argv[1], sys.argv[2], sys.argv[3:] or ['q%d' % i for i in range(1, 11)])
