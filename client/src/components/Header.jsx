import React from "react";
import mammoth from "mammoth";

function Header({ onFileLoad, onDownload }) {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    onFileLoad(result.value);
  };

  return (
    <header className="header">
      <h1>Dynamic import of DOCX to HTML</h1>
      <div className="header-buttons">
        <label htmlFor="docx-upload" className="upload-btn">
          Import DOCX
        </label>
        <input
          id="docx-upload"
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button className="download-btn" onClick={onDownload}>
          Download HTML
        </button>
      </div>
    </header>
  );
}

export default Header;
