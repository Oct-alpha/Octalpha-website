import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, ArrowRight, Users } from "lucide-react";

const sections = [
  {
    heading: "Start With One Question: Where Is Your Team Losing Time?",
    paragraphs: [
      <>
        Many businesses hear the word <span className="font-semibold text-foreground">"AI"</span> and immediately think of complex systems, large budgets, or replacing teams. In reality, the best AI transformation usually starts much smaller.
      </>,
      <>
        It starts with one simple question: where is your team losing time every day? For many companies, the answer is repetitive work.
      </>,
    ],
    bullets: [
      { label: "Reporting", detail: "Hours spent preparing reports and checking emails manually." },
      { label: "CRM Updates", detail: "Updating records and following up on approvals by hand." },
      { label: "Data Movement", detail: "Creating quotations, searching for information, and moving data between systems." },
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Team reviewing repetitive daily workflows",
  },
  {
    heading: "Where AI Brings Real Value",
    paragraphs: [
      <>
        AI transformation is not only about chatbots or automation. It is about helping people work faster, reduce errors, and make better decisions with the data they already have.
      </>,
    ],
    list: [
      { title: "Sales Teams", detail: "Use AI to summarise customer conversations instantly." },
      { title: "Finance Teams", detail: "Flag unusual transactions before they become a problem." },
      { title: "IT Teams", detail: "Monitor alerts and identify risks far faster than manual review." },
      { title: "Every Team", detail: "Spend less time on admin, more time on decisions that matter." },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "AI-driven data insights on a dashboard",
  },
  {
    heading: "Structure Before Tools",
    paragraphs: [
      <>
        Successful AI adoption needs structure. Businesses should not add AI tools randomly. The right approach is to first understand the current workflow, identify bottlenecks, check data quality, and then choose the right automation or AI layer.
      </>,
    ],
    bullets: [
      { label: "Understand", detail: "Map the current workflow before introducing any new tool." },
      { label: "Identify", detail: "Pinpoint the exact bottlenecks costing your team time." },
      { label: "Validate", detail: "Check data quality so AI outputs can actually be trusted." },
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Mapping out a business workflow",
  },
  {
    heading: "How Octalpha Approaches AI Transformation",
    paragraphs: [
      <>
        At <span className="font-semibold text-foreground">Octalpha</span>, we believe AI should be practical. It should solve a clear business problem, integrate with existing systems, and improve day-to-day operations without disrupting the team.
      </>,
      <>
        The goal is not to make businesses look "AI-ready" on paper. The goal is to make work simpler, faster, and more reliable. AI transformation works best when it starts with real problems, not buzzwords.
      </>,
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Team collaborating on a practical AI rollout",
  },
];

const AITransformationRepeatedWork = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1600&q=80"
            alt="AI Transformation Abstract"
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
                It is about fixing repeated work. Discover how the best AI adoption starts small, solves real problems, and makes teams faster—<span className="font-semibold text-foreground">without replacing them</span>.
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
                            <Zap className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
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
                  <p className="text-xs uppercase tracking-[0.4em]">Ready to simplify?</p>
                  <h3 className="text-3xl font-semibold">Let's find where AI fits your workflow.</h3>
                  <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                    Octalpha helps businesses adopt AI in a way that solves real problems—no buzzwords, no disruption.
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

export default AITransformationRepeatedWork;