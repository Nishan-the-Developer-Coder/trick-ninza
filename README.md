# ⌨️ Trick-Ninza

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![Static site](https://img.shields.io/badge/site-static-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow?style=flat-square)

A friendly math practice space for students to learn fast mental-math tricks through short lessons, guided examples, and quick puzzle practice.

🔗 **Open the app in your browser** by visiting the project pages locally after cloning.

## What it does

- **Addition tricks** — learn fast methods for mental addition using short, visual examples.
- **Subtraction tricks** — practice faster subtraction techniques with structured explanations.
- **Puzzle and quiz practice** — reinforce each trick with interactive questions and quick review loops.
- **Expandable learning panels** — each trick includes clear explanations with a compact, easy-to-scan layout.

Built with plain HTML, CSS, and JavaScript.

## Features

- ➕ Ten addition tricks from the supplied **Fast Mental Addition Tricks** PDF
- ➖ Ten subtraction tricks from the supplied **Fast Subtraction Tricks** PDF
- 📚 Expandable trick rows with brief explanations and step-by-step guidance
- 🧠 Interactive quiz and puzzle sections with hints and nudge-style support
- 📝 Plain-text equations, including horizontal-to-vertical addition examples
- 🔄 Addition / Subtraction / Multiplication topic switching in the main learning flow
- 🧩 Randomized puzzle generation and review-friendly structure for learning practice

## Project structure

```text
trick-ninza/
├── index.html
├── addition.html
├── subtraction.html
├── package.json
├── src/
│   ├── addition.js
│   ├── subtraction.js
│   ├── home.js
│   ├── styles.css
│   ├── fonts.css
│   └── material-symbols.css
├── fonts/
├── public/
├── scripts/
│   └── render_math_pdf.py
├── docs/
│   └── PDF_IMPORT.md
├── robots.txt
├── sitemap.xml
├── llms.txt
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

## Add future PDF sections

This content set is intentionally small so new PDF material can be reviewed before it is published. For the React/Vite source, add trick objects and quiz questions to `src/App.tsx`. For the static edition, update the matching arrays in `app.js`.

For a future production version, this content can move into a typed JSON or database-backed layer without changing the lesson interactions.

## Clone this web locally

```bash
git clone <repository-url>
cd trick-ninza
python -m http.server 8000
```

Then open http://localhost:8000 in your browser to view the app locally.

## Credits

- **Replit** — root app creation
- **VS Code** — code editing
- **GitHub Copilot in VS Code** — edits
- **Claude** — guidelines
- **Gemini** — images
- **GitHub** — publication
- **Nishan singha** — building this web

## License

MIT © Nishan singha 2026
