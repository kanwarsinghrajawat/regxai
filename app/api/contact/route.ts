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

    // Process the app password (remove spaces and trim)
    const appPassword = process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, "").trim();
    
    // Debug logging (only in development)
    if (process.env.NODE_ENV === "development") {
      console.log("Gmail User:", process.env.GMAIL_USER);
      console.log("App Password Length:", appPassword.length);
      console.log("App Password (first 4 chars):", appPassword.substring(0, 4) + "****");
      console.log("Has GMAIL_USER:", !!process.env.GMAIL_USER);
      console.log("Has GMAIL_APP_PASSWORD:", !!process.env.GMAIL_APP_PASSWORD);
    }
    
    // Validate app password format (should be 16 characters)
    if (appPassword.length !== 16) {
      console.error(`Invalid app password length: ${appPassword.length} (expected 16)`);
      throw new Error("Invalid app password format");
    }
    
    // Create transporter with Gmail SMTP - try both ports
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER.trim(),
        pass: appPassword,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    // Verify connection before sending
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError: any) {
      console.error("SMTP Verification failed:", verifyError.message);
      console.error("Error code:", verifyError.code);
      
      // Try port 465 with SSL as fallback
      if (verifyError.code === "EAUTH" || verifyError.code === "ECONNECTION") {
        console.log("Trying alternative SMTP configuration (port 465)...");
        transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER.trim(),
            pass: appPassword,
          },
        });
        
        try {
          await transporter.verify();
          console.log("SMTP connection verified with port 465");
        } catch (fallbackError: any) {
          console.error("Fallback SMTP verification also failed:", fallbackError.message);
          throw verifyError; // Throw original error
        }
      } else {
        throw verifyError;
      }
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
    // Log detailed error for debugging (server-side only)
    console.error("Error sending email:", error);
    if (error.code === "EAUTH") {
      console.error("Authentication failed - check Gmail credentials in .env.local");
    } else if (error.code === "ECONNECTION") {
      console.error("Connection failed - check network or SMTP settings");
    }
    
    // Always return a user-friendly generic error message
    return NextResponse.json(
      { error: "We're sorry, but we couldn't send your message right now. Please try again later or contact us directly at business@regxai.com." },
      { status: 500 }
    );
  }
}

