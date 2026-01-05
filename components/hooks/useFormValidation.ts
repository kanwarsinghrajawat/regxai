import { FormData } from "./useFormReducer";

export const validate = (name: keyof FormData, value: string): string => {
  const errors: Record<keyof FormData, string> = {
    nameAndCompany: value.trim() ? "" : "Name & Company is required.",
    emailOrTelegram: !value.trim()
      ? "Email or Telegram handle is required."
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$|^@\w+$/i.test(value)
      ? ""
      : "Enter a valid email or Telegram handle (e.g., @username).",
    description: "",
  };

  return errors[name];
};

// Validate the entire form
export const validateForm = (formData: FormData) => {
  return Object.keys(formData).reduce((acc, key) => {
    const fieldName = key as keyof FormData;
    const error = validate(fieldName, formData[fieldName]);
    if (error) acc[fieldName] = error;
    return acc;
  }, {} as Partial<Record<keyof FormData, string>>);
};
