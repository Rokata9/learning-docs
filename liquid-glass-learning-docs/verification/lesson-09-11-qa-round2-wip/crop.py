# crop.py in.png out.png x0 y0 x1 y1 [scale]
import sys
from PIL import Image
a=sys.argv; im=Image.open(a[1]); box=tuple(int(v) for v in a[3:7]); c=im.crop(box)
if len(a)>7: s=float(a[7]); c=c.resize((int(c.width*s),int(c.height*s)),Image.LANCZOS)
c.save(a[2]); print(c.size)
