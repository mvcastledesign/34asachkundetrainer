async function run() {
  const url = "https://gemini.google.com/share/0098a5f4176f?skid=f28627df-9f55-454c-bf8c-fc93796b780a";
  console.log("Fetching actual share URL with redirect: manual...");
  try {
    const res = await fetch(url, {
      redirect: "manual",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    console.log("Response status:", res.status);
    console.log("Response headers:");
    res.headers.forEach((value, name) => {
      console.log(`  ${name}: ${value}`);
    });
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

run();
