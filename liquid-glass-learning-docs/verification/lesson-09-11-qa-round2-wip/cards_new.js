/* ======================= round 2 (2026-09-29): cards 11–24, 3-decimal engine N3 ======================= */
/* overlapping points (2026-09-29, real-browser QA): a point under another point, or under a line or a label, could not be clicked.
   unstack(): lines and labels take no clicks; points whose dots overlap share one tooltip that names each of them;
   a point close to another gets a smaller click circle, so that each dot can be clicked on its own. */
function unstack(root){
  root.style.pointerEvents='none';
  const vr=el=>Math.max(...[...el.querySelectorAll('circle:not(.hit)')].map(c=>+c.getAttribute('r')||0),0);   // the visible radius of a point
  const P=[...root.querySelectorAll('.pt')].map(el=>{ el.style.pointerEvents='auto'; const d=el.querySelector('.dot'), h=el.querySelector('.hit');
    return d&&h?{el,h,x:+d.getAttribute('cx'),y:+d.getAttribute('cy'),r:vr(el),hr:+h.getAttribute('r')}:null; }).filter(Boolean);
  const up=P.map((_,i)=>i), top=i=>up[i]===i?i:(up[i]=top(up[i]));
  for(let i=0;i<P.length;i++) for(let j=i+1;j<P.length;j++){ const a=P[i], b=P[j], dist=Math.hypot(a.x-b.x,a.y-b.y);
    if(dist<a.r+b.r+1) up[top(j)]=top(i);                                                   // the dots overlap: one tooltip for the group
    else if(dist<b.hr+a.r){ b.hr=Math.max(b.r+1,dist-a.r-1); b.h.setAttribute('r',String(Math.round(b.hr*10)/10)); } }   // b is drawn on top: its click circle stops before a's dot
  const G={}; P.forEach((p,i)=>{ (G[top(i)]=G[top(i)]||[]).push(p); });
  const plain=s=>String(s||'').replace(/<[^>]+>/g,'');
  for(const g of Object.values(G)){ if(g.length<2) continue;
    const T=g.map(p=>{ const t=TIPS.get(p.el); return typeof t==='function'?t():t; }).filter(Boolean); if(T.length<2) continue;
    const one={title:T.map(t=>plain(t.title)).join(' · '),role:`These ${T.length} points lie on top of each other in the picture. Each of them, with its coordinates:`,
      calc:T.map(t=>[plain(t.title),'  '+plain(t.coords)+(t.space?' — '+plain(t.space):''),t.role?'  '+plain(t.role):'',t.calc?t.calc.split('\n').map(l=>'  '+l).join('\n'):''].filter(Boolean).join('\n')).join('\n\n')};
    g.forEach(p=>TIPS.set(p.el,one)); }
}
function bindPts2(root,TT){ bindPts(root,TT); unstack(root); }
const N3u=n=>n/N3.SC;                                            // engine units → UV
function boxSVG(k,x,y,w,h,title,lines,color,fill){               // a clickable box of a flow picture (its tooltip is set by the caller)
  const t=lines.map((l,i)=>`<text x="${r2(x+10)}" y="${r2(y+42+i*19)}" class="gt" fill="#1f2937">${esc(l)}</text>`).join('');
  return `<g class="pt" data-k="${esc(k)}" tabindex="0" role="button" aria-label="${esc(title)}: show details"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill||'#ffffff'}" stroke="${color}" stroke-width="2.5"/>`+
    `<text x="${r2(x+10)}" y="${r2(y+22)}" class="gtb" fill="${color}">${esc(title)}</text>${t}</g>`;
}
function flowArrow(x1,y1,x2,y2,color,w=2.6){ return arrowSVG(x1,y1,x2,y2,color,w,10); }
/* a pixel on a ray from C, at distance d: its push and its read point's distance r, one operation per line */
function rdChain(dn,mode){
  const Q=N3, L=[`a pixel at d = ${Q.F(dn)} from C (${RULE_NAME[mode]})`,`sd = d − 0.25 = ${Q.F(dn)} − 0.25 = ${Q.F(dn-Q.K25)}`];
  const fo=Q.falloffLines(L,dn-Q.K25,mode), push=Q.mul(Q.K10,fo);
  L.push(`push = 0.10 × falloff = 0.10 × ${Q.F(fo)} = ${Q.F(push)}`); L.push(`d_read = d − push = ${Q.F(dn)} − ${Q.F(push)} = ${Q.F(dn-push)}      ray rule`);
  return {lines:L,fo,push,r:dn-push};
}
function rdLine(mode,d){ return d-LEN*foVal(mode,d-RAD); }        // float: the read point's distance of a pixel at distance d (draws the lines)
function rdGraph12(svgEl,dn,rules,extras){                        // the r-against-d graph of card 9, step 6 (600 x 470)
  const GX=d=>70+(d-0.10)/0.30*480, GY=r=>420-r/0.40*360, TT={}; let g='';
  g+=`<rect x="${GX(0.15)}" y="${GY(0.40)-8}" width="${GX(0.35)-GX(0.15)}" height="${GY(0)-GY(0.40)+8}" fill="#f5f3ff"/>`+gt(GX(0.25),GY(0.40)+12,'the band','middle','gtb','#6d28d9');
  g+=`<line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.40)+10}" y2="${GY(0)}" stroke="#6b7280" stroke-width="1.5"/><line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.10)}" y2="${GY(0.40)-14}" stroke="#6b7280" stroke-width="1.5"/>`;
  g+=gt(GX(0.40)+14,GY(0)+5,'d','start','gtb')+gt(GX(0.10)-4,GY(0.40)-22,'d_read: the distance of the read point','start','gtb')+gt(GX(0.25),GY(0)+42,'d: the distance of the pixel','middle','gt','#374151');
  for(const r of [0,0.10,0.20,0.30,0.40]) g+=gt(GX(0.10)-8,GY(r)+5,r===0?'0':r.toFixed(2),'end');
  for(const d of [0.10,0.15,0.20,0.25,0.30,0.35,0.40]) g+=`<line x1="${GX(d)}" y1="${GY(0)}" x2="${GX(d)}" y2="${GY(0)+6}" stroke="#6b7280"/>`+gt(GX(d),GY(0)+22,d.toFixed(2),'middle');
  const path=(mode,d0,d1)=>{ let p=''; for(let i=0;i<=120;i++){ const d=d0+(d1-d0)*i/120; p+=(i?'L':'M')+r2(GX(d))+','+r2(GY(rdLine(mode,d))); } return p; };
  if(rules.includes('linear')){
    if(extras.cont) g+=`<path d="M${GX(0.15)},${GY(0.05)}L${GX(0.35)},${GY(0.25)}" stroke="#9ca3af" stroke-width="2.4" stroke-dasharray="7 6" fill="none"/>`+gt(GX(0.30)+8,GY(0.20)+28,'straight on','start','gt','#6b7280');
    g+=`<path d="${path('linear',0.10,0.15)}" stroke="#4338ca" stroke-width="3.2" opacity=".42" fill="none"/><path d="${path('linear',0.35,0.40)}" stroke="#4338ca" stroke-width="3.2" opacity=".42" fill="none"/><path d="${path('linear',0.15,0.35)}" stroke="#4338ca" stroke-width="4" fill="none"/>`;
    if(extras.labels) g+=gt(GX(0.30)+10,GY(0.275)+4,'d_read = 1.5 × d − 0.175','start','gtb','#4338ca')+gt(GX(0.10)+6,GY(0.20)+96,'d_read = d − 0.10','start','gtb','#6366f1')+gt(GX(0.10)+6,GY(0.20)+114,'(full push)','start','gt','#6366f1')+gt(GX(0.40)+2,GY(0.40)-8,'d_read = d (no push)','end','gtb','#6366f1');
    if(extras.stairs){ const stair=(d0,r0,rise)=>`<path d="M${GX(d0)},${GY(r0)}L${GX(d0+0.05)},${GY(r0)}L${GX(d0+0.05)},${GY(r0+rise)}" stroke="#059669" stroke-width="2.8" fill="none"/>`;
      g+=stair(0.10,0,0.05)+stair(0.15,0.05,0.075)+stair(0.35,0.35,0.05)+gt(GX(0.15)+6,GY(0.025)+5,'+0.05','start','gtb','#047857')+gt(GX(0.20)+6,GY(0.09)+5,'+0.075','start','gtb','#047857')+gt(GX(0.375),GY(0.35)+20,'+0.05','middle','gtb','#047857');
      for(const [bd,br] of [[0.15,0.05],[0.35,0.35]]) g+=`<circle cx="${GX(bd)}" cy="${GY(br)}" r="10" fill="none" stroke="#dc2626" stroke-width="2.6"/>`; }
  }
  if(rules.includes('smooth')) g+=`<path d="${path('smooth',0.10,0.40)}" stroke="#7c3aed" stroke-width="3.2" fill="none"/>`+(extras.slabel?gt(GX(0.21),GY(0.16)-4,'smoothstep','end','gtb','#7c3aed'):'');
  if(rules.includes('linearOrange')) g+=`<path d="${path('linear',0.10,0.40)}" stroke="#d97706" stroke-width="3.2" fill="none"/>`+gt(GX(0.30)+10,GY(0.275)+4,'linear','start','gtb','#b45309');
  for(const m of extras.points||[]){ const c=rdChain(dn,m), x=GX(N3u(dn)), y=GY(N3u(c.r));
    g+=`<line x1="${x}" y1="${GY(0)}" x2="${x}" y2="${y}" stroke="#94a3b8" stroke-dasharray="3 3"/><line x1="${GX(0.10)}" y1="${y}" x2="${x}" y2="${y}" stroke="#94a3b8" stroke-dasharray="3 3"/>`;
    g+=ptSVG('p'+m,x,y,m==='smooth'?'#c4b5fd':C_N,`(d, d_read) with ${RULE_NAME[m]}`,6.5);
    TT['p'+m]={title:`(d, d_read) = (${N3.F(dn)}, ${N3.F(c.r)}) — ${RULE_NAME[m]}`,coords:co(N3.F(dn),N3.F(c.r)),space:'graph: d to the right, d_read up',role:'The pixel at distance d reads at distance d_read. One operation per line:',calc:c.lines.join('\n')}; }
  svgEl.innerHTML=g; bindPts2(svgEl,TT);
}

/* ---------- card 11: the three rulers of card 9, step 4 ---------- */
(function(){
  const Q=N3, F=Q.F, svg=document.getElementById('c11pic'), strip=document.getElementById('c11strip'), btns=[...document.querySelectorAll('.c11m')];
  const VG=view(0.40,0.12,0.44,0.44,560); let mode='beside';
  const cS=Q.chainText('S',Q9.SX,Q9.SY,'linear',{upto:'push'});
  function draw(){
    closeTip();
    const X=VG.X, Y=VG.Y, TT={}; let g=imgSVG(VG,raster('out','linear',VG),0.5);
    g+=ringSVG(X(0.5),Y(0.5),VG.S(0.25),WHITE,1.6)+stroke([[X(0.65),0],[X(0.65),VG.H]],WHITE,2)+curveSVG('linear',VG,3);
    g+=lab(X(0.648),14,'white line x = 0.65',WHITE,'end')+lab(X(0.43),Y(0.285),'circle edge',WHITE);
    const Rx=X(0.65), Ry=Y(N3u(Q9.RY)), Sx=X(N3u(Q9.SX)), Sy=Y(N3u(Q9.SY)), Cx=X(0.5), Cy=Y(0.5), L=Math.hypot(Rx-Cx,Ry-Cy), dir=[(Rx-Cx)/L,(Ry-Cy)/L];
    g+=stroke([[Cx,Cy],[Cx+dir[0]*VG.S(0.30),Cy+dir[1]*VG.S(0.30)]],VIOLET,1.8)+lab(Cx+dir[0]*VG.S(0.305)+8,Cy+dir[1]*VG.S(0.305)+4,'violet ray',VIOLET);
    g+=arrowSVG(Sx,Sy,Rx,Ry,SKY,3,10);
    const o=mode==='beside'?24:0;
    if(mode==='beside') g+=c9Guides([[Cx,Cy],[Rx,Ry],[Sx,Sy]],dir);
    g+=c9Dim([Cx,Cy],[Sx,Sy],o,o?'d = 0.25':'','#fde68a')+c9Dim([Cx,Cy],[Rx,Ry],-o,o?'d_read = 0.20':'','#93c5fd')+c9Dim([Rx,Ry],[Sx,Sy],-o,o?'push = 0.05':'','#5eead4');
    if(mode==='on') g+=lab(18,Y(0.18),'On the ray, the three rulers lie on top of each other,','#fecaca')+lab(18,Y(0.18)+20,'on the violet ray, and on the push arrow.','#fecaca');
    g+=ptSVG('S',Sx,Sy,C_N,'S',6)+lab(Sx+10,Sy-12,'S',C_N)+ptSVG('R',Rx,Ry,WHITE,'R',6)+lab(Rx-10,Ry+14,'R',WHITE,'end')+ptSVG('C',Cx,Cy,C_C,'C',5)+lab(Cx-10,Cy-12,'C',C_C,'end');
    TT.S={title:'S — the pixel that shows R',coords:co(F(Q9.SX),F(Q9.SY)),space:UVS,role:'Its distance d and its push, from its chain:',calc:cS.lines.slice(1).join('\n')};
    TT.R={title:'R — a point of the white line (our choice)',coords:co('0.65',F(Q9.RY)),space:UVW,role:'d_read = 0.20 (card 9, step 3).'};
    TT.C=C9TC;
    svg.innerHTML=g; bindPts2(svg,TT);
    document.getElementById('c11cap').textContent=mode==='beside'?'Beside the ray: each ruler is visible, and the dashed ticks show that blue + teal ends exactly where yellow ends.':'On the ray: the three rulers lie on top of each other, on the violet ray, and on the push arrow. You cannot see where one ends and the next begins.';
    const st=c9Strip(); strip.innerHTML=st.s; bindPts2(strip,st.TT);
    btns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===mode)));
  }
  setMath('c11calc',['blue ruler: d_read = 0.20, our choice (card 9, step 3).','yellow ruler d and teal ruler (the push of S):','the chain of S:'].concat(cS.lines.slice(1).map(l=>'  '+l),['blue + teal:',`  0.20 + ${F(cS.v.push)} = ${F(Q.Ex(0.20)+cS.v.push)} = d, the yellow ruler`]));
  btns.forEach(b=>b.addEventListener('click',()=>{ mode=b.dataset.m; draw(); }));
  draw();
})();

/* ---------- card 12: the bends of the r-d line; the same ray in the output ---------- */
(function(){
  const Q=N3, F=Q.F, sl=document.getElementById('c12d'), val=document.getElementById('c12dv'), btns=[...document.querySelectorAll('.c12r')];
  const out=document.getElementById('c12out'), V=view(0.40,0.39,0.52,0.26,560); let mode='linear', d=0.30;
  function rises(m){ const pts=[0.10,0.15,0.20,0.25,0.30,0.35,0.40].map(v=>rdChain(Q.E(v),m).r); return pts.slice(1).map((r,i)=>`${F(r)} − ${F(pts[i])} = ${F(r-pts[i])}`); }
  function draw(){
    closeTip();
    const dn=Q.E(d), c=rdChain(dn,mode);
    rdGraph12(document.getElementById('c12graph'),dn,mode==='linear'?['linear']:['linear','smooth'],{cont:mode==='linear',labels:true,stairs:mode==='linear',slabel:true,points:[mode]});
    const X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out',mode,V),0.45);
    for(const [rr,nm] of [[0.15,'inner ring'],[0.25,'circle edge'],[0.35,'outer ring']]){ const dy=104;   // each label sits on its own ring, 104 px below the ray
      s+=ringSVG(X(0.5),Y(0.5),V.S(rr),WHITE,rr===0.25?2:1.3)+lab(X(0.5)+Math.sqrt(V.S(rr)**2-dy*dy),Y(0.5)+dy,nm,WHITE,'middle'); }
    s+=stroke([[X(0.5),Y(0.5)],[X(0.91),Y(0.5)]],VIOLET,1.8);
    const px=X(0.5+N3u(dn)), rx=X(0.5+N3u(c.r)), y=Y(0.5);
    if(c.push>0) s+=arrowSVG(px,y,rx,y,SKY,3,10);
    s+=ptSVG('C',X(0.5),y,C_C,'C',5)+lab(X(0.5)-8,y+20,'C',C_C,'end');
    s+=ptSVG('rd',rx,y,WHITE,'the read point',5.5,true)+ptSVG('px',px,y,C_N,'the pixel',6);
    s+=lab(px,y-16,`d = ${F(dn)}`,C_N,'middle')+lab(rx,y+28,`d_read = ${F(c.r)}`,WHITE,'middle');
    TT.C=C9TC;
    TT.px={title:`The pixel at d = ${F(dn)}`,coords:co(F(Q.K50+dn),'0.50'),space:UVS,role:'On the row y = 0.50, right of C. Its read point is closer to C by its push:',calc:c.lines.join('\n')};
    TT.rd={title:`Its read point, d_read = ${F(c.r)}`,coords:co(F(Q.K50+c.r),'0.50'),space:UVW,role:'The pixel takes its color from here.',calc:c.lines.slice(-2).join('\n')};
    out.innerHTML=s; bindPts2(out,TT);
    setMath('c12calc',c.lines);
    const R1=rises('linear'), R2=rises('smooth');
    const steps=[0.10,0.15,0.20,0.25,0.30,0.35].map(v=>`${v.toFixed(2)} → ${(v+0.05).toFixed(2)}`);
    document.getElementById('c12ev').innerHTML='<b>Rise of d_read for each step of 0.05 in d</b> (3 decimals):<table class="probs" style="margin-top:6px;font-size:14px"><tr><th>d</th><th>linear</th><th>smoothstep</th></tr>'+steps.map((st,i)=>`<tr><td style="width:auto;white-space:nowrap">${st}</td><td><code>${R1[i]}</code></td><td><code>${R2[i]}</code></td></tr>`).join('')+'</table>Linear jumps from 0.05 to 0.075 at d = 0.15, and back at d = 0.35: the bends. Smoothstep changes little by little: no bend.';
    val.textContent=F(dn); btns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===mode)));
  }
  sl.addEventListener('input',()=>{ d=Math.round(+sl.value*100)/100; draw(); });
  btns.forEach(b=>b.addEventListener('click',()=>{ mode=b.dataset.m; draw(); }));
  draw();
})();

/* ---------- card 13: the letter next to p and d (renamed d_read, 2026-09-29) ---------- */
(function(){
  const Q=N3, F=Q.F, svg=document.getElementById('c13pic');
  const V=view(0.44,0.28,0.30,0.30*460/560,560);
  const cS=Q.chainText('S',Q9.SX,Q9.SY,'linear',{upto:'push'}), cR=c9CurvePoint(Q9.RY,'R');
  function draw(){
    closeTip();
    const R='d_read', X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.5);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+lab(X(0.648),16,'white line x = 0.65',WHITE,'end');
    const Cx=X(0.5), Cy=Y(0.5), Sx=X(N3u(Q9.SX)), Sy=Y(N3u(Q9.SY)), Rx=X(0.65), Ry=Y(N3u(Q9.RY)), L=Math.hypot(Sx-Cx,Sy-Cy), nx=-(Sy-Cy)/L, ny=(Sx-Cx)/L;
    // the two ruler labels run along the ray (2026-09-29): a flat label crossed the ray, the other ruler, and the white line
    const ang=r2(Math.atan2(Sy-Cy,Sx-Cx)*180/Math.PI), along=(t,off,txt,col)=>{ const lx=r2(Cx+(Sx-Cx)*t+nx*off), ly=r2(Cy+(Sy-Cy)*t+ny*off);
      return `<text x="${lx}" y="${ly}" class="lbl" fill="${col}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${ang} ${lx} ${ly})">${esc(txt)}</text>`; };
    s+=arrowSVG(Cx+nx*22,Cy+ny*22,Sx+nx*22,Sy+ny*22,'#fde68a',3.4,12)+along(0.37,40,'p = S − C: its length is d = 0.25','#fde68a');
    s+=c9Dim([Cx,Cy],[Rx,Ry],-22,'','#93c5fd')+along(0.36,-40,`${R} = 0.20: from C to R`,'#93c5fd');
    s+=arrowSVG(Sx,Sy,Rx,Ry,SKY,3,10)+lab(Sx+12,Sy+28,'push','#bae6fd');
    s+=ptSVG('C',Cx,Cy,C_C,'C',5)+lab(Cx-10,Cy-10,'C',C_C,'end')+ptSVG('S',Sx,Sy,C_N,'S',6)+lab(Sx+10,Sy-12,'S (pixel)',C_N)+ptSVG('R',Rx,Ry,WHITE,'R',6,true)+lab(Rx-10,Ry-12,'R (read point)',WHITE,'end');
    TT.C=C9TC; TT.S={title:'S — the pixel',coords:co(F(Q9.SX),F(Q9.SY)),space:UVS,role:'p and d belong to S:',calc:cS.lines.slice(1,9).join('\n')};
    TT.R={title:'R — the read point of S',coords:co('0.65',F(Q9.RY)),space:UVW,role:`${R} belongs to R. The same length formula:`,calc:cR.parts.Pr.join('\n')};
    svg.innerHTML=s; bindPts2(svg,TT);
    document.getElementById('c13tab').innerHTML=`<tr><th>Name</th><th>Belongs to</th><th>What it is</th><th>Formula</th><th>In the shader?</th></tr>`+
      `<tr><td><b>p</b></td><td>the pixel</td><td>the arrow from C to the pixel</td><td><code>p = uv − C</code></td><td>yes</td></tr>`+
      `<tr><td><b>d</b></td><td>the pixel</td><td>the length of p: the pixel's distance from C</td><td><code>d = √(p.x² + p.y²)</code></td><td>yes</td></tr>`+
      `<tr><td><b>push</b></td><td>the pixel</td><td>how far the read point moves toward C</td><td><code>push = 0.10 × falloff</code></td><td>yes</td></tr>`+
      `<tr><td><b>${R}</b></td><td>the read point</td><td>the read point's distance from C</td><td><code>${R} = √((R.x − 0.50)² + (R.y − 0.50)²)</code></td><td>no: only in this derivation</td></tr>`;
    setMath('c13calc',['d of the pixel S (the length formula):'].concat(cS.lines.slice(1,9).map(l=>'  '+l),[`${R} of the read point R (the same length formula):`],cR.parts.Pr.slice(1).map(l=>'  '+l)));
    setMath('c13forms',[`ray rule (step 4):                ${R} = d − push`,`read-distance formula (step 5):   ${R} = 1.5 × d − 0.175`,`pixel-distance formula (step 6):  d = (${R} + 0.175) ÷ 1.5`,`stretch rule (step 7):            S.x = 0.50 + 0.15 × d ÷ ${R}`,`curve formula (step 8):           x = 0.60 + 0.0175 ÷ ${R}`]);
  }
  draw();
})();

/* ---------- card 14: known, looked for, and the two directions ---------- */
(function(){
  const Q=N3, F=Q.F, V=view(0.44,0.26,0.36,0.36*400/560,560);
  const cS=Q.chainText('S',Q9.SX,Q9.SY,'linear'), cR=c9CurvePoint(Q9.RY,'R');
  function badge(x,y,txt,bg,fg){ const w=txt.length*7.6+18; return `<rect x="${r2(x)}" y="${r2(y-15)}" width="${r2(w)}" height="22" rx="11" fill="${bg}" stroke="#ffffff" stroke-width="1.5"/><text x="${r2(x+9)}" y="${r2(y+1)}" class="gtb" fill="${fg}">${esc(txt)}</text>`; }
  function pic(el,dirn){
    const X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.5);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+lab(X(0.648),16,'white line x = 0.65',WHITE,'end');
    const Cx=X(0.5), Cy=Y(0.5), Sx=X(N3u(Q9.SX)), Sy=Y(N3u(Q9.SY)), Rx=X(0.65), Ry=Y(N3u(Q9.RY));
    if(dirn==='fwd'){ s+=arrowSVG(Sx,Sy,Rx,Ry,SKY,4,13)+lab(552,Sy+96,'the chain:','#bae6fd','end')+lab(552,Sy+116,'readUv = uv − dir × push','#bae6fd','end');
      s+=badge(Sx-80,Sy-40,'known: the pixel S','#dcfce7','#166534')+badge(Rx-236,Ry+36,'computed: the read point R','#e0e7ff','#3730a3'); }
    else { s+=arrowSVG(Rx,Ry,Sx,Sy,'#f59e0b',4,13)+lab(552,Sy+96,'card 9: pixel-distance formula,','#fde68a','end')+lab(552,Sy+116,'stretch rule, curve formula','#fde68a','end');
      s+=badge(Rx-222,Ry+36,'our choice: the point R','#dbeafe','#1e40af')+badge(Sx-90,Sy-40,'looked for: the pixel S','#ffedd5','#9a3412'); }
    s+=ptSVG('C',Cx,Cy,C_C,'C',5)+lab(Cx-10,Cy-10,'C',C_C,'end')+ptSVG('S',Sx,Sy,C_N,'S',6.5)+ptSVG('R',Rx,Ry,WHITE,'R',6.5,true);
    TT.C=C9TC;
    TT.S={title:'S — the pixel',coords:co(F(Q9.SX),F(Q9.SY)),space:UVS,role:dirn==='fwd'?'Known: the shader starts here.':'Looked for: card 9 finds it from R.',calc:(dirn==='fwd'?cS.lines.slice(1):cR.lines).join('\n')};
    TT.R={title:'R — the read point of S, on the white line',coords:co('0.65',F(Q9.RY)),space:UVW,role:dirn==='fwd'?'Computed by the chain of S (the last lines).':'Our choice: the point of the white line 0.20 from C.',calc:(dirn==='fwd'?cS.lines.slice(-4):cR.parts.P0.concat(cR.parts.Pr)).join('\n')};
    el.innerHTML=s; bindPts2(el,TT);
  }
  pic(document.getElementById('c14fwd'),'fwd'); pic(document.getElementById('c14bwd'),'bwd');
  setMath('c14fcalc',['Known: S = ('+F(Q9.SX)+', '+F(Q9.SY)+'). The chain, one operation per line:'].concat(cS.lines.slice(1),['→ R = (0.65, '+F(Q9.RY)+'): the read point. Nothing was solved.']));
  setMath('c14bcalc',['Known: R = (0.65, '+F(Q9.RY)+'), our choice. Card 9\'s formulas:'].concat(cR.lines.slice(1),['→ S = ('+F(cR.x)+', '+F(cR.y)+'): the pixel that shows R.']));
  const B=(c,t)=>`<span class="bdg ${c}">${t}</span>`;
  document.getElementById('c14tab').innerHTML='<tr><th>Name</th><th>Value</th><th>Known?</th><th>From</th></tr>'+
    [['C','(0.50, 0.50)',B('b-sh','shader'),'the center of the circle'],['radius','0.25',B('b-sh','shader'),'the circle edge'],['band','0.10',B('b-sh','shader'),'the band: 0.15 to 0.35 from C'],['dispLen','0.10',B('b-sh','shader'),'the full push'],['the rule','linear',B('b-sh','shader'),'card 9 uses linear'],
     ['the white line','x = 0.65',B('b-ch','our choice'),'the line we track'],['R','(0.65, '+F(Q9.RY)+')',B('b-ch','our choice'),'0.20 from C (card 9, step 3)'],['d_read','0.20',B('b-ch','our choice'),'the distance of R'],
     ['d','0.25',B('b-lf','looked for')+' '+B('b-fd','found'),'card 9, step 6'],['S','('+F(Q9.SX)+', '+F(Q9.SY)+')',B('b-lf','looked for')+' '+B('b-fd','found'),'card 9, steps 7 and 8'],['the push of S','0.05',B('b-fd','found'),'the push formula at d = 0.25']]
    .map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('');
})();

/* ---------- card 15: the gray line, K and R_K, and the gaps ---------- */
(function(){
  const Q=N3, F=Q.F, svg=document.getElementById('c15pic'), mag=document.getElementById('c15mag'), btns=[...document.querySelectorAll('.c15m')];
  const V=view(0.60,0.16,0.36*520/700,0.36,520); let sel='K';
  const DOTS=[0.22,0.26,0.30,0.34,0.40,0.44,0.48].map(v=>c9CurvePoint(Q.E(v)));
  const PK=c9CurvePoint(Q.E(0.427),'R_K'), PS=c9CurvePoint(Q9.RY,'R');       // K from R_K; S from R
  const gp=pt=>{ const gr=c9GrayAt(pt.y); return {gr,gap:pt.x-gr.g}; };
  function draw(){
    closeTip();
    const X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.45);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+lab(X(0.652),16,'white line x = 0.65',WHITE);
    const Px=X(0.65), Py=Y(N3u(Q9.PY)), Kx=X(N3u(Q9.PK)), Ky=Y(0.5);
    s+=stroke([[Px,Py],[Kx,Ky]],GRAYL,2.6)+lab(X(0.673),Y(0.26),'gray line','#e5e7eb');
    s+=stroke([[X(0.628),Py],[X(0.628),Ky]],'#60a5fa',4)+lab(X(0.628)-8,(Py+Ky)/2,'0.316','#93c5fd','end');
    s+=stroke([[Px,Y(0.515)],[Kx,Y(0.515)]],'#c084fc',4)+lab((Px+Kx)/2,Y(0.515)+22,'0.067','#d8b4fe','middle');
    for(const pt of DOTS){ const {gr,gap}=gp(pt); if(gap>=Q.Ex(0.003)) s+=stroke([[X(N3u(gr.g)),Y(N3u(pt.y))],[X(N3u(pt.x)),Y(N3u(pt.y))]],RED,3.2); }
    for(const [key,pt] of [['K',PK],['S',PS]]){ const {gr,gap}=gp(pt); s+=stroke([[X(N3u(gr.g)),Y(N3u(pt.y))],[X(N3u(pt.x)),Y(N3u(pt.y))]],RED,5)+lab(X(N3u(pt.x))+12,Y(N3u(pt.y))+(key==='K'?20:-12),`${key}: gap ${F(gap)}`,'#fecaca'); }
    DOTS.forEach((pt,i)=>{ const {gr,gap}=gp(pt); s+=ptSVG('m'+i,X(N3u(pt.x)),Y(N3u(pt.y)),C_N,'a pixel of the curve',4);
      TT['m'+i]={title:'A pixel of the light-green curve',coords:co(F(pt.x),F(pt.y)),space:UVS,role:'From a point of the white line, then the gray line on its row, and the gap:',calc:pt.lines.concat(gr.lines,[`gap = ${F(pt.x)} − ${F(gr.g)} = ${F(gap)}`]).join('\n')}; });
    s+=ptSVG('RK',Px,Y(0.427),WHITE,'R_K',5.5,true)+lab(Px-10,Y(0.427)+4,'R_K',WHITE,'end')+arrowSVG(X(N3u(PK.x)),Y(N3u(PK.y)),Px,Y(0.427),SKY,2.6,10);
    s+=ptSVG('K',X(N3u(PK.x)),Y(N3u(PK.y)),C_N,'K',6)+ptSVG('S',X(N3u(PS.x)),Y(N3u(PS.y)),C_N,'S',6)+lab(X(N3u(PS.x))-10,Y(N3u(PS.y))-10,'S',C_N,'end')+lab(X(N3u(PK.x))-10,Y(N3u(PK.y))-10,'K',C_N,'end');
    s+=ptSVG('P',Px,Py,C_P,'P',6)+lab(Px-10,Py,'P',C_P,'end')+ptSVG('pk',Kx,Ky,LIME,'the peak',6)+lab(Kx+10,Ky-12,'peak',LIME);
    s+=selRing(X(N3u((sel==='K'?PK:PS).x)),Y(N3u((sel==='K'?PK:PS).y)));
    const gK=gp(PK), gS=gp(PS);
    TT.K={title:'K — the pixel of the curve on the row y = 0.40',coords:co(F(PK.x),F(PK.y)),space:UVS,role:'From R_K with card 9\'s formulas; then the gray line on its row:',calc:PK.lines.concat(gK.gr.lines,[`gap = ${F(PK.x)} − ${F(gK.gr.g)} = ${F(gK.gap)}`]).join('\n')};
    TT.S={title:'S — the pixel of card 9',coords:co(F(PS.x),F(PS.y)),space:UVS,role:'From R with card 9\'s formulas; then the gray line on its row:',calc:PS.lines.concat(gS.gr.lines,[`gap = ${F(PS.x)} − ${F(gS.gr.g)} = ${F(gS.gap)}`]).join('\n')};
    TT.RK={title:'R_K — the point of the white line that K shows',coords:'(0.65, 0.427)',space:UVW,role:'Card 10 finds it from the chain of K (Step C, lines 1–4).',calc:PK.parts.P0.concat(PK.parts.Pr).join('\n')};
    TT.P={title:'P — the white line meets the outer ring',coords:co('0.65',F(Q9.PY)),space:UVS,role:'d_read = 0.35, so the curve formula gives x = 0.65: no push. One end of the gray line.',calc:'x: 0.0175 ÷ 0.35 = 0.05\n   0.60 + 0.05 = 0.65\ny: 0.35 × 0.35 = 0.1225\n   0.15 × 0.15 = 0.0225\n   0.1225 − 0.0225 = 0.10\n   √0.10 = 0.316\n   0.50 − 0.316 = 0.184'};
    TT.pk={title:'The peak — the pixel that shows (0.65, 0.50)',coords:co(F(Q9.PK),'0.50'),space:UVS,role:'d_read = 0.15. The other end of the gray line.',calc:'0.0175 ÷ 0.15 = 0.117\n0.60 + 0.117 = 0.717'};
    svg.innerHTML=s; bindPts2(svg,TT);
    /* magnifier, 8 times */
    const pt=sel==='K'?PK:PS, {gr,gap}=gp(pt), su=0.04, VM=view(N3u(pt.x)-0.024,N3u(pt.y)-su*320/520/2,su,su*320/520,520), MX=VM.X, MY=VM.Y, T2={};
    let m=imgSVG(VM,raster('out','linear',VM),0.45)+curveSVG('linear',VM,4)+stroke([[MX(0.65),MY(N3u(Q9.PY))],[MX(N3u(Q9.PK)),MY(0.5)]],GRAYL,3);
    m+=stroke([[MX(N3u(gr.g)),MY(N3u(pt.y))],[MX(N3u(pt.x)),MY(N3u(pt.y))]],RED,7);
    m+=ptSVG('G',MX(N3u(gr.g)),MY(N3u(pt.y)),'#d1d5db','the gray line on this row',6.5)+ptSVG('X',MX(N3u(pt.x)),MY(N3u(pt.y)),C_N,sel,7);
    m+=lab(10,20,`Magnifier at ${sel}, 8 times`,WHITE)+lab(MX(N3u(gr.g))-12,MY(N3u(pt.y))-16,'gray line','#e5e7eb','end')+lab(MX(N3u(pt.x))+14,MY(N3u(pt.y))-16,`${sel} (curve)`,C_N)+lab((MX(N3u(gr.g))+MX(N3u(pt.x)))/2,MY(N3u(pt.y))+30,`gap ${F(gap)}`,'#fecaca','middle');
    T2.G={title:`The gray line on the row y = ${F(pt.y)}`,coords:co(F(gr.g),F(pt.y)),space:UVS,role:'One end of the red gap.',calc:gr.lines.join('\n')}; T2.X=TT[sel];
    mag.innerHTML=m; bindPts2(mag,T2);
    document.getElementById('c15magcap').textContent=`The gap at ${sel}, enlarged 8 times: ${F(gap)} wide.`;
    setMath('c15gap',[`The gap at ${sel}, one operation per line:`].concat(pt.lines,gr.lines,[`gap = ${F(pt.x)} − ${F(gr.g)} = ${F(gap)}`]));
    btns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===sel)));
  }
  btns.forEach(b=>b.addEventListener('click',()=>{ sel=b.dataset.m; draw(); }));
  draw();
})();

/* ---------- card 16: which formulas hold for smoothstep ---------- */
(function(){
  const Q=N3, F=Q.F, sl=document.getElementById('c16d'), val=document.getElementById('c16dv'); let d=0.20;
  function draw(){
    closeTip();
    const dn=Q.E(d), a=rdChain(dn,'linear'), b=rdChain(dn,'smooth');
    rdGraph12(document.getElementById('c16graph'),dn,['linearOrange','smooth'],{slabel:true,points:['linear','smooth']});
    setMath('c16lin',a.lines); setMath('c16smo',b.lines);
    const t=Math.min(Q.SC,Math.max(0,Q.div(dn-Q.K25+Q.K10,2*Q.K10)));
    document.getElementById('c16ev').textContent=`At d = ${F(dn)}: t is the same for both rules (${F(t)}); falloff differs (${F(a.fo)} and ${F(b.fo)}), so the push differs (${F(a.push)} and ${F(b.push)}), and so does d_read (${F(a.r)} and ${F(b.r)}). `+(a.r===b.r?'Here the two rules agree.':'The ray rule d_read = d − push holds for both.');
    val.textContent=F(dn);
  }
  sl.addEventListener('input',()=>{ d=Math.round(+sl.value*100)/100; draw(); });
  draw();
})();

/* ---------- card 17: the numbers column of Step A, for any pixel of the row ---------- */
(function(){
  const Q=N3, F=Q.F, sl=document.getElementById('c17x'), val=document.getElementById('c17xv'), pb=[...document.querySelectorAll('.c17p')], svg=document.getElementById('c17pic');
  const V=view(0.50,0.36,0.36,0.36*300/520,520); let x=0.70;   // x from 0.50: the read point of x = 0.62 is at 0.545
  function draw(){
    closeTip();
    const xn=Q.E(x), v=c10Row(xn), cf=chainF(N3u(xn),0.40,'linear'), cT=Q.chainText('pixel',xn,Q.E(0.40),'linear'), ry=cT.v.ry;
    const X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.4);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+stroke([[0,Y(0.40)],[V.W,Y(0.40)]],'#e5e7eb',1)+lab(X(0.652),16,'white line x = 0.65',WHITE)+lab(8,Y(0.40)-12,'row y = 0.40','#e5e7eb');
    s+=arrowSVG(X(N3u(xn)),Y(0.40),X(N3u(v.rx)),Y(N3u(ry)),SKY,3,11);
    s+=ptSVG('rd',X(N3u(v.rx)),Y(N3u(ry)),WHITE,'its read point',5.5,true)+ptSVG('px',X(N3u(xn)),Y(0.40),C_N,'the pixel',6.5);
    const inward=(x,t,gap)=>{ const w=t.length*8.6; return x+gap+w>V.W-6?[x-gap,'end']:[x+gap,'start']; };   // a label near the right edge goes to the left of its point
    const pl=`pixel x = ${F(xn)}`, pa=inward(X(N3u(xn)),pl,10), rl=`read point x = ${F(v.rx)}`, rx0=X(N3u(v.rx)), rw=rl.length*8.6;
    const ra=rx0-rw/2<6?[Math.max(6,rx0-12),'start']:rx0+rw/2>V.W-6?[Math.min(V.W-6,rx0+12),'end']:[rx0,'middle'];
    s+=lab(pa[0],Y(0.40)-14,pl,C_N,pa[1])+lab(ra[0],Y(N3u(ry))+28,rl,WHITE,ra[1]);
    TT.px={title:`The pixel (${F(xn)}, 0.40)`,coords:co(F(xn),'0.40'),space:UVS,role:'The pixel of the numbers column. Its whole chain:',calc:cT.lines.slice(1).join('\n')};
    TT.rd={title:'Its read point',coords:co(F(v.rx),F(ry)),space:UVW,role:v.rx===Q.X65?'On the white line: the condition holds.':`Not on the white line: ${v.rx<Q.X65?'left':'right'} of it.`,calc:cT.lines.slice(-3).join('\n')};
    svg.innerHTML=s; bindPts2(svg,TT);
    document.getElementById('c17tab').innerHTML=stepATable([xn]);
    document.getElementById('c17ev').textContent=v.rx===Q.X65?`x = ${F(xn)}: the read point's x is 0.65. The last line is true: this pixel is K, the answer.`:`x = ${F(xn)}: the read point's x is ${F(v.rx)}, not 0.65. The last line is false: this pixel is not the answer.`;
    val.textContent=F(xn); pb.forEach(b=>b.setAttribute('aria-pressed',String(Q.E(+b.dataset.v)===xn)));
  }
  sl.addEventListener('input',()=>{ x=Math.round(+sl.value*1000)/1000; draw(); });
  pb.forEach(b=>b.addEventListener('click',()=>{ x=+b.dataset.v; sl.value=String(x); draw(); }));
  draw();
})();

/* ---------- card 18: the condition is about the read point's x ---------- */
(function(){
  const Q=N3, F=Q.F, KY=Q.E(0.40), Kx=Q.E(0.705), cK=Q.chainText('K',Kx,KY,'linear');
  const V=view(0.60,0.36,0.14,0.08,560), X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.4);
  s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+stroke([[0,Y(0.40)],[V.W,Y(0.40)]],'#e5e7eb',1)+lab(X(0.652),16,'white line x = 0.65',WHITE);
  s+=arrowSVG(X(0.705),Y(0.40),X(0.65),Y(N3u(cK.v.ry)),SKY,3,11);
  s+=ptSVG('RK',X(0.65),Y(N3u(cK.v.ry)),WHITE,'R_K',6,true)+ptSVG('K',X(0.705),Y(0.40),C_N,'K',6.5);
  s+=lab(X(0.705)+10,Y(0.40)-14,'K: the pixel',C_N)+lab(X(0.65)-10,Y(N3u(cK.v.ry))+4,'R_K: its read point',WHITE,'end');
  const by=74; s+=stroke([[X(0.65),by],[X(0.705),by]],'#fde68a',4)+stroke([[X(0.65),by-9],[X(0.65),by+9]],'#fde68a',2.5)+stroke([[X(0.705),by-9],[X(0.705),by+9]],'#fde68a',2.5);
  s+=lab(X(0.6775),by-14,'0.055: the x part of the push','#fde68a','middle')+lab(X(0.65),by+28,'0.65: the condition','#ffffff','middle')+lab(X(0.705)+20,by+28,'0.705: the unknown','#fde047','middle');
  TT.K={title:'K — the pixel',coords:co(F(Kx),'0.40'),space:UVS,role:'Its x, 0.705, is the unknown of Step A.',calc:cK.lines.slice(1).join('\n')};
  TT.RK={title:'R_K — the read point of K',coords:co(F(cK.v.rx),F(cK.v.ry)),space:UVW,role:'Its x is 0.65: the condition of Step A.',calc:cK.lines.slice(-3).join('\n')};
  const el=document.getElementById('c18row'); el.innerHTML=s; bindPts2(el,TT);
  /* the two number lines */
  const NX=v=>40+(v-0.55)/0.24*560, T2={}; let g='';
  g+=gt(14,30,'x of the pixel','start','gtb')+gt(14,258,'x of its read point','start','gtb');
  for(const [y0] of [[70],[216]]){ g+=`<line x1="${NX(0.55)}" y1="${y0}" x2="${NX(0.79)}" y2="${y0}" stroke="#6b7280" stroke-width="1.5"/>`; for(const t of [0.55,0.60,0.65,0.70,0.75]) g+=`<line x1="${NX(t)}" y1="${y0-5}" x2="${NX(t)}" y2="${y0+5}" stroke="#6b7280"/>`+gt(NX(t),y0===70?y0-12:y0+24,t.toFixed(2),'middle','gt'); }
  g+=`<line x1="${NX(0.65)}" y1="196" x2="${NX(0.65)}" y2="226" stroke="#111827" stroke-width="3"/>`+gt(NX(0.65)+6,298,'the condition: 0.65','middle','gtb','#111827');
  [0.65,0.68,0.69,0.705,0.72,0.75].forEach((xv,i)=>{ const xn=Q.E(xv), c=Q.chainText('pixel',xn,KY,'linear',{xOnly:true}), col=c.v.rx===Q.X65?C_N:c.v.rx<Q.X65?'#60a5fa':'#f87171';
    g+=`<line x1="${NX(xv)}" y1="${76}" x2="${NX(N3u(c.v.rx))}" y2="${210}" stroke="${col}" stroke-width="${xv===0.705?3.4:2}"/>`;
    g+=ptSVG('a'+i,NX(xv),70,col,'pixel x = '+F(xn),5.5)+ptSVG('b'+i,NX(N3u(c.v.rx)),216,col,'read point x = '+F(c.v.rx),5,true);
    if(xv===0.705) g+=`<line x1="${r2(NX(xv)+16)}" y1="44" x2="${r2(NX(xv)+4)}" y2="65" stroke="#854d0e" stroke-width="1.5"/>`+gt(NX(xv)+18,40,'K: 0.705','start','gtb','#854d0e');
    T2['a'+i]={title:`The pixel x = ${F(xn)}`,coords:co(F(xn),'0.40'),space:UVS,role:`Its read point's x is ${F(c.v.rx)}.`,calc:c.lines.slice(1).join('\n')};
    T2['b'+i]={title:`Its read point: x = ${F(c.v.rx)}`,coords:`readUv.x = ${F(c.v.rx)}`,space:UVW,role:c.v.rx===Q.X65?'This is 0.65: the condition holds. The pixel is K.':'This is not 0.65: the condition does not hold.',calc:c.lines.slice(-2).join('\n')}; });
  const el2=document.getElementById('c18lines'); el2.innerHTML=g; bindPts2(el2,T2);
  setMath('c18calc',Q.chainText('K',Kx,KY,'linear',{xOnly:true}).lines.slice(1).concat(['→ readUv.x = 0.65: the condition holds. The pixel\'s own x is 0.705.']));
})();

/* ---------- card 19: squaring, and where x⁴ comes from ---------- */
(function(){
  const u=60, x0=60, y0=40; let s='';                              // a square with side 3 and area 9
  for(let i=0;i<3;i++) for(let j=0;j<3;j++) s+=`<rect x="${x0+i*u}" y="${y0+j*u}" width="${u}" height="${u}" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>`;
  s+=`<rect x="${x0}" y="${y0}" width="${3*u}" height="${3*u}" fill="none" stroke="#0c4a6e" stroke-width="3"/>`;
  s+=gt(x0+1.5*u,y0-12,'side 3','middle','gtb','#0c4a6e')+gt(x0-10,y0+1.5*u+5,'side 3','end','gtb','#0c4a6e');
  s+=gt(x0+1.5*u,y0+1.5*u+5,'area 9','middle','gtb','#0c4a6e')+gt(x0+3*u+14,y0+60,'squaring:','start','gtb','#1f2937')+gt(x0+3*u+14,y0+80,'3 × 3 = 9','start','gt','#1f2937')+gt(x0+3*u+14,y0+120,'square root:','start','gtb','#1f2937')+gt(x0+3*u+14,y0+140,'√9 = 3','start','gt','#1f2937');
  s+=gt(12,y0+3*u+44,'9 small squares of 1 × 1: the area is 9.','start','gt','#374151');
  document.getElementById('c19sq').innerHTML=s;
  const k=8.2, ax=70, ay=46, w=16*k, h1=16*k, h2=9*k; let a='';        // the rectangle x² by (x² + 9), with x = 4
  a+=`<rect x="${ax}" y="${ay}" width="${w}" height="${h1}" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/><rect x="${ax}" y="${ay+h1}" width="${w}" height="${h2}" fill="#dcfce7" stroke="#15803d" stroke-width="2.5"/>`;
  a+=gt(ax+w/2,ay-12,'x² = 16','middle','gtb','#1f2937')+gt(ax-10,ay+h1/2,'x² = 16','end','gtb','#b45309')+gt(ax-10,ay+h1+h2/2+5,'9','end','gtb','#15803d');
  a+=gt(ax+w/2,ay+h1/2-6,'x² × x² = x⁴','middle','gtb','#92400e')+gt(ax+w/2,ay+h1/2+16,'16 × 16 = 256','middle','gt','#92400e');
  a+=gt(ax+w/2,ay+h1+h2/2-2,'x² × 9 = 9 × x²','middle','gtb','#166534')+gt(ax+w/2,ay+h1+h2/2+18,'16 × 9 = 144','middle','gt','#166534');
  a+=`<line x1="${ax+w+12}" y1="${ay}" x2="${ax+w+12}" y2="${ay+h1+h2}" stroke="#374151" stroke-width="2"/>`+gt(ax+w+20,ay+(h1+h2)/2-8,'x² + 9','start','gtb','#1f2937')+gt(ax+w+20,ay+(h1+h2)/2+12,'= 25','start','gt','#1f2937');
  a+=gt(12,ay+h1+h2+34,'Whole area: 256 + 144 = 400 = 20 × 20.','start','gt','#374151');
  document.getElementById('c19area').innerHTML=a;
})();

/* ---------- card 20: the fair start, one decimal digit per round, and halving ---------- */
(function(){
  const Q=N3, F=Q.F, KY=Q.E(0.40), rc=xn=>Q.chainText('trial pixel',xn,KY,'linear',{xOnly:true});
  const side=v=>v<Q.X65?'left':v>Q.X65?'right':'on', COLS={left:'#60a5fa',right:'#f87171',on:C_N};
  /* part 1: the whole row */
  (function(){
    const x0=0.64,x1=0.86, f=x=>chainF(x,0.40,'linear').rx, lo=0.55, hi=0.87, GX=x=>70+(x-x0)/(x1-x0)*490, GY=v=>350-(v-lo)/(hi-lo)*300, TT={}; let g='';
    g+=`<rect x="${GX(0.65)}" y="40" width="${GX(0.84)-GX(0.65)}" height="310" fill="#fef9c3" opacity=".6"/>`+gt((GX(0.65)+GX(0.84))/2,300,'the answer lies between 0.65 and 0.84','middle','gtb','#854d0e');
    g+=`<line x1="70" y1="350" x2="565" y2="350" stroke="#6b7280" stroke-width="1.5"/><line x1="70" y1="350" x2="70" y2="30" stroke="#6b7280" stroke-width="1.5"/>`+gt(565,390,'x of the pixel (row y = 0.40)','end','gtb')+gt(76,24,'readUv.x','start','gtb');
    for(const x of [0.65,0.70,0.75,0.80,0.85]) g+=`<line x1="${GX(x)}" y1="350" x2="${GX(x)}" y2="356" stroke="#6b7280"/>`+gt(GX(x),372,x.toFixed(2),'middle');
    g+=`<line x1="70" y1="${GY(0.65)}" x2="565" y2="${GY(0.65)}" stroke="#111827" stroke-width="1.5"/>`+gt(64,GY(0.65)+5,'0.65','end','gtb');
    const xo=0.5+Math.sqrt(0.35*0.35-0.01); g+=gt(GX(xo)-8,GY(0.65)-8,'the white line: readUv.x = 0.65','end','gt'); g+=`<line x1="${GX(xo)}" y1="40" x2="${GX(xo)}" y2="350" stroke="#a855f7" stroke-dasharray="5 4"/>`+gt(GX(xo)-6,334,'outer ring','end','gt','#7e22ce');
    let d=''; for(let i=0;i<=220;i++){ const x=x0+(x1-x0)*i/220; d+=(i?'L':'M')+r2(GX(x))+','+r2(GY(f(x))); } g+=`<path d="${d}" fill="none" stroke="${RULE_COL.linear}" stroke-width="3"/>`;
    const L=[]; for(const [i,xv] of [[0,0.65],[1,0.84]]){ const xn=Q.E(xv), c=rc(xn), sd=side(c.v.rx);
      g+=ptSVG('s'+i,GX(xv),GY(N3u(c.v.rx)),COLS[sd],'x = '+F(xn),6.5)+(i?gt(GX(xo)-8,GY(N3u(c.v.rx))-10,`x = ${F(xn)} → ${F(c.v.rx)} (${sd})`,'end','gtb'):gt(GX(xv)+10,GY(N3u(c.v.rx))+22,`x = ${F(xn)} → ${F(c.v.rx)} (${sd})`,'start','gtb'));
      TT['s'+i]={title:`The start pixel x = ${F(xn)}`,coords:co(F(xn),'0.40'),space:UVS,role:`It reads ${F(c.v.rx)}: ${sd} of the white line.`,calc:c.lines.slice(1).join('\n')};
      L.push(`start pixel x = ${F(xn)}:`); c.lines.slice(1).forEach(l=>L.push('  '+l)); L.push(`  → ${F(c.v.rx)}: ${sd} of the white line`); }
    const el=document.getElementById('c20start'); el.innerHTML=g; bindPts2(el,TT);
    setMath('c20startcalc',['Why these two pixels work without the answer:','  x = 0.65: every pixel right of C is pushed toward C, to the left,','  so this pixel reads left of 0.65.','  x = 0.84: it is more than 0.35 from C (beyond the outer ring),','  so its push is 0 and it reads its own place, right of 0.65.','Why there is only one answer: the orange line only rises,','  so it crosses 0.65 once.',''].concat(L));
  })();
  /* part 2: three rounds as three number lines */
  (function(){
    const rounds=[{a:0.6,b:0.9,xs:[0.7,0.8],lbl:'round 1: pixels 0.1 apart → x = 0.7…',dec:1},{a:0.70,b:0.80,xs:[0.70,0.71],lbl:'round 2: pixels 0.01 apart → x = 0.70…',dec:2},{a:0.700,b:0.710,xs:[0.701,0.702,0.703,0.704,0.705],lbl:'round 3: pixels 0.001 apart → x = 0.705',dec:3}];
    const TT={}; let g='';
    rounds.forEach((r,ri)=>{ const y=60+ri*125, NX=v=>60+(v-r.a)/(r.b-r.a)*660;
      g+=gt(60,y-38,r.lbl,'start','gtb');
      g+=`<line x1="${NX(r.a)}" y1="${y}" x2="${NX(r.b)}" y2="${y}" stroke="#6b7280" stroke-width="1.5"/>`;
      const step=(r.b-r.a)/(ri===0?3:10); for(let i=0;i<=(ri===0?3:10);i++){ const t=r.a+i*step; g+=`<line x1="${NX(t)}" y1="${y-5}" x2="${NX(t)}" y2="${y+5}" stroke="#6b7280"/>`+gt(NX(t),y+22,t.toFixed(r.dec),'middle','gt'); }
      r.xs.forEach((xv,i)=>{ const xn=Q.E(xv), c=rc(xn), sd=side(c.v.rx); g+=ptSVG(`d_read${ri}_${i}`,NX(xv),y,COLS[sd],'x = '+F(xn),6)+gt(NX(xv),y-12,F(c.v.rx),'middle','gtb',sd==='left'?'#1d4ed8':sd==='right'?'#b91c1c':'#854d0e');
        TT[`d_read${ri}_${i}`]={title:`Round ${ri+1}: the trial pixel x = ${F(xn)}`,coords:co(F(xn),'0.40'),space:UVS,role:`It reads ${F(c.v.rx)}: ${sd}.`,calc:c.lines.slice(1).join('\n')}; });
      if(ri<2){ const nx=rounds[ri+1], NX2=v=>60+(v-nx.a)/(nx.b-nx.a)*660; const t=40/95, gd=(xa,xb)=>`M${r2(xa)},${y+30}L${r2(xa+(xb-xa)*t)},${y+70}`;
        g+=`<path d="${gd(NX(nx.a),NX2(nx.a))}${gd(NX(nx.b),NX2(nx.b))}" stroke="#94a3b8" stroke-dasharray="4 4" fill="none"/>`; }
    });
    const el=document.getElementById('c20dec'); el.innerHTML=g; bindPts2(el,TT);
  })();
  /* part 3: halving */
  (function(){
    const H=[]; let lo=Q.E(0.65), hi=Q.E(0.84);
    for(let i=0;i<14;i++){ const sum=lo+hi, mid=Q.div(sum,Q.Ex(2)), c=rc(mid), sd=side(c.v.rx); H.push({lo,hi,sum,mid,c,sd}); if(sd==='on') break; if(sd==='left') lo=mid; else hi=mid; }
    const svg=document.getElementById('c20half'), dots=document.getElementById('c20dots'); let k=0;
    H.forEach((h,i)=>{ const b=document.createElement('button'); b.setAttribute('aria-label','Halving '+(i+1)); b.addEventListener('click',()=>{ k=i; draw(); }); dots.appendChild(b); });
    function draw(){
      closeTip();
      const h=H[k], TT={}; let g='';
      const A=0.64, B=0.86, NX=v=>40+(v-A)/(B-A)*680;                     // top: the whole row
      g+=gt(40,24,'the whole row: the range still in play','start','gtb');
      g+=`<line x1="${NX(A)}" y1="60" x2="${NX(B)}" y2="60" stroke="#6b7280" stroke-width="1.5"/>`;
      for(const t of [0.65,0.70,0.75,0.80,0.85]) g+=`<line x1="${NX(t)}" y1="55" x2="${NX(t)}" y2="65" stroke="#6b7280"/>`+gt(NX(t),84,t.toFixed(2),'middle','gt');
      g+=`<rect x="${NX(N3u(h.lo))}" y="50" width="${Math.max(3,NX(N3u(h.hi))-NX(N3u(h.lo)))}" height="20" fill="#fde68a" stroke="#b45309"/>`;
      const w=N3u(h.hi-h.lo), a2=N3u(h.lo)-w*0.15, b2=N3u(h.hi)+w*0.15, NZ=v=>40+(v-a2)/(b2-a2)*680;   // bottom: zoom on the range
      g+=gt(40,128,`zoom on the range: ${F(h.lo)} to ${F(h.hi)} (width ${F(h.hi-h.lo)})`,'start','gtb');
      g+=`<line x1="40" y1="190" x2="720" y2="190" stroke="#6b7280" stroke-width="1.5"/>`+`<rect x="${NZ(N3u(h.lo))}" y="180" width="${NZ(N3u(h.hi))-NZ(N3u(h.lo))}" height="20" fill="#fef3c7" stroke="#b45309"/>`;
      g+=ptSVG('lo',NZ(N3u(h.lo)),190,'#60a5fa','left end',6)+ptSVG('hi',NZ(N3u(h.hi)),190,'#f87171','right end',6)+ptSVG('mid',NZ(N3u(h.mid)),190,COLS[h.sd],'the middle',7.5);
      g+=gt(NZ(N3u(h.lo)),222,F(h.lo),'middle','gt')+gt(NZ(N3u(h.hi)),222,F(h.hi),'middle','gt')+gt(NZ(N3u(h.mid)),168,`middle ${F(h.mid)} → reads ${F(h.c.v.rx)} (${h.sd})`,'middle','gtb');
      TT.lo={title:'The left end of the range',coords:co(F(h.lo),'0.40'),space:UVS,role:'It reads left of the white line.'};
      TT.hi={title:'The right end of the range',coords:co(F(h.hi),'0.40'),space:UVS,role:'It reads right of the white line.'};
      TT.mid={title:`The middle pixel x = ${F(h.mid)}`,coords:co(F(h.mid),'0.40'),space:UVS,role:`It reads ${F(h.c.v.rx)}: ${h.sd}.`,calc:[`(${F(h.lo)} + ${F(h.hi)}) ÷ 2:`,`  ${F(h.lo)} + ${F(h.hi)} = ${F(h.sum)}`,`  ${F(h.sum)} ÷ 2 = ${F(h.mid)}`].concat(h.c.lines.slice(1)).join('\n')};
      svg.innerHTML=g; bindPts2(svg,TT);
      document.getElementById('c20cap').innerHTML=`<b>Halving ${k+1} of ${H.length}.</b> The range is ${F(h.lo)} to ${F(h.hi)}: its left end reads left, its right end reads right. The middle pixel is ${F(h.mid)}; it reads ${F(h.c.v.rx)}: ${h.sd==='on'?'on the white line (3 decimals), so x = '+F(h.mid)+'. Done.':h.sd+'. So the answer is in the '+(h.sd==='left'?'right':'left')+' half: '+(h.sd==='left'?F(h.mid)+' to '+F(h.hi):F(h.lo)+' to '+F(h.mid))+'.'}`;
      setMath('c20halfcalc',['# | range          | middle (one operation per line) | reads      | keep'].concat(H.slice(0,k+1).map((q,i)=>`${String(i+1).padStart(1)} | ${F(q.lo)} – ${F(q.hi)} | ${F(q.lo)} + ${F(q.hi)} = ${F(q.sum)}; ${F(q.sum)} ÷ 2 = ${F(q.mid)} | ${F(q.c.v.rx)} ${q.sd} | ${q.sd==='on'?'done':q.sd==='left'?F(q.mid)+' – '+F(q.hi):F(q.lo)+' – '+F(q.mid)}`)));
      [...dots.children].forEach((b,i)=>b.setAttribute('aria-current',String(i===k)));
      document.getElementById('c20count').textContent=`halving ${k+1} of ${H.length}`;
      document.getElementById('c20back').disabled=k===0; document.getElementById('c20next').disabled=k===H.length-1;
    }
    document.getElementById('c20back').addEventListener('click',()=>{ if(k>0){ k--; draw(); } });
    document.getElementById('c20next').addEventListener('click',()=>{ if(k<H.length-1){ k++; draw(); } });
    draw();
  })();
})();

/* ---------- card 21: from the white line, the formula is direct; from a row, we search ---------- */
(function(){
  const Q=N3, F=Q.F, sl=document.getElementById('c21y'), val=document.getElementById('c21yv'), pb=[...document.querySelectorAll('.c21p')], svg=document.getElementById('c21pic');
  const V=view(0.60,0.17,0.30*520/560,0.33,520); let ry=0.40;   // y from 0.17: the pixel of R′.y = 0.20 lies at y = 0.196
  function draw(){
    closeTip();
    const rn=Q.E(ry), pt=c9CurvePoint(rn), X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.45);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+lab(X(0.652),16,'white line x = 0.65',WHITE);
    s+=`<line x1="0" y1="${Y(0.40)}" x2="${V.W}" y2="${Y(0.40)}" stroke="#fde68a" stroke-width="2" stroke-dasharray="8 6"/>`+lab(V.W-8,Y(0.40)-10,'the row we want: y = 0.40','#fde68a','end');
    s+=`<line x1="${X(0.65)}" y1="${Y(N3u(pt.y))}" x2="${V.W}" y2="${Y(N3u(pt.y))}" stroke="#e5e7eb" stroke-width="1"/>`+lab(V.W-8,Y(N3u(pt.y))+20,`the row it lands on: y = ${F(pt.y)}`,'#e5e7eb','end');
    s+=arrowSVG(X(N3u(pt.x)),Y(N3u(pt.y)),X(0.65),Y(N3u(rn)),SKY,2.6,10);
    s+=ptSVG('R',X(0.65),Y(N3u(rn)),WHITE,'R′',6,true)+lab(X(0.65)-10,Y(N3u(rn))+4,'R′',WHITE,'end')+ptSVG('S',X(N3u(pt.x)),Y(N3u(pt.y)),C_N,'its pixel',6.5)+lab(X(N3u(pt.x))+10,Y(N3u(pt.y))-12,'its pixel',C_N);
    TT.R={title:'R′ — a point of the white line (the slider)',coords:co('0.65',F(rn)),space:UVW,role:'We start here: known.',calc:pt.parts.P0.concat(pt.parts.Pr).join('\n')};
    TT.S={title:'The pixel that shows R′',coords:co(F(pt.x),F(pt.y)),space:UVS,role:'Found at once with card 9\'s formulas: no trying.',calc:pt.lines.join('\n')};
    svg.innerHTML=s; bindPts2(svg,TT);
    setMath('c21calc',pt.lines);
    document.getElementById('c21ev').textContent=pt.y===Q.E(0.40)?`R′.y = ${F(rn)}: the pixel lands exactly on the row y = 0.40. This R′ is R_K, and the pixel is K = (${F(pt.x)}, 0.40). But we found this R′.y by moving the slider: by trying.`:`R′.y = ${F(rn)}: the pixel is found at once, (${F(pt.x)}, ${F(pt.y)}), but it lands on the row y = ${F(pt.y)}, not 0.40. To land on y = 0.40 we must try other R′.y values: a search again.`;
    val.textContent=F(rn); pb.forEach(b=>b.setAttribute('aria-pressed',String(Q.E(+b.dataset.v)===rn)));
  }
  sl.addEventListener('input',()=>{ ry=Math.round(+sl.value*1000)/1000; draw(); });
  pb.forEach(b=>b.addEventListener('click',()=>{ ry=+b.dataset.v; sl.value=String(ry); draw(); }));
  draw();
})();

/* ---------- card 22: which formula makes which number in Step C ---------- */
(function(){
  const Q=N3, cK=Q.chainText('K',Q.E(0.705),Q.E(0.40),'linear'), P=c9CurvePoint(Q.E(0.427),'R_K'), TT={}; let g='';
  const B=[['k','K = (0.705, 0.40)',['found by trying','card 10, Step B'],'#334155',20,20,200,96,{title:'K — from Step B',coords:'(0.705, 0.40)',space:UVS,role:'Step B found it by trying pixels of the row. Its chain:',calc:cK.lines.slice(1).join('\n')}],
    ['y','the chain, y part',['direction, push,','and read point','Step C, lines 1–3'],C9COL.read,260,20,210,96,{title:'The chain, y part (Step C, lines 1–3)',coords:'readUv.y = 0.427',space:'Step C',role:'The direction, the push, and the read point of the chain:',calc:cK.lines.slice(-7).join('\n')}],
    ['rk','R_K = (0.65, 0.427)',['the read point of K','Step C, line 4'],'#475569',510,20,240,96,{title:'R_K — the read point of K',coords:'(0.65, 0.427)',space:UVW,role:'Its x comes from Step A (line 10), its y from line 3.'}],
    ['r','length formula',['0.0225 + 0.005329 = 0.027829','√0.027829 = 0.167','Step C, line 5'],C9COL.dist,510,176,240,114,{title:'d_read — the length formula, used for R_K (Step C, line 5)',coords:'d_read = 0.167',space:'Step C',role:'The distance from C to R_K:',calc:P.parts.Pr.join('\n')}],
    ['n','0.60 and 0.0175',['0.15 ÷ 1.5 = 0.10','0.50 + 0.10 = 0.60','0.10 × 0.175 = 0.0175','Step C, line 6'],'#57534e',20,176,200,114,{title:'Where 0.60 and 0.0175 come from (Step C, line 6)',coords:'0.60 and 0.0175',space:'card 9, steps 5–8',role:'0.15: the white line is 0.15 right of C. 1.5 and 0.175 come from the read-distance formula d_read = 1.5 × d − 0.175.',calc:'0.15 ÷ 1.5 = 0.10\n0.50 + 0.10 = 0.60\n0.10 × 0.175 = 0.0175'}],
    ['c','curve formula',['x = 0.60 + 0.0175 ÷ d_read','0.0175 ÷ 0.167 = 0.105','0.60 + 0.105 = 0.705','Step C, line 7'],C9COL.curve,260,176,215,114,{title:'The curve formula (Step C, line 7)',coords:'x = 0.705',space:'Step C',role:'The same x as Step B: the check holds.',calc:P.parts.Px.join('\n')}]];
  for(const [k,t,lines,col,x,y,w,h,tip] of B){ g+=boxSVG(k,x,y,w,h,t,lines,col); TT[k]=tip; }
  g+=flowArrow(222,68,258,68,'#475569')+flowArrow(472,68,508,68,'#475569')+flowArrow(630,118,630,174,'#475569')+flowArrow(508,233,477,233,'#475569')+flowArrow(222,233,258,233,'#475569');   // the right column is 240 wide: its longest line did not fit in 200
  g+=gt(385,318,'The last box gives x = 0.705: the same pixel as Step B.','middle','gtb','#166534');
  const el=document.getElementById('c22flow'); el.innerHTML=g; bindPts2(el,TT);
})();

/* ---------- card 23: the walk from R_K back to the pixel ---------- */
(function(){
  const Q=N3, F=Q.F, svg=document.getElementById('c23pic'), btns=[...document.querySelectorAll('.c23m')];
  const V=view(0.47,0.32,0.30,0.30*440/560,560); let mode='right';
  const Rk={x:Q.E(0.65),y:Q.E(0.427)}, P=c9CurvePoint(Rk.y), r=P.r;
  const dx=Q.div(Rk.x-Q.K50,r), dy=Q.div(Rk.y-Q.K50,r), d=Q.div(r+Q.Ex(0.175),Q.Ex(1.5)), push=d-r;
  const pw=Q.Ex(0.175)-Q.mul(Q.Ex(0.5),r);
  const walk=len=>({x:Rk.x+Q.mul(dx,len),y:Rk.y+Q.mul(dy,len)});
  const K=walk(push), K2=walk(pw), cK2=Q.chainText('K′',K2.x,K2.y,'linear'), cK=Q.chainText('K',K.x,K.y,'linear');
  function draw(){
    closeTip();
    const X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.45);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+lab(X(0.652),16,'white line x = 0.65',WHITE);
    const Cx=X(0.5), Cy=Y(0.5), ux=N3u(dx), uy=N3u(dy);
    s+=stroke([[Cx,Cy],[X(0.5+ux*0.32),Y(0.5+uy*0.32)]],VIOLET,1.8);
    s+=arrowSVG(Cx,Cy,Cx+ux*80,Cy+uy*80,'#e9d5ff',3,10)+lab(Cx+ux*80+8,Cy+uy*80+18,'dir: length 1, drawn shorter','#e9d5ff');
    const T=mode==='right'?K:K2, Tx=X(N3u(T.x)), Ty=Y(N3u(T.y)), Rx=X(0.65), Ry=Y(N3u(Rk.y));
    s+=arrowSVG(Rx,Ry,Tx,Ty,'#f59e0b',3.4,11)+lab((Rx+Tx)/2-8,(Ry+Ty)/2-16,`+ dir × ${F(mode==='right'?push:pw)}`,'#fcd34d','end');
    if(mode==='right'){ s+=arrowSVG(Tx+ux*0+uy*14,Ty-ux*14,Rx+uy*14,Ry-ux*14,SKY,2.6,10)+lab((Rx+Tx)/2+4,(Ry+Ty)/2+46,'− dir × push: the shader','#bae6fd','middle');
      s+=ptSVG('K',Tx,Ty,C_N,'K',6.5)+lab(Tx-6,Ty-16,'K = ('+F(K.x)+', '+F(K.y)+')',C_N,'end'); }
    else { const rx=X(N3u(cK2.v.rx)), ry=Y(N3u(cK2.v.ry)); s+=arrowSVG(Tx,Ty,rx,ry,'#fb7185',2.8,10)+ptSVG('K2r',rx,ry,'#fb7185','the read point of K′',5.5,true);
      s+=ptSVG('K2',Tx,Ty,'#fb7185','K′',6.5)+lab(Tx+10,Ty-12,'K′ = ('+F(K2.x)+', '+F(K2.y)+')','#fecdd3')+lab(rx-10,ry+24,'reads x = '+F(cK2.v.rx)+': misses 0.65','#fecdd3','end');
      TT.K2={title:'K′ — where the wrong walk lands',coords:co(F(K2.x),F(K2.y)),space:UVS,role:'Its chain: its read point is not on the white line.',calc:cK2.lines.slice(1).join('\n')};
      TT.K2r={title:'The read point of K′',coords:co(F(cK2.v.rx),F(cK2.v.ry)),space:UVW,role:`${F(cK2.v.rx)} is not 0.65: K′ does not show the white line.`,calc:cK2.lines.slice(-3).join('\n')}; }
    s+=ptSVG('RK',Rx,Ry,WHITE,'R_K',6,true)+lab(Rx-10,Ry+4,'R_K',WHITE,'end')+ptSVG('C',Cx,Cy,C_C,'C',5)+lab(Cx-10,Cy-10,'C',C_C,'end');
    TT.C=C9TC; TT.RK={title:'R_K — the read point of K: the start of the walk',coords:'(0.65, 0.427)',space:UVW,role:'Known. Its distance d_read and its direction from C:',calc:P.parts.Pr.concat([`dir.x = 0.15 ÷ ${F(r)} = ${F(dx)}`,`dir.y = (−0.073) ÷ ${F(r)} = ${F(dy)}`]).join('\n')};
    TT.K={title:'K — where the walk lands',coords:co(F(K.x),F(K.y)),space:UVS,role:'The same pixel as card 10, Step B. Its own chain reads 0.65:',calc:cK.lines.slice(1).join('\n')};
    svg.innerHTML=s; bindPts2(svg,TT);
    document.getElementById('c23cap').textContent=mode==='right'?'The walk by the pixel\'s push (0.061) lands on K. The shader\'s push arrow goes back from K to R_K.':'The walk by R_K\'s own push (0.0915) lands on K′. K′ has its own, smaller push, so its read point misses the white line.';
    document.getElementById('c23ev').textContent=mode==='right'?`Walk length d − d_read = ${F(d)} − ${F(r)} = ${F(push)}: it lands on K = (${F(K.x)}, ${F(K.y)}).`:`Walk length: the push formula used with d_read, as if R_K were the pixel: 0.5 × ${F(r)} = ${F(Q.mul(Q.Ex(0.5),r))}; 0.175 − ${F(Q.mul(Q.Ex(0.5),r))} = ${F(pw)}. It lands on K′ = (${F(K2.x)}, ${F(K2.y)}), which reads x = ${F(cK2.v.rx)}.`;
    btns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===mode)));
  }
  btns.forEach(b=>b.addEventListener('click',()=>{ mode=b.dataset.m; draw(); }));
  draw();
})();

/* ---------- card 24: why d is not known in the walk back ---------- */
(function(){
  const TT={}; let g=''; const U='#f3f4f6', K='#dcfce7', RD='#b91c1c', GN='#15803d';
  g+=gt(20,24,'The circle: each box needs the next one, and the last one needs the first.','start','gtb',RD);
  const top=[['walk','the walk',['K = R_K + dir × push','needs: the push']],['push','the push',['push = 0.175 − 0.5 × d','needs: d']],['d','d = length(p)',['needs: p']],['p','p = K − C',['needs: the pixel K,','which the walk','looks for']]];
  top.forEach(([k,t,l],i)=>{ const x=20+i*192; g+=boxSVG(k,x,56,160,104,t,l,'#6b7280',U); if(i) g+=flowArrow(x-30,108,x-3,108,RD,2.6); });   // 32 px gaps: the arrows were 12 px blobs
  g+=`<path d="M676,56 C676,34 100,34 100,54" fill="none" stroke="${RD}" stroke-width="2.6"/><path d="M100,56 l-6,-10 l12,0z" fill="${RD}"/>`;
  g+=gt(20,186,'The way out: start from what we know. The pixel-distance formula needs only d_read.','start','gtb',GN);
  const bot=[['kn','known',['R_K = (0.65, 0.427)','d_read = 0.167'],GN,K],['dr','d from d_read',['(d_read + 0.175) ÷ 1.5','0.167 + 0.175 = 0.342','0.342 ÷ 1.5 = 0.228'],GN,K],['pu','the push',['push = d − d_read','0.228 − 0.167 = 0.061'],GN,K],['wk','the walk',['K = R_K + dir × 0.061','K = (0.705, 0.40)'],GN,K]];
  bot.forEach(([k,t,l,c,f],i)=>{ const x=20+i*192; g+=boxSVG(k,x,210,160,104,t,l,c,f); if(i) g+=flowArrow(x-30,262,x-3,262,GN,2.8); });
  g+=gt(20,344,'Once K is found, d = length(p) = √0.052025 = 0.228 as well: both ways agree.','start','gt','#374151');
  const tips={walk:{title:'The walk (card 23)',coords:'K = R_K + dir × push',space:UVS,role:'It needs the push of the pixel.'},push:{title:'The push of the pixel',coords:'push = 0.175 − 0.5 × d',space:'a length',role:'The push formula (card 9, step 2) needs the pixel’s d.'},
    d:{title:'d = length(p)',coords:'?',space:'distance from C',role:'It needs p, and p needs the pixel.'},p:{title:'p = K − C',coords:'?',space:UVS,role:'It needs the pixel K — the very thing the walk looks for.'},
    kn:{title:'Known at the start',coords:'R_K = (0.65, 0.427), d_read = 0.167',space:UVW,role:'d_read = length(R_K − C):',calc:'0.65 − 0.50 = 0.15\n0.427 − 0.50 = −0.073\n0.15 × 0.15 = 0.0225\n(−0.073) × (−0.073) = 0.005329\n0.0225 + 0.005329 = 0.027829\n√0.027829 = 0.167'},
    dr:{title:'The way out: the pixel-distance formula (card 9, step 6)',coords:'d = 0.228',space:'distance from C',role:'It needs only d_read:',calc:'0.167 + 0.175 = 0.342\n0.342 ÷ 1.5 = 0.228'},
    pu:{title:'The push of the pixel, now known',coords:'push = 0.061',space:'a length',role:'The ray rule d_read = d − push, turned around:',calc:'0.228 − 0.167 = 0.061'},
    wk:{title:'The walk, now possible',coords:'K = (0.705, 0.40)',space:UVS,role:'Card 23 does it line by line.'}};
  for(const k in tips) TT[k]=tips[k];
  const el=document.getElementById('c24pic'); el.innerHTML=g; bindPts2(el,TT);
})();

