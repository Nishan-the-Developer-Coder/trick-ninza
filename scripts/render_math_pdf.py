"""Render an uploaded math-tricks PDF into PNG page previews.

Usage:
    python scripts/render_math_pdf.py path/to/tricks.pdf output-dir
"""

from pathlib import Path
import sys

import fitz


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: python scripts/render_math_pdf.py input.pdf output-dir")

    source = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    document = fitz.open(source)
    for index, page in enumerate(document, start=1):
        pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        pixmap.save(output_dir / f"page-{index:02d}.png")


if __name__ == "__main__":
    main()