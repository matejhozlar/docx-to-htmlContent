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
git clone https://github.com/matejhozlar/docx-to-htmlContent.git
cd docx-to-html-viewer
npm install
npm start
```

## 🧠 How It Works
App.jsx
Main component that wires everything together:

Handles uploaded HTML state

Passes content to Header and Content

Triggers HTML download

## Content.jsx
Renders the content area and scrollable sidebar:

Loads .docx-converted HTML or manual.html

Builds a sidebar from all <h1> elements

Handles scrollspy + smooth section jumping

## Header.jsx
Contains UI buttons:

Import DOCX: Triggers file upload and converts to HTML using Mammoth

Download HTML: Saves the rendered HTML as a .html file

convert-docx-to-html.js
Optional Node.js script to pre-convert .docx to HTML:

bash```
Copy
Edit
node convert-docx-to-html.js
It reads manual.docx and saves the HTML to public/manual.html.
```
