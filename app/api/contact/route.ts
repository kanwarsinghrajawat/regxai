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

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.FROM_EMAIL || smtpUser;
    const contactEmail = process.env.CONTACT_EMAIL || fromEmail;

    // Validate environment variables
    if (!smtpUser || !smtpPassword) {
      console.error("Missing SMTP credentials");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Process the app password (remove spaces and trim)
    const appPassword = smtpPassword.replace(/\s+/g, "").trim();

    // Validate app password format (should be 16 characters)
    if (appPassword.length !== 16) {
      console.error(`Invalid app password length: ${appPassword.length} (expected 16)`);
      return NextResponse.json(
        { error: "Email service is not configured correctly" },
        { status: 500 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: smtpUser.trim(),
        pass: appPassword,
      },
    });

    // Verify connection before sending
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"regX AI" <${fromEmail}>`,
      to: contactEmail,
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
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n${company ? `Company: ${company}\n` : ""}\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json(
      { error: "We're sorry, but we couldn't send your message right now. Please try again later or contact us directly at business@regxai.com." },
      { status: 500 }
    );
  }
}
