import fs from "fs";

function run() {
  const html = fs.readFileSync("gemini_share_actual.html", "utf-8");
  console.log("Analyzing file of size:", html.length);

  // Search for German patterns
  // Let's look for sections that contain common German words like "mündliche", "Prüfung", "Frage", "Antwort", "Sachkunde"
  const patterns = [
    /mündlich/i,
    /prüf/i,
    /frage/i,
    /antwort/i,
    /sachkunde/i,
    /gewerbe/i,
    /recht/i,
    /stgb/i,
    /bgb/i,
    /notwehr/i
  ];

  console.log("Searching for patterns...");
  for (const pattern of patterns) {
    const regex = new RegExp(pattern, "gi");
    let matchCount = 0;
    let match;
    while ((match = regex.exec(html)) !== null && matchCount < 5) {
      matchCount++;
      const idx = match.index;
      console.log(`Pattern ${pattern}: match at index ${idx}`);
      console.log(`  Context: "...${html.substring(Math.max(0, idx - 100), Math.min(html.length, idx + 150)).replace(/\s+/g, " ")}..."`);
    }
  }

  // Also let's extract all strings that are enclosed in double quotes or brackets and contain German umlauts
  const umlautRegex = /"[^"]*[äöüßÄÖÜ][^"]*"/g;
  console.log("\nSearching for quoted strings containing German umlauts:");
  let count = 0;
  let match;
  while ((match = umlautRegex.exec(html)) !== null && count < 30) {
    count++;
    console.log(`Umlaut string ${count}:`, match[0].substring(0, 200));
  }
}

run();
