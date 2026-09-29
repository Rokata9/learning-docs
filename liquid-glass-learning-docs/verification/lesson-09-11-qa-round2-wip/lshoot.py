# Screenshot the lesson from a given element down: python3 lshoot.py <html> <out.png> <css selector> "<js before>" [extra offset] [height]
import sys, os, subprocess, tempfile, shutil, signal, time
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
def shoot(html, out, sel, js='', off=0, H=1400, W=1920):
    src = open(html, encoding='utf-8').read()
    drv = '''<script>setTimeout(()=>{ %s; const el=document.querySelector(%r); const t=el.getBoundingClientRect().top+scrollY-12+%d; document.body.style.marginTop=(-t)+'px'; },600);</script>''' % (js, sel, off)
    i = src.rfind('</body>'); src = src[:i] + drv + src[i:]
    tmp = os.path.join(os.path.dirname(os.path.abspath(html)), '__lshoot_tmp_%d.html' % os.getpid())
    open(tmp, 'w', encoding='utf-8').write(src)
    prof = tempfile.mkdtemp(prefix='chl')
    try:
        proc = subprocess.Popen([CHROME, '--headless=new', '--disable-gpu', '--no-first-run', '--user-data-dir=' + prof, '--hide-scrollbars', '--window-size=%d,%d' % (W, H), '--virtual-time-budget=9000', '--screenshot=' + out, 'file://' + tmp], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
        t0 = time.time()
        while time.time() - t0 < 90:
            time.sleep(0.5)
            if proc.poll() is not None: break
            if os.path.exists(out) and os.path.getsize(out) > 0 and time.time() - t0 > 3: time.sleep(1.0); break
        if proc.poll() is None: os.killpg(proc.pid, signal.SIGKILL)
    finally:
        shutil.rmtree(prof, ignore_errors=True); os.remove(tmp)
    print(out, os.path.getsize(out) if os.path.exists(out) else 'MISSING')
if __name__ == '__main__':
    a = sys.argv
    shoot(a[1], a[2], a[3], a[4] if len(a) > 4 else '', int(a[5]) if len(a) > 5 else 0, int(a[6]) if len(a) > 6 else 1400)
