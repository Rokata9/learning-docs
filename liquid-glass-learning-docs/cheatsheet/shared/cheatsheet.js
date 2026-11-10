'use strict';
/* Formula cheatsheet — shared script. Every page loads it before its own script.
   It adds the section menu and the point tooltip, typesets the LaTeX formulas as MathML,
   and holds the helpers the pictures share. */

/* ================= the sections (menu, pager) ================= */
const SECTIONS = [{"n": 1, "file": "01-coordinates-and-units.html", "title": "Coordinates and units", "acc": "#2563eb", "range": "2.1 – 2.9 · 4.10 · 5.10 · 8.4 – 8.8"}, {"n": 2, "file": "02-color-numbers.html", "title": "Color numbers", "acc": "#db2777", "range": "1.6 · 3.1 · 3.2 · 3.6 · 3.7 · 7.10 · 7.12 · 8.3"}, {"n": 3, "file": "03-alpha-and-compositing.html", "title": "Alpha and compositing", "acc": "#7c3aed", "range": "1.6 · 3.3 – 3.5 · 3.8 · 3.10 · 3.11 · 4.8 · 4.9 · 7.5"}, {"n": 4, "file": "04-color-adjustments.html", "title": "Color adjustments", "acc": "#ea580c", "range": "3.9 · 7.6 · 7.12"}, {"n": 5, "file": "05-shape-geometry.html", "title": "Shape geometry", "acc": "#0d9488", "range": "4.1 – 4.6 · 4.10 · 4.11 · 5.10 · 6.3 · 7.4c · 7.7 · 7.8"}, {"n": 6, "file": "06-motion-and-time.html", "title": "Motion and time", "acc": "#b45309", "range": "5.1 – 5.12 · 8.10"}, {"n": 7, "file": "07-backdrop-blur-and-frost.html", "title": "Backdrop, blur and frost", "acc": "#0e7490", "range": "6.5 – 6.11 · 7.1 – 7.12"}, {"n": 8, "file": "08-shader-building-blocks.html", "title": "Shader building blocks", "acc": "#4f46e5", "range": "8.1 – 8.12"}, {"n": 9, "file": "09-distance-fields.html", "title": "Distance fields", "acc": "#15803d", "range": "9.1 – 9.6 · 9.14"}, {"n": 10, "file": "10-image-sampling.html", "title": "Image sampling", "acc": "#9333ea", "range": "9.7 – 9.9 (wallpaper rule used up to 9.14)"}, {"n": 11, "file": "11-displacement-refraction-and-lens.html", "title": "Displacement, refraction and the lens", "acc": "#dc2626", "range": "9.10 – 9.14"}, {"n": 12, "file": "12-light-and-surface.html", "title": "Light and surface", "acc": "#a855f7", "range": "10.1–10.3"}, {"n": 13, "file": "13-constants-and-conventions.html", "title": "Constants and conventions", "acc": "#475569", "range": "all chapters"}];

(function chrome(){
  const here = location.pathname.split('/').pop();
  document.body.insertAdjacentHTML('afterbegin',
    '<button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="menu"><span class="ico">☰</span>Sections</button>' +
    '<nav class="menu" id="menu" aria-label="Sections"><div class="menu-h">Sections <button id="menuClose" aria-label="Close menu">×</button></div><div id="menuList"></div></nav>' +
    '<div class="tip" id="tip" role="dialog"><button aria-label="Close">×</button><div></div></div>');
  const list = document.getElementById('menuList');
  list.insertAdjacentHTML('beforeend', `<a href="index.html" class="${here === 'index.html' || here === '' ? 'active' : ''}"><span class="n" style="background:#172033">☰</span><span>All sections and conventions</span><small></small></a>`);
  SECTIONS.forEach(c => {
    list.insertAdjacentHTML('beforeend', `<a href="${c.file}" class="${c.file === here ? 'active' : ''}" title="Lessons ${c.range}"><span class="n" style="background:${c.acc}">${String(c.n).padStart(2, '0')}</span><span>${c.title}</span><small>${c.range}</small></a>`);
  });
  const btn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
  function setOpen(o){ menu.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); }
  btn.addEventListener('click', e => { e.stopPropagation(); setOpen(!menu.classList.contains('open')); });
  document.getElementById('menuClose').addEventListener('click', () => setOpen(false));
  document.addEventListener('click', e => { if(menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn) setOpen(false); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') setOpen(false); });
  /* pager under the section */
  const i = SECTIONS.findIndex(c => c.file === here), pager = document.getElementById('pager');
  if(pager && i >= 0){
    const prev = SECTIONS[i - 1], next = SECTIONS[i + 1];
    pager.innerHTML = (prev ? `<a href="${prev.file}">← ${String(prev.n).padStart(2, '0')} ${prev.title}</a>` : '<span></span>') +
      `<a href="index.html">All sections</a>` + (next ? `<a href="${next.file}">${String(next.n).padStart(2, '0')} ${next.title} →</a>` : '<span></span>');
  }
})();

/* ================= LaTeX → MathML =================
   A small LaTeX reader for the formulas of this cheatsheet. The browser draws MathML itself,
   so the pages need no library and work from file://.
   Write a formula in an element with class "tex" (a block) or "tx" (inside a sentence).
   Supported: { } ^ _ \frac \sqrt \text \mathrm \operatorname \left \right \quad \qquad \, \;
   \begin{aligned} (& and \\), \begin{cases}, \begin{bmatrix}, \color{#hex}{…}, \kn{…} (a known input, green),
   \hl{…} (yellow), \times \div \cdot \le \ge \ne \approx \to \pm \ldots and Greek letters.
   A run of two or more letters is one name, drawn upright (px, displayScale); one letter is italic (x, A). */
const TeX = (() => {
  const M = 'http://www.w3.org/1998/Math/MathML';
  const SYM = {times:'×', div:'÷', cdot:'·', le:'≤', leq:'≤', ge:'≥', geq:'≥', ne:'≠', neq:'≠', approx:'≈', to:'→', rightarrow:'→',
    Rightarrow:'⇒', leftarrow:'←', pm:'±', ldots:'…', dots:'…', cdots:'⋯', vert:'|', lvert:'|', rvert:'|', infty:'∞', circ:'∘',
    prime:'′', mid:'|', lbrace:'{', rbrace:'}', langle:'⟨', rangle:'⟩', percent:'%', degree:'°', sum:'∑', in:'∈', bmod:'mod', pmod:'mod'};
  const GREEK = {alpha:'α', beta:'β', gamma:'γ', delta:'δ', Delta:'Δ', epsilon:'ε', theta:'θ', lambda:'λ', mu:'μ', pi:'π', rho:'ρ',
    sigma:'σ', tau:'τ', phi:'φ', omega:'ω', Omega:'Ω'};
  const FUN = ['min', 'max', 'round', 'clamp', 'floor', 'mix', 'sqrt', 'length', 'smoothstep', 'mod', 'abs'];
  const SPACE = {quad:'1em', qquad:'2em', ',':'0.17em', ';':'0.28em', ' ':'0.25em', ':':'0.22em', '!':'0em'};
  function tokens(src){
    const out = []; let i = 0;
    while(i < src.length){
      const c = src[i];
      if(c === '\\'){
        const m = /^\\([A-Za-z]+|.)/.exec(src.slice(i));
        out.push({t:'cmd', v:m[1]}); i += m[0].length;
        if(m[1] === 'text' || m[1] === 'mathrm' || m[1] === 'operatorname'){
          /* read the braced argument raw, so spaces stay */
          while(src[i] === ' ') i++;
          if(src[i] === '{'){ let d = 1, j = i + 1; while(j < src.length && d){ if(src[j] === '{') d++; else if(src[j] === '}') d--; j++; } out.push({t:'raw', v:src.slice(i + 1, j - 1)}); i = j; }
        }
      } else if(/\s/.test(c)){ i++; }
      else if(c === '-' && /[0-9.]/.test(src[i + 1] || '') && (() => { const q = out[out.length - 1];
        return !q || (q.t === 'ch' && '(,=[{&'.includes(q.v)) || (q.t === 'cmd' && /^(;|,|quad|qquad| |times|div|cdot|le|ge|to|approx)$/.test(q.v)); })()){
        const m = /^-[0-9]*\.?[0-9]+/.exec(src.slice(i)); out.push({t:'num', v:'−' + m[0].slice(1)}); i += m[0].length; }
      else if(/[0-9.]/.test(c)){ const m = /^[0-9]*\.?[0-9]+|^[0-9]+\.?/.exec(src.slice(i)); out.push({t:'num', v:m[0]}); i += m[0].length; }
      else if(/[A-Za-z]/.test(c)){ const m = /^[A-Za-z]+/.exec(src.slice(i)); out.push({t:'word', v:m[0]}); i += m[0].length; }
      else { out.push({t:'ch', v:c}); i++; }
    }
    return out;
  }
  function el(tag, kids, attrs){
    const e = document.createElementNS(M, tag);
    if(attrs) for(const k in attrs) e.setAttribute(k, attrs[k]);
    (kids || []).forEach(k => e.appendChild(typeof k === 'string' ? document.createTextNode(k) : k));
    return e;
  }
  const row = kids => kids.length === 1 ? kids[0] : el('mrow', kids);
  function parse(src){
    const tk = tokens(src); let p = 0;
    const peek = () => tk[p], next = () => tk[p++];
    function arg(){
      const t = peek();
      if(t && t.t === 'ch' && t.v === '{'){ next(); const r = seq(['}']); next(); return row(r); }
      return atom();
    }
    function seq(stops){
      const kids = [];
      while(p < tk.length){
        const t = peek();
        if(t.t === 'ch' && stops.includes(t.v)) break;
        if(t.t === 'cmd' && (stops.includes('\\' + t.v))) break;
        if(t.t === 'cmd' && (t.v === 'right' || t.v === 'end') && stops.includes('\\' + t.v)) break;
        const a = atom(); if(a) kids.push(scripts(a));
      }
      return kids;
    }
    function scripts(base){
      let sub = null, sup = null;
      for(;;){
        const t = peek();
        if(t && t.t === 'ch' && t.v === '^'){ next(); sup = arg(); }
        else if(t && t.t === 'ch' && t.v === '_'){ next(); sub = arg(); }
        else if(t && t.t === 'ch' && (t.v === '′' || t.v === "'")){ next(); sup = sup ? row([sup, el('mo', ['′'])]) : el('mo', ['′']); }
        else break;
      }
      if(sub && sup) return el('msubsup', [base, sub, sup]);
      if(sub) return el('msub', [base, sub]);
      if(sup) return el('msup', [base, sup]);
      return base;
    }
    function env(name){
      /* rows split by \\, cells by & */
      const rows = [[[]]];
      while(p < tk.length){
        const t = peek();
        if(t.t === 'cmd' && t.v === 'end'){ next(); arg(); break; }
        if(t.t === 'cmd' && t.v === '\\'){ next(); rows.push([[]]); continue; }
        if(t.t === 'ch' && t.v === '&'){ next(); rows[rows.length - 1].push([]); continue; }
        const a = atom(); if(a){ const r = rows[rows.length - 1]; r[r.length - 1].push(scripts(a)); }
      }
      if(rows.length > 1 && rows[rows.length - 1].every(c => !c.length)) rows.pop();
      const table = el('mtable', rows.map(r => el('mtr', r.map((c, j) => {
        return el('mtd', [row(c.length ? c : [el('mrow')])]);
      }))), {class:'tx-' + name});
      if(name === 'cases') return el('mrow', [el('mo', ['{'], {stretchy:'true'}), table]);
      if(name === 'bmatrix') return el('mrow', [el('mo', ['['], {stretchy:'true'}), table, el('mo', [']'], {stretchy:'true'})]);
      return table;
    }
    function atom(){
      const t = next();
      if(t.t === 'num') return el('mn', [t.v]);
      if(t.t === 'word'){
        if(FUN.includes(t.v) || t.v.length > 1) return el('mi', [t.v], t.v.length === 1 ? {} : {});
        return el('mi', [t.v]);
      }
      if(t.t === 'raw') return el('mtext', [t.v]);
      if(t.t === 'ch'){
        if(t.v === '{'){ const r = seq(['}']); next(); return row(r); }
        if(t.v === '-') return el('mo', ['−']);
        if(t.v === '*') return el('mo', ['×']);
        if(t.v === '~') return el('mspace', [], {width:'0.25em'});
        if(t.v === '(' || t.v === ')' || t.v === '[' || t.v === ']' || t.v === '|') return el('mo', [t.v], {stretchy:'false'});
        return el('mo', [t.v]);
      }
      /* commands */
      const v = t.v;
      if(v === 'frac'){ const a = arg(), b = arg(); return el('mfrac', [a, b]); }
      if(v === 'sqrt') return el('msqrt', [arg()]);
      if(v === 'text'){ const r = next(); return el('mtext', [r.v]); }
      if(v === 'mathrm' || v === 'operatorname'){ const r = next(); return el('mi', [r.v], {mathvariant:'normal', class:'tx-fn'}); }
      if(v === 'left' || v === 'right' || v === 'big' || v === 'Big' || v === 'bigl' || v === 'bigr'){
        const d = next(); const ch = d.t === 'cmd' ? (SYM[d.v] || d.v) : d.v;
        return ch === '.' ? null : el('mo', [ch], {stretchy:'true'});
      }
      if(v === 'begin'){ const n = arg().textContent.trim(); return env(n); }
      if(v === 'color'){ const c = arg().textContent.replace(/\s/g, ''); const b = arg(); return el('mrow', [b], {style:'color:' + c}); }
      if(v === 'kn') return el('mrow', [arg()], {class:'tx-kn'});
      if(v === 'hl') return el('mrow', [arg()], {class:'tx-hl'});
      if(v === 'bold') return el('mrow', [arg()], {class:'tx-b'});
      if(v in SPACE) return el('mspace', [], {width:SPACE[v]});
      if(v in GREEK) return el('mi', [GREEK[v]]);
      if(v in SYM) return el('mo', [SYM[v]]);
      if(v === '{' || v === '}' || v === '%' || v === '&' || v === '#' || v === '_') return el('mo', [v]);
      if(FUN.includes(v)) return el('mi', [v], {class:'tx-fn'});
      return el('mtext', ['\\' + v]);
    }
    return seq([]);
  }
  function render(node){
    if(node._tex) return;
    const src = node.textContent;
    const block = node.classList.contains('tex');
    const m = el('math', parse(src), block ? {displaystyle:'true'} : {});
    m.setAttribute('aria-label', src.replace(/\\[a-z]+/g, ' ').replace(/[{}]/g, ''));
    node.textContent = ''; node.appendChild(m); node._tex = src; node.title = '';
  }
  /* Chrome centers every MathML table cell. Pad the cells so that, in an aligned block,
     the left side of each "=" is right-aligned and the right side left-aligned. */
  function align(root){
    (root || document).querySelectorAll('mtable.tx-aligned, mtable.tx-cases').forEach(t => {
      const rows = [...t.children], cols = [];
      rows.forEach(r => [...r.children].forEach((c, j) => { c.style.paddingLeft = c.style.paddingRight = '0px'; }));
      rows.forEach(r => [...r.children].forEach((c, j) => { const w = c.firstElementChild ? c.firstElementChild.getBoundingClientRect().width : 0; cols[j] = Math.max(cols[j] || 0, w); }));
      if(!cols.some(w => w > 0)) return;
      const gap = t.classList.contains('tx-cases') ? 0 : 0;
      rows.forEach(r => [...r.children].forEach((c, j) => {
        const w = c.firstElementChild ? c.firstElementChild.getBoundingClientRect().width : 0, extra = cols[j] - w;
        const right = t.classList.contains('tx-aligned') && j % 2 === 0, gapL = t.classList.contains('tx-cases') && j > 0 ? 18 : 0;
        c.style.paddingLeft = (right ? extra : gapL) + 'px'; c.style.paddingRight = (right ? 0 : extra) + 'px';
      }));
    });
  }
  function all(root){ (root || document).querySelectorAll('.tex, .tx').forEach(render); align(root); }
  return {render, all, parse, align};
})();
TeX.all();


/* ================= utilities ================= */
const $ = id => document.getElementById(id);
const NS = 'http://www.w3.org/2000/svg';
/* rounding rule of the course: exact if at most 4 decimals, else 3 decimals half up */
function R(x){
  if(!isFinite(x)) return x;
  const s = x < 0 ? -1 : 1, a = Math.abs(x);
  const e4 = Math.round(a * 1e4);
  if(Math.abs(a * 1e4 - e4) < 1e-6) return s * e4 / 1e4 || 0;
  return s * Math.round(a * 1e3 + 1e-7) / 1e3 || 0;
}
function fmtAbs(a, maxDec){
  if(Math.abs(a - Math.round(a)) < 1e-9) return String(Math.round(a));
  let d = 2;
  while(d < maxDec && Math.abs(Math.round(a * 10 ** d) - a * 10 ** d) > 1e-6) d++;
  return a.toFixed(d);
}
function F(x){ x = R(x); const s = fmtAbs(Math.abs(x), 4); return (x < 0 && s !== '0' ? '−' : '') + s; }
/* exact format: squares that feed a square root stay exact */
function FX(x){ const a = Math.abs(x); const s = fmtAbs(a, 8); return (x < 0 && s !== '0' ? '−' : '') + s; }
function P(x){ const s = F(x); return R(x) < 0 ? '(' + s + ')' : s; }
function PX(x){ const s = FX(x); return x < 0 ? '(' + s + ')' : s; }
const add = (a, b) => R(a + b), sub = (a, b) => R(a - b), mul = (a, b) => R(a * b), div = (a, b) => R(a / b);
const clamp01 = x => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
function rgbCss(c, a){ const f = v => Math.round(clamp01(v) * 255); return a === undefined ? `rgb(${f(c[0])},${f(c[1])},${f(c[2])})` : `rgba(${f(c[0])},${f(c[1])},${f(c[2])},${a})`; }
function el(tag, attrs, parent, text){
  const e = document.createElementNS(NS, tag);
  for(const k in attrs) e.setAttribute(k, attrs[k]);
  if(text !== undefined) e.textContent = text;
  if(parent) parent.appendChild(e);
  return e;
}
function clearSvg(s){ while(s.firstChild) s.removeChild(s.firstChild); }
/* svg label with a white halo so it reads on any background */
function sText(svg, x, y, t, o = {}){
  return el('text', {x, y, 'font-size': o.size || 14, 'font-weight': o.weight || 600, fill: o.fill || '#0f172a', 'text-anchor': o.anchor || 'start', stroke: o.halo === false ? 'none' : '#fff', 'stroke-width': 4, 'paint-order': 'stroke', 'stroke-linejoin': 'round'}, svg, t);
}
function sArrow(svg, x0, y0, x1, y1, color, w = 2.5){
  const a = Math.atan2(y1 - y0, x1 - x0), h = 10;
  const g = el('g', {}, svg);
  el('line', {x1: x0, y1: y0, x2: x1 - Math.cos(a) * h * .6, y2: y1 - Math.sin(a) * h * .6, stroke: color, 'stroke-width': w}, g);
  el('polygon', {points: `${x1},${y1} ${x1 - h * Math.cos(a - .4)},${y1 - h * Math.sin(a - .4)} ${x1 - h * Math.cos(a + .4)},${y1 - h * Math.sin(a + .4)}`, fill: color}, g);
  return g;
}
/* steps table used by every readout: rows = [[label, text], ...] */
function steps(rows, head){
  let h = head ? `<div class="ex-h" style="color:var(--acc)">${head}</div>` : '';
  h += '<table class="steps">';
  for(const [l, t] of rows) h += `<tr><th>${l}</th><td>${nowrapEq(t)}</td></tr>`;
  return h + '</table>';
}
const B = s => `<b>${s}</b>`;
function nowrapEq(t){ return String(t).split('\n').map(l => l.split(/ {3,}/).map(x => x.split(' → ').map(y => y.includes(' = ') ? `<span class="eq">${y}</span>` : y).join(' → ')).join('     ')).join('\n'); }
function line(a, o, b, r){ return `${F(a)} ${o} ${P(b)} = ${F(r)}`; }

/* ================= point tooltips (click a labelled point) ================= */
const Tip = (() => {
  const tip = $('tip'), body = tip.querySelector('div');
  let open = false;
  function show(cx, cy, html){
    body.innerHTML = html; tip.style.display = 'block';
    const r = tip.getBoundingClientRect();
    let x = cx + 14, y = cy + 14;
    if(x + r.width > innerWidth - 8) x = cx - r.width - 14;
    if(y + r.height > innerHeight - 8) y = cy - r.height - 14;
    tip.style.left = Math.max(8, x) + 'px'; tip.style.top = Math.max(8, y) + 'px';
    open = true;
  }
  function hide(){ tip.style.display = 'none'; open = false; }
  tip.querySelector('button').addEventListener('click', hide);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') hide(); });
  document.addEventListener('pointerdown', e => { if(open && !tip.contains(e.target) && !e.target.closest('canvas,svg')) hide(); });
  return {show, hide};
})();
/* canvases keep a list of labelled points; a click near one opens its tooltip and does nothing else.
   o.drag: a press that moves 3 px or more drags, onPick follows the pointer live, and the click that ends the drag does nothing else;
   cv._grab lists the draggable points (the cursor shows a hand over them) */
function pickable(cv, onPick, o = {}){
  cv._pts = [];
  const at = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * cv.width / r.width, (e.clientY - r.top) * cv.height / r.height]; };
  let press = null, dragged = false;
  if(o.drag){
    cv.style.touchAction = 'none';
    cv.addEventListener('pointerdown', e => { if(e.button === 0){ press = [e.clientX, e.clientY]; dragged = false; } });
    cv.addEventListener('pointermove', e => {
      const [x, y] = at(e);
      if(!press){ cv.style.cursor = (cv._grab || []).some(p => Math.hypot(p.x - x, p.y - y) < 9) ? 'grab' : ''; return; }
      if(!dragged){
        if(Math.hypot(e.clientX - press[0], e.clientY - press[1]) < 3) return;
        dragged = true; Tip.hide(); cv.style.cursor = 'grabbing';
        try { cv.setPointerCapture(e.pointerId); } catch(_){}
        if(o.start) o.start();
      }
      onPick(x, y);
    });
    const end = () => { if(!press) return; press = null; if(dragged){ cv.style.cursor = ''; if(o.end) o.end(); } };
    cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
  }
  cv.addEventListener('click', e => {
    if(dragged){ dragged = false; return; }
    const [x, y] = at(e);
    for(const p of cv._pts){
      if(Math.hypot(p.x - x, p.y - y) < 9){ Tip.show(e.clientX, e.clientY, `<b>${p.name}</b><br>${p.role}<br>${p.coords}`); return; }
    }
    Tip.hide();
    if(onPick) onPick(x, y);
  });
}

/* ================= picture helpers (canvas) ================= */
const ORANGE = [0.88, 0.48, 0.18, 1], NAVY = [0.10, 0.25, 0.40, 1], WHITE = [1, 1, 1, 1], BLACK = [0, 0, 0, 1], CLEAR = [0, 0, 0, 0];
const TURQ = [0.18, 0.83, 0.75, 1];
function View(cv, x0, y0, x1, y1){
  const v = {cv, ctx: cv.getContext('2d'), x0, y0, x1, y1, w: cv.width, h: cv.height};
  v.px = (u, w) => [(u - v.x0) / (v.x1 - v.x0) * v.w, (w - v.y0) / (v.y1 - v.y0) * v.h];
  v.uv = (x, y) => [v.x0 + x / v.w * (v.x1 - v.x0), v.y0 + y / v.h * (v.y1 - v.y0)];
  v.len = d => d / (v.x1 - v.x0) * v.w;
  return v;
}
/* fill every pixel from fn(u, v) → [r, g, b, a]; transparent pixels show a hatch */
function paint(view, fn, target){
  const w = view.w, h = view.h, ctx = (target || view.cv).getContext('2d');
  const img = ctx.createImageData(w, h), d = img.data;
  for(let j = 0; j < h; j++){
    const vv = view.y0 + (j + .5) / h * (view.y1 - view.y0);
    for(let i = 0; i < w; i++){
      const u = view.x0 + (i + .5) / w * (view.x1 - view.x0);
      let c = fn(u, vv);
      const k = (j * w + i) * 4;
      if(c[3] === 0){ const s = ((i + j) % 8) < 3; c = s ? [0.80, 0.84, 0.88, 1] : [1, 1, 1, 1]; }
      else if(c[3] < 1){ const s = ((i + j) % 8) < 3 ? 0.84 : 1; c = [c[0] * c[3] + s * (1 - c[3]), c[1] * c[3] + s * (1 - c[3]), c[2] * c[3] + s * (1 - c[3]), 1]; }
      d[k] = c[0] * 255; d[k + 1] = c[1] * 255; d[k + 2] = c[2] * 255; d[k + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}
function offscreen(w, h){ const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function cStroke(ctx, path, color, w = 2.5){
  ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(15,23,42,.85)'; ctx.lineWidth = w + 3; path(); ctx.stroke();
  ctx.strokeStyle = color; ctx.lineWidth = w; path(); ctx.stroke(); ctx.restore();
}
function cCircle(ctx, x, y, r, color, w = 2.5){ cStroke(ctx, () => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); }, color, w); }
function cArrow(ctx, x0, y0, x1, y1, color, w = 2.5){
  const a = Math.atan2(y1 - y0, x1 - x0), L = Math.hypot(x1 - x0, y1 - y0), h = Math.min(10, L * .45);
  cStroke(ctx, () => { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.moveTo(x1 - h * Math.cos(a - .45), y1 - h * Math.sin(a - .45)); ctx.lineTo(x1, y1); ctx.lineTo(x1 - h * Math.cos(a + .45), y1 - h * Math.sin(a + .45)); }, color, w);
}
function cDot(ctx, x, y, color, r = 5.5){ ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fillStyle = color; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = '#0f172a'; ctx.stroke(); ctx.restore(); }
/* labels sit on a light plate, so they read on dark and light pixels */
function cLabel(ctx, x, y, t, o = {}){
  ctx.save(); ctx.font = `${o.weight || 700} ${o.size || 14}px Inter,system-ui,sans-serif`;
  const w = ctx.measureText(t).width + 8, h = (o.size || 14) + 6;
  let X = o.anchor === 'end' ? x - w : o.anchor === 'middle' ? x - w / 2 : x, Y = y - h + 4;
  X = Math.max(1, Math.min(ctx.canvas.width - w - 1, X)); Y = Math.max(1, Math.min(ctx.canvas.height - h - 1, Y));
  ctx.fillStyle = 'rgba(255,255,255,.88)'; ctx.strokeStyle = 'rgba(15,23,42,.35)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect ? ctx.roundRect(X, Y, w, h, 5) : ctx.rect(X, Y, w, h); ctx.fill(); ctx.stroke();
  ctx.fillStyle = o.color || '#0f172a'; ctx.fillText(t, X + 4, Y + h - 6); ctx.restore();
}
const Fc = x => { const s = F(x); return /^−?\d+$/.test(s) && s !== '0' ? (+R(x)).toFixed(2).replace('-', '−') : s; };
const fu = (u, v) => `(${Fc(u)}, ${Fc(v)})`;
function hatchRect(ctx, x, y, w, h){ ctx.save(); ctx.fillStyle = '#fff'; ctx.fillRect(x, y, w, h); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip(); ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 2; for(let k = -h; k < w; k += 7){ ctx.beginPath(); ctx.moveTo(x + k, y + h); ctx.lineTo(x + k + h, y); ctx.stroke(); } ctx.restore(); }

/* ================= wallpapers ================= */
function checker(x, y, a, b, edge){
  if(edge && (x < 0 || x > 1 || y < 0 || y > 1)) return CLEAR;
  let c = Math.floor(x * 4), r = Math.floor(y * 4);
  if(edge){ c = Math.min(c, 3); r = Math.min(r, 3); }
  return (((c + r) % 2) + 2) % 2 === 0 ? a : b;
}
const WALLS = {
  stripes: (x, y) => { const c = x * 5 - Math.floor(x * 5); return c < .5 ? ORANGE : NAVY; },
  on: (x, y) => checker(x, y, ORANGE, NAVY, false),
  lines: (x, y) => Math.abs(x - .65) < .003 ? WHITE : Math.abs(x - .90) < .003 ? TURQ : checker(x, y, ORANGE, NAVY, false),
  onEdge: (x, y) => checker(x, y, ORANGE, NAVY, true),
  bw: (x, y) => checker(x, y, WHITE, BLACK, true),
  bwMove: (x, y, t) => { if(y < 0 || y > 1) return CLEAR; const c = Math.floor((x + 0.10 * t) * 4), r = Math.min(Math.floor(y * 4), 3); return (((c + r) % 2) + 2) % 2 === 0 ? WHITE : BLACK; }
};
const WALLNAME = {on: ['orange', 'navy'], lines: ['orange', 'navy'], onEdge: ['orange', 'navy'], bw: ['white', 'black'], bwMove: ['white', 'black']};
/* the wallpaper rule printed one step at a time (uses the rounded read point) */
function wallSteps(x, y, kind, time){
  const out = [];
  const edge = kind === 'onEdge' || kind === 'bw' || kind === 'bwMove';
  if(edge && kind !== 'bwMove' && (x < 0 || x > 1 || y < 0 || y > 1)) return {txt: `${fu(x, y)} is outside 0 … 1 → no wallpaper → transparent (0, 0, 0, 0)`, color: CLEAR, name: 'none'};
  let xx = x;
  if(kind === 'bwMove'){ const sh = mul(0.10, time), xs = add(x, sh); out.push(`shift: ${line(0.10, '×', time, sh)}     x + shift: ${line(x, '+', sh, xs)}`); xx = xs; }
  if(kind === 'lines'){ if(Math.abs(x - .65) < .003) return {txt: `x = ${F(x)} lies on the white line x = 0.65 → white`, color: WHITE, name: 'white'}; if(Math.abs(x - .90) < .003) return {txt: `x = ${F(x)} lies on the turquoise line x = 0.90 → turquoise`, color: TURQ, name: 'turquoise'}; }
  const cx = mul(xx, 4), ry = mul(y, 4);
  let c = Math.floor(cx + 1e-9), r = Math.floor(ry + 1e-9);
  let ct = `col: ${line(xx, '×', 4, cx)} → floor → ${c}`, rt = `row: ${line(y, '×', 4, ry)} → floor → ${r}`;
  if(edge && kind !== 'bwMove' && c > 3){ ct += ' → min(4, 3) = 3'; c = 3; }
  if(edge && r > 3){ rt += ' → min(4, 3) = 3'; r = 3; }
  const even = (((c + r) % 2) + 2) % 2 === 0, nm = WALLNAME[kind][even ? 0 : 1];
  out.push(`${ct}     ${rt}`);
  out.push(`${c} + ${P(r)} = ${c + r} → ${even ? 'even' : 'odd'} → ${nm}`);
  const pal = kind.startsWith('bw') ? (even ? WHITE : BLACK) : (even ? ORANGE : NAVY);
  return {txt: out.join('\n'), color: pal, name: nm};
}

/* ================= the lens function (exact, for pictures) ================= */
function smoothF(e0, e1, x){ const t = clamp01((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); }
function falloffOf(rule, sd, band){
  if(rule === 'const') return 1;
  if(rule === 'smooth') return 1 - smoothF(-band, band, sd);
  if(rule === 'linear') return 1 - clamp01((sd + band) / (2 * band));
  return sd < 0 ? 1 : 0;
}
function lens(u, v, o){
  const px = u - o.cx, py = v - o.cy, d = Math.hypot(px, py), sd = d - o.radius;
  const fall = falloffOf(o.rule, sd, o.band), push = o.dispLen * fall;
  let dx = 0, dy = 0;
  if(d > 0.0001){ dx = px / d * push; dy = py / d * push; }
  const wall = WALLS[o.wall], cl = q => o.clamp ? clamp01(q) : q;
  let bent;
  if(o.spread === undefined || o.spread === null) bent = wall(cl(u - dx), cl(v - dy), o.time);
  else {
    const s = o.spread;
    const r = wall(cl(u - dx * (1 - s)), cl(v - dy * (1 - s)), o.time), g = wall(cl(u - dx), cl(v - dy), o.time), b = wall(cl(u - dx * (1 + s)), cl(v - dy * (1 + s)), o.time);
    bent = [r[0], g[1], b[2], 1];
  }
  return {bent, sd, fall, push, dx, dy, d};
}

/* ================= the lens chain printed one operation per line ================= */
function chainRows(W, o){
  const rows = [], [u, v] = W;
  const px = sub(u, o.cx), py = sub(v, o.cy);
  rows.push(['p = uv − C', `${line(u, '−', o.cx, px)}     ${line(v, '−', o.cy, py)}`]);
  const sx = px * px, sy = py * py, ss = sx + sy, d = R(Math.sqrt(ss));
  rows.push(['d = length(p)', `${PX(px)} × ${PX(px)} = ${FX(sx)}     ${PX(py)} × ${PX(py)} = ${FX(sy)}     ${FX(sx)} + ${FX(sy)} = ${FX(ss)}     √${FX(ss)} = ${F(d)}`]);
  const sd = sub(d, o.radius);
  rows.push(['sd = d − radius', line(d, '−', o.radius, sd)]);
  let fall;
  if(o.rule === 'const'){ fall = 1; rows.push(['falloff', 'none in Lesson 9.10: every pixel gets the full push']); }
  else if(o.rule === 'hard'){ fall = sd < 0 ? 1 : 0; rows.push(['falloff (hard if)', `${F(sd)} ${sd < 0 ? '&lt; 0 → 1' : '≥ 0 → 0'}`]); }
  else {
    const tn = sub(sd, -o.band), td = sub(o.band, -o.band), t0 = div(tn, td);
    const t = Math.min(1, Math.max(0, t0));
    let txt = `${F(sd)} − (${F(-o.band)}) = ${F(tn)}     ${F(o.band)} − (${F(-o.band)}) = ${F(td)}     ${line(tn, '÷', td, t0)}${t0 < 0 ? ' → limited to 0' : t0 > 1 ? ' → limited to 1' : ''} (t)`;
    if(o.rule === 'linear'){ fall = sub(1, t); txt += `\nfalloff: ${line(1, '−', t, fall)}`; rows.push(['falloff (straight line)', txt]); }
    else {
      const t2 = mul(t, t), t3 = mul(t2, t), a = mul(3, t2), b = mul(2, t3), s = sub(a, b); fall = sub(1, s);
      txt += `\n${line(t, '×', t, t2)} (t²)     ${line(t2, '×', t, t3)} (t³)     ${line(3, '×', t2, a)}     ${line(2, '×', t3, b)}     ${line(a, '−', b, s)}\nfalloff: ${line(1, '−', s, fall)}`;
      rows.push(['falloff (smoothstep)', txt]);
    }
  }
  const push = mul(o.dispLen, fall);
  rows.push(['push', line(o.dispLen, '×', fall, push)]);
  let dx = 0, dy = 0;
  if(d <= 0.0001){ rows.push(['dir, disp', 'd ≤ 0.0001: the shader skips the division → disp = (0, 0)']); }
  else {
    const ex = div(px, d), ey = div(py, d); dx = mul(ex, push); dy = mul(ey, push);
    rows.push(['dir = p ÷ d', `${line(px, '÷', d, ex)}     ${line(py, '÷', d, ey)}`]);
    rows.push(['disp = dir × push', `${line(ex, '×', push, dx)}     ${line(ey, '×', push, dy)}`]);
  }
  const reads = [];
  const doRead = (name, k) => {
    let ax = dx, ay = dy, pre = '';
    if(k !== 1){ const kk = k; ax = mul(dx, kk); ay = mul(dy, kk); pre = `${line(dx, '×', kk, ax)}     ${line(dy, '×', kk, ay)}\n`; }
    const rx = sub(u, ax), ry = sub(v, ay);
    let txt = pre + `${line(u, '−', ax, rx)}     ${line(v, '−', ay, ry)}`;
    let fx = rx, fy = ry;
    if(o.clamp){
      const c1 = Math.max(rx, 0), c2 = Math.min(c1, 1), c3 = Math.max(ry, 0), c4 = Math.min(c3, 1);
      if(c2 !== rx || c4 !== ry) txt += `\nclamp: x: max(${F(rx)}, 0) = ${F(c1)}     min(${F(c1)}, 1) = ${F(c2)}     y: max(${F(ry)}, 0) = ${F(c3)}     min(${F(c3)}, 1) = ${F(c4)}`;
      else txt += '\nclamp: both inside 0 … 1 → unchanged';
      fx = c2; fy = c4;
    }
    const ws = wallSteps(fx, fy, o.wall, o.time);
    txt += '\n' + ws.txt;
    reads.push({name, x: fx, y: fy, rx, ry, color: ws.color, cname: ws.name});
    rows.push([name, txt]);
  };
  if(o.spread === undefined || o.spread === null){ doRead('read point R', 1); }
  else {
    const k1 = sub(1, o.spread), k2 = add(1, o.spread);
    rows.push(['spread factors', `${line(1, '−', o.spread, k1)}     ${line(1, '+', o.spread, k2)}`]);
    doRead('readRed', k1); doRead('readGreen', 1); doRead('readBlue', k2);
  }
  let bent;
  if(reads.length === 1) bent = reads[0].color;
  else { bent = [reads[0].color[0], reads[1].color[1], reads[2].color[2], 1]; rows.push(['bent', `red = ${F(bent[0])} (from readRed)     green = ${F(bent[1])} (from readGreen)     blue = ${F(bent[2])} (from readBlue)`]); }
  return {rows, reads, bent, push, sd, d, px, py, dx, dy};
}

/* ================= labelled points in static pictures =================
   An SVG element with data-tip opens the point tooltip on click, Enter or Space. */
(function svgTips(){
  document.querySelectorAll('svg [data-tip]').forEach(e => { e.setAttribute('tabindex', '0'); e.setAttribute('role', 'button'); e.style.cursor = 'pointer'; });
  function open(e, t){ const r = t.getBoundingClientRect(); Tip.show(e.clientX || r.right, e.clientY || r.bottom, t.dataset.tip); }
  document.addEventListener('click', e => { const t = e.target.closest && e.target.closest('svg [data-tip]'); if(t){ e.stopPropagation(); open(e, t); } }, true);
  document.addEventListener('keydown', e => { const t = document.activeElement; if((e.key === 'Enter' || e.key === ' ') && t && t.dataset && t.dataset.tip){ e.preventDefault(); open({}, t); } });
})();
