import http from "http";

console.log("Calling local server's /api/fetch-questions endpoint via POST...");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/api/fetch-questions",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const req = http.request(options, (res) => {
  let data = "";
  console.log("Status Code:", res.statusCode);

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Response data:", data);
  });
});

req.on("error", (err) => {
  console.error("Request failed:", err);
});

req.end();


