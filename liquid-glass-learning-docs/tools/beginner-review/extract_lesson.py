#!/usr/bin/env python3
"""Extract everything a learner can read in one lesson page, for the fresh beginner review.

Output, in OUT_DIR (a temp folder outside the repository):
  lesson-text.md   the page text; every stepper state's caption, picture labels and tooltips;
                   every <details> opened (exercises and hidden answers); all tooltips
  shots/*.png      a screenshot of every stepper state, figure, question card and exercise

Usage (from anywhere):
  python3 extract_lesson.py <lesson.html> <OUT_DIR> [--extra extra.js]

--extra: a JavaScript file with lesson-specific states, as a JSON-like list in a comment-free
  file:  [{"stepper": 0, "step": 1, "name": "Step 2, y line", "js": "line2=1;ideaPanel();ideaOrb.render()"}]
  Each entry is captured after the stepper is on that step (0-based) and the js has run.

Needs Python 3 and Playwright:
  python3 -m pip install playwright && python3 -m playwright install chromium
"""
import asyncio, json, os, sys
from pathlib import Path

try:
    from playwright.async_api import async_playwright
except ImportError:
    sys.exit("Playwright is missing: python3 -m pip install playwright && python3 -m playwright install chromium")

GRAB = r"""(rootSel)=>{
  const root=rootSel?document.querySelector(rootSel):document.body, tips=[];
  const store=(typeof tipStore!=='undefined')?tipStore:null;
  if(store) root.querySelectorAll('.tk').forEach(el=>{const v=store.get(el);if(!v)return;let h='';try{h=typeof v==='function'?v():v}catch(e){h='(tooltip error: '+e+')'}
    const d=document.createElement('div');d.style.cssText='position:absolute;left:-9999px;width:800px';document.body.appendChild(d);d.innerHTML=h;tips.push(d.innerText.replace(/\n+/g,' / '));d.remove()});
  const labels=[...new Set(window.__T||[])];window.__T=[];
  return {labels,tips:[...new Set(tips)]}}"""

def md_state(title, shot, caption, g):
    out = [f"### {title}" + (f"  (screenshot: {shot})" if shot else ""), ""]
    if caption: out += ["Caption:", "", caption.strip(), ""]
    if g["labels"]: out += ["Labels in the pictures: " + " | ".join(g["labels"]), ""]
    if g["tips"]: out += ["Tooltips:", ""] + ["- " + t for t in g["tips"]] + [""]
    return out

async def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    html = Path(sys.argv[1]).resolve(); out = Path(sys.argv[2]); (out / "shots").mkdir(parents=True, exist_ok=True)
    extra = []
    if "--extra" in sys.argv:
        extra = json.loads(Path(sys.argv[sys.argv.index("--extra") + 1]).read_text())
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page(viewport={"width": 1920, "height": 1080})
        errors = []; pg.on("pageerror", lambda e: errors.append(str(e)))
        await pg.add_init_script("window.__QA_NOANIM=1")
        await pg.goto(html.as_uri()); await pg.wait_for_timeout(900)
        # canvas labels: lessons draw picture text through a global plate(); log it if present
        await pg.evaluate("()=>{window.__T=[];if(typeof window.plate==='function'){const o=window.plate;window.plate=function(c,t,...r){window.__T.push(String(t));return o(c,t,...r)}}}")
        md = [f"# {html.name} — everything the learner can read", "",
              "Pictures: screenshots in the shots folder (file names given per state). Labels are the words drawn inside the pictures; tooltips open when the learner clicks a point or an ⓘ.", ""]
        if errors: md += ["**Page errors:** " + "; ".join(errors), ""]
        shot_n = 0
        async def shot(el, name):
            nonlocal shot_n
            shot_n += 1; fn = f"{shot_n:03d}_{name}.png"
            try:
                await el.scroll_into_view_if_needed(); await el.screenshot(path=str(out / "shots" / fn)); return fn
            except Exception:
                return None
        # 1. steppers: every .stepnav with a Next button
        navs = await pg.query_selector_all(".stepnav")
        for si, nav in enumerate(navs):
            nxt = await nav.query_selector("button:has-text('Next')"); prv = await nav.query_selector("button:has-text('Back')")
            if not nxt: continue
            # the container that holds this stepper's pictures
            cont = await nav.evaluate_handle("n=>{let e=n.parentElement;while(e&&e!==document.body&&!(/grid/i.test(e.className)||e.querySelectorAll('canvas,svg').length>=2))e=e.parentElement;return (e&&e!==document.body)?e:n.parentElement}")
            cont_sel = await cont.evaluate("e=>{if(!e.id)e.id='__stepper'+Math.random().toString(36).slice(2,8);return '#'+e.id}")
            if prv:
                for _ in range(40):
                    if await prv.is_disabled(): break
                    await prv.click(); await pg.wait_for_timeout(60)
            md += [f"## Stepper {si + 1}", ""]
            # redraw step 1 after clearing the label log, so its labels are logged (Next, then Back)
            await pg.evaluate("window.__T=[]")
            if not await nxt.is_disabled() and prv:
                await nxt.click(); await pg.wait_for_timeout(60); await pg.evaluate("window.__T=[]"); await prv.click()
            step = 0
            while True:
                await pg.wait_for_timeout(150)
                cap = await cont.evaluate("e=>{const c=e.querySelector('.stepcap')||e.querySelector('[aria-live]');return c?c.innerText:''}")
                g = await pg.evaluate(GRAB, cont_sel)
                fn = await shot(cont, f"stepper{si + 1}_step{step + 1}")
                md += md_state(f"Stepper {si + 1}, step {step + 1}", fn, cap, g)
                for ex in [e for e in extra if e.get("stepper", 0) == si and e.get("step") == step]:
                    await pg.evaluate("window.__T=[]"); await pg.evaluate(ex["js"]); await pg.wait_for_timeout(200)
                    cap2 = await cont.evaluate("e=>{const c=e.querySelector('.stepcap')||e.querySelector('[aria-live]');return c?c.innerText:''}")
                    g2 = await pg.evaluate(GRAB, cont_sel)
                    fn2 = await shot(cont, f"stepper{si + 1}_step{step + 1}_extra")
                    md += md_state(ex.get("name", f"Stepper {si + 1}, step {step + 1}, extra state"), fn2, cap2, g2)
                if await nxt.is_disabled() or step > 40: break
                await pg.evaluate("window.__T=[]"); await nxt.click(); step += 1; await pg.wait_for_timeout(120)
        # 2. open every <details>, then the whole page text in reading order
        await pg.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)"); await pg.wait_for_timeout(300)
        await pg.evaluate("window.__T=[]")
        md += ["## The whole page in reading order (all hidden answers open)", "",
               "Labels inside pictures outside the steppers are not logged here: read them in the screenshots.", "",
               await pg.evaluate("document.body.innerText"), ""]
        g = await pg.evaluate(GRAB, None)
        md += ["## All tooltips on the page", ""] + ["- " + t for t in g["tips"]] + [""]
        # 3. screenshots of figures, question cards and exercises
        for sel, name in [("figure", "figure"), (".qa", "card"), ("details.ex", "exercise"), (".exq", "exercise_picture")]:
            for i, el in enumerate(await pg.query_selector_all(sel)):
                await shot(el, f"{name}{i + 1}")
        (out / "lesson-text.md").write_text("\n".join(md))
        await b.close()
    print(f"wrote {out / 'lesson-text.md'} and {shot_n} screenshots")

asyncio.run(main())
