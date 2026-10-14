"""Render original portfolio PDFs for a single, browser-native scrolling gallery.
Run with Python and PyMuPDF installed: python scripts/render_portfolios.py
"""
import json
from pathlib import Path
import pymupdf

root = Path(__file__).resolve().parents[1]
manifest = {}
for source in sorted((root / 'public/projects').glob('*/*.pdf')):
    pages = []
    with pymupdf.open(source) as document:
        for index, page in enumerate(document):
            target = source.parent / f'page-{index + 1:02}.jpg'
            pixmap = page.get_pixmap(matrix=pymupdf.Matrix(2400 / page.rect.width, 2400 / page.rect.width), alpha=False)
            pixmap.save(target, jpg_quality=90)
            pages.append({'src': f'/projects/{source.parent.name}/{target.name}', 'width': pixmap.width, 'height': pixmap.height})
    manifest[source.parent.name] = pages
    print(f'{source.parent.name}: {len(pages)} pages')
(root / 'data/projectPages.json').write_text(json.dumps(manifest, indent=2) + '\n')
