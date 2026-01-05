import Footer from "@/components/Footer";
import SectionImage from "@/components/SectionImage";

export default function Regulatory() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 md:pt-40 md:pb-12">
        {/* Regulatory Scope */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                Regulatory Scope
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  AI regulation is evolving globally, with enforcement already
                  underway across major markets. Our system is designed to
                  support organizations operating across jurisdictions, with an
                  initial focus on the most impactful and actively enforced
                  frameworks today:
                </p>
                <ul className="space-y-3 list-none pl-0 my-6">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        EU AI Act
                      </strong>{" "}
                      - comprehensive, risk-based regulation for AI systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        GDPR
                      </strong>{" "}
                      - foundational privacy and data-protection requirements
                      affecting AI automation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        U.S. Federal & State Guidelines
                      </strong>{" "}
                      - sector-specific and guidance-driven enforcement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        UAE AI & Data Regulations
                      </strong>{" "}
                      - national AI governance, data-protection laws (e.g.,
                      PDPL), and sectoral oversight shaping compliant AI
                      deployment in the Middle East.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        India DPDP Act
                      </strong>{" "}
                      - data-protection law impacting AI data usage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        Framework Convention on AI
                      </strong>{" "}
                      - international treaty aligning AI with human-rights
                      principles
                    </span>
                  </li>
                </ul>
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  The system is built to evolve as regulations mature and new
                  frameworks come into force across key jurisdictions including
                  Europe, the United States, India, Singapore, Japan, and other
                  global markets, and is designed to apply across all categories
                  of AI products and use cases. In addition, the system aligns
                  with widely adopted international frameworks and emerging
                  national policies, including voluntary governance models and
                  global standards that influence regulatory expectations.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=90&auto=format&fit=crop"
                alt="Global AI regulations and compliance"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
