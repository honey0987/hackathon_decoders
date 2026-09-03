import { NextRequest, NextResponse } from "next/server";
import { experiences } from "@/lib/data";
import { recommend } from "@/lib/recommendations";
export async function POST(request: NextRequest) {
  try { return NextResponse.json({ results: recommend(experiences, await request.json()) }); }
  catch { return NextResponse.json({ error: "Invalid traveller context" }, { status: 400 }); }
}
