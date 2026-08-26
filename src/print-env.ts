console.log("Environment variables:");
for (const key of Object.keys(process.env)) {
  // Print keys only, or mask values to keep things secure
  const val = process.env[key];
  const displayVal = val ? (val.length > 8 ? val.substring(0, 4) + "..." + val.substring(val.length - 4) : "***") : "empty";
  console.log(`  ${key}: ${displayVal}`);
}
