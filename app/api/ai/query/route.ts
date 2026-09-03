import { NextRequest, NextResponse } from "next/server";
import { parseTravelIntent } from "@/lib/ai";
export async function POST(request: NextRequest) {
  const { query } = await request.json();
  return NextResponse.json(parseTravelIntent(String(query ?? "")));
}
