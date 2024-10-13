const fs = require("fs");
const path = require("path");

const appFilePath = path.resolve(__dirname, "apps/web/src/app/layout.tsx");

const stylesImport = "import '@elemental/button/style.css';\n";

fs.readFile(appFilePath, "utf8", (err, data) => {
  if (err) throw err;

  if (!data.includes(stylesImport)) {
    const updatedData = stylesImport + data;

    fs.writeFile(appFilePath, updatedData, "utf8", (err) => {
      if (err) throw err;
      console.log("Styles imported into _app.tsx");
    });
  } else {
    console.log("Styles already imported");
  }
});
