import Footer from "@/components/Footer";
import SectionImage from "@/components/SectionImage";

export default function Services() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 md:pt-40 md:pb-12">
        {/* Our Services */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                Our Services
              </h2>
              <div className="space-y-8">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  We work with organizations at different stages of their AI
                  journey to enable responsible development and deployment at
                  scale.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-accent dark:border-accent-green pl-6 py-2 rounded-r-lg bg-white dark:bg-black">
                    <h3
                      className="text-lg md:text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100"
                      style={{ lineHeight: "1.3" }}
                    >
                      Governance system implementation
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Integrate deterministic decisioning into existing AI
                      workflows and production systems.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent dark:border-accent-green pl-6 py-2 rounded-r-lg bg-white dark:bg-black">
                    <h3
                      className="text-lg md:text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100"
                      style={{ lineHeight: "1.3" }}
                    >
                      AI lifecycle mapping & readiness
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Identify where critical AI decisions occur across
                      development, deployment, inference, and production.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent dark:border-accent-green pl-6 py-2 rounded-r-lg bg-white dark:bg-black">
                    <h3
                      className="text-lg md:text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100"
                      style={{ lineHeight: "1.3" }}
                    >
                      Regulatory alignment & control design
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Translate regulatory expectations into enforceable,
                      system-level ERP controls.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent dark:border-accent-green pl-6 py-2 rounded-r-lg bg-white dark:bg-black">
                    <h3
                      className="text-lg md:text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100"
                      style={{ lineHeight: "1.3" }}
                    >
                      Pilot-to-production enablement
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Help teams move high-value AI use cases from
                      experimentation into compliant production.
                    </p>
                  </div>
                </div>

                <p
                  className="text-base md:text-lg leading-relaxed border-l-4 border-accent dark:border-accent-green pl-4 py-2 mt-8 rounded-r-lg text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-black"
                  style={{ lineHeight: "1.7" }}
                >
                  Our services are designed to complement internal engineering
                  and compliance teams - not replace them.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=90&auto=format&fit=crop"
                alt="Professional AI governance services"
              />
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                How to Get Started
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  Getting started is intentionally simple. We work with teams to
                  understand where AI decisions occur in their lifecycle and
                  integrate enforcement at the right points. For teams building
                  the next wave of responsible AI in production.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90&auto=format&fit=crop"
                alt="AI governance implementation and setup"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
