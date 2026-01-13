import { FormData } from "./useFormReducer";

export const validate = (name: keyof FormData, value: string): string => {
  const errors: Record<keyof FormData, string> = {
    name: value.trim() ? "" : "Name is required.",
    email: !value.trim()
      ? "Email is required."
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Enter a valid email address.",
    company: "",
    message: value.trim() ? "" : "Message is required.",
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
