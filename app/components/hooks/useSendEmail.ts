import { FormData } from "./useFormReducer";

export const sendEmail = async (formData: FormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      // Use the error message from the API (which is now user-friendly)
      throw new Error(data.error || "We're sorry, but we couldn't send your message right now. Please try again later.");
    }

    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error: unknown) {
    // Return user-friendly error message
    const errorMessage =
      error instanceof Error 
        ? error.message 
        : "We're sorry, but we couldn't send your message right now. Please try again later or contact us directly at business@regxai.com.";
    return { success: false, message: errorMessage };
  }
};
