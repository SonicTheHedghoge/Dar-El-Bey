import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini Client
// IMPORTANT: API Key is expected to be in process.env.API_KEY
// In a real production build, use a backend proxy. For this demo, we assume env var is available.
const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

export const getChefRecommendation = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "I apologize, but my connection to the kitchen is currently down (Missing API Key). However, I highly recommend our Royal Couscous!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Our chef is busy cooking up something special. Please ask again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble hearing the chef right now. Please try asking again.";
  }
};