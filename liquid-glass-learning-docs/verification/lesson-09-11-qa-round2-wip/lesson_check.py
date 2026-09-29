import sys, os, re, json, subprocess, tempfile, shutil, signal, time, threading, html as H
CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
def run(src_path, out_path):
    src=open(src_path,encoding='utf-8').read()
    src=src.replace('<head>','<head><script>window.__errs=[];window.addEventListener("error",e=>window.__errs.push(String(e.message)+" @"+e.lineno));</script>',1)
    drv='''<script>setTimeout(()=>{ const o={errs:window.__errs};
      const ns=document.getElementById('upd-ns'); let el=ns, t=[]; while(el && !(el.tagName==='H3' && /Why exactly on the rings/.test(el.textContent))){ t.push(el.innerText||''); el=el.nextElementSibling; }
      o.ns=t.join('\\n'); const d=document.getElementById('upd-derive'); d.open=true; o.box=d.innerText;
      const pre=document.createElement('pre'); pre.id='__dump'; pre.textContent=JSON.stringify(o); document.body.appendChild(pre); },1500);</script>'''
    i=src.rfind('</body>'); src=src[:i]+drv+src[i:]
    tmp=os.path.join(os.path.dirname(os.path.abspath(src_path)),'__lesson_tmp.html'); open(tmp,'w',encoding='utf-8').write(src)
    prof=tempfile.mkdtemp(prefix='chl')
    proc=subprocess.Popen([CHROME,'--headless=new','--disable-gpu','--no-first-run','--user-data-dir='+prof,'--window-size=1920,1080','--virtual-time-budget=20000','--dump-dom','file://'+tmp],stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,text=True,start_new_session=True)
    buf=[]; th=threading.Thread(target=lambda:[buf.append(c) for c in iter(lambda:proc.stdout.read(65536),'')],daemon=True); th.start()
    t0=time.time()
    while time.time()-t0<int(os.environ.get('HT','60')) and proc.poll() is None: time.sleep(0.5)
    if proc.poll() is None: os.killpg(proc.pid,signal.SIGKILL)
    th.join(timeout=5); shutil.rmtree(prof,ignore_errors=True); os.remove(tmp)
    m=re.search(r'<pre id="__dump">(.*?)</pre>',''.join(buf),re.S)
    if not m: print('NO DUMP'); return
    d=json.loads(H.unescape(m.group(1))); json.dump(d,open(out_path,'w'),ensure_ascii=False,indent=0)
    print('errors:',d['errs'])
if __name__=='__main__': run(sys.argv[1],sys.argv[2])
