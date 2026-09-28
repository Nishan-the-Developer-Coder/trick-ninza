# ⌨️ Trick-Ninza

![GitHub stars](https://img.shields.io/github/stars/Nishan-the-Developer-Coder/trick-ninza?style=round-square)
![License](https://img.shields.io/github/license/Nishan-the-Developer-Coder/trick-ninza?style=round-square)
![Static site](https://img.shields.io/badge/site-static-blue?style=round-square)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow?style=round-square)

A friendly math practice space for students to learn fast mental-math tricks through short lessons, guided examples, and quick puzzle practice.

🔗 [**Open the web in your browser**](https://nishan-the-developer-coder.github.io/trick-ninza/)

## What it does

- **Addition tricks** — learn fast methods for mental addition using short, visual examples.
- **Subtraction tricks** — practice faster subtraction techniques with structured explanations.
- **Puzzle and quiz practice** — reinforce each trick with interactive questions and quick review loops.
- **Expandable learning panels** — each trick includes clear explanations with a compact, easy-to-scan layout.

Built with plain HTML, CSS, and JavaScript.

## Features 👉🏻

- ➕ Ten addition tricks from the supplied **Fast Mental Addition Tricks** PDF
- ➖ Ten subtraction tricks from the supplied **Fast Subtraction Tricks** PDF
- 📚 Expandable trick rows with brief explanations and step-by-step guidance
- 🧠 Interactive quiz and puzzle sections with hints and nudge-style support
- 📝 Plain-text equations, including horizontal-to-vertical addition examples
- 🔄 Addition / Subtraction / Multiplication topic switching in the main learning flow
- 🧩 Randomized puzzle generation and review-friendly structure for learning practice

## 🗺️ Math Trick Ninza Weekend Roadmap

My web checklist→⁠_⁠→

### 🧮 Phase 1: Core & Customization

- [ ] **1. Expand Basic Operators**
- [ ] **2. Multiplication Engine**
- [ ] **3. Settings Layout**
- [ ] **4. Improved Info Panel**

### 📈 Phase 2: Retention & Offline

- [ ] **5. Migrate to HTML5**
- [ ] **6. Gamification & Scores**
- [ ] **7. Offline PWA Support**
- [ ] **8. Structured Math Schema**

### 📱 Phase 3: Android App Build

- [ ] **9. Mobile Wrapper Setup**
- [ ] **10. Android Optimizations**
- [ ] **11. Play Store Compile**

## Project structure ╰⁠(⁠ ⁠･⁠ ⁠ᗜ⁠ ⁠･⁠ ⁠)⁠➝

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

## Clone this web locally⁠ (⁠o⁠_⁠O⁠)⁠→

```bash
git clone <https://github.com/Nishan-the-Developer-Coder/trick-ninza>
cd trick-ninza
python -m http.server 8000
```

Then open http://localhost:8000 in your browser to view the app locally.

## Credits ✏️

- **Replit** — root app creation
- **VS Code** — code editing
- **GitHub Copilot in VS Code** — edits
- **Claude** — guidelines
- **Gemini** — images
- **GitHub** — public avaibility
- **Gihub Pages** - web public deploy
- **Me** — building this web

## License

MIT © Nishan singha 2026
