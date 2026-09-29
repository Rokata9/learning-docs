# Run a JS snippet in the loaded page (headless Chrome) and print what it stores in window.__out:
#   python3 probe.py <html> "<js that sets window.__out>"
import sys, os, subprocess, tempfile, shutil, signal, time, threading, re, json, html as H
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
def run(src_path, js):
    src = open(src_path, encoding='utf-8').read()
    src = src.replace('<head>', '<head><script>window.__errs=[];window.addEventListener("error",e=>window.__errs.push(String(e.message)+" @"+e.lineno));</script>', 1)
    drv = '<script>setTimeout(()=>{ try{ %s }catch(e){ window.__out={probeError:String(e)}; } const pre=document.createElement("pre"); pre.id="__dump"; pre.textContent=JSON.stringify({errs:window.__errs,out:window.__out}); document.body.appendChild(pre); },1200);</script>' % js
    i = src.rfind('</body>'); src = src[:i] + drv + src[i:]
    tmp = os.path.join(os.path.dirname(os.path.abspath(src_path)), '__probe_tmp_%d.html' % os.getpid()); open(tmp, 'w', encoding='utf-8').write(src)
    prof = tempfile.mkdtemp(prefix='chp')
    proc = subprocess.Popen([CHROME, '--headless=new', '--disable-gpu', '--no-first-run', '--user-data-dir=' + prof, '--window-size=1920,1080', '--virtual-time-budget=15000', '--dump-dom', 'file://' + tmp], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True, start_new_session=True)
    buf = []; th = threading.Thread(target=lambda: [buf.append(c) for c in iter(lambda: proc.stdout.read(65536), '')], daemon=True); th.start()
    t0 = time.time()
    while time.time() - t0 < int(os.environ.get('HT', '60')) and proc.poll() is None:
        time.sleep(0.5)
        if '</html>' in ''.join(buf[-3:]): time.sleep(0.5); break
    if proc.poll() is None: os.killpg(proc.pid, signal.SIGKILL)
    th.join(timeout=5); shutil.rmtree(prof, ignore_errors=True); os.remove(tmp)
    m = re.search(r'<pre id="__dump">(.*?)</pre>', ''.join(buf), re.S)
    print(H.unescape(m.group(1)) if m else 'NO DUMP')
if __name__ == '__main__': run(sys.argv[1], sys.argv[2])
