import fs from "fs";

function run() {
  const html = fs.readFileSync("gemini_share_actual.html", "utf-8");
  console.log("File size:", html.length);

  // Print a small sample of the body tag
  const bodyIdx = html.indexOf("<body");
  if (bodyIdx !== -1) {
    console.log("Body starts at:", bodyIdx);
    console.log("Body preview:", html.substring(bodyIdx, bodyIdx + 1000).replace(/\n/g, " "));
  } else {
    console.log("No <body> tag found!");
  }

  // Let's do a search for "ds:0" or other data blocks
  const dataBlockIdx = html.indexOf("WIZ_global_data");
  if (dataBlockIdx !== -1) {
    console.log("WIZ_global_data index:", dataBlockIdx);
    console.log("WIZ_global_data preview:", html.substring(dataBlockIdx, dataBlockIdx + 500).replace(/\n/g, " "));
  }

  // Let's search for German characters or any German words we expect, like 'sicherheit' or 'ordnung' or 'bewachung'
  const keywords = ["sicherheit", "ordnung", "bewachung", "GewO", "sachkunde", "Notwehr", "Hausrecht"];
  for (const kw of keywords) {
    const idx = html.toLowerCase().indexOf(kw.toLowerCase());
    console.log(`Keyword '${kw}': index ${idx}`);
    if (idx !== -1) {
      console.log(`  - surrounding: "${html.substring(idx - 50, idx + 100).replace(/\n/g, " ")}"`);
    }
  }
}

run();

