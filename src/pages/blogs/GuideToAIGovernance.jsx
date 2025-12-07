import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Scale, Users, FileSearch, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const sections = [
  {
    heading: "The Governance Imperative: Innovation Without Risk",
    paragraphs: [
      <>
        Artificial Intelligence is your organization's fastest-growing employee—tireless, data-driven, and incredibly efficient. But no CISO would grant a new hire unrestricted access to sensitive data without background checks. <span className="font-semibold text-foreground">Why do it with AI?</span>
      </>,
      <>
        <span className="font-semibold text-foreground">AI Governance</span> is the framework of policies and controls that ensures AI is used ethically, safely, and in compliance with global regulations like the EU AI Act. Without it, AI quickly mutates from an innovation advantage into a high-risk liability.
      </>,
    ],
    bullets: [
      {
        label: "Personal Liability",
        detail: "New regulations increasingly hold executives personally accountable for AI failures.",
      },
      {
        label: "Shadow AI",
        detail: "Unsanctioned tools used by employees create hidden data leak vectors.",
      },
      {
        label: "Operational Integrity",
        detail: "Preventing biased decisions and inaccurate outputs before they reach customers.",
      },
    ],
    // IMAGE 1: Modern Corporate Strategy / Innovation
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    alt: "Strategic business planning and governance",
  },
  {
    heading: "The Hidden Risks of Ungoverned AI",
    paragraphs: [
      <>
        A single unguarded model can introduce systemic risk. Without a governance layer, organizations face a multi-front war against their own infrastructure.
      </>,
    ],
    list: [
      {
        title: "Legal Exposure",
        detail: "One hallucination or biased output can trigger regulatory penalties and lawsuits.",
      },
      {
        title: "Data Leakage",
        detail: "Public AI tools often train on input data, potentially exposing trade secrets.",
      },
      {
        title: "Shadow Ecosystems",
        detail: "Zero visibility into approved vs. unapproved tools leads to a security blind spot.",
      },
      {
        title: "Audit Failure",
        detail: "Lack of documentation makes passing compliance audits nearly impossible.",
      },
    ],
    // NEW IMAGE: Abstract red/dark data visualization representing risk
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital risk and data fragmentation",
  },
  {
    heading: "The Playbook: 4 Steps to a Strong Framework",
    paragraphs: [
      <>
        Leading CISOs are moving beyond spreadsheets. Building a resilient AI governance framework starts with these four foundational steps to ensure scalability and safety.
      </>,
    ],
    bullets: [
      {
        label: "1. Discover Footprint",
        detail: "Audit every department to uncover official and 'shadow' AI usage.",
      },
      {
        label: "2. Classify Risk",
        detail: "Tier tools from Low Risk (chatbots) to High Risk (financial/hiring decisions).",
      },
      {
        label: "3. Define Policy",
        detail: "Create clear 5–10 rule policies on data usage and escalation paths.",
      },
      {
        label: "4. Form Committee",
        detail: "Unite Security, Legal, HR, and Ops to align AI with business ethics.",
      },
    ],
    // IMAGE 3: Blueprints / Structure / Planning
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    alt: "Cross-functional team collaboration",
  },
  {
    heading: "How OctAlpha Secures Your AI Future",
    paragraphs: [
      <>
        Policies alone aren't scalable. As manual tracking becomes impossible, <span className="font-semibold text-foreground">OctAlpha</span> provides the systems needed to operationalize trust. We turn governance into a competitive advantage.
      </>,
    ],
    list: [
      {
        title: "Responsible Practice",
        detail: "We help you assess risks, document processes, and adopt AI ethically.",
      },
      {
        title: "Customer Trust",
        detail: "Transparent governance proves to clients that their data is handled responsibly.",
      },
      {
        title: "Future-Proofing",
        detail: "Stay ahead of emerging global standards with our evolving compliance frameworks.",
      },
      {
        title: "Scalable Growth",
        detail: "As your AI adoption expands, our governance systems scale effortlessly with you.",
      },
    ],
    // NEW IMAGE: Futuristic clean network/shield representing safety and future
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Global digital security network",
  },
];

const GuideToAIGovernance = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* --- HERO SECTION --- */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80"
            alt="AI Governance Abstract"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32 space-y-6">
            <AnimatedSection className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">CISO Handbook</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                The CISO’s Guide to AI Governance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                AI is transforming business, but without guardrails, it becomes a liability. Learn how to keep your organization <span className="font-semibold text-foreground">safe, compliant, and future-ready</span> with a robust governance framework.
              </p>
              
              <div className="inline-flex items-center gap-6 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="flex items-center gap-2">Dec 2026</span>
                <span className="h-3 w-px bg-border"></span>
                <span>10 min read</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 space-y-16">
            {sections.map((section, index) => (
              <AnimatedSection key={section.heading} delay={index * 0.04}>
                {/* GRID LAYOUT: Matched OctaMindAutonomous style (Text Left, Image Right) */}
                <Card className="grid gap-0 overflow-hidden rounded-[32px] border border-border/70 bg-card lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Left Column: Text Content */}
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
                    
                    {section.list && (
                      <div className="grid gap-4 pt-2 sm:grid-cols-2">
                        {section.list.map((item) => (
                          <div key={item.title} className="rounded-xl border border-border/60 bg-muted/20 p-4 transition-colors hover:bg-muted/40">
                            <p className="mb-2 text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column: Image */}
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

            {/* --- COLLABORATOR LINK / INTERLUDE --- */}
            <AnimatedSection className="py-8">
              <Card className="relative overflow-hidden border border-primary/20 bg-primary/5 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-2xl font-semibold text-foreground">
                      Governance saves the business. But what saves the CISO?
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      We've covered the structural framework for responsible AI. But if you want the unfiltered reality of what happens when governance fails—and exactly how to keep your badge on your desk—our partners at <span className="font-semibold text-foreground">LockThreat</span> have the playbook.
                    </p>
                    <p className="text-muted-foreground">
                       Because sometimes, "compliance" is just corporate speak for "survival."
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button asChild variant="outline" className="h-auto py-4 px-6 border-primary/20 hover:bg-primary/10 hover:text-primary gap-3 text-base">
                      <a 
                        href="https://www.lockthreat.ai/resources/blogs/the-cisos-guide-to-ai-governance-keeping-your-business-and-your-job-safe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read the LockThreat Guide
                        <ExternalLink className="h-4 w-4" />
                      </a>
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

export default GuideToAIGovernance;