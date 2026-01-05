import { FormData } from "./useFormReducer";

export const sendEmail = async (formData: FormData) => {
  try {
    const messageBody = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name/Company:</strong> ${formData.nameAndCompany}</p>
      <p><strong>Email/Telegram:</strong> ${formData.emailOrTelegram}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.description || "No additional description provided."}</p>
    `;

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "business@regxai.com",
        subject: `New Contact Form Submission from ${formData.nameAndCompany}`,
        message: messageBody,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Something went wrong.");

    return { success: true, message: "Your submission has been received!" };
  } catch (error: unknown) {
    // Ensure we return a proper error message.
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email.";
    return { success: false, message: errorMessage };
  }
};
