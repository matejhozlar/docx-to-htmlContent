import fs from "fs";
import mammoth from "mammoth";

mammoth
  .convertToHtml({ path: "manual.docx" })
  .then(function (result) {
    fs.writeFileSync("public/manual.html", result.value);
    console.log("HTML saved to public/manual.html");
  })
  .catch(function (err) {
    console.error("Error:", err);
  });
