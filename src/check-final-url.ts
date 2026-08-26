async function run() {
  const url = "https://gemini.google.com/share/0098a5f4176f?skid=f28627df-9f55-454c-bf8c-fc93796b780a";
  console.log("Fetching", url, "and checking final URL...");
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    console.log("Response Status:", res.status);
    console.log("Final URL:", res.url);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
