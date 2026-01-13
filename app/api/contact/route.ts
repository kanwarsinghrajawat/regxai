import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail SMTP credentials");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Check if GMAIL_USER is still the placeholder
    if (process.env.GMAIL_USER === "your-email@gmail.com") {
      return NextResponse.json(
        { error: "Please update GMAIL_USER in .env.local with your actual Gmail address" },
        { status: 500 }
      );
    }

    // Process the app password (remove spaces)
    const appPassword = process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, "");
    
    // Debug logging (only in development)
    if (process.env.NODE_ENV === "development") {
      console.log("Gmail User:", process.env.GMAIL_USER);
      console.log("App Password Length:", appPassword.length);
      console.log("App Password (first 4 chars):", appPassword.substring(0, 4) + "****");
      console.log("Has GMAIL_USER:", !!process.env.GMAIL_USER);
      console.log("Has GMAIL_APP_PASSWORD:", !!process.env.GMAIL_APP_PASSWORD);
    }
    
    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: appPassword,
      },
    });

    // Verify connection before sending
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error("SMTP Verification failed:", verifyError);
      throw verifyError;
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `Contact Form Submission from ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    // Provide more specific error messages for debugging
    let errorMessage = "Failed to send email. Please try again later.";
    
    if (error.code === "EAUTH") {
      errorMessage = "Authentication failed. Please check your Gmail credentials.";
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Could not connect to Gmail SMTP server.";
    } else if (error.response) {
      errorMessage = `SMTP Error: ${error.response}`;
    }
    
    return NextResponse.json(
      { error: errorMessage, details: process.env.NODE_ENV === "development" ? error.message : undefined },
      { status: 500 }
    );
  }
}

