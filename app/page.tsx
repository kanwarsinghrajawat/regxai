import Footer from "@/components/Footer";
import Link from "next/link";
import SectionImage from "@/components/SectionImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300 relative">
      {/* Subtle background pattern for dark mode */}
      <div className="hidden dark:block fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8 md:pt-40 md:pb-12 relative z-10">
        {/* Hero Section */}
        <section className="mb-32 md:mb-48 relative">
          <div className="w-full max-w-6xl mx-auto text-left">
            {/* Main Headline */}
            <div className="mb-12 md:mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white dark:drop-shadow-sm leading-[1.05] mb-6">
                Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="mb-14 md:mb-16 max-w-5xl">
              <p className="text-xl md:text-2xl lg:text-2xl font-light leading-relaxed text-accent dark:text-accent-green dark:drop-shadow-sm tracking-wide">
                Determines whether AI actions are responsible and compliant — before agents and models deploy, act, respond, or predict.
              </p>
            </div>

            {/* Accent Quote */}
            <div className="mb-16 md:mb-20 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-light to-accent dark:from-accent-green dark:via-accent-green-light dark:to-accent-green rounded-full shadow-lg dark:shadow-accent-green/50"></div>
              <p className="text-lg md:text-xl lg:text-2xl font-medium italic text-slate-700 dark:text-slate-100 leading-relaxed">
                Acceptability before capability in{' '}
                <span className="text-accent dark:text-accent-green font-bold not-italic">AI</span> world
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solution"
                className="group inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-accent dark:bg-accent-green dark:shadow-lg dark:shadow-accent-green/30 text-white font-medium text-sm md:text-base rounded-lg hover:bg-accent-dark dark:hover:bg-accent-green-dark dark:hover:shadow-accent-green/40 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 border border-accent dark:border-accent-green dark:shadow-sm dark:shadow-accent-green/10 text-accent dark:text-accent-green font-medium text-sm md:text-base rounded-lg hover:bg-accent/5 dark:hover:bg-accent-green/10 dark:hover:shadow-accent-green/20 transition-all duration-200"
              >
                Get in Touch
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-32 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 dark:backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 dark:shadow-lg dark:shadow-black/20 hover:border-accent dark:hover:border-accent-green/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent dark:bg-accent-green flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Real-time Enforcement
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Evaluate AI actions before execution to prevent violations and
                ensure compliance at every step.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 dark:backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 dark:shadow-lg dark:shadow-black/20 hover:border-accent dark:hover:border-accent-green/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent dark:bg-accent-green flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Immutable Records
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Every decision is recorded as tamper-evident evidence for
                audits, reviews, and regulatory inquiries.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 dark:backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 dark:shadow-lg dark:shadow-black/20 hover:border-accent dark:hover:border-accent-green/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent dark:bg-accent-green flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Deterministic Decisions
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Make risk decidable before it becomes costly, enabling confident
                production deployment.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem & Solution Preview */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-white"
                style={{ lineHeight: "1.2" }}
              >
                The Challenge
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
                  deployment does not - not because models fail, but because
                  organizations lack a reliable and consistent way to decide
                  whether AI is allowed to act in production.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/solution"
                  className="inline-flex items-center text-accent dark:text-accent-green font-semibold hover:text-accent-dark dark:hover:text-accent-green-light transition-colors"
                >
                  Learn how we solve this
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="/image1.png"
                alt="AI deployment challenges"
              />
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="order-1 lg:order-2 flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-white"
                style={{ lineHeight: "1.2" }}
              >
                How We Help Enterprises
              </h2>
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg leading-relaxed mb-4 text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  We help organizations move AI into production by making risk
                  decidable before it becomes costly.
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-accent dark:text-accent-green mr-3 mt-1 text-lg">
                      ●
                    </span>
                    <span
                      className="text-base text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Reduce regulatory exposure by evaluating AI actions before
                      they execute
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent dark:text-accent-green mr-3 mt-1 text-lg">
                      ●
                    </span>
                    <span
                      className="text-base text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Prevent fines and enforcement events through real-time
                      blocking and escalation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent dark:text-accent-green mr-3 mt-1 text-lg">
                      ●
                    </span>
                    <span
                      className="text-base text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Unlock ROI from stalled AI initiatives by enabling
                      compliant production deployment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent dark:text-accent-green mr-3 mt-1 text-lg">
                      ●
                    </span>
                    <span
                      className="text-base text-slate-600 dark:text-slate-300"
                      style={{ lineHeight: "1.7" }}
                    >
                      Lower governance overhead by replacing manual reviews with
                      deterministic controls
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center text-accent dark:text-accent-green font-semibold hover:text-accent-dark dark:hover:text-accent-green-light transition-colors"
                >
                  Explore our services
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="order-2 lg:order-1 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90&auto=format&fit=crop"
                alt="Enterprise AI risk management"
              />
            </div>
          </div>
        </section>

        {/* Quick Stats / Use Cases */}
        <section className="mb-32 md:mb-40">
          <div className="bg-slate-50 dark:bg-slate-900/50 dark:backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800/50 dark:shadow-xl dark:shadow-black/30">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-white"
              style={{ lineHeight: "1.2" }}
            >
              Where This Fits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent dark:bg-accent-green flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">
                    Autonomous AI Systems
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Agentic AI executing multi-step actions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent dark:bg-accent-green flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">
                    Enterprise Chatbots
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    AI assistants handling customer interactions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent dark:bg-accent-green flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">
                    CI/CD Pipelines
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Model deployment and continuous integration
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent dark:bg-accent-green flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">
                    Regulated Environments
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    AI systems operating under compliance requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-accent to-accent-dark dark:from-accent-green dark:to-accent-green-dark rounded-2xl p-8 md:p-12 text-center">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
              style={{ lineHeight: "1.2" }}
            >
              Ready to deploy AI with confidence?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can help your organization move from AI
              experimentation to compliant production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
