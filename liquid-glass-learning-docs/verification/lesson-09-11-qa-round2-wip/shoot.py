# Screenshot one card of lesson-09-11-qa.html in a given state.
# usage: python3 shoot.py <html> <out.png> <cardId> "<js actions>" [width] [height]
import sys, os, subprocess, tempfile, shutil, signal, time
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

def shoot(html, out, card, actions='', W=1920, H=1400):
    src = open(html, encoding='utf-8').read()
    drv = '''<script>(function(){ const keep=document.getElementById(%r);
      document.querySelectorAll('main > *').forEach(e=>{ if(e!==keep) e.style.display='none'; });
      %s
    })();</script>''' % (card, actions)
    i = src.rfind('</body>'); src = src[:i] + drv + src[i:]
    tmp = os.path.join(os.path.dirname(os.path.abspath(html)), '__shoot_tmp_%d.html' % os.getpid())
    open(tmp, 'w', encoding='utf-8').write(src)
    prof = tempfile.mkdtemp(prefix='chs')
    try:
        proc = subprocess.Popen([CHROME, '--headless=new', '--disable-gpu', '--no-first-run', '--user-data-dir=' + prof, '--hide-scrollbars',
                                 '--window-size=%d,%d' % (W, H), '--virtual-time-budget=8000', '--screenshot=' + out, 'file://' + tmp],
                                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
        t0 = time.time()
        while time.time() - t0 < 90:
            time.sleep(0.5)
            if proc.poll() is not None: break
            if os.path.exists(out) and os.path.getsize(out) > 0 and time.time() - t0 > 3:
                time.sleep(1.0); break
        if proc.poll() is None:
            os.killpg(proc.pid, signal.SIGKILL)   # only the group this script started
    finally:
        shutil.rmtree(prof, ignore_errors=True); os.remove(tmp)
    print(out, os.path.getsize(out) if os.path.exists(out) else 'MISSING')

if __name__ == '__main__':
    a = sys.argv
    shoot(a[1], a[2], a[3], a[4] if len(a) > 4 else '', int(a[5]) if len(a) > 5 else 1920, int(a[6]) if len(a) > 6 else 1400)
