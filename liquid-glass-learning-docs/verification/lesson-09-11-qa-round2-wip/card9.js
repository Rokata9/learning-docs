/* ---------- card 9: the formula of the curve, one move per line (rebuilt 2026-09-29: 3 decimals, formulas so far, known / looked for) ---------- */
const C9F=[                                                     // every formula of card 9: key, name, code, where it comes from, which falloff rules, the step that makes it (0: before the card)
  {k:'p',n:'the arrow p',c:'p = uv − C',f:'the chain',r:'every rule',s:0},
  {k:'dist',n:'length formula',c:'d = √(p.x² + p.y²)',f:'the chain, Lesson 9.1',r:'every rule',s:0},
  {k:'sd',n:'sd rule',c:'sd = d − 0.25',f:'Lesson 9.2',r:'every rule',s:0},
  {k:'t',n:'the fraction t',c:'t = (sd + 0.10) ÷ 0.20',f:'Lesson 9.3',r:'linear and smoothstep',s:0},
  {k:'lin',n:'linear falloff',c:'falloff = 1 − t',f:'Lesson 9.3',r:'linear only',s:0},
  {k:'pushc',n:'push',c:'push = 0.10 × falloff',f:'the chain',r:'every rule',s:0},
  {k:'dir',n:'direction',c:'dir = p ÷ d',f:'the chain',r:'every rule',s:0},
  {k:'read',n:'read point',c:'readUv = uv − dir × push',f:'the chain',r:'every rule',s:0},
  {k:'fo',n:'falloff formula',c:'falloff = (0.35 − d) ÷ 0.20',f:'step 1',r:'linear only',s:1},
  {k:'push',n:'push formula',c:'push = 0.175 − 0.5 × d',f:'step 2',r:'linear only',s:2},
  {k:'r',n:'R and d_read',c:'R = (0.65, 0.368), d_read = 0.20',f:'step 3',r:'every rule',s:3},
  {k:'ray',n:'ray rule',c:'d_read = d − push',f:'step 4',r:'every rule',s:4},
  {k:'rfd',n:'read-distance formula',c:'d_read = 1.5 × d − 0.175',f:'step 5',r:'linear only',s:5},
  {k:'dfr',n:'pixel-distance formula',c:'d = (d_read + 0.175) ÷ 1.5',f:'step 6',r:'linear only',s:6},
  {k:'str',n:'stretch rule',c:'S.x = 0.50 + 0.15 × d ÷ d_read',f:'step 7',r:'every rule',s:7},
  {k:'curve',n:'curve formula',c:'x = 0.60 + 0.0175 ÷ d_read',f:'step 8',r:'linear only',s:8},
  {k:'lerp',n:'lerp',c:'x = P.x + (y − P.y) ÷ (peak.y − P.y) × (peak.x − P.x)',f:'Chapter 5',r:'every straight line',s:8}];
const C9COL={p:'#0369a1',dist:'#1e3a8a',sd:'#475569',t:'#a16207',lin:'#c2410c',pushc:'#0e7490',dir:'#6b21a8',read:'#9d174d',fo:'#b45309',push:'#0f766e',r:'#334155',ray:'#1d4ed8',rfd:'#4338ca',dfr:'#7e22ce',str:'#be185d',curve:'#4d7c0f',lerp:'#57534e'};
function c9chip(f,cls=''){ return `<span class="chip ${cls}" style="--c:${C9COL[f.k]}"><b>${f.n}</b> <code>${esc(f.c)}</code> <i>${f.s?'from '+f.f:f.f}</i>${cls?` <em>${f.r}</em>`:''}</span>`; }
/* a point of the white line R′ = (0.65, R′.y) and the pixel that shows it, with linear falloff, in the 3-decimal engine; every line one operation */
function c9CurvePoint(RYn,nm='R′'){
  const Q=N3, F=Q.F, Fo=Q.Fo, oy=RYn-Q.K50, s=Q.Ex(0.15)*Q.Ex(0.15)+oy*oy, r=Q.sqrtSq(s);
  const r2=r+Q.Ex(0.175), d=Q.div(r2,Q.Ex(1.5)), q=Q.div(Q.Ex(0.0175),r), x=Q.Ex(0.60)+q, ratio=Q.div(d,r), yo=Q.mul(oy,ratio), y=Q.K50+yo;
  const P0=[`${nm} = (0.65, ${F(RYn)}): a point of the white line`];
  const Pr=['length formula (Lesson 9.1):',`d_read = √((${nm}.x − 0.50)² + (${nm}.y − 0.50)²)`,'  0.65 − 0.50 = 0.15',`  ${F(RYn)} − 0.50 = ${F(oy)}`,'  0.15 × 0.15 = 0.0225',
    `  ${Fo(oy)} × ${Fo(oy)} = ${Q.F2(oy*oy)}`,`  0.0225 + ${Q.F2(oy*oy)} = ${Q.F2(s)}`,`  d_read = √${Q.F2(s)} = ${F(r)}`];
  const Pd=['pixel-distance formula (card 9, step 6):','d = (d_read + 0.175) ÷ 1.5',`  ${F(r)} + 0.175 = ${F(r2)}`,`  ${F(r2)} ÷ 1.5 = ${F(d)}`];
  const Px=['curve formula (card 9, step 8):','x = 0.60 + 0.0175 ÷ d_read',`  0.0175 ÷ ${F(r)} = ${F(q)}`,`  0.60 + ${F(q)} = ${F(x)}`];
  const Py=['stretch rule, y part (card 9, step 7):',`y = 0.50 + (${nm}.y − 0.50) × (d ÷ d_read)`,`  ${F(d)} ÷ ${F(r)} = ${F(ratio)}`,`  ${Fo(oy)} × ${F(ratio)} = ${F(yo)}`,
    yo<0?`  0.50 + ${Fo(yo)} = 0.50 − ${F(-yo)} = ${F(y)}`:`  0.50 + ${F(yo)} = ${F(y)}`];
  return {RYn,oy,s,r,d,q,x,ratio,yo,y,parts:{P0,Pr,Pd,Px,Py},lines:P0.concat(Pr,Pd,Px,Py)};
}
function c9GrayAt(yn){                                          // the gray line of step 9 at the row y: x = 0.611 + 0.212 × y
  const Q=N3, gm=Q.mul(Q.Ex(0.212),yn), g=Q.Ex(0.611)+gm;
  return {gm,g,lines:[`gray line at y = ${Q.F(yn)}: x = 0.611 + 0.212 × y      (step 9)`,`  0.212 × ${Q.F(yn)} = ${Q.F(gm)}`,`  0.611 + ${Q.F(gm)} = ${Q.F(g)}`]};
}
const Q9=(function(){                                          // card 9's points in the 3-decimal engine; cards 11-24 use them too
  const Q=N3, RY=Q.K50-Q.sqrtV(Q.Ex(0.0175)), Rr=Q.sqrtSq(Q.Ex(0.15)*Q.Ex(0.15)+(RY-Q.K50)*(RY-Q.K50)), Sd=Q.div(Rr+Q.Ex(0.175),Q.Ex(1.5)), ratio=Q.div(Sd,Rr);
  return {RY,Rr,Sd,ratio,SX:Q.K50+Q.mul(Q.Ex(0.15),ratio),SY:Q.K50+Q.mul(RY-Q.K50,ratio),PY:Q.K50-Q.sqrtV(Q.Ex(0.10)),PK:Q.Ex(0.60)+Q.div(Q.Ex(0.0175),Q.Ex(0.15))};
})();
const C9TC={title:'C — the center of the circle',coords:'(0.50, 0.50)',space:'UV: x to the right, y down',role:'Every distance on this card is measured from here: d for a pixel, d_read for a point of the white line.'};
function c9Dim(p1,p2,off,label,color){                          // a ruler along a ray, off px to one side
  const dx=p2[0]-p1[0], dy=p2[1]-p1[1], L=Math.hypot(dx,dy), nx=-dy/L, ny=dx/L, t=7;
  const a=[p1[0]+nx*off,p1[1]+ny*off], b=[p2[0]+nx*off,p2[1]+ny*off];
  let s=stroke([a,b],color,3)+stroke([[a[0]-nx*t,a[1]-ny*t],[a[0]+nx*t,a[1]+ny*t]],color,2.4)+stroke([[b[0]-nx*t,b[1]-ny*t],[b[0]+nx*t,b[1]+ny*t]],color,2.4);
  const sg=off<0?-1:1; return s+(label?lab((a[0]+b[0])/2+nx*sg*22,(a[1]+b[1])/2+ny*sg*22,label,color,'middle'):'');
}
function c9Guides(pts,dir){                                     // dashed ticks across a ray at the given points: they show where the rulers start and end
  const nx=-dir[1], ny=dir[0]; return pts.map(p=>`<path d="M${r2(p[0]-nx*36)},${r2(p[1]-ny*36)}L${r2(p[0]+nx*36)},${r2(p[1]+ny*36)}" stroke="#111827" stroke-width="1.8" stroke-dasharray="5 4" opacity=".8"/>`).join(''); }
function c9RulerH(x1,x2,y,color,label,above=true){              // a ruler on a white strip: the same light color and dark edge as in the pictures
  return stroke([[x1,y],[x2,y]],color,4)+stroke([[x1,y-8],[x1,y+8]],color,2.5)+stroke([[x2,y-8],[x2,y+8]],color,2.5)+gt((x1+x2)/2,above?y-14:y+26,label,'middle','gtb','#1f2937'); }
function c9Strip(){                                             // the three rulers of card 9, step 4, on one straight scale (560 x 210)
  const XS=d=>40+d*1300; let s=''; const TT={};
  s+=gt(12,22,'The three rulers on one straight scale (distance from C)','start','gtb');
  for(const v of [0.20,0.25]) s+=`<line x1="${XS(v)}" y1="40" x2="${XS(v)}" y2="160" stroke="#94a3b8" stroke-dasharray="4 4"/>`;
  s+=c9RulerH(XS(0),XS(0.20),68,'#93c5fd','blue ruler: d_read = 0.20 (C to R)')+c9RulerH(XS(0.20),XS(0.25),68,'#5eead4','teal ruler: push = 0.05',false);
  s+=c9RulerH(XS(0),XS(0.25),128,'#fde68a','yellow ruler: d = 0.25 (C to S)');
  s+=`<line x1="${XS(0)}" y1="160" x2="${XS(0.30)}" y2="160" stroke="#6b7280" stroke-width="1.5"/>`;
  for(const v of [0,0.05,0.10,0.15,0.20,0.25,0.30]) s+=`<line x1="${XS(v)}" y1="160" x2="${XS(v)}" y2="166" stroke="#6b7280"/>`+gt(XS(v),184,v===0?'0':v.toFixed(2),'middle');
  s+=ptSVG('sC',XS(0),160,C_C,'C',5.5)+ptSVG('sR',XS(0.20),160,'#ffffff','R',5.5)+ptSVG('sS',XS(0.25),160,C_N,'S',5.5);
  s+=gt(XS(0)+2,203,'C','middle','gtb')+gt(XS(0.20),203,'R','middle','gtb')+gt(XS(0.25),203,'S','middle','gtb');
  s+=gt(404,112,'blue + teal = yellow','start','gtb','#1f2937')+gt(404,132,'0.20 + 0.05 = 0.25','start','gtb','#1f2937');
  TT.sC={...C9TC,coords:'distance 0',space:'distance from C along the violet ray'};
  TT.sR={title:'R on the scale',coords:'distance 0.20',space:'distance from C along the violet ray',role:'d_read = 0.20: our choice (card 9, step 3).'};
  TT.sS={title:'S on the scale',coords:'distance 0.25',space:'distance from C along the violet ray',role:'d = 0.25 (card 9, step 6 finds it). The push of S is the teal part:',calc:'0.25 − 0.20 = 0.05'};
  return {s,TT};
}
(function(){
  const Q=N3, U=Q.SC, uu=n=>n/U;
  const svg=document.getElementById('c9pic'), svg2=document.getElementById('c9pic2'), dots=document.getElementById('c9dots');
  const RY=Q.K50-Q.sqrtV(Q.Ex(0.0175));                         // R.y = 0.50 − √0.0175 = 0.50 − 0.132 = 0.368
  const Rr=Q.sqrtSq(Q.Ex(0.15)*Q.Ex(0.15)+(RY-Q.K50)*(RY-Q.K50)); // r of R: √0.039924 = 0.20
  const Sd=Q.div(Rr+Q.Ex(0.175),Q.Ex(1.5));                     // d of S: (0.20 + 0.175) ÷ 1.5 = 0.25
  const ratio=Q.div(Sd,Rr);                                     // 0.25 ÷ 0.20 = 1.25
  const SX=Q.K50+Q.mul(Q.Ex(0.15),ratio), SY=Q.K50+Q.mul(RY-Q.K50,ratio);   // S = (0.6875, 0.335)
  const PYq=Q.K50-Q.sqrtV(Q.Ex(0.10)), PKq=Q.Ex(0.60)+Q.div(Q.Ex(0.0175),Q.Ex(0.15));  // P.y = 0.184, the peak x = 0.717
  const VG=view(0.40,0.12,0.44,0.44,560);
  const C9=__C9__;                                               // generated: caption, known, uses, table, result (one source with the lesson's box)
  const DOTS=[0.22,0.26,0.30,0.34,0.40,0.44,0.48].map(v=>c9CurvePoint(Q.E(v)));
  let k=0;
  C9.forEach((st,i)=>{ const b=document.createElement('button'); b.setAttribute('aria-label','Step '+(i+1)); b.addEventListener('click',()=>{ k=i; draw(); }); dots.appendChild(b); });
  const DX=Q.E(0.60)-Q.K50, cF=Q.F;
  const TC=C9TC;
  const TR={title:'R — a point of the white line (our choice)',coords:co('0.65',cF(RY)),space:UVW,role:'Chosen 0.20 from C, so d_read = 0.20. Its y: 0.50 − √0.0175 = 0.50 − 0.132 = 0.368 (step 3).'};
  const TS=()=>({title:'S — the output pixel that shows R',coords:co(cF(SX),cF(SY)),space:UVS,role:'On the circle edge: d = 0.25. Its push, 0.05, ends at R. Its whole chain, 3 decimals:',calc:Q.chainText('S',SX,SY,'linear').lines.join('\n')});
  function graph(kind){                                         // steps 1 and 2: falloff and push against d
    const GX=d=>80+(d-0.10)/0.30*440, GY=f=>460-f*360; let g=''; const TT={};
    const isFo=kind==='fo', top=isFo?1:0.10, val=d=>isFo?(0.35-d)/0.20:0.175-0.5*d, Yv=v=>GY(v/top);
    g+=`<rect x="${GX(0.15)}" y="${GY(1)-20}" width="${GX(0.35)-GX(0.15)}" height="${GY(0)-GY(1)+20}" fill="#f5f3ff"/>`;
    g+=`<line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.40)+10}" y2="${GY(0)}" stroke="#6b7280" stroke-width="1.5"/><line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.10)}" y2="${GY(1)-26}" stroke="#6b7280" stroke-width="1.5"/>`;
    g+=gt(GX(0.40)+14,GY(0)+5,'d','start','gtb')+gt(GX(0.10)-4,GY(1)-34,isFo?'falloff (linear)':'push (linear)','start','gtb');
    (isFo?[[1,'1'],[0.5,'0.5'],[0,'0']]:[[0.10,'0.10'],[0.05,'0.05'],[0,'0']]).forEach(([v,t])=>{ g+=gt(GX(0.10)-8,Yv(v)+5,t,'end'); });
    for(const d of [0.10,0.15,0.20,0.25,0.30,0.35,0.40]) g+=`<line x1="${GX(d)}" y1="${GY(0)}" x2="${GX(d)}" y2="${GY(0)+6}" stroke="#6b7280"/>`+gt(GX(d),GY(0)+24,d.toFixed(2),'middle');
    g+=gt(GX(0.15),GY(0)+44,'inner ring','middle','gt','#6b7280')+gt(GX(0.35),GY(0)+44,'outer ring','middle','gt','#6b7280')+gt(GX(0.25),GY(1)-6,'the band','middle','gtb','#6d28d9');
    const col=isFo?'#b45309':'#0f766e';
    g+=`<path d="M${GX(0.10)},${Yv(val(0.15))}L${GX(0.15)},${Yv(val(0.15))}" stroke="${col}" stroke-width="3" opacity=".45" fill="none"/><path d="M${GX(0.35)},${GY(0)}L${GX(0.40)},${GY(0)}" stroke="${col}" stroke-width="3" opacity=".45" fill="none"/>`;
    g+=`<path d="M${GX(0.15)},${Yv(val(0.15))}L${GX(0.35)},${Yv(val(0.35))}" stroke="${col}" stroke-width="4" fill="none"/>`;
    const pts=isFo?[[0.15,1],[0.25,0.5],[0.35,0]]:[[0.15,0.10],[0.25,0.05],[0.35,0]];
    pts.forEach(([d,v],i)=>{ g+=ptSVG('g'+i,GX(d),Yv(v),i===1?C_N:'#ffffff',`(${d}, ${v})`,6); TT['g'+i]={title:`(d, ${isFo?'falloff':'push'}) = (${d.toFixed(2)}, ${isFo?v:v.toFixed(2)})`,coords:`(${d.toFixed(2)}, ${isFo?v:v.toFixed(2)})`,space:`graph: d to the right, ${isFo?'falloff':'push'} up`,role:i===1?'The circle edge (d = 0.25): half of the full value.':i===0?'The inner ring: the full value.':'The outer ring: 0.'}; });
    g+=gt(GX(0.30),Yv(val(0.24))-18,isFo?'falloff = (0.35 − d) ÷ 0.20':'push = 0.175 − 0.5 × d','start','gtb',col);
    return {g,TT};
  }
  /* the ray from C, laid flat: pixels at d (top row) and their read points at r (bottom row); linear falloff */
  const PAIRS=[0.10,0.15,0.20,0.25,0.30,0.35,0.40].map(dv=>{ const dn=Q.E(dv), L=[`A pixel on the ray, d = ${cF(dn)} from C.`,`sd = d − 0.25 = ${cF(dn)} − 0.25 = ${cF(dn-Q.K25)}`];
    const fo=Q.falloffLines(L,dn-Q.K25,'linear'), push=Q.mul(Q.K10,fo); L.push(`push = 0.10 × ${cF(fo)} = ${cF(push)}`); L.push(`d_read = d − push = ${cF(dn)} − ${cF(push)} = ${cF(dn-push)}      ray rule (step 4)`);
    return {d:dn,push,r:dn-push,lines:L}; });
  function pairTip(p,where){ return {title:where==='pix'?`A pixel at d = ${cF(p.d)}`:where==='read'?`Its read point, d_read = ${cF(p.r)}`:`(d, d_read) = (${cF(p.d)}, ${cF(p.r)})`,coords:where==='graph'?co(cF(p.d),cF(p.r)):where==='pix'?`d = ${cF(p.d)}`:`d_read = ${cF(p.r)}`,space:where==='graph'?'graph: d to the right, d_read up':'distance from C, along one ray',role:'Linear falloff. One operation per line:',calc:p.lines.join('\n')}; }
  function rdGraph(){                                           // step 6: where a pixel reads (r) against its distance (d); read it backwards
    const GX=d=>80+(d-0.10)/0.30*440, GY=r=>480-r/0.40*400; let g=''; const TT={};
    g+=`<rect x="${GX(0.15)}" y="${GY(0.40)-10}" width="${GX(0.35)-GX(0.15)}" height="${GY(0)-GY(0.40)+10}" fill="#f5f3ff"/>`;
    g+=`<line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.40)+10}" y2="${GY(0)}" stroke="#6b7280" stroke-width="1.5"/><line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.10)}" y2="${GY(0.40)-16}" stroke="#6b7280" stroke-width="1.5"/>`;
    g+=gt(GX(0.40)+14,GY(0)+5,'d','start','gtb')+gt(GX(0.10)-4,GY(0.40)-24,'d_read: the distance of the read point','start','gtb')+gt(GX(0.25),GY(0.40)+24,'the band','middle','gtb','#6d28d9');
    g+=gt(GX(0.25),GY(0)+44,'d: the distance of the pixel','middle','gt','#374151');
    for(const r of [0,0.10,0.20,0.30,0.40]) g+=gt(GX(0.10)-8,GY(r)+5,r===0?'0':r.toFixed(2),'end');
    for(const d of [0.10,0.15,0.20,0.25,0.30,0.35,0.40]) g+=`<line x1="${GX(d)}" y1="${GY(0)}" x2="${GX(d)}" y2="${GY(0)+6}" stroke="#6b7280"/>`+gt(GX(d),GY(0)+24,d.toFixed(2),'middle');
    /* where the lower pale part would go if it went on straight */
    g+=`<path d="M${GX(0.15)},${GY(0.05)}L${GX(0.35)},${GY(0.25)}" stroke="#9ca3af" stroke-width="2.4" stroke-dasharray="7 6" fill="none"/>`+gt(GX(0.30)+8,GY(0.20)+28,'straight on','start','gt','#6b7280');
    g+=`<path d="M${GX(0.10)},${GY(0)}L${GX(0.15)},${GY(0.05)}" stroke="#4338ca" stroke-width="3.2" opacity=".42" fill="none"/><path d="M${GX(0.35)},${GY(0.35)}L${GX(0.40)},${GY(0.40)}" stroke="#4338ca" stroke-width="3.2" opacity=".42" fill="none"/>`;
    g+=`<path d="M${GX(0.15)},${GY(0.05)}L${GX(0.35)},${GY(0.35)}" stroke="#4338ca" stroke-width="4" fill="none"/>`;
    g+=gt(GX(0.30)+10,GY(0.275)+4,'d_read = 1.5 × d − 0.175','start','gtb','#4338ca');
    g+=gt(GX(0.10)+6,GY(0.20)+96,'d_read = d − 0.10','start','gtb','#6366f1')+gt(GX(0.10)+6,GY(0.20)+114,'(full push)','start','gt','#6366f1');
    g+=gt(GX(0.40)+2,GY(0.40)-10,'d_read = d (no push)','end','gtb','#6366f1');
    /* equal steps across, 0.05: the rise is 0.05 on the pale parts, 0.075 on the bold part */
    const stair=(d0,r0,rise)=>`<path d="M${GX(d0)},${GY(r0)}L${GX(d0+0.05)},${GY(r0)}L${GX(d0+0.05)},${GY(r0+rise)}" stroke="#059669" stroke-width="2.8" fill="none"/>`;
    g+=stair(0.10,0,0.05)+stair(0.15,0.05,0.075)+stair(0.35,0.35,0.05);
    g+=gt(GX(0.15)+6,GY(0.025)+5,'+0.05','start','gtb','#047857')+gt(GX(0.20)+6,GY(0.09)+5,'+0.075','start','gtb','#047857')+gt(GX(0.375),GY(0.35)+20,'+0.05','middle','gtb','#047857');
    for(const [bd,br] of [[0.15,0.05],[0.35,0.35]]) g+=`<circle cx="${GX(bd)}" cy="${GY(br)}" r="10" fill="none" stroke="#dc2626" stroke-width="2.6"/>`;
    g+=arrowSVG(GX(0.10),GY(0.20),GX(0.25)-7,GY(0.20),SKY,3,11)+arrowSVG(GX(0.25),GY(0.20)+7,GX(0.25),GY(0)-2,SKY,3,11);
    g+=gt(GX(0.10)+8,GY(0.20)-12,'start: d_read = 0.20 (R)','start','gtb','#0369a1')+gt(GX(0.25)+10,GY(0.12),'answer: d = 0.25 (S)','start','gtb','#0369a1');
    PAIRS.forEach((p,i)=>{ if(p.d===Q.E(0.25)) return; g+=ptSVG('pg'+i,GX(uu(p.d)),GY(uu(p.r)),'#ffffff',`(d, d_read) = (${cF(p.d)}, ${cF(p.r)})`,5); TT['pg'+i]=pairTip(p,'graph'); });
    g+=ptSVG('rs',GX(0.25),GY(0.20),C_N,'S: d = 0.25, d_read = 0.20',6.5);
    TT.rs={title:'(d, d_read) = (0.25, 0.20): S and R',coords:'(0.25, 0.20)',space:'graph: d to the right, d_read up',role:'The pixel S at d = 0.25 reads at d_read = 0.20: that is R.',calc:PAIRS[3].lines.join('\n')};
    return {g,TT};
  }
  function flatRay(){                                           // c9pic2 in step 6
    const XS=d=>40+d*1200; let s=''; const TT={};
    s+=gt(12,22,'The same ray from C, laid flat (top: pixels, bottom: read points)','start','gtb');
    s+=`<rect x="${XS(0.15)}" y="40" width="${XS(0.35)-XS(0.15)}" height="130" fill="#f5f3ff"/>`;
    s+=`<line x1="${XS(0)}" y1="182" x2="${XS(0.42)}" y2="182" stroke="#6b7280" stroke-width="1.5"/>`;
    for(const v of [0,0.10,0.20,0.30,0.40]) s+=`<line x1="${XS(v)}" y1="182" x2="${XS(v)}" y2="188" stroke="#6b7280"/>`+gt(XS(v),204,v===0?'0 (C)':v.toFixed(2),'middle');
    s+=`<line x1="${XS(0)}" y1="62" x2="${XS(0.42)}" y2="62" stroke="#cbd5e1"/><line x1="${XS(0)}" y1="138" x2="${XS(0.42)}" y2="138" stroke="#cbd5e1"/>`;
    s+=gt(XS(0.40)+12,66,'d','start','gtb')+gt(548,174,'d_read','end','gtb');
    PAIRS.forEach((p,i)=>{ const x1=XS(uu(p.d)), x2=XS(uu(p.r));
      s+=`<line x1="${x1}" y1="66" x2="${x2}" y2="132" stroke="#0284c7" stroke-width="2.2"/>`+`<path d="M${x2},134 l${x1>x2?5:-5},-9 l${x1>x2?-9:9},0z" fill="#0284c7"/>`;
      const isS=p.d===Q.E(0.25);
      s+=ptSVG('fp'+i,x1,62,isS?C_N:'#ffffff',`pixel at d = ${cF(p.d)}`,5)+ptSVG('fr'+i,x2,138,isS?'#ffffff':'#e5e7eb',`read point at d_read = ${cF(p.r)}`,4.5);
      s+=gt(x1,50,cF(p.d),'middle','gt')+gt(x2,156,cF(p.r),'middle','gt');
      TT['fp'+i]=pairTip(p,'pix'); TT['fr'+i]=pairTip(p,'read'); });
    s+=gt(XS(0.245)-4,94,'S → R','end','gtb','#a16207');
    return {s,TT};
  }
  function inset(TT){                                           // step 5: the push formula, with S on it
    const x0=16,y0=34,w=236,h=144, GX=d=>x0+40+(d-0.10)/0.30*(w-60), GY=p=>y0+h-32-(p/0.10)*(h-70);
    let s=`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="8" fill="#ffffff" fill-opacity=".97" stroke="#94a3b8" stroke-width="1.5"/>`;
    s+=`<rect x="${GX(0.15)}" y="${GY(0.10)-4}" width="${GX(0.35)-GX(0.15)}" height="${GY(0)-GY(0.10)+4}" fill="#f5f3ff"/>`;
    s+=`<line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.40)}" y2="${GY(0)}" stroke="#6b7280"/><line x1="${GX(0.10)}" y1="${GY(0)}" x2="${GX(0.10)}" y2="${GY(0.10)-6}" stroke="#6b7280"/>`;
    s+=`<path d="M${GX(0.10)},${GY(0.10)}L${GX(0.15)},${GY(0.10)}" stroke="#0f766e" stroke-width="2.5" opacity=".45" fill="none"/><path d="M${GX(0.15)},${GY(0.10)}L${GX(0.35)},${GY(0)}" stroke="#0f766e" stroke-width="3.5" fill="none"/><path d="M${GX(0.35)},${GY(0)}L${GX(0.40)},${GY(0)}" stroke="#0f766e" stroke-width="2.5" opacity=".45" fill="none"/>`;
    s+=`<line x1="${GX(0.25)}" y1="${GY(0)}" x2="${GX(0.25)}" y2="${GY(0.05)}" stroke="#94a3b8" stroke-dasharray="3 3"/><line x1="${GX(0.10)}" y1="${GY(0.05)}" x2="${GX(0.25)}" y2="${GY(0.05)}" stroke="#94a3b8" stroke-dasharray="3 3"/>`;
    s+=gt(x0+10,y0+20,'push = 0.175 − 0.5 × d','start','gtb','#0f766e');
    s+=gt(GX(0.10)-6,GY(0.10)+5,'0.10','end')+gt(GX(0.10)-6,GY(0.05)+5,'0.05','end')+gt(GX(0.25),GY(0)+18,'d = 0.25','middle')+gt(GX(0.40)-2,GY(0)+18,'d','end','gtb');
    s+=ptSVG('inS',GX(0.25),GY(0.05),C_N,'S on the push graph',5.5);
    TT.inS={title:'S on the push graph: (d, push) = (0.25, 0.05)',coords:'(0.25, 0.05)',space:'graph: d to the right, push up',role:'The push formula at d = 0.25:',calc:'0.5 × 0.25 = 0.125\n0.175 − 0.125 = 0.05'};
    return s;
  }
  function geo(kind){                                           // steps 3, 4, 5, 7, 8, 9: the output around C, R and S
    const X=VG.X, Y=VG.Y, TT={}; let g=imgSVG(VG,raster('out','linear',VG),0.5);
    g+=ringSVG(X(0.5),Y(0.5),VG.S(0.25),WHITE,1.6)+stroke([[X(0.65),0],[X(0.65),VG.H]],WHITE,2)+curveSVG('linear',VG,3);
    g+=lab(X(0.648),14,'white line x = 0.65',WHITE,'end')+lab(X(0.43),Y(0.285),'circle edge',WHITE);
    const Rx=X(0.65), Ry=Y(uu(RY)), Sx=X(uu(SX)), Sy=Y(uu(SY)), Cx=X(0.5), Cy=Y(0.5), dir=[(Rx-Cx)/Math.hypot(Rx-Cx,Ry-Cy),(Ry-Cy)/Math.hypot(Rx-Cx,Ry-Cy)];
    if(kind==='tri'){ g+=stroke([[Cx,Cy],[Sx,Cy],[Sx,Sy]],'#fde68a',4.5)+stroke([[Cx,Cy],[Rx,Cy],[Rx,Ry]],'#7dd3fc',2.4);
      g+=lab((Cx+Rx)/2,Cy-14,'0.15','#7dd3fc','middle')+lab((Cx+Sx)/2+30,Cy+18,cF(Q.mul(Q.Ex(0.15),ratio)),'#fde68a','middle')+lab(Rx-10,(Cy+Ry)/2+34,cF(Q.K50-RY),'#7dd3fc','end')+lab(Sx+10,(Cy+Sy)/2+34,cF(-Q.mul(RY-Q.K50,ratio)),'#fde68a'); }
    if(kind!=='R'&&kind!=='cmp') g+=stroke([[Cx,Cy],[Cx+dir[0]*VG.S(0.30),Cy+dir[1]*VG.S(0.30)]],VIOLET,1.8);
    if(kind==='R'||kind==='tri'){ g+=stroke([[Cx,Cy],[Rx,Ry]],'#bae6fd',2.4)+lab((Cx+Rx)/2-8,(Cy+Ry)/2-6,'d_read = 0.20','#bae6fd','end'); }
    if(kind==='ray4'||kind==='push5'){ g+=c9Guides([[Cx,Cy],[Rx,Ry],[Sx,Sy]],dir);
      g+=c9Dim([Cx,Cy],[Rx,Ry],-24,'d_read = 0.20','#93c5fd')+c9Dim([Rx,Ry],[Sx,Sy],-24,'push = 0.05','#5eead4')+c9Dim([Cx,Cy],[Sx,Sy],24,'d = 0.25','#fde68a'); }
    if(kind!=='R'&&kind!=='many'&&kind!=='cmp'){ g+=arrowSVG(Sx,Sy,Rx,Ry,SKY,3,10); }
    if(kind!=='R'){ g+=lab(Sx+10,Sy-12,'S',C_N)+ptSVG('S',Sx,Sy,C_N,'S',6); TT.S=TS; }
    g+=ptSVG('R',Rx,Ry,WHITE,'R',6)+lab(Rx-10,Ry+14,'R',WHITE,'end'); TT.R=TR;
    g+=ptSVG('C',Cx,Cy,C_C,'C',5)+lab(Cx-10,Cy-12,'C',C_C,'end'); TT.C=TC;
    if(kind==='push5') g+=inset(TT);
    if(kind==='many'||kind==='cmp'){
      if(kind==='cmp'){                                          // the gray line through P and the peak (3 decimals), and the gaps
        g+=stroke([[X(0.65),Y(uu(PYq))],[X(uu(PKq)),Y(0.5)]],GRAYL,2.6)+lab(X(0.62),Y(0.25),'gray line','#e5e7eb','end');
        DOTS.forEach(pt=>{ const gr=c9GrayAt(pt.y), gap=pt.x-gr.g; if(gap>=Q.Ex(0.003)) g+=stroke([[X(uu(gr.g)),Y(uu(pt.y))],[X(uu(pt.x)),Y(uu(pt.y))]],RED,3.2); });
        const grS=c9GrayAt(SY); g+=stroke([[X(uu(grS.g)),Sy],[Sx,Sy]],RED,5)+lab(Sx+14,Sy+22,'gap at S: '+cF(SX-grS.g),'#fecaca');
        g+=ptSVG('P',X(0.65),Y(uu(PYq)),C_P,'P',6)+lab(X(0.65)-10,Y(uu(PYq)),'P',C_P,'end');
        g+=ptSVG('pk',X(uu(PKq)),Y(0.5),LIME,'the peak',6)+lab(X(uu(PKq))+10,Y(0.5)+18,'peak',LIME);
        TT.P={title:'P — the white line meets the outer ring',coords:co('0.65',cF(PYq)),space:UVS,role:'d_read = 0.35: no push, so P shows itself. One end of the gray line.',calc:['x: 0.0175 ÷ 0.35 = 0.05','   0.60 + 0.05 = 0.65','y: 0.35 × 0.35 = 0.1225','   0.15 × 0.15 = 0.0225','   0.1225 − 0.0225 = 0.10','   √0.10 = 0.316','   0.50 − 0.316 = 0.184'].join('\n')};
        TT.pk={title:'The peak — the pixel that shows (0.65, 0.50)',coords:co(cF(PKq),'0.50'),space:UVS,role:'d_read = 0.15 (the point (0.65, 0.50) is 0.15 from C). The other end of the gray line.',calc:['0.0175 ÷ 0.15 = 0.117','0.60 + 0.117 = 0.717'].join('\n')};
      }
      DOTS.forEach((pt,i)=>{ const wx=X(0.65), wy=Y(uu(pt.RYn)), mx=X(uu(pt.x)), my=Y(uu(pt.y));
        g+=stroke([[mx,my],[wx,wy]],SKY,1.4,false)+ptSVG('w'+i,wx,wy,'#ffffff','a point of the white line',3.8)+ptSVG('m'+i,mx,my,C_N,'the pixel that shows it',4.2);
        TT['w'+i]={title:'A point of the white line',coords:co('0.65',cF(pt.RYn)),space:UVW,role:'Its distance to C is d_read:',calc:pt.parts.P0.concat(pt.parts.Pr).join('\n')};
        const gr=c9GrayAt(pt.y), gap=pt.x-gr.g;
        TT['m'+i]={title:'The output pixel that shows it',coords:co(cF(pt.x),cF(pt.y)),space:UVS,role:'On the light-green curve. From the white-line point, one operation per line:',
          calc:pt.lines.concat(kind==='cmp'?gr.lines.concat([`gap = ${cF(pt.x)} − ${cF(gr.g)} = ${cF(gap)}`+(Math.abs(gap)<Q.Ex(0.003)?'      (less than 0.003: too small to see here)':'')]):[]).join('\n')}; });
      g+=lab(VG.W-8,40,'yellow dots: x = 0.60 + 0.0175 ÷ d_read',C_N,'end');
    }
    return {g,TT};
  }
  function magS(){                                               // c9pic2 in step 9: the gap at S, enlarged 10 times
    const V=view(uu(SX)-0.04,uu(SY)-0.0085,0.056,0.021,560), X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','linear',V),0.45);
    s+=curveSVG('linear',V,4)+stroke([[X(0.65),Y(uu(PYq))],[X(uu(PKq)),Y(0.5)]],GRAYL,3);
    const grS=c9GrayAt(SY), gx=X(uu(grS.g)); s+=stroke([[gx,Y(uu(SY))],[X(uu(SX)),Y(uu(SY))]],RED,6);
    s+=ptSVG('G',gx,Y(uu(SY)),'#d1d5db','the gray line at the row of S',6)+ptSVG('S',X(uu(SX)),Y(uu(SY)),C_N,'S',7);
    s+=lab(10,20,'Magnifier at S, 10 times: the red gap is '+cF(SX-grS.g)+' wide',WHITE)+lab(gx-12,Y(uu(SY))-14,'gray line','#e5e7eb','end')+lab(X(uu(SX))+14,Y(uu(SY))-14,'S (curve)',C_N);
    TT.S=TS; TT.G={title:'The gray line at the row of S',coords:co(cF(grS.g),cF(SY)),space:UVS,role:'One end of the red gap.',calc:grS.lines.join('\n')};
    return {s,TT};
  }
  const LG={ white:'<li><i class="sl" style="background:#ffffff"></i><b>The white line</b> x = 0.65; <b>R</b> is on it.</li>', green:'<li><i class="sl" style="background:#a3e635"></i><b>The light-green curve</b> (linear). <b>S</b> is on it.</li>', green0:'<li><i class="sl" style="background:#a3e635"></i><b>The light-green curve</b> (linear): where the white line appears in the output.</li>',
    ray:'<li><i class="sl" style="background:#c4b5fd"></i><b>The violet ray</b> from C through R and S.</li>', arrow:'<li><i class="sa"></i><b>The push arrow</b> of S: from S to R, on the violet ray.</li>',
    dims:'<li><i class="sl" style="background:#93c5fd"></i><b>The blue ruler</b>: d_read, from C to R.</li><li><i class="sl" style="background:#5eead4"></i><b>The teal ruler</b>: the push, from R to S.</li><li><i class="sl" style="background:#fde68a"></i><b>The yellow ruler</b>: d, from C to S. The rulers lie beside the violet ray so that they do not cover it; the dashed black ticks cross the ray at C, R, and S, so you can see where each ruler starts and ends.</li><li><i class="sb" style="background:#ffffff"></i><b>The second picture</b> lays the three rulers on one straight scale: blue + teal = yellow.</li>' };
  const LEG={ fo:'<li><i class="sl" style="background:#b45309"></i><b>The falloff formula</b>: the straight line inside the band (bold); flat outside the band (pale).</li><li><i class="sd" style="background:#fde047"></i>The circle edge, d = 0.25.</li>',
    push:'<li><i class="sl" style="background:#0f766e"></i><b>The push formula</b>: the straight line inside the band (bold); flat outside the band (pale).</li><li><i class="sd" style="background:#fde047"></i>The circle edge, d = 0.25.</li>',
    R:LG.white+LG.green0+'<li><i class="sl" style="background:#bae6fd"></i><b>d_read</b>: the distance from C to R.</li>',
    ray4:LG.white+LG.green+LG.ray+LG.arrow+LG.dims, push5:LG.white+LG.green+LG.ray+LG.arrow+LG.dims+'<li><i class="sb" style="background:#ffffff"></i><b>The small graph</b>: the push formula of step 2, with S at d = 0.25, push 0.05.</li>',
    rd6:'<li><i class="sl" style="background:#4338ca"></i><b>The indigo line, bold part</b>: d_read = 1.5 × d − 0.175, inside the band. For each 0.05 across, it goes 0.075 up.</li><li><i class="sl" style="background:#a5b4fc"></i><b>The indigo line, pale parts</b>: outside the band. Left: d_read = d − 0.10 (the full push). Right: d_read = d (no push). For each 0.05 across, they go 0.05 up. So the line <b>bends</b> at both rings; the pale parts are not straight continuations of the bold part.</li><li><i class="sl" style="background:#9ca3af"></i><b>Dashed gray</b>: where the left pale part would go if it went on straight.</li><li><i class="sl" style="background:#059669"></i><b>Green steps</b>: equal steps of 0.05 across; the green number is the rise: +0.05 on a pale part, +0.075 on the bold part.</li><li><i class="sd" style="background:#ffffff;border-color:#dc2626"></i><b>Red rings</b>: the two bends, at the inner ring (d = 0.15) and at the outer ring (d = 0.35).</li><li><i class="sa"></i><b>Blue arrows</b>: start at d_read = 0.20 (R), go across to the line, then down to d = 0.25 (S).</li><li><i class="sb" style="background:#ffffff"></i><b>The second picture</b>: the same ray, laid flat. Each pixel (top) is joined to its read point (bottom); the violet shading is the band. Every white dot of the graph is one of these pairs.</li>',
    tri:LG.white+LG.green+LG.ray+LG.arrow+'<li><i class="sl" style="background:#7dd3fc"></i><b>The small triangle</b>: from C to R. <i class="sl" style="background:#fde68a;position:static;display:inline-block;margin:0 3px -1px 3px"></i> <b>The big triangle</b>: from C to S, 1.25 times as big.</li>',
    many:LG.white+LG.green+'<li><i class="sd" style="background:#fde047"></i><b>Yellow dots</b>: pixels made by the curve formula from the white dots on the white line. Thin blue lines: their push arrows.</li>',
    cmp:LG.white+LG.green+'<li><i class="sl" style="background:#9ca3af"></i><b>The gray line</b>: the straight line from P to the peak, built in this step.</li><li><i class="sd" style="background:#f472b6"></i><b>P</b> and <i class="sd" style="background:#a3e635;position:static;display:inline-block;margin:0 2px -2px 2px"></i> <b>the peak</b>: the two ends of the gray line.</li><li><i class="sl" style="background:#ef4444"></i><b>Red segments</b>: the gap between the curve and the gray line, on the row of a yellow dot (thick: at S). Near P the gap is less than 0.001 and cannot be seen; the curve and the gray line even cross near the row y = 0.25 (card 15).</li><li><i class="sb" style="background:#ffffff"></i><b>The second picture</b>: the gap at S, enlarged 10 times.</li>' };
  function panel(){                                             // all formulas collected before this step; the ones that this step uses are marked
    const used=new Set(C9[k].uses), before=C9F.filter(f=>f.s===0&&f.k!=='lerp'), made=C9F.filter(f=>f.s>0&&f.s<=k);
    const earlier=before.concat(k>=8?C9F.filter(f=>f.k==='lerp'):[]), mine=made.filter(f=>f.k!=='lerp');
    let h='<span class="fp-t">Formulas so far</span><span class="fp-g">before this card:</span>'+earlier.map(f=>c9chip(f,'fchip'+(used.has(f.k)?' used':''))).join('');
    if(mine.length) h+='<span class="fp-g">made by the steps of this card:</span>'+mine.map(f=>c9chip(f,'fchip'+(used.has(f.k)?' used':''))).join('');
    return h+'<span class="fp-g" style="font-weight:600">Marked: used in this step.</span>';
  }
  function draw(){
    closeTip();
    const st=C9[k], out=(st.kind==='fo'||st.kind==='push')?graph(st.kind):st.kind==='rd6'?rdGraph():geo(st.kind);
    svg.innerHTML=out.g; bindPts2(svg,out.TT);
    const sec=st.kind==='ray4'||st.kind==='push5'?c9Strip():st.kind==='rd6'?(()=>{const f=flatRay(); return {s:f.s,TT:f.TT};})():st.kind==='cmp'?magS():null;
    svg2.style.display=sec?'block':'none'; svg2.innerHTML=sec?sec.s:''; if(sec) bindPts2(svg2,sec.TT);
    document.getElementById('c9forms').innerHTML=panel();
    document.getElementById('c9cap').innerHTML=st.cap;
    document.getElementById('c9uses').innerHTML='<span class="uselabel">Uses in this step:</span> '+st.uses.map(u=>c9chip(C9F.find(f=>f.k===u))).join(' ');
    document.getElementById('c9known').innerHTML=st.known;
    document.getElementById('c9tab').innerHTML=st.table;
    document.getElementById('c9res').innerHTML=st.result;
    document.getElementById('c9leg').innerHTML=LEG[st.kind];
    [...dots.children].forEach((b,i)=>b.setAttribute('aria-current',String(i===k)));
    document.getElementById('c9count').textContent=`step ${k+1} of ${C9.length}`;
    document.getElementById('c9back').disabled=k===0; document.getElementById('c9next').disabled=k===C9.length-1;
  }
  document.getElementById('c9back').addEventListener('click',()=>{ if(k>0){ k--; draw(); } });
  document.getElementById('c9next').addEventListener('click',()=>{ if(k<C9.length-1){ k++; draw(); } });
  draw();
})();
