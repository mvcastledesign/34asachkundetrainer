import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Translate endpoint
const LANGUAGE_CODES: Record<string, string> = {
  farsi: "fa",
  persian: "fa",
  arabisch: "ar",
  arabic: "ar",
  russisch: "ru",
  russian: "ru",
  englisch: "en",
  english: "en"
};

async function translateFree(text: string, targetLanguage: string): Promise<string> {
  const langLower = targetLanguage.toLowerCase().trim();
  let langCode = "en"; // default fallback
  for (const [key, val] of Object.entries(LANGUAGE_CODES)) {
    if (langLower.includes(key)) {
      langCode = val;
      break;
    }
  }

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${langCode}&dt=t&q=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google Translate free API returned status ${response.status}`);
  }
  const data = await response.json();
  if (Array.isArray(data) && Array.isArray(data[0])) {
    return data[0]
      .filter((segment: any) => Array.isArray(segment) && typeof segment[0] === 'string')
      .map((segment: any) => segment[0])
      .join('');
  }
  throw new Error("Invalid response structure from Google Translate free API");
}

app.post("/api/translate", async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
      return res.status(400).json({ error: "Missing 'text' or 'targetLanguage' parameter" });
    }

    const hasAPIKey = !!(process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY);

    if (hasAPIKey) {
      try {
        const ai = getAI();
        const cleanLang = targetLanguage.trim();
        
        // Construct instructions to translate cleanly and maintain tone
        const prompt = `Translate the following text into ${cleanLang}. 
This text is from a professional German security service qualification exam (§34a GewO Sachkundeprüfung).
Ensure the translation matches the exact terminology, professional tone, and structure. Do NOT add any notes, commentary, or conversational padding. Just output the translation itself.

Text to translate:
${text}`;

        // Attempt primary and fallback models in case of temporary 503 high demand spikes
        const candidateModels = ["gemini-2.5-flash", "gemini-flash-latest", "gemini-3.7-flash"];
        let translatedText = "";

        for (const modelName of candidateModels) {
          try {
            const response = await ai.models.generateContent({
              model: modelName,
              contents: prompt,
              config: {
                temperature: 0.1,
              }
            });

            if (response.text && response.text.trim()) {
              translatedText = response.text.trim();
              break;
            }
          } catch (modelErr: any) {
            // If model is busy (503) or rate limited, try next model in candidateModels
            console.info(`Model ${modelName} unavailable (${modelErr?.status || modelErr?.code || 'error'}), attempting fallback.`);
          }
        }

        if (translatedText) {
          return res.json({ translation: translatedText });
        }
      } catch (geminiError: any) {
        console.info("Gemini translation service temporarily unavailable, engaging free translator fallback.");
      }
    }

    // Keyless / Fallback mode using public translate endpoint
    try {
      const translation = await translateFree(text, targetLanguage);
      if (translation && translation.trim()) {
        return res.json({ translation: translation.trim() });
      }
    } catch (freeErr) {
      console.warn("Free translation endpoint failed:", freeErr);
    }

    // Ultimate fallback to returning original text cleanly
    res.json({ translation: text });
  } catch (error: any) {
    console.error("Translation error:", error);
    res.json({ translation: req.body?.text || "" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
