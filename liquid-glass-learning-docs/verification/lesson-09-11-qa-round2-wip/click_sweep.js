// Real-browser point check for lesson-09-11-qa.html (2026-09-29). Paste into the page's console at 1920x1080.
// __cover(root): every point whose centre is not reachable by a click (covered by another point, a line, a label, or outside its frame).
//   A centre may open a shared tooltip: points whose dots overlap share one tooltip that names each of them (unstack() in cards_new.js).
// __sweepSync(selector): clicks each point with the point near the top, the middle, and the bottom of the window;
//   checks that the tooltip opens, shows the point's own (or shared) content, stays inside the window, and closes with Escape.
window.__cover = function(root){
  const bad=[]; const pts=[...root.querySelectorAll('.pt')].filter(e=>e.getBoundingClientRect().width>0);
  for(const el of pts){ const r0=el.getBoundingClientRect(); window.scrollTo({top:scrollY+r0.top+r0.height/2-innerHeight/2,behavior:'instant'});
    const r=el.getBoundingClientRect(), hit=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2), hp=hit&&hit.closest&&hit.closest('.pt');
    if(hp!==el && !(hp && TIPS.get(hp)===TIPS.get(el))) bad.push(el.dataset.k+'<'+(hp?hp.dataset.k:(hit?hit.tagName:'null'))); }
  return {n:pts.length,bad};
};
window.__sweepSync = function(sel){
  const res={n:0,covered:[],notOpen:[],outside:[],wrongTip:[],escape:[]};
  const pts=[...document.querySelectorAll(sel)].filter(e=>e.getBoundingClientRect().width>0), H=innerHeight;
  for(const el of pts) for(const where of [0.04,0.5,0.96]){
    const r0=el.getBoundingClientRect(); window.scrollTo({top:scrollY+r0.top+r0.height/2-H*where,behavior:'instant'});
    const r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2; if(cy<2||cy>H-2) continue;
    const hit=document.elementFromPoint(cx,cy), hp=hit&&hit.closest&&hit.closest('.pt'); res.n++;
    if(!hp||(hp!==el&&TIPS.get(hp)!==TIPS.get(el))){ res.covered.push(el.dataset.k); continue; }
    hit.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,clientX:cx,clientY:cy,view:window}));
    if(tipEl.hidden){ res.notOpen.push(el.dataset.k); continue; }
    if(TIPS.get(tipOwner)!==TIPS.get(el)) res.wrongTip.push(el.dataset.k);
    const t=tipEl.getBoundingClientRect(); if(!(t.left>=0&&t.top>=0&&t.right<=innerWidth&&t.bottom<=H)) res.outside.push(el.dataset.k+' '+where);
    document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})); if(!tipEl.hidden) res.escape.push(el.dataset.k);
  }
  res.points=pts.length; return res;
};
// Driven states in the 2026-09-29 run: card 9 steps 1-9, card 10 states 1-4, card 20 halvings 1-8; every slider value of
// cards 12 (both rules), 16, 17, 21; every button of cards 11, 13, 14, 15, 18, 19, 22-25 and the summary.
