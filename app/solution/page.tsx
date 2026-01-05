import Footer from "@/components/Footer";
import SectionImage from "@/components/SectionImage";

export default function Solution() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 md:pt-40 md:pb-12">
        {/* The Problem */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                The Problem
              </h2>
              <div className="space-y-5">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  Organizations build far more AI systems than they ever deploy.
                  A majority of AI projects never reach production, leaving
                  significant economic value locked in proof-of-concepts that
                  fail to pass risk, compliance, or accountability audits.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  As AI enablement accelerates, development speeds up but
                  deployment does not — not because models fail, but because
                  organizations lack a reliable and consistent way to decide
                  whether AI is allowed to act in production.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="AI deployment challenges and barriers"
              />
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                The Solution
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  We provide a system that makes AI deployment responsible and
                  decidable. Instead of relying on post-hoc reviews or manual
                  checklists, our approach enables organizations to determine —
                  at the moment of execution — whether an AI action is permitted
                  to proceed.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed font-semibold italic text-accent dark:text-accent-green mb-4"
                  style={{ lineHeight: "1.7" }}
                >
                  Acceptability before capability in AI world
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  This allows teams and stakeholders to move from ideation to
                  production with confidence, while preserving accountability,
                  auditability, and regulatory alignment.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=90&auto=format&fit=crop"
                alt="AI governance and compliance solution"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                How It Works
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  Our system integrates into existing enterprise AI workflows
                  and evaluates actions before they occur. At each critical
                  stage of the AI lifecycle, it determines whether an action can
                  proceed, should be blocked, or requires explicit ownership,
                  human on the loop.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  All decisions are deterministic by design, require no access
                  to customer data, and are enforced in real time — enabling
                  governance without slowing development or production outcomes.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  Every decision is recorded as a tamper-evident reference,
                  creating an immutable trail of evidence that can be relied
                  upon for internal review, audit, and regulatory inquiries.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90&auto=format&fit=crop"
                alt="AI decision workflow and infrastructure"
              />
            </div>
          </div>
        </section>

        {/* How We Help Enterprises */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                How We Help Enterprises
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  We help organizations move AI into production by making risk
                  decidable before it becomes costly.
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      Reduce regulatory exposure by evaluating AI actions before
                      they execute
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
                      Prevent fines and enforcement events through real-time
                      blocking and escalation
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
                      Unlock ROI from stalled AI initiatives by enabling
                      compliant production deployment
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
                      Lower governance overhead by replacing manual reviews with
                      deterministic controls
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
                      Stay audit-ready by default with immutable decision
                      records
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90&auto=format&fit=crop"
                alt="Enterprise AI risk management and governance"
              />
            </div>
          </div>
        </section>

        {/* Where This Fits */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                Where This Fits
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  This system applies wherever AI decisions carry risk,
                  responsibility, or regulatory exposure:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      Autonomous and agentic AI systems executing multi-step
                      actions
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
                      Enterprise chatbots and AI assistants
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
                      Model deployment and CI/CD pipelines
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
                      AI systems operating in regulated environments
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
                      Decision-making and inference workflows
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
                      Organizations scaling AI beyond pilots into production
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=90&auto=format&fit=crop"
                alt="AI use cases and deployment scenarios"
              />
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                Who This Is For
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  This system is built for teams responsible for putting AI into
                  production:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">●</span>
                    <span
                      className="text-slate-600 dark:text-slate-300"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      Engineering and platform teams deploying AI systems
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
                      AI and data leaders accountable for risk and compliance
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
                      Product teams taking AI to Go-to-market
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
                      Organizations operating in regulated or high-risk
                      environments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop"
                alt="Enterprise teams and leadership"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

