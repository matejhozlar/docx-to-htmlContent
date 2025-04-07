# 📄 Dynamic DOCX to HTML Viewer with Scrollable Table of Contents

This React-based web app allows users to dynamically upload a `.docx` file, convert it to clean HTML using [Mammoth.js](https://github.com/mwilliamson/mammoth.js), and interactively navigate its contents using a scroll-aware sidebar.

---

## ✨ Features

- 📂 Upload a `.docx` file and render it in-browser
- 📜 Auto-generate sidebar Table of Contents from all `<h1>` headings
- 🧭 Scrollspy highlights the section currently in view
- 📥 Download the rendered HTML version of the document
- 🧪 Includes a fallback default manual (`manual.html`) if no file is uploaded
- ⚡ Smooth scrolling and active URL updates

---

## 🔧 Tech Stack

- React
- Mammoth.js
- Vanilla CSS
- DOMParser + Scroll logic

---

## 📦 Installation

```bash
git clone https://github.com/your-username/docx-to-html-viewer.git
cd docx-to-html-viewer
npm install
npm start
