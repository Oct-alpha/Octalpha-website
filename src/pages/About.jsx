import { Building2, Trophy, Globe } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Introduction } from "@/components/Introduction";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Octalpha team collaborating"
              className="h-full w-full object-cover opacity-40" 
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <AnimatedSection className="max-w-4xl mx-auto space-y-6">
              <p className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-500">
                About Octalpha
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                A partner committed to your digital evolution
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We align technology strategy with business outcomes to build resilient, compliant, and scalable ecosystems for ambitious organizations across the UAE and GCC.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* --- SECTION 2: MERGED CONTENT (History + Mission + Values) --- */}
        <section className="relative bg-gradient-to-br from-background via-background to-background/60">
          <div className="container mx-auto px-4 py-20 md:py-28 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            
            <AnimatedSection direction="up" className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.35em] uppercase text-muted-foreground mb-3">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Enabling intelligent, secure IT for over a decade</h2>
                
                {/* 1. The "Previous" Context (History & Capability) */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Octalpha Business Solutions has been a dedicated technology partner for the past 10 years, helping organizations scale faster with tailored IT infrastructure, cybersecurity, and cloud solutions. Backed by strategic vendor alliances and a strong local presence, we deliver high-impact solutions—from complex enterprise integrations to seamless office setups.
                </p>

                {/* 2. The "New" Context (Mission & Approach) */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe technology should be an enabler, not a barrier. Our mission is to architect innovative, secure ecosystems that drive long-term success. By blending strategic insight with technical excellence, our lean, expert-driven team prioritizes transparent communication and adaptive execution to ensure every project delivers measurable results.
                </p>
              </div>

              {/* 3. Core Values (Expanded & Styled) */}
              <div className="bg-card/50 rounded-2xl p-6 border border-border/50 shadow-sm">
                <p className="font-semibold text-foreground mb-4 uppercase tracking-widest text-sm">Our Guiding Values</p>
                <ul className="grid sm:grid-cols-2 gap-y-5 gap-x-4 text-muted-foreground">
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <strong className="text-foreground">Integrity</strong>
                    </div>
                    <span className="text-sm pl-4">Building trust through transparency and honesty in every interaction.</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <strong className="text-foreground">Innovation</strong>
                    </div>
                    <span className="text-sm pl-4">Delivering cutting-edge solutions that create real business impact.</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <strong className="text-foreground">Excellence</strong>
                    </div>
                    <span className="text-sm pl-4">Exceeding expectations with precision, performance, and agility.</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <strong className="text-foreground">Customer-Centricity</strong>
                    </div>
                    <span className="text-sm pl-4">Keeping your success and satisfaction at the core of everything we do.</span>
                  </li>
                </ul>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40">
                {[
                  { label: "Happy Clients", value: "300+" },
                  { label: "Projects Done", value: "200+" },
                  { label: "Global Partners", value: "50+" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Side Image */}
            <AnimatedSection direction="left" className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                alt="Team collaborating on digital transformation"
                className="w-full h-full min-h-[500px] object-cover rounded-3xl border border-border shadow-strong"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-3xl border border-border/70 bg-background/80 backdrop-blur-md px-6 py-4 shadow-xl max-w-xs">
                <p className="text-sm font-semibold text-foreground">“From data centers to digital transformation.”</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection className="container mx-auto px-4 pb-20">
          <Introduction />
        </AnimatedSection>

        <AnimatedSection direction="right" className="container mx-auto px-4 pb-20">
          <WhyChooseUs />
        </AnimatedSection>
      </PageTransition>
    </MainLayout>
  );
};

export default About;