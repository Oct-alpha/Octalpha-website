import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const sections = [
  {
    heading: "AI Can Help — But Unmanaged AI Creates Risk",
    paragraphs: [
      <>
        AI can help employees work faster, reduce repetitive tasks, and make better decisions. But when it is introduced without proper controls, the same technology can expose confidential data, produce misleading information, and create new security risks.
      </>,
      <>
        Many businesses hear the word <span className="font-semibold text-foreground">"AI"</span> and think only about productivity. They see faster reporting, automated emails, instant analysis, and smarter customer service. These benefits are real — but so are the risks when AI tools are used without visibility, governance, or security.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80",
    alt: "AI tools in a business environment",
  },
  {
    heading: "The Real Danger Is Unmanaged AI",
    paragraphs: [
      <>
        Employees may already be using public AI tools to prepare reports, analyse documents, write emails, or summarise customer information. In the process, they could unknowingly upload quotations, contracts, customer records, financial details, or internal business information into platforms that the company has not approved.
      </>,
      <>
        AI-generated answers can also sound convincing while being completely wrong. If these answers are used in financial decisions, customer communication, technical configurations, or automated workflows without human verification, one small error can quickly become a serious business problem.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    alt: "Data being uploaded to an uncontrolled AI platform",
  },
  {
    heading: "Cybercriminals Are Using AI Too",
    paragraphs: [
      <>
        Cybercriminals are using AI to create more convincing phishing messages, impersonate trusted individuals, automate attacks, and identify weaknesses faster. Businesses are therefore not only adopting AI — they are also facing threats that are becoming more intelligent and difficult to detect.
      </>,
      <>
        Avoiding AI is not the answer. Most organisations will eventually use it, whether through approved business platforms or unapproved tools used by employees. The safer approach is to understand where AI is already being used and put the right controls in place.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    alt: "Cybercriminals using AI-powered attacks",
  },
  {
    heading: "What a Secure AI Transformation Should Include",
    paragraphs: [
      <>
        A secure AI transformation requires more than choosing the right tools. It needs a structured approach that protects the business while enabling real productivity gains.
      </>,
    ],
    bullets: [
      { label: "Approved AI tools", detail: "Clearly defined use cases for each tool in your organisation." },
      { label: "Data protection", detail: "Protection for sensitive and confidential business data." },
      { label: "Access controls", detail: "Human approval required for critical AI-driven actions." },
      { label: "Monitoring", detail: "Ongoing monitoring of AI activity and generated outputs." },
      { label: "Employee awareness", detail: "Responsible-use policies and training across all teams." },
      { label: "Regular assessments", detail: "Security, compliance, and risk assessments on a scheduled basis." },
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Secure AI governance framework in a business",
  },
  {
    heading: "How Octalpha Helps Organisations Get AI-Ready",
    paragraphs: [
      <>
        At <span className="font-semibold text-foreground">Octalpha</span>, we help organisations assess their AI maturity across people, processes, data, technology, security, and governance. We identify where AI can deliver real business value, highlight potential risks, and create a practical roadmap for safe implementation.
      </>,
      <>
        AI should support people, not replace them. But without the right strategy and safeguards, it can create risks faster than businesses realise.
      </>,
      <>
        Before introducing another AI tool, understand whether your business is truly ready for it. Octalpha's AI Transformation Maturity Assessment helps you identify the opportunities, uncover the risks, and move forward securely.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Team building a secure AI roadmap with Octalpha",
  },
];

const AITransformationRepeatedWork = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1600&q=80"
            alt="AI Transformation Risk"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32 space-y-6">
            <AnimatedSection className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">AI Transformation</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                AI Transformation Is Not About Replacing People
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                But unmanaged AI can put your business at risk. Discover how to adopt AI securely — with the right controls, governance, and strategy in place.
              </p>
              <div className="inline-flex items-center gap-6 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Jul 2026</span>
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
                            <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
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
                  <p className="text-xs uppercase tracking-[0.4em]">Is your business AI-ready?</p>
                  <h3 className="text-3xl font-semibold">Take the AI Transformation Maturity Assessment.</h3>
                  <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                    Octalpha helps you identify opportunities, uncover risks, and build a secure roadmap for AI adoption.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Button asChild variant="cta">
                      <Link to="/contact">
                        Start Your Assessment
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

export default AITransformationRepeatedWork;