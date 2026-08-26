import fs from "fs";

async function run() {
  const targetUrl = "https://gemini.google.com/share/0098a5f4176f?skid=f28627df-9f55-454c-bf8c-fc93796b780a";
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
  console.log("Fetching actual share URL via AllOrigins proxy...");
  try {
    const res = await fetch(proxyUrl);
    console.log("Response status:", res.status);
    const json = await res.json();
    const html = json.contents || "";
    console.log("HTML length from proxy:", html.length);
    fs.writeFileSync("gemini_share_proxy.html", html);
    console.log("Saved proxy HTML to gemini_share_proxy.html");
  } catch (error) {
    console.error("Error fetching via proxy:", error);
  }
}

run();
