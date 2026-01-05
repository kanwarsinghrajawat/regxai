import Footer from "@/components/Footer";
import SectionImage from "@/components/SectionImage";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-8 md:pt-40 md:pb-12">
        {/* About Us */}
        <section className="mb-32 md:mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-2xl">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100"
                style={{ lineHeight: "1.2" }}
              >
                About Us
              </h2>
              <div className="space-y-5">
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  We are building infrastructure that helps organizations unlock
                  real value from AI by making responsible development and
                  deployment practical at scale.
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
                  By enabling clear, enforceable decisions across the AI
                  lifecycle, we help teams move from ideation to production with
                  confidence — without slowing innovation.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                  style={{ lineHeight: "1.7" }}
                >
                  Our work sits at the intersection of AI engineering,
                  enterprise systems, and governance, designed to support
                  real-world transformation.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
              <SectionImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop"
                alt="Professional AI infrastructure team"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
