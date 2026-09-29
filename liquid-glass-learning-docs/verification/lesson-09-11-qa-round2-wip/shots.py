# Batch screenshots: python3 shots.py <html> <outdir> <jobs.json>; each job: [name, card, js, offset, height]
import sys, json, os, subprocess
from concurrent.futures import ThreadPoolExecutor
html, outdir, jobs = sys.argv[1], sys.argv[2], json.load(open(sys.argv[3]))
SP = os.path.dirname(os.path.abspath(__file__))
def one(j):
    name, card, js, off, h = j
    act = js + (";document.querySelector('main').style.marginTop='-%dpx';" % off if off else '')
    r = subprocess.run(['python3', os.path.join(SP, 'shoot.py'), html, os.path.join(outdir, name + '.png'), card, act, '1920', str(h)], capture_output=True, text=True)
    return name, (r.stdout.strip().split()[-1] if r.stdout.strip() else r.stderr[-300:])
with ThreadPoolExecutor(6) as ex:
    for name, res in ex.map(one, jobs): print(name, res)
