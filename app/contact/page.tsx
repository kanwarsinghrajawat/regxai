import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 md:pt-40 md:pb-12">
        {/* Contact Section */}
        <section className="mb-16 md:mb-20">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
            style={{ lineHeight: "1.2" }}
          >
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Contact Form */}
            <div>
              <h3
                className="text-lg md:text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.3" }}
              >
                Send us a message
              </h3>
              <p
                className="text-base md:text-lg mb-6 text-slate-600 dark:text-slate-300"
                style={{ lineHeight: "1.7" }}
              >
                Fill out the form below and we'll respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h3
                className="text-lg md:text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.3" }}
              >
                Contact Information
              </h3>
              <p
                className="text-base md:text-lg mb-8 text-slate-600 dark:text-slate-300"
                style={{ lineHeight: "1.7" }}
              >
                For all inquiries, please reach out to us at:
              </p>

              <div className="p-6 rounded-lg border-l-4 border-l-accent dark:border-l-accent-green shadow-md bg-white dark:bg-black mb-8">
                <h4
                  className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100"
                >
                  Get in Touch
                </h4>
                <p className="text-base mb-4 text-slate-600 dark:text-slate-300">
                  For business inquiries, partnerships, and general questions:
                </p>
                <a
                  href="mailto:business@regxai.com"
                  className="font-medium text-base transition-colors hover:text-accent-dark dark:hover:text-accent-green-light inline-block text-accent dark:text-accent-green"
                >
                  business@regxai.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

