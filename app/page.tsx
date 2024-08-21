'use client'

import React, { useState } from 'react'


const page = () => {

  const [message, setMessage] = useState<string>("");

  // Función para hacer la petición a nuestra API local
  const fetchMessage = async () => {
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setMessage(data.message);
      console.log("this is the message from de backend:", data)
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Failed to fetch message");
    }
  };

  return (
    <div>
    <h1>Simple Local API Example</h1>
    {/* Botón para obtener el mensaje de la API */}
    <button onClick={fetchMessage}>Fetch Message</button>
    {/* Mostrar el mensaje recibido de la API */}
    <p>{message}</p>
  </div>
  )
}

export default page
