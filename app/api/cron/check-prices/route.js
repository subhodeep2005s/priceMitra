import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Cron job to check prices would run here.",
  });
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get("Authorization");
    const cronSecret = process.env.CRON_SECRET;
  } catch (error) {}
}
