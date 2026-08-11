"""Generate a complete Village360 logo mark (SVG + PNG).

ChatGPT mockup rasters clip the left blue head against the page edge,
so raster re-crops cannot recover a full circle. This rebuilds the
six-person ring with full heads and padding.
"""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(r"C:\Users\shbol\joinvillage360")
OUT_PNG = ROOT / "public" / "logo-mark.png"
OUT_SVG = ROOT / "public" / "logo-mark.svg"

# Colors sampled / matched from mockup mark
PEOPLE = [
    # (angle_deg from +x, y-down SVG sense: 0=right, 90=down), color
    (-120, "#F0C020"),  # yellow ~11 o'clock
    (-60, "#D02820"),  # red ~1 o'clock
    (0, "#5850A0"),  # purple ~3 o'clock
    (60, "#ED9700"),  # orange ~5 o'clock
    (120, "#488848"),  # green ~7 o'clock
    (180, "#3858B0"),  # blue ~9 o'clock — must be fully visible
]


def deg(a: float) -> float:
    return math.radians(a)


def pt(cx: float, cy: float, r: float, ang_deg: float) -> tuple[float, float]:
    a = deg(ang_deg)
    return cx + r * math.cos(a), cy + r * math.sin(a)


def svg_arc(
    cx: float,
    cy: float,
    r: float,
    a0: float,
    a1: float,
) -> str:
    """SVG path for arc from a0→a1 (degrees), y-down, sweep clockwise-ish via flags."""
    x0, y0 = pt(cx, cy, r, a0)
    x1, y1 = pt(cx, cy, r, a1)
    # large-arc=0, sweep=1 (positive angle direction in SVG = clockwise when y-down... )
    # With y-down, increasing angle is clockwise. sweep-flag=1 goes with increasing angle.
    extent = (a1 - a0) % 360
    large = 1 if extent > 180 else 0
    return f"M {x0:.3f} {y0:.3f} A {r:.3f} {r:.3f} 0 {large} 1 {x1:.3f} {y1:.3f}"


def build_svg(size: float = 64, pad: float = 6) -> str:
    cx = cy = size / 2
    # Keep clear padding past outermost head; extra viewBox pad beyond that
    r_body = size * 0.23
    r_head = size * 0.33
    head_r = size * 0.058
    stroke = size * 0.118
    half_span = 28  # degrees each side of person angle

    vb0 = -pad
    vb_size = size + pad * 2
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb0:g} {vb0:g} {vb_size:g} {vb_size:g}" '
        f'fill="none" aria-hidden="true" overflow="visible">',
    ]
    for ang, color in PEOPLE:
        body = svg_arc(cx, cy, r_body, ang - half_span, ang + half_span)
        hx, hy = pt(cx, cy, r_head, ang)
        parts.append(
            f'  <path d="{body}" stroke="{color}" stroke-width="{stroke:.3f}" '
            f'stroke-linecap="round"/>'
        )
        parts.append(
            f'  <circle cx="{hx:.3f}" cy="{hy:.3f}" r="{head_r:.3f}" fill="{color}"/>'
        )
    parts.append("</svg>")
    return "\n".join(parts) + "\n"


def build_png(px: int = 256) -> Image.Image:
    # Render at 4x then downscale for smooth edges
    scale = 4
    pad_ratio = 6 / 64  # match SVG viewBox pad
    S = px * scale
    pad = int(S * pad_ratio)
    canvas_s = S + pad * 2
    im = Image.new("RGBA", (canvas_s, canvas_s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    cx = cy = pad + S / 2
    size = float(S)
    r_body = size * 0.23
    r_head = size * 0.33
    head_r = size * 0.058
    stroke = size * 0.118
    half_span = 28

    for ang, color in PEOPLE:
        # Draw body as thick arc via many short segments (PIL has no arc stroke width easily
        # for arbitrary thick arcs — use chord of disks along the arc)
        steps = 48
        a0 = ang - half_span
        a1 = ang + half_span
        points = []
        for i in range(steps + 1):
            t = a0 + (a1 - a0) * (i / steps)
            points.append(pt(cx, cy, r_body, t))
        # Paint round caps + joints via circles along the polyline
        rad = stroke / 2
        for x, y in points:
            draw.ellipse(
                [x - rad, y - rad, x + rad, y + rad],
                fill=color,
            )
        # Head
        hx, hy = pt(cx, cy, r_head, ang)
        draw.ellipse(
            [hx - head_r, hy - head_r, hx + head_r, hy + head_r],
            fill=color,
        )

    return im.resize((px, px), Image.Resampling.LANCZOS)


def main() -> None:
    svg = build_svg(64)
    OUT_SVG.write_text(svg, encoding="utf-8")
    print("wrote", OUT_SVG)

    png = build_png(256)
    png.save(OUT_PNG, optimize=True)
    print("wrote", OUT_PNG)

    # Preview on ivory for visual QA
    prev = Image.new("RGBA", (320, 320), (247, 243, 235, 255))
    mark = png.resize((200, 200), Image.Resampling.LANCZOS)
    prev.paste(mark, (60, 60), mark)
    prev.convert("RGB").save(ROOT / "tmp_logo_preview.png")
    print("wrote preview")

    # Assert leftmost opaque column is not a flat crop of blue:
    # there must be transparent padding AND a full blue head (circular extent)
    px = png.load()
    leftmost = None
    for x in range(png.width):
        for y in range(png.height):
            if px[x, y][3] > 40:
                leftmost = x
                break
        if leftmost is not None:
            break
    print("left padding px:", leftmost)
    if leftmost is None or leftmost < 20:
        raise SystemExit(f"Insufficient left padding: {leftmost}")

    # Blue head should exist as a roughly round blob near left
    blues = [
        (x, y)
        for y in range(png.height)
        for x in range(0, png.width // 3)
        if px[x, y][3] > 180
        and px[x, y][2] > px[x, y][0] + 20
        and px[x, y][2] > 100
    ]
    xs = [p[0] for p in blues]
    ys = [p[1] for p in blues]
    print(
        "blue extent",
        min(xs),
        min(ys),
        max(xs),
        max(ys),
        "w",
        max(xs) - min(xs),
        "h",
        max(ys) - min(ys),
    )
    # Head alone is near leftmost; width of blue region includes body —
    # ensure leftmost blue is not flush (padding already checked)
    if min(xs) < 5:
        raise SystemExit("Blue still flush to left edge")


if __name__ == "__main__":
    main()
