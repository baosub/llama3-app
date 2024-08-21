// app/api/llama3/route.ts

import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// Configuramos la API con nuestra API key y la base URL
const openai = new OpenAI({
  apiKey: process.env.LLAMA3_API_KEY, // Asegúrate de colocar tu API key en un archivo .env
  baseURL: "https://api.aimlapi.com",
});

// Este handler responderá a las solicitudes POST
export async function POST() {
  try {
    // Hacemos la solicitud a la API de LLaMA 3 usando el modelo especificado
    const chatCompletion = await openai.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [
        { role: "system", content: "You are a travel agent. Be descriptive and helpful" },
        { role: "user", content: "say bad words in spanish" },
      ],
      temperature: 0.7,
      max_tokens: 128,
    });

    // Devolvemos la respuesta en formato JSON
    return NextResponse.json({ message: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching data from LLaMA 3 API:", error);
    return NextResponse.json({ message: "Failed to fetch data from LLaMA 3 API" }, { status: 500 });
  }
}

