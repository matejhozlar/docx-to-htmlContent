import React, { useEffect, useState, useRef } from "react";

const Content = ({ htmlFromUpload }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const loadAndProcessHtml = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const autoToc = doc.querySelector("ul");
      if (
        autoToc &&
        autoToc.previousElementSibling?.textContent?.includes("Contents")
      ) {
        autoToc.remove();
        autoToc.previousElementSibling.remove();
      }

      const h1s = Array.from(doc.querySelectorAll("h1"));
      const toc = h1s.map((el, i) => {
        const id = `section-${i}`;
        el.setAttribute("id", id);
        return { text: el.textContent, id };
      });

      setHeadings(toc);
      setHtmlContent(doc.body.innerHTML);
    };

    if (htmlFromUpload) {
      loadAndProcessHtml(htmlFromUpload);
    } else {
      fetch("/manual.html")
        .then((res) => res.text())
        .then(loadAndProcessHtml);
    }
  }, [htmlFromUpload]);

  useEffect(() => {
    const handleScroll = () => {
      const container = contentRef.current;
      if (!container) return;

      const headers = Array.from(container.querySelectorAll("h1"));

      const visibleHeaders = headers.filter((header) => {
        const rect = header.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });

      if (visibleHeaders.length > 0) {
        const topHeader = visibleHeaders.reduce((prev, curr) =>
          curr.getBoundingClientRect().top < prev.getBoundingClientRect().top
            ? curr
            : prev
        );
        setActiveId(topHeader.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [htmlContent]);

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Contents</h2>
        <ul>
          {headings.map(({ id, text }) => (
            <li key={id}>
              <button
                className={`sidebar-link ${activeId === id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(id);
                  if (target) {
                    window.history.replaceState(null, "", `#${id}`);
                    window.scrollTo({
                      top:
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        20,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="content" ref={contentRef}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </main>
    </div>
  );
};

export default Content;
