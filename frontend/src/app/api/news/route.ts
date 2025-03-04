import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news`);
    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }  
}
