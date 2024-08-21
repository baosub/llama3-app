import { NextResponse } from "next/server";

// Este handler responderá a las solicitudes GET
export async function GET() {
    return NextResponse.json({ message: "Hello, Baub! This is your local API." });
  }