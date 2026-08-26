import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

async function run() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set.");
    process.exit(1);
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  const prompt = `Use Google Search grounding to read the contents of the page: https://share.gemini.google/SJXR4EJ7RRcM.
This is a shared Gemini chat. Extract all questions and answers that are listed/discussed in this shared chat.
Please format them as a valid, parsable JSON array of objects, where each object has "frage" and "antwort" keys, in German. Keep the original wording as closely as possible, or slightly reformulate for absolute clarity and correctness if necessary.
Format your response ONLY as a JSON codeblock, without any other conversational text.
Example structure:
[
  {
    "frage": "Frage hier?",
    "antwort": "Antwort hier."
  }
]`;

  try {
    console.log("Calling Gemini API with Search Grounding to fetch the shared chat content...");
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.1,
      }
    });

    const text = response.text || "";
    console.log("Received response length:", text.length);
    fs.writeFileSync("questions_raw.txt", text);
    console.log("Successfully wrote raw response to questions_raw.txt");
  } catch (error) {
    console.error("Error executing script:", error);
  }
}

run();
