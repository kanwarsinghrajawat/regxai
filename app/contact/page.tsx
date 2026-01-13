"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useTheme } from "../components/ThemeProvider";
import { useFormReducer } from "../components/hooks/useFormReducer";
import { validate, validateForm } from "../components/hooks/useFormValidation";
import { sendEmail } from "../components/hooks/useSendEmail";

export default function Contact() {
  const { isDark, setIsDark } = useTheme();
  const [state, dispatch] = useFormReducer();

  const handleChange = (field: keyof typeof state.formData, value: string) => {
    dispatch({ type: "SET_FORM_DATA", payload: { [field]: value } });
    // Clear error for this field when user starts typing
    if (state.errors[field]) {
      const error = validate(field, value);
      if (!error) {
        const newErrors = { ...state.errors };
        delete newErrors[field];
        dispatch({ type: "SET_ERRORS", payload: newErrors });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm(state.formData);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    dispatch({ type: "SET_IS_SUBMITTING", payload: true });
    dispatch({ type: "SET_API_MESSAGE", payload: null });

    const result = await sendEmail(state.formData);

    if (result.success) {
      dispatch({ type: "SET_API_MESSAGE", payload: { type: "success", text: result.message } });
      dispatch({ type: "RESET_FORM" });
    } else {
      dispatch({ type: "SET_API_MESSAGE", payload: { type: "error", text: result.message } });
    }

    dispatch({ type: "SET_IS_SUBMITTING", payload: false });
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <main className="pt-20">
        <section
          className={`pt-12 lg:pt-16 ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                className={`text-5xl lg:text-6xl font-bold mb-4 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h1>
              <p
                className={`text-xl lg:text-2xl mb-6 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We are here to help. Reach out to learn more about how regX AI
                can transform your organization.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`py-12 lg:py-16 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                {state.apiMessage && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      state.apiMessage.type === "success"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    } ${isDark ? (state.apiMessage.type === "success" ? "bg-emerald-900/20 border-emerald-700 text-emerald-300" : "bg-red-900/20 border-red-700 text-red-300") : ""}`}
                  >
                    <p className="text-sm font-medium">{state.apiMessage.text}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={state.formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                        isDark
                          ? `bg-gray-800/50 ${state.errors.name ? "border-red-500" : "border-gray-700"} text-white placeholder-gray-500 focus:border-emerald-500`
                          : `bg-white ${state.errors.name ? "border-red-500" : "border-gray-200"} text-gray-900 placeholder-gray-400 focus:border-emerald-500`
                      }`}
                      placeholder="Your name"
                    />
                    {state.errors.name && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={state.formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                        isDark
                          ? `bg-gray-800/50 ${state.errors.email ? "border-red-500" : "border-gray-700"} text-white placeholder-gray-500 focus:border-emerald-500`
                          : `bg-white ${state.errors.email ? "border-red-500" : "border-gray-200"} text-gray-900 placeholder-gray-400 focus:border-emerald-500`
                      }`}
                      placeholder="your@email.com"
                    />
                    {state.errors.email && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      value={state.formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                        isDark
                          ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500"
                          : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500"
                      }`}
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={state.formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border transition-all resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                        isDark
                          ? `bg-gray-800/50 ${state.errors.message ? "border-red-500" : "border-gray-700"} text-white placeholder-gray-500 focus:border-emerald-500`
                          : `bg-white ${state.errors.message ? "border-red-500" : "border-gray-200"} text-gray-900 placeholder-gray-400 focus:border-emerald-500`
                      }`}
                      placeholder="How can we help you?"
                    />
                    {state.errors.message && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={state.isSubmitting}
                    className={`w-full px-6 py-3.5 bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg ${
                      state.isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-emerald-700"
                    }`}
                  >
                    {state.isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              <div className="lg:pl-8">
                <div
                  className={`rounded-2xl p-8 ${
                    isDark
                      ? "bg-gray-800/50 border border-gray-700"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <h2
                    className={`text-2xl font-bold mb-8 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Contact Information
                  </h2>
                  <div className="space-y-8">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        content: "business@regxai.com",
                        subtext: "We typically respond within 24 hours",
                      },
                    ].map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <div key={index} className="flex gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isDark ? "text-emerald-400" : "text-emerald-600"
                              }`}
                            />
                          </div>
                          <div>
                            <h3
                              className={`text-base font-semibold mb-1 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {contact.title}
                            </h3>
                            <p
                              className={`font-semibold text-lg mb-1 ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {contact.content}
                            </p>
                            <p
                              className={`text-sm ${
                                isDark ? "text-gray-500" : "text-gray-600"
                              }`}
                            >
                              {contact.subtext}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-700/50">
                    <h3
                      className={`text-base font-semibold mb-4 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      {[{ icon: Twitter, url: "https://x.com/regX_AI" }].map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 duration-200 ${
                              isDark
                                ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white"
                                : "bg-white border border-gray-200 hover:border-emerald-400 text-gray-600 hover:text-emerald-600"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-12 lg:py-16 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2
              className={`text-4xl lg:text-5xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is your typical response time?",
                  a: "We aim to respond to all inquiries within 24 business hours.",
                },

                { q: "How long does implementation take?", a: "1-2 weeks" },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:border-emerald-500/50"
                      : "bg-white border-gray-200 hover:border-emerald-400"
                  }`}
                >
                  <h3
                    className={`font-bold mb-3 text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
