import { NextResponse } from "next/server";

export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  const hasUser = !!process.env.GMAIL_USER;
  const hasPassword = !!process.env.GMAIL_APP_PASSWORD;
  const passwordLength = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "").length || 0;

  return NextResponse.json({
    hasGmailUser: hasUser,
    hasGmailPassword: hasPassword,
    gmailUser: process.env.GMAIL_USER || "NOT SET",
    passwordLength: passwordLength,
    passwordPreview: process.env.GMAIL_APP_PASSWORD 
      ? process.env.GMAIL_APP_PASSWORD.substring(0, 4) + "****" 
      : "NOT SET",
  });
}

