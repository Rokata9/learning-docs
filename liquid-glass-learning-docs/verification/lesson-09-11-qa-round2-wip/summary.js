/* ---------- the summary card: the shader line by line, one pixel, the push profile (2026-09-29, 3 decimals) ---------- */
const SHADER_LINES=[                                             // RefractionSampling.metal, refractSample, lines 35-46
  [35,'float2 fragCoord = position * scale;','the pixel’s place in real screen pixels'],
  [36,'float2 uv = fragCoord / resolution;','the pixel’s place in UV: 0 to 1 across the view'],
  [37,'float2 p = uv - float2(0.5, 0.5);','the arrow p from the center C to the pixel'],
  [38,'float d = length(p);','the pixel’s distance d from C (length formula, Lesson 9.1)'],
  [39,'float2 disp = float2(0.0, 0.0);','no move yet'],
  [40,'if (d > 0.0001) {','skip the exact center: there p ÷ d has no direction'],
  [41,'float sd = d - radius;','how far the pixel is past the circle edge (Lesson 9.2)'],
  [42,'float falloff = 1.0 - smoothstep(-band, band, sd);','the part of the full push: 1 inside the band, 0 outside it, smooth across it (Lesson 9.3)'],
  [43,'disp = (p / d) * dispLen * falloff;','the move: the direction away from C (p ÷ d, length 1) times the push length'],
  [45,'float2 readUv = uv - disp;','the read point: the pixel’s place minus disp, so closer to C'],
  [46,'return checkerBackground(readUv * resolution, resolution);','the wallpaper’s color at the read point: the pixel shows it']];
(function(){
  const Q=N3, F=Q.F, W={x:Q.E(0.65),y:Q.E(0.30)}, cW=Q.chainText('W',W.x,W.y,'smooth'), v=cW.v;
  const nums=[[''],['uv = (0.65, 0.30)'],['p.x = 0.65 − 0.50 = 0.15','p.y = 0.30 − 0.50 = −0.20'],['0.15 × 0.15 = 0.0225','(−0.20) × (−0.20) = 0.04','0.0225 + 0.04 = 0.0625',`√0.0625 = ${F(v.d)}`],['disp = (0, 0)'],[`${F(v.d)} > 0.0001: yes`],
    [`sd = ${F(v.d)} − 0.25 = ${F(v.sd)}`],cW.lines.filter(l=>/sd − \(−0\.10\)|band − \(−band\) =|t = .*÷ 0\.20|t² = |t³ = |3t² = |2t³ = |smoothstep = [0-9−]|falloff = 1 − smoothstep/.test(l)).map(l=>l.trim()),
    cW.lines.filter(l=>/dir\.[xy] = |push = dispLen|disp\.[xy] = /.test(l)).map(l=>l.trim()),cW.lines.filter(l=>/readUv\.[xy] = /.test(l)).map(l=>l.trim()),
    [`(${F(v.rx)}, ${F(v.ry)}) lies in a navy cell of the 4 × 4 checker`,'so W shows navy']];
  document.getElementById('sumcode').innerHTML='<tr><th>Line</th><th>The code</th><th>What it does</th><th>For W = (0.65, 0.30), one operation per line</th></tr>'+
    SHADER_LINES.map((L,i)=>`<tr><td class="k">${L[0]}</td><td class="f">${esc(L[1])}</td><td>${L[2]}</td><td class="f">${esc(nums[i].join('\n'))}</td></tr>`).join('');
  setMath('sumW',cW.lines);
  /* the output picture */
  const V=view(0,0,1,1,480), X=V.X, Y=V.Y, TT={}; let s=imgSVG(V,raster('out','smooth',V));
  for(const [r,n,dy] of [[0.15,'inner ring',-8],[0.25,'circle edge',-8],[0.35,'outer ring',-8]]) s+=ringSVG(X(0.5),Y(0.5),V.S(r),WHITE,r===0.25?2.2:1.3)+lab(X(0.5),Y(0.5-r)+dy,n,WHITE,'middle');
  s+=stroke([[X(0.65),0],[X(0.65),V.H]],WHITE,1.2)+curveSVG('smooth',V,2.8)+lab(X(0.72),Y(0.86),'light-green curve',LIME)+lab(X(0.65)+8,Y(0.04),'white line x = 0.65',WHITE);
  const P=[['W',0.65,0.30,C_W,'W'],['Z',0.55,0.50,C_N,'Z'],['B',0.35,0.35,'#a78bfa','B'],['O',0.92,0.50,'#e5e7eb','O']];
  for(const [k,u,w,col,txt] of P){ const c=Q.chainText(k,Q.E(u),Q.E(w),'smooth'), rx=N3u(c.v.rx), ry=N3u(c.v.ry);
    if(c.v.push>0) s+=arrowSVG(X(u),Y(w),X(rx),Y(ry),SKY,2.6,10);
    s+=ptSVG(k+'r',X(rx),Y(ry),col,'the read point of '+k,5,true)+ptSVG(k,X(u),Y(w),col,k,6);
    s+=lab(X(u)+(k==='W'?10:0),Y(w)+(k==='W'?-12:-16),txt,col,k==='W'?'start':'middle');
    TT[k]={title:`${k} = (${F(Q.E(u))}, ${F(Q.E(w))}) — an output pixel`,coords:co(F(Q.E(u)),F(Q.E(w))),space:UVS,role:`Its read point: (${F(c.v.rx)}, ${F(c.v.ry)}). The whole chain (smoothstep):`,calc:c.lines.slice(1).join('\n')};
    TT[k+'r']={title:`The read point of ${k}`,coords:co(F(c.v.rx),F(c.v.ry)),space:UVW,role:k==='Z'?'Past C, on the other side: the push (0.10) is longer than Z’s distance to C (0.05).':k==='O'?'The same place as O: outside the outer ring the push is 0.':`${k} shows the wallpaper color of this point.`,calc:c.lines.slice(-3).join('\n')}; }
  s+=ptSVG('C',X(0.5),Y(0.5),C_C,'C',5)+lab(X(0.5)-8,Y(0.5)+22,'C',C_C,'end'); TT.C=C9TC;
  const el=document.getElementById('sumpic'); el.innerHTML=s; bindPts2(el,TT);
  /* the push profile */
  const GX=d=>60+d/0.45*470, GY=p=>250-p/0.10*200, T2={}; let g='';
  g+=`<rect x="${GX(0.15)}" y="${GY(0.10)-14}" width="${GX(0.35)-GX(0.15)}" height="${GY(0)-GY(0.10)+14}" fill="#f5f3ff"/>`+gt((GX(0.15)+GX(0.35))/2,GY(0.10)-20,'the band','middle','gtb','#6d28d9');
  g+=`<line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(0.45)+8}" y2="${GY(0)}" stroke="#6b7280" stroke-width="1.5"/><line x1="${GX(0)}" y1="${GY(0)}" x2="${GX(0)}" y2="${GY(0.10)-24}" stroke="#6b7280" stroke-width="1.5"/>`;
  g+=gt(GX(0.45)+12,GY(0)+5,'d','start','gtb')+gt(GX(0)+6,GY(0.10)-28,'push','start','gtb');
  for(const [p,t] of [[0.10,'0.10'],[0.05,'0.05'],[0,'0']]) g+=gt(GX(0)-8,GY(p)+5,t,'end');
  for(const [d,n] of [[0,'C'],[0.15,'inner ring'],[0.25,'circle edge'],[0.35,'outer ring']]){ g+=`<line x1="${GX(d)}" y1="${GY(0)}" x2="${GX(d)}" y2="${GY(0)+6}" stroke="#6b7280"/>`+gt(GX(d),GY(0)+22,d===0?'0':d.toFixed(2),'middle')+gt(GX(d),GY(0)+40,n,'middle','gt','#6b7280'); }
  for(const m of ['hard','linear','smooth']){ const on=m==='smooth'; let dd=''; if(m==='hard'){ g+=`<path d="M${GX(0.0001)},${GY(0.10)}L${GX(0.25)},${GY(0.10)}M${GX(0.25)},${GY(0)}L${GX(0.45)},${GY(0)}" stroke="${RULE_COL.hard}" stroke-width="1.8" opacity=".45" fill="none"/>`; continue; }
    for(let k=0;k<=300;k++){ const d=0.0001+k*(0.45-0.0001)/300; dd+=(k?'L':'M')+r2(GX(d))+','+r2(GY(LEN*foVal(m,d-RAD))); }
    g+=`<path d="${dd}" stroke="${RULE_COL[m]}" stroke-width="${on?3.6:1.8}" opacity="${on?1:0.45}" fill="none"/>`; }
  g+=gt(GX(0.41),GY(0.075),'bold: smoothstep','middle','gtb',RULE_COL.smooth)+gt(GX(0.30)+10,GY(0.035),'pale: linear','start','gt',RULE_COL.linear)+gt(GX(0.25)+8,GY(0.10)+5,'pale: hard if (0 after d = 0.25)','start','gt',RULE_COL.hard);
  for(const [k,dv] of [['a',0.15],['b',0.25],['c',0.35]]){ const c=rdChain(Q.E(dv),'smooth'); g+=ptSVG(k,GX(dv),GY(N3u(c.push)),k==='b'?C_N:'#ffffff',`(d, push) = (${F(Q.E(dv))}, ${F(c.push)})`,5.5);
    T2[k]={title:`(d, push) = (${F(Q.E(dv))}, ${F(c.push)})`,coords:co(F(Q.E(dv)),F(c.push)),space:'graph: d to the right, push up',role:'Smoothstep, one operation per line:',calc:c.lines.slice(0,-1).join('\n')}; }
  const el2=document.getElementById('sumprof'); el2.innerHTML=g; bindPts2(el2,T2);
})();

/* ---------- card 25: the shader's direction and card 10's direction ---------- */
(function(){
  document.getElementById('c25code').innerHTML='<tr><th>Line</th><th>The code</th><th>What it does, for every pixel</th></tr>'+SHADER_LINES.map(L=>`<tr><td class="k">${L[0]}</td><td class="f">${esc(L[1])}</td><td>${L[2]}</td></tr>`).join('');
  const G='#059669', O='#d97706', TT={}; let g='';
  g+=gt(20,28,'The shader: forward, for every pixel, nothing to solve','start','gtb','#065f46');
  const top=[['uv','pixel uv','lines 35–36'],['pd','p and d','lines 37–38'],['sd','sd','line 41'],['fo','falloff','line 42'],['disp','disp','line 43'],['ru','readUv','line 45'],['col','the color','line 46']];
  top.forEach(([k,t,l],i)=>{ const x=20+i*106; g+=boxSVG(k,x,44,80,76,t,l.startsWith('lines')?['lines',l.slice(6)]:[l],G,'#ecfdf5'); if(i) g+=flowArrow(x-24,82,x-2,82,G,2.4);   // 26 px gaps: the arrows were 8 px blobs
    const L=SHADER_LINES.filter(s=>l.includes(String(s[0]))||(l.includes('–')&&s[0]>=+l.match(/(\d+)–/)[1]&&s[0]<=+l.match(/–(\d+)/)[1]));
    TT[k]={title:`${t} — ${l}`,coords:l,space:'RefractionSampling.metal',role:'Runs once for every pixel, in this order.',calc:L.map(s=>s[1]+'   // '+s[2]).join('\n')}; });
  g+=gt(20,178,'Card 10: backward, a search, only to check the picture','start','gtb','#92400e');
  const bot=[['row','a row: y = 0.40','our choice',20],['try','try a pixel x','Step B',196],['run','run the chain','the top row',372],['ask','readUv.x = 0.65?','the condition',548]];
  bot.forEach(([k,t,l,x])=>{ g+=boxSVG(k,x,196,150,76,t,[l],O,'#fff7ed'); });
  g+=flowArrow(172,234,194,234,O)+flowArrow(348,234,370,234,O)+flowArrow(524,234,546,234,O);
  g+=`<path d="M623,274 C623,330 271,330 271,276" fill="none" stroke="${O}" stroke-width="2.4" stroke-dasharray="6 5"/>`+gt(447,346,'no: try the next x (one more decimal digit)','middle','gt','#92400e');
  g+=flowArrow(700,234,736,234,O)+gt(756,262,'yes: K','end','gtb','#92400e');   // clear of the last box
  g+=`<path d="M447,196 C447,150 378,140 378,122" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="4 4"/>`+gt(470,150,'uses the same chain as the top row','start','gt','#475569');
  g+=gt(20,372,'The shader needs only the top row. The bottom row is how this page checks','start','gt','#374151')+gt(20,392,'a claim about the picture: “the pixel (0.705, 0.40) shows the white line”.','start','gt','#374151');
  TT.row={title:'A row that we want: y = 0.40',coords:'y = 0.40',space:UVS,role:'The lesson compares the curve with the gray line on this row (card 10).'};
  TT.try={title:'Try a pixel x of the row',coords:'x = 0.65, 0.84, 0.7, 0.8, 0.70, 0.71, 0.701 …',space:UVS,role:'Card 10, Step B: one more decimal digit per round.'};
  TT.run={title:'Run the shader’s chain for that pixel',coords:'readUv = uv − disp',space:'the same lines as the top row',role:'The search uses the shader; the shader does not use the search.'};
  TT.ask={title:'The condition: readUv.x = 0.65',coords:'readUv.x = 0.65',space:UVW,role:'The read point’s x must be 0.65: the pixel shows the white line (card 18).'};
  const el=document.getElementById('c25flow'); el.innerHTML=g; bindPts2(el,TT);
})();
