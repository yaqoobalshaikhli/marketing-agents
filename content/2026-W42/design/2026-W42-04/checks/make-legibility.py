# Legibility checks for 2026-W42-04 (not for sending). Run from this folder after rendering whatsapp-image.png:
#   python3 -I make-legibility.py
# Writes:
#   greyscale.png    the image at full size in greyscale (is «رسالة؟» still the strongest word without colour?)
#   small-sizes.png  as received: the image at chat-bubble size (261 px ≈ 261 dp on a 360 dp phone) after JPEG q60,
#                    the same in greyscale, a "squint" blur of it (which masses lead), and a 100 px notification thumb.
from io import BytesIO
from PIL import Image, ImageDraw, ImageFilter

src = Image.open('../whatsapp-image.png').convert('RGB')
src.convert('L').save('greyscale.png')

def jpeg(im, q=60):
    b = BytesIO(); im.save(b, 'JPEG', quality=q); b.seek(0); return Image.open(b).convert('RGB')

bubble = jpeg(src).resize((261, 261), Image.LANCZOS)
panels = [
    ('bubble size, JPEG q60', bubble),
    ('bubble size, greyscale', bubble.convert('L').convert('RGB')),
    ('squint (blur 4 px)', bubble.filter(ImageFilter.GaussianBlur(4))),
    ('notification, 100 px', jpeg(src).resize((100, 100), Image.LANCZOS)),
]
pad, top = 24, 40
sheet = Image.new('RGB', (pad + sum(p.width + pad for _, p in panels), top + 261 + pad), 'white')
d = ImageDraw.Draw(sheet)
x = pad
for label, p in panels:
    d.text((x, 12), label, fill=(34, 34, 34))
    sheet.paste(p, (x, top))
    x += p.width + pad
sheet.save('small-sizes.png')
print('wrote greyscale.png, small-sizes.png')
