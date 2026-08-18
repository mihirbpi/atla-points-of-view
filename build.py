#!/usr/bin/env python3
"""Inline styles.css, app.js and every data file into one standalone HTML."""
import re, pathlib, sys

SRC = pathlib.Path(__file__).parent / "src"
OUT = pathlib.Path(__file__).parent / "dist" / "avatar-points-of-view.html"

html = (SRC / "index.html").read_text(encoding="utf-8")

def read(rel):
    return (SRC / rel).read_text(encoding="utf-8")

html = re.sub(
    r'<link rel="stylesheet" href="([^"]+)">',
    lambda m: "<style>\n" + read(m.group(1)) + "\n</style>",
    html,
)
html = re.sub(
    r'<script src="([^"]+)"></script>',
    lambda m: "<script>\n" + read(m.group(1)) + "\n</script>",
    html,
)

if re.search(r'<script[^>]+\bsrc=', html) or re.search(r'<link[^>]+stylesheet', html):
    sys.exit("build: something was not inlined")

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(html, encoding="utf-8")
print(f"built {OUT}  ({len(html):,} bytes)")

ROOT = pathlib.Path(__file__).parent / "index.html"
ROOT.write_text(html, encoding="utf-8")
print(f"published {ROOT}")
