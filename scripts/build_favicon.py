"""Render favicon.ico (16/32/48) and apple-touch-icon.png (180) from the same
geometry as static/favicon.svg: orange chamfered X with a center bore,
transparent background. Run: python3 scripts/build_favicon.py"""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw

ORANGE = (245, 158, 11, 255)
TRANSPARENT = (0, 0, 0, 0)
SUPERSAMPLE = 8

# Geometry in 64x64 viewBox space, mirroring static/favicon.svg
CHAMFER = 4
BAR_HALF_LEN = 28
BAR_HALF_W = 6
CENTER = 32
BORE_RADIUS = 3.5

UNROTATED = [
    (-BAR_HALF_LEN, -BAR_HALF_W + CHAMFER),
    (-BAR_HALF_LEN + CHAMFER, -BAR_HALF_W),
    (BAR_HALF_LEN - CHAMFER, -BAR_HALF_W),
    (BAR_HALF_LEN, -BAR_HALF_W + CHAMFER),
    (BAR_HALF_LEN, BAR_HALF_W - CHAMFER),
    (BAR_HALF_LEN - CHAMFER, BAR_HALF_W),
    (-BAR_HALF_LEN + CHAMFER, BAR_HALF_W),
    (-BAR_HALF_LEN, BAR_HALF_W - CHAMFER),
]


def rotate_translate(angle_deg: float, scale: float):
    a = math.radians(angle_deg)
    cos, sin = math.cos(a), math.sin(a)
    cx = cy = CENTER * scale
    return [(cx + (x * cos - y * sin) * scale, cy + (x * sin + y * cos) * scale) for x, y in UNROTATED]


def render(size: int) -> Image.Image:
    s = size * SUPERSAMPLE
    scale = s / 64.0
    img = Image.new("RGBA", (s, s), TRANSPARENT)
    draw = ImageDraw.Draw(img)
    draw.polygon(rotate_translate(45, scale), fill=ORANGE)
    draw.polygon(rotate_translate(-45, scale), fill=ORANGE)
    cx = cy = CENTER * scale
    r = BORE_RADIUS * scale
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=TRANSPARENT)
    return img.resize((size, size), Image.LANCZOS)


def main() -> None:
    out_dir = Path(__file__).resolve().parent.parent / "static"
    out_dir.mkdir(exist_ok=True)

    apple = render(180)
    apple.save(out_dir / "apple-touch-icon.png", optimize=True)

    sizes = [(48, 48), (32, 32), (16, 16)]
    base = render(48)
    base.save(out_dir / "favicon.ico", sizes=sizes)

    print(f"wrote {out_dir/'apple-touch-icon.png'} and {out_dir/'favicon.ico'}")


if __name__ == "__main__":
    main()
