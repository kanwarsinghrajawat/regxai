import { FormData } from "./useFormReducer";

export const sendEmail = async (formData: FormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Something went wrong.");

    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error: unknown) {
    // Ensure we return a proper error message.
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email. Please try again later.";
    return { success: false, message: errorMessage };
  }
};
