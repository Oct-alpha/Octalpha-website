import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, ExternalLink, Calendar, Clock, MapPin, Gift, BrainCircuit } from "lucide-react";

// Content Data
const sections = [
  {
    heading: "Automate & Centralize Operations",
    paragraphs: [
      "Say goodbye to manual tracking and fragmented documents. Creates a single source of truth for your entire governance framework.",
    ],
    listItems: [
      "Automate DOH notifications, escalations, follow-ups.",
      "Set clear ownership of policies, controls, approvals.",
      "Centralize & version-control policies, SOPs, templates.",
    ],
    // IMAGE 2 (Doctor X-Ray)
    image: "https://cdn.pixabay.com/photo/2024/08/03/20/18/ai-generated-8943032_640.jpg",
    alt: "Doctor reviewing digital x-rays",
  },
  {
    heading: "Achieve Audit Readiness",
    paragraphs: [
      "Transform anxiety into confidence with tools designed for TASNEEF and DOH standards.",
    ],
    listItems: [
      "TASNEEF Audit Readiness with Self-assessments.",
      "Streamline evidence collection and audit prep.",
      "Maintain full traceability with immutable audit trails.",
    ],
    // IMAGE 3 (Healthcare Tech)
    image: "https://cdn.pixabay.com/photo/2024/10/06/16/15/ai-generated-9100568_640.png",
    alt: "Futuristic healthcare technology interface",
  },
  {
    heading: "Expertise & Acceleration",
    paragraphs: [
      "Leverage proven methodologies and expert support to fast-track your compliance journey.",
    ],
    listItems: [
      "Accelerate ADHICS readiness with a structured, proven approach.",
      "Octalpha’s expert GRC consulting, implementation and annual sustenance.",
    ],
    // IMAGE 1 (Main AI Image - Reused)
    image: "https://cdn.pixabay.com/photo/2024/10/09/06/08/ai-generated-9106907_1280.jpg",
    alt: "AI Governance",
  }
];

const WebinarBlog = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* --- HERO SECTION --- */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://cdn.pixabay.com/photo/2024/10/09/06/08/ai-generated-9106907_1280.jpg"
            alt="Medical Technology Background"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32 space-y-6">
            <AnimatedSection className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Webinar Briefing</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Simplifying ADHICS 2.0 Compliance for Healthcare
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <span className="font-semibold text-foreground">Struggling to retain DOH passing score</span> while managing routine tasks of healthcare?
                <br />
                Explore <span className="font-semibold text-foreground">ADHICS 2.0 in a Box</span> – LockThreat Gartner Certified GRC AI Platform.
              </p>

              <div className="inline-flex items-center gap-6 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="flex items-center gap-2">Dec 18, 2025</span>
                <span className="h-3 w-px bg-border"></span>
                <span>Join LockThreat & Octalpha</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 space-y-16">

            {/* Iterating Sections (Standard Blog Layout) */}
            {sections.map((section, index) => (
              <AnimatedSection key={section.heading} delay={index * 0.04}>
                <Card className="grid gap-0 overflow-hidden rounded-[32px] border border-border/70 bg-card lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">

                  {/* Text Content */}
                  <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Key Benefit</p>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{section.heading}</h2>
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}

                      {section.listItems && (
                        <ul className="space-y-3 mt-4">
                          {section.listItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Image Content */}
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

            {/* --- CALL TO ACTION / GIVEAWAY SECTION --- */}
            <AnimatedSection className="py-8">
              <Card className="relative overflow-hidden border border-primary/20 bg-primary/5 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="space-y-6 max-w-2xl">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Gift className="h-6 w-6 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">Exclusive Giveaway</span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        1 attendee wins FREE Year-1 on a 3-year ADHICS-in-a-Box contract.
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        One lucky attendee will win a free first year on a 3-year ADHICS-in-a-Box contract.
                        This is your chance to jumpstart your compliance journey with zero initial software cost.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/80">
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>Thursday, 18th December</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>11:30 AM (45 Minutes)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg sm:col-span-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Online Webinar (Link via Email)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-full md:w-auto">
                    <Button asChild size="lg" className="w-full md:w-auto h-auto py-6 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-xl transition-all">
                      <a
                        href="https://www.lockthreat.ai/adhics-in-a-box-2-with-octalpha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        Secure Your Spot
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Octalpha’s expert GRC consulting included.
                    </p>
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

export default WebinarBlog;
