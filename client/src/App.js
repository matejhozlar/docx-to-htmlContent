import React, { useState, useRef } from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const contentRef = useRef();

  const handleFileLoad = (html) => {
    setHtmlContent(html);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent || ""], {
      type: "text/html;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "manual.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header onFileLoad={handleFileLoad} onDownload={handleDownload} />
      <Content htmlFromUpload={htmlContent} ref={contentRef} />
    </>
  );
}

export default App;
