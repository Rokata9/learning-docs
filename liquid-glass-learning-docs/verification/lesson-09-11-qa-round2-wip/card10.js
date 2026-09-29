/* ---------- card 10: solving the row y = 0.40 (rebuilt 2026-09-29, 3 decimals) ---------- */
function c10Row(x){                                             // the pixel (x, 0.40), linear, x part, 3 decimals: every value of Step A
  const Q=N3, px=x-Q.K50, py=Q.E(0.40)-Q.K50, px2=px*px, s=px2+py*py, d=Q.sqrtSq(s), sd=d-Q.K25, top=sd+Q.K10, t0=Q.div(top,2*Q.K10), t=Math.min(Q.SC,Math.max(0,t0));
  const fo=Q.SC-t, push=Q.mul(Q.K10,fo), h=Q.mul(Q.Ex(0.5),d), push2=Q.Ex(0.175)-h, dx=Q.div(px,d), e=Q.mul(dx,push);
  return {x,px,py,px2,s,d,sd,top,t0,t,fo,push,h,push2,dx,e,rx:x-e};
}
function c10fn(k,t){ return `<span class="fn" style="--c:${C9COL[k]}">${t}</span>`; }
function c10ins(k,t){ return `<span class="ins" style="--c:${C9COL[k]}">${t}</span>`; }
function stepATable(xs){                                        // Step A: the letters column for any pixel (x, 0.40); one numbers column per pixel in xs (engine units)
  const Q=N3, F=Q.F, Fo=Q.Fo, F2=Q.F2, R=xs.map(c10Row);
  let h='<tr><th>#</th><th>What we do (one move per line)</th><th>With letters: any pixel (x, 0.40)</th>'+R.map(v=>`<th>With numbers: x = ${F(v.x)}</th>`).join('')+'</tr>';
  const row=(k,m,l,f)=>{ h+=`<tr><td class="k">${k}</td><td class="m">${m}</td><td class="f">${l}</td>`+R.map(v=>`<td class="f">${f(v)}</td>`).join('')+'</tr>'; };
  row(1,`${c10fn('p','the arrow p')}: p = uv − C`,'p.x = x − 0.50\np.y = 0.40 − 0.50 = −0.10',v=>`${F(v.x)} − 0.50 = ${F(v.px)}\n0.40 − 0.50 = −0.10`);
  row(2,`put p.x and p.y (line 1) into the ${c10fn('dist','length formula')} d = √(p.x² + p.y²)`,`d = √(${c10ins('p','(x − 0.50)')}² + ${c10ins('p','(−0.10)')}²)`,v=>`${Fo(v.px)} × ${Fo(v.px)} = ${F2(v.px2)}\n(−0.10) × (−0.10) = 0.01`);
  row(3,'write (−0.10)² as 0.01; then add, and take the square root','d = √((x − 0.50)² + 0.01)',v=>`${F2(v.px2)} + 0.01 = ${F2(v.s)}\n√${F2(v.s)} = ${F(v.d)}`);
  row(4,`the ${c10fn('sd','sd rule')}`,'sd = d − 0.25',v=>`${F(v.d)} − 0.25 = ${F(v.sd)}`);
  row(5,`the ${c10fn('t','fraction t')}`,'t = (sd + 0.10) ÷ 0.20',v=>`${F(v.sd)} + 0.10 = ${F(v.top)}\n${F(v.top)} ÷ 0.20 = ${F(v.t)}`);
  row(6,`${c10fn('lin','linear falloff')}`,'falloff = 1 − t',v=>`1 − ${F(v.t)} = ${F(v.fo)}`);
  row(7,`the ${c10fn('pushc','push')}`,'push = 0.10 × falloff',v=>`0.10 × ${F(v.fo)} = ${F(v.push)}`);
  row(8,`the same push from the ${c10fn('push','push formula')} of card 9, step 2. It has only d in it`,'push = 0.175 − 0.5 × d',v=>`0.5 × ${F(v.d)} = ${F(v.h)}\n0.175 − ${F(v.h)} = ${F(v.push2)}\nthe same as line 7`);
  row(9,`the ${c10fn('dir','direction')}, x part`,'dir.x = (x − 0.50) ÷ d',v=>`${F(v.px)} ÷ ${F(v.d)} = ${F(v.dx)}`);
  row(10,`the ${c10fn('read','read point')}, x part`,'readUv.x = x − dir.x × push',v=>`${F(v.dx)} × ${F(v.push)} = ${F(v.e)}\n${F(v.x)} − ${F(v.e)} = ${F(v.rx)}`);
  row(11,`put in ${c10fn('dir','dir.x')} (line 9) and the ${c10fn('push','push formula')} (line 8)`,`readUv.x = x − ${c10ins('dir','(x − 0.50) ÷ d')}\n           × ${c10ins('push','(0.175 − 0.5 × d)')}`,v=>{ const e2=Q.mul(v.dx,v.push2); return `${F(v.x)} − 0.50 = ${Fo(v.px)}\n${Fo(v.px)} ÷ ${F(v.d)} = ${Fo(v.dx)}\n0.5 × ${F(v.d)} = ${F(v.h)}\n0.175 − ${F(v.h)} = ${F(v.push2)}\n${Fo(v.dx)} × ${F(v.push2)} = ${Fo(e2)}\n${F(v.x)} − ${Fo(e2)} = ${F(v.x-e2)}`; });
  row(12,'<b>the condition</b>: the read point must lie on the white line x = 0.65. So the <b>read point’s</b> x must be 0.65. The pixel’s own x is the unknown','x − (x − 0.50) ÷ d × (0.175 − 0.5 × d)\n  = 0.65\nwith d = √((x − 0.50)² + 0.01)',
    v=>v.rx===Q.X65?`${F(v.rx)} = 0.65: yes.\nThis pixel shows the white line.`:`${F(v.rx)} is not 0.65: no.\nThe read point is ${v.rx<Q.X65?'left':'right'} of\nthe white line.`);
  return h;
}
const C10USES='<span class="uselabel">Uses (the lesson’s chain, and one formula of card 9):</span> '+['p','dist','sd','t','lin','pushc','dir','read','push'].map(k=>c9chip(C9F.find(f=>f.k===k))).join(' ');
(function(){
  const Q=N3, F=Q.F, uu=n=>n/Q.SC, KY=Q.E(0.40);
  document.getElementById('c10usesA').innerHTML=C10USES;
  document.getElementById('c10eq').innerHTML=stepATable([Q.E(0.70),Q.E(0.705)]);
  /* Step B */
  const R=[{xs:[0.65,0.84],w:'wide',t:'Start'},{xs:[0.70,0.80],w:'wide',t:'Round 1 — the first decimal'},{xs:[0.70,0.71],w:'mid',t:'Round 2 — the second decimal'},{xs:[0.701,0.702,0.703,0.704,0.705],w:'narrow',t:'Round 3 — the third decimal'}];
  const graph=document.getElementById('c10graph'), geo=document.getElementById('c10geo'), cap=document.getElementById('c10cap'), dots=document.getElementById('c10dots');
  let k=0;
  R.forEach((r,i)=>{ const b=document.createElement('button'); b.setAttribute('aria-label',r.t); b.addEventListener('click',()=>{ k=i; draw(); }); dots.appendChild(b); });
  const rowC=xn=>Q.chainText('trial pixel',xn,KY,'linear',{xOnly:true});
  const side=v=>v<Q.X65?'left':v>Q.X65?'right':'on';
  const sideTxt=v=>v<Q.X65?'left of the white line (below 0.65)':v>Q.X65?'right of the white line (above 0.65)':'on the white line (0.65)';
  const COLS={left:'#60a5fa',right:'#f87171',on:C_N};
  const WIN={wide:{x0:0.64,x1:0.86,geo:view(0.54,0.3395,0.34,0.1962,520)},mid:{x0:0.695,x1:0.715,geo:view(0.62,0.37,0.11,0.0635,520)},narrow:{x0:0.6995,x1:0.7055,geo:view(0.62,0.37,0.11,0.0635,520)}};
  function caption(tr){
    const v=n=>F(rowC(Q.E(n)).v.rx);                         // any trial pixel of the row, 3 decimals
    return [`<b>Start.</b> We need two pixels of the row whose read points lie on different sides of the white line. Two pixels work without knowing the answer. The pixel x = 0.65 sits on the white line itself; its push points toward C, which is to the left, so it reads ${v(0.65)}: left of the white line. The pixel x = 0.84 is 0.354 from C, beyond the outer ring (0.35); it gets no push and reads its own place, ${v(0.84)}: right of the white line. So the answer lies between 0.65 and 0.84. There is only one answer: in the graph, readUv.x only rises when x rises, so it crosses 0.65 once.`,
      `<b>Round 1 — the first decimal.</b> Between 0.65 and 0.84, the only pixels with one decimal are 0.7 and 0.8. The pixel 0.70 reads ${v(0.70)}: left. The pixel 0.80 reads ${v(0.80)}: right. So x lies between 0.70 and 0.80: x = 0.7…`,
      `<b>Round 2 — the second decimal.</b> Try 0.71, 0.72, … until the read point passes the white line. Already 0.71 reads ${v(0.71)}: right. The pixel 0.70 reads ${v(0.70)}: left. So x lies between 0.70 and 0.71: x = 0.70…`,
      `<b>Round 3 — the third decimal.</b> Try 0.701, 0.702, …: they read ${v(0.701)}, ${v(0.702)}, ${v(0.703)}, and ${v(0.704)}: all left. The pixel 0.705 reads ${v(0.705)}: on the white line. So x = 0.705. With 3 decimals we stop here. Three more rounds give 0.704841, the lesson's number with 6 decimals.`][k];
  }
  function draw(){
    closeTip();
    const st=R[k], W=WIN[st.w], tr=st.xs.map(x=>({x:Q.E(x),...rowC(Q.E(x))}));
    const f=x=>chainF(x,0.40,'linear').rx, x0=W.x0, x1=W.x1;
    let lo=Math.min(f(x0),0.65), hi=Math.max(f(x1),0.65); const pad=(hi-lo)*0.12; lo-=pad; hi+=pad;
    const GX=x=>70+(x-x0)/(x1-x0)*480, GY=v=>360-(v-lo)/(hi-lo)*310, TT={}; let g='';
    g+=`<line x1="70" y1="360" x2="560" y2="360" stroke="#6b7280" stroke-width="1.5"/><line x1="70" y1="360" x2="70" y2="36" stroke="#6b7280" stroke-width="1.5"/>`;
    g+=gt(560,408,'x of the pixel','end','gtb')+gt(76,30,'readUv.x (the read point’s x)','start','gtb');
    const ticks=st.w==='wide'?[0.65,0.70,0.75,0.80,0.85]:st.w==='mid'?[0.70,0.705,0.71]:[0.700,0.701,0.702,0.703,0.704,0.705];
    for(const x of ticks) g+=`<line x1="${GX(x)}" y1="360" x2="${GX(x)}" y2="366" stroke="#6b7280"/>`+gt(GX(x),382,x.toFixed(st.w==='wide'?2:3),'middle');
    g+=`<line x1="70" y1="${GY(0.65)}" x2="560" y2="${GY(0.65)}" stroke="#ffffff" stroke-width="6"/><line x1="70" y1="${GY(0.65)}" x2="560" y2="${GY(0.65)}" stroke="#111827" stroke-width="1.5"/>`+gt(64,GY(0.65)+5,'0.65','end','gtb');
    /* labels (2026-09-29): each label tries a few places and takes the first one inside the frame that covers no line, dot, or other label */
    const obst=[], boxes=[[76,18,316,34],[30,GY(0.65)-8,64,GY(0.65)+8]];   // the axis title; the tick label 0.65
    const addLine=(xa,ya,xb,yb)=>{ const n=Math.max(1,Math.ceil(Math.hypot(xb-xa,yb-ya)/3)); for(let j=0;j<=n;j++) obst.push([xa+(xb-xa)*j/n,ya+(yb-ya)*j/n]); };
    const lbox=(x,y,t,a,bold)=>{ const L=[].concat(t), w=Math.max(...L.map(s=>s.length))*(bold?8.2:7.3), xa=a==='end'?x-w:a==='middle'?x-w/2:x; return [xa,y-11,xa+w,y+3+(L.length-1)*16]; };
    const free=b=>b[0]>=4&&b[2]<=596&&b[1]>=38&&b[3]<=354&&!obst.some(([px,py])=>px>=b[0]-3&&px<=b[2]+3&&py>=b[1]-3&&py<=b[3]+3)&&!boxes.some(o=>!(b[2]<o[0]-3||b[0]>o[2]+3||b[3]<o[1]-3||b[1]>o[3]+3));
    let fallbacks=0;
    const tryPlace=(t,cands,bold)=>{ for(const [x,y,a] of cands){ const bx=lbox(x,y,t,a,bold); if(free(bx)){ boxes.push(bx); return [x,y,a]; } } return null; };
    const place=(t,cands,bold)=>{ const got=tryPlace(t,cands,bold); if(got) return got;
      fallbacks++; const [x,y,a]=cands[0], bx=lbox(x,y,t,a,bold), dx=Math.max(0,4-bx[0])-Math.max(0,bx[2]-596); boxes.push([bx[0]+dx,bx[1],bx[2]+dx,bx[3]]); return [x+dx,y,a]; };
    addLine(70,36,70,360); addLine(70,GY(0.65),560,GY(0.65));
    let d=''; for(let i=0;i<=200;i++){ const x=x0+(x1-x0)*i/200, px=GX(x), py=GY(f(x)); d+=(i?'L':'M')+r2(px)+','+r2(py); obst.push([px,py]); }
    g+=`<path d="${d}" fill="none" stroke="${RULE_COL.linear}" stroke-width="3"/>`;
    const XY=tr.map(o=>[GX(uu(o.x)),GY(uu(o.v.rx))]);
    XY.forEach(([gx,gy])=>{ addLine(gx,gy,gx,360); boxes.push([gx-8,gy-8,gx+8,gy+8]); });
    const WL='the white line: readUv.x = 0.65', wc=[];
    for(const dy of [20,-8]) for(let xe=556;xe>=300;xe-=8) wc.push([xe,GY(0.65)+dy,'end']);
    for(const dy of [20,-8]) for(let xs=76;xs<=300;xs+=8) wc.push([xs,GY(0.65)+dy,'start']);
    // one line if it fits; else two lines (in round 1 the orange line and the dashed line of 0.80 leave no room for one line)
    const WL2=['the white line:','readUv.x = 0.65'], wc2=[];
    for(const dy of [-24,20]) for(let xe=556;xe>=180;xe-=8) wc2.push([xe,GY(0.65)+dy,'end']);
    const w1=tryPlace(WL,wc,false);
    if(w1) g+=gt(w1[0],w1[1],WL,w1[2],'gt');
    else { const w2=place(WL2,wc2,false); WL2.forEach((l,j)=>{ g+=gt(w2[0],w2[1]+j*16,l,w2[2],'gt'); }); }
    tr.forEach((o,i)=>{ const [gx,gy]=XY[i], c=COLS[side(o.v.rx)], t=st.w==='narrow'?F(o.v.rx):`x = ${F(o.x)} → ${F(o.v.rx)}`;
      g+=`<line x1="${gx}" y1="${gy}" x2="${gx}" y2="360" stroke="#94a3b8" stroke-dasharray="3 3"/>`+ptSVG('t'+i,gx,gy,c,'x = '+F(o.x),6);
      const lp=place(t,[[gx+12,gy+20,'start'],[gx-12,gy-10,'end'],[gx+12,gy-10,'start'],[gx-12,gy+20,'end'],[gx+13,gy+5,'start'],[gx-13,gy+5,'end'],[gx,gy-15,'middle']],true);
      g+=gt(lp[0],lp[1],t,lp[2],'gtb');
      TT['t'+i]={title:`The trial pixel x = ${F(o.x)}`,coords:co(F(o.x),'0.40'),space:UVS,role:`It reads readUv.x = ${F(o.v.rx)}: ${sideTxt(o.v.rx)}. Its chain, x part, one operation per line:`,calc:o.lines.slice(1).join('\n')}; });
    graph.innerHTML=g; bindPts2(graph,TT); graph.dataset.fallbacks=String(fallbacks);   // QA: labels that found no free place
    /* the picture: the row, the trial pixels, and their read points */
    const V=W.geo, X=V.X, Y=V.Y, T2={};
    let s=imgSVG(V,raster('out','linear',V),0.35);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+stroke([[0,Y(0.40)],[V.W,Y(0.40)]],'#e5e7eb',1);
    s+=lab(X(0.652),16,'white line x = 0.65',WHITE)+lab(8,Y(0.40)-12,'row y = 0.40','#e5e7eb');
    if(st.w==='wide') s+=ringSVG(X(0.5),Y(0.5),V.S(0.35),'#e9d5ff',1.4)+lab(X(0.5)+V.S(0.35)*0.95,Y(0.5)-V.S(0.35)*0.30-6,'outer ring','#e9d5ff','end');
    tr.forEach((o,i)=>{ const full=Q.chainText('trial pixel',o.x,KY,'linear'), c=COLS[side(o.v.rx)], ry=full.v.ry;   // x and y, 3 decimals
      if(o.v.push>0) s+=arrowSVG(X(uu(o.x)),Y(0.40),X(uu(o.v.rx)),Y(uu(ry)),SKY,2.4,9);
      s+=ptSVG('g'+i+'r',X(uu(o.v.rx)),Y(uu(ry)),c,'read point of x = '+F(o.x),4.5,true)+ptSVG('g'+i,X(uu(o.x)),Y(0.40),c,'x = '+F(o.x),5);
      T2['g'+i]=TT['t'+i]; T2['g'+i+'r']={title:`The read point of the trial pixel x = ${F(o.x)}`,coords:co(F(o.v.rx),F(ry)),space:UVW,role:`${sideTxt(o.v.rx)}. Its x and y, from the chain of the trial pixel:`,calc:full.lines.slice(-10).join('\n')}; });
    if(st.w!=='narrow') tr.forEach((o,i)=>{ s+=lab(X(uu(o.x)),Y(0.40)+(i%2?24:-12),F(o.x),'#f8fafc','middle'); });
    else s+=lab(V.W-8,Y(0.40)+26,'five trial pixels, 0.001 apart','#e5e7eb','end');
    geo.innerHTML=s; bindPts2(geo,T2);
    document.getElementById('c10geocap').textContent=`The trial pixels of this round on the row y = 0.40, with “linear”. Their push arrows end at their read points. Window: x from ${(V.u0).toFixed(2)} to ${(V.u0+V.su).toFixed(2)} (UV).`;
    cap.innerHTML=caption(tr);
    setMath('c10tried',['tried in this round:'].concat(tr.map(o=>`  x = ${F(o.x)} → readUv.x = ${F(o.v.rx)}: ${side(o.v.rx)}`)));
    const two=k===3?tr.slice(-2):tr.slice(0,2);
    setMath('c10calcA',two[0].lines.concat([`→ ${F(two[0].v.rx)}: ${sideTxt(two[0].v.rx)}`]));
    setMath('c10calcB',two[1].lines.concat([`→ ${F(two[1].v.rx)}: ${sideTxt(two[1].v.rx)}`]));
    [...dots.children].forEach((b,i)=>b.setAttribute('aria-current',String(i===k)));
    document.getElementById('c10count').textContent=`${R[k].t} · state ${k+1} of ${R.length}`;
    document.getElementById('c10back').disabled=k===0; document.getElementById('c10next').disabled=k===R.length-1;
  }
  document.getElementById('c10back').addEventListener('click',()=>{ if(k>0){ k--; draw(); } });
  document.getElementById('c10next').addEventListener('click',()=>{ if(k<R.length-1){ k++; draw(); } });
  draw();
  /* Step C: the picture */
  (function(){
    const V=view(0.47,0.335,0.28,0.18,520), X=V.X, Y=V.Y, TT={};
    const Kx=Q.E(0.705), cK=Q.chainText('K',Kx,KY,'linear'), RKy=cK.v.ry;
    let s=imgSVG(V,raster('out','linear',V),0.45);
    s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,2)+curveSVG('linear',V,3)+stroke([[0,Y(0.40)],[V.W,Y(0.40)]],'#e5e7eb',1);
    const Cx=X(0.5), Cy=Y(0.5), Rx=X(0.65), Ry=Y(uu(RKy)), Kpx=X(uu(Kx)), Kpy=Y(0.40), L=Math.hypot(Kpx-Cx,Kpy-Cy), ux=(Kpx-Cx)/L, uy=(Kpy-Cy)/L;
    s+=stroke([[Cx,Cy],[Kpx+ux*40,Kpy+uy*40]],VIOLET,1.8);
    const nx=-uy, ny=ux, off=-22; s+=stroke([[Cx+nx*off,Cy+ny*off],[Rx+nx*off,Ry+ny*off]],'#93c5fd',3)+lab((Cx+Rx)/2+nx*off*2,(Cy+Ry)/2+ny*off*2,'d_read = '+F(Q.sqrtSq(Q.Ex(0.15)*Q.Ex(0.15)+(RKy-Q.K50)*(RKy-Q.K50))),'#93c5fd','middle');
    s+=arrowSVG(Kpx,Kpy,Rx,Ry,SKY,3,10);
    s+=ptSVG('C',Cx,Cy,C_C,'C',5)+lab(Cx-10,Cy-10,'C',C_C,'end');
    s+=ptSVG('RK',Rx,Ry,WHITE,'R_K',5.5,true)+lab(Rx-10,Ry-10,'R_K',WHITE,'end');
    s+=ptSVG('K',Kpx,Kpy,C_N,'K',6)+lab(Kpx+10,Kpy+20,'K',C_N);
    s+=lab(X(0.652),16,'white line x = 0.65',WHITE)+lab(V.W-8,Y(0.40)-10,'row y = 0.40','#e5e7eb','end');
    TT.C={title:'C — the center of the circle',coords:'(0.50, 0.50)',space:'UV: x to the right, y down',role:'d_read and d are measured from here.'};
    TT.K={title:'K — the pixel of Step B',coords:co(F(Kx),'0.40'),space:UVS,role:'Its read point is on the white line. Its whole chain, one operation per line:',calc:cK.lines.slice(1).join('\n')};
    TT.RK={title:'R_K — the read point of K',coords:co('0.65',F(RKy)),space:UVW,role:'Lines 1–4 of the table find its y. Its distance to C is d_read (line 5).',calc:cK.lines.slice(-7).join('\n')};
    const svgC=document.getElementById('c10cpic'); svgC.innerHTML=s; bindPts2(svgC,TT);
  })();
})();
