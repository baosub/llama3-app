'use client'

// app/page.tsx

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  // Función para hacer la petición a nuestra API local
  const fetchMessage = async () => {
    try {
      const res = await fetch("/api/llama3", {
        method: "POST",
      });
      const data = await res.json();
      setMessage(data.message); // Establece el mensaje devuelto por la API
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Failed to fetch message");
    }
  };

  return (
    <div>
      <h1>LLaMA 3 API Example</h1>
      {/* Botón para obtener el mensaje de la API */}
      <button onClick={fetchMessage}>Fetch Message</button>
      {/* Mostrar el mensaje recibido de la API */}
      <p>{message}</p>
    </div>
  );
}
