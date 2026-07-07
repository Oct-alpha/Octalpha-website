import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

const sections = [
  {
    heading: "Every New System Is a Possible Entry Point",
    paragraphs: [
      <>
        Digital transformation is helping companies move faster. Businesses are adopting cloud platforms, remote access, online collaboration tools, connected devices, and automation systems. These changes improve productivity, but they also increase cyber risk.
      </>,
      <>
        Every new system, login, device, and application becomes a possible entry point. That is why cybersecurity should not be treated as a final step after transformation is complete—it should be part of the planning from the beginning.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    alt: "Connected digital systems and devices",
  },
  {
    heading: "The Common Mistake: Speed Over Security",
    paragraphs: [
      <>
        A common mistake many businesses make is focusing only on speed. They move to the cloud, deploy new tools, or connect systems without reviewing access control, backup, monitoring, endpoint protection, or firewall policies.
      </>,
      <>
        This may work for some time, but it can create serious exposure later.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Fast-moving technology rollout",
  },
  {
    heading: "Building Layers of Protection",
    paragraphs: [
      <>
        Good cybersecurity is not only about buying a firewall or antivirus. It is about building layers of protection—basics that remain critical as phishing, ransomware, and credential-based attacks become more advanced.
      </>,
    ],
    bullets: [
      { label: "Access & Identity", detail: "Secure network design and multi-factor authentication." },
      { label: "Endpoint & Email", detail: "Endpoint security and email protection against phishing." },
      { label: "Resilience", detail: "Backup and disaster recovery, plus regular patching." },
      { label: "Awareness", detail: "User training and continuous monitoring." },
    ],
    image: "https://images.unsplash.com/photo-1614064548237-096d51d47b6c?auto=format&fit=crop&w=1200&q=80",
    alt: "Layered security protections",
  },
  {
    heading: "Secure Transformation Creates Confidence",
    paragraphs: [
      <>
        For UAE businesses, the message is clear: digital growth and cybersecurity must move together. At <span className="font-semibold text-foreground">Octalpha</span>, we help organisations modernise their IT environment while keeping security at the center—across infrastructure, cloud, managed IT, cybersecurity, and backup planning.
      </>,
      <>
        Transformation without security creates risk. Secure transformation creates confidence.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    alt: "Confident, secure cloud transformation",
  },
];

const CybersecurityDigitalTransformation = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
            alt="Cybersecurity and digital transformation"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32 space-y-6">
            <AnimatedSection className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Cybersecurity</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Cybersecurity Should Be Built Into Digital Transformation From Day One
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Digital growth and cybersecurity must move together. Here's why security can't be an afterthought—<span className="font-semibold text-foreground">and how to build it in from the start</span>.
              </p>
              <div className="inline-flex items-center gap-6 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Oct 2026</span>
                <span className="h-3 w-px bg-border"></span>
                <span>6 min read</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 space-y-16">
            {sections.map((section, index) => (
              <AnimatedSection key={section.heading} delay={index * 0.04}>
                <Card className="grid gap-0 overflow-hidden rounded-[32px] border border-border/70 bg-card lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Insight</p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{section.heading}</h2>
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="space-y-3 pt-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet.label} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <ShieldCheck className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                            <span>
                              <span className="font-semibold text-foreground">{bullet.label}:</span> {bullet.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="relative h-full min-h-[400px] w-full bg-muted/20">
                    <img
                      src={section.image}
                      alt={section.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Card>
              </AnimatedSection>
            ))}

            <AnimatedSection className="py-8">
              <Card className="bg-gradient-primary text-primary-foreground relative overflow-hidden rounded-[32px] p-10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_65%)]" />
                <div className="relative space-y-4 text-center">
                  <p className="text-xs uppercase tracking-[0.4em]">Building something new?</p>
                  <h3 className="text-3xl font-semibold">Let's secure your transformation from day one.</h3>
                  <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                    Octalpha helps you modernise your IT environment without compromising on security.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Button asChild variant="cta">
                      <Link to="/contact">
                        Talk to our team
                        <Sparkles className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild className="bg-transparent border border-white text-white hover:bg-white/10 shadow-none">
                      <Link to="/blogs">
                        More insights
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default CybersecurityDigitalTransformation;