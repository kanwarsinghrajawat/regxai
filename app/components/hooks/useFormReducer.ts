import { useReducer } from "react";

// Define form data structure
export interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// Define state structure
export interface FormState {
  formData: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  isSubmitting: boolean;
  apiMessage: { type: "success" | "error"; text: string } | null;
}

// Action types
type Action =
  | { type: "SET_FORM_DATA"; payload: Partial<FormData> }
  | { type: "SET_ERRORS"; payload: Partial<Record<keyof FormData, string>> }
  | { type: "SET_IS_SUBMITTING"; payload: boolean }
  | {
      type: "SET_API_MESSAGE";
      payload: { type: "success" | "error"; text: string } | null;
    }
  | { type: "RESET_FORM" };

// Initial state
const INITIAL_STATE: FormState = {
  formData: {
    name: "",
    email: "",
    company: "",
    message: "",
  },
  errors: {},
  isSubmitting: false,
  apiMessage: null,
};

// Reducer function
const reducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "SET_IS_SUBMITTING":
      return { ...state, isSubmitting: action.payload };
    case "SET_API_MESSAGE":
      return { ...state, apiMessage: action.payload };
    case "RESET_FORM":
      return INITIAL_STATE;
    default:
      return state;
  }
};

// Custom hook to manage form state
export const useFormReducer = () => {
  return useReducer(reducer, INITIAL_STATE);
};
