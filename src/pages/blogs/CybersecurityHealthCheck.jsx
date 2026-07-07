import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSearch, Sparkles, ArrowRight } from "lucide-react";

const sections = [
  {
    heading: "Most Companies Only Look After Something Goes Wrong",
    paragraphs: [
      <>
        Many companies only think about cybersecurity after something goes wrong. A suspicious email, a slow system, a data loss incident, or a ransomware scare usually becomes the moment when security gets attention.
      </>,
      <>
        But by then, the damage may already be done.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Reacting to a security incident",
  },
  {
    heading: "What a Health Check Actually Reviews",
    paragraphs: [
      <>
        A cybersecurity health check helps businesses understand their current security position before a major issue happens. It is a practical review of the company's IT environment, systems, users, devices, backups, and security controls. The purpose is simple: find the gaps early.
      </>,
    ],
    bullets: [
      { label: "Access", detail: "Weak passwords, missing multi-factor authentication, exposed remote access." },
      { label: "Systems", detail: "Outdated software, unmanaged devices, firewall misconfigurations." },
      { label: "Resilience", detail: "Poor backup practices and risky email settings." },
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    alt: "Reviewing IT systems and security controls",
  },
  {
    heading: "Clarity for Decision-Makers",
    paragraphs: [
      <>
        The benefit of a health check is that it gives management a clear picture. Instead of guessing whether the company is secure, decision-makers can see what is working, what needs improvement, and what should be prioritised first.
      </>,
      <>
        This is especially important for growing businesses. As companies add more employees, cloud tools, branches, and devices, IT environments become harder to manage manually.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Clear security reporting for leadership",
  },
  {
    heading: "How Octalpha Helps",
    paragraphs: [
      <>
        At <span className="font-semibold text-foreground">Octalpha</span>, we support businesses with practical cybersecurity assessments and improvement plans. Our focus is not to create fear—our focus is to help organisations take the right steps, based on their actual risk level and business needs.
      </>,
      <>
        Cybersecurity does not have to start with a large project. Sometimes, the smartest first step is simply knowing where you stand.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Team planning practical next security steps",
  },
];

const CybersecurityHealthCheck = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
            alt="Cybersecurity health check"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32 space-y-6">
            <AnimatedSection className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Cybersecurity</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Why Every Business Needs a Practical Cybersecurity Health Check
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Don't wait for an incident to find out where you stand. Here's why a health check is the smartest first step—<span className="font-semibold text-foreground">before something goes wrong</span>.
              </p>
              <div className="inline-flex items-center gap-6 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Oct 2026</span>
                <span className="h-3 w-px bg-border"></span>
                <span>5 min read</span>
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
                            <FileSearch className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
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
                  <p className="text-xs uppercase tracking-[0.4em]">Not sure where you stand?</p>
                  <h3 className="text-3xl font-semibold">Get a practical cybersecurity health check.</h3>
                  <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                    Octalpha reviews your systems, users, and controls—so you know exactly what to prioritise.
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

export default CybersecurityHealthCheck;
