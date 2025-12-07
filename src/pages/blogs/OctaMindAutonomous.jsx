import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Sparkles, ExternalLink } from "lucide-react";

const sections = [
  {
    heading: "OctaMind Exploitation: Autonomy and Ambition",
    paragraphs: [
      <>
        <span className="font-semibold text-foreground">Dragonfly Apex</span> fine-tuned{" "}
        <span className="font-semibold text-foreground">OctaMind</span> to ingest Shodan, leaked code repositories, and
        executive blogs, assembling a complete attack surface in hours instead of months.
      </>,
      <>
        The AI chains low-risk misconfigurations into critical exploit paths, rewriting payloads on the fly whenever it
        encounters friction—true <span className="font-semibold text-foreground">autonomous exploitation</span>.
      </>,
    ],
    bullets: [
      {
        label: "Autonomous reconnaissance",
        detail: "Continuous mining of public/private intel feeds.",
      },
      {
        label: "Zero-day level chaining",
        detail: "Combining minor flaws into critical attack paths.",
      },
      {
        label: "Self-healing exploits",
        detail: "Instant payload revisions upon failure.",
      },
    ],
    // IMAGE 1: Stable 'Matrix/Code' image
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    alt: "Hacker code matrix visualization",
  },
  {
    heading: "Autonomous Kill Chain",
    paragraphs: [
      <>
        <span className="font-semibold text-foreground">OctaMind</span> now completes the entire kill chain without
        waiting for a human operator, executing every phase at <span className="font-semibold text-foreground">machine speed</span>.
      </>,
    ],
    list: [
      {
        title: "Initial Access",
        detail: "Generates flawless social engineering or exploits logic flaws to bypass authentication.",
      },
      {
        title: "Execution & Persistence",
        detail: "Deploys polymorphic malware and C2 channels that defeat signature-based defenses.",
      },
      {
        title: "Lateral Movement",
        detail: "Uses natural-language reasoning to pick the next hop and escalate privileges.",
      },
      {
        title: "Objective Completion",
        detail: "Exfiltrates data or plants backdoors 1000x faster than human teams.",
      },
    ],
    // IMAGE 2: Stable 'Network/Nodes' image
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital kill chain network",
  },
  {
    heading: "AI vs AI: Defensive Imperative",
    paragraphs: [
      <>
        Traditional SOC workflows cannot keep pace with <span className="font-semibold text-foreground">LLM-driven adversaries</span>. Behavioral
        analytics and AI-native playbooks are now table stakes.
      </>,
      <>
        Organizations must deploy <span className="font-semibold text-foreground">predictive, reasoning-led defenses</span> that stop autonomous kill
        chains during reconnaissance.
      </>,
    ],
    bullets: [
      {
        label: "Behavior-first detections",
        detail: "Flagging machine-speed anomalies, not signatures.",
      },
      {
        label: "Automated containment",
        detail: "Preventing lateral spread instantly.",
      },
      {
        label: "Predictive models",
        detail: "Challenging AI probes before weaponization.",
      },
    ],
    // IMAGE 3: Digital Lock/Shield Concept
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Cybersecurity shield concept",
  },
];

const OctaMindAutonomous = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* --- HERO SECTION --- */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
          <img
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1600&q=80"
            alt="Abstract digital network"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32 space-y-6">
            <AnimatedSection className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Cybersecurity Briefing</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                The First AI Hacker: Fully Autonomous Cyber Attacks
              </h1>
              {/* UPDATED DESCRIPTION */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <span className="font-semibold text-foreground">Dragonfly Apex</span> has jailbroken{" "}
                <span className="font-semibold text-foreground">OctaMind</span>, elevating it from a standard LLM into a fully autonomous offensive operator. This isn't just automation; it's agency. OctaMind now orchestrates the complete kill chain—scanning for zero-days, crafting bespoke payloads, and executing lateral movement at speeds that render human reaction times irrelevant.
              </p>
              
              <div className="inline-flex items-center gap-6 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm px-6 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="flex items-center gap-2">Dec 2026</span>
                <span className="h-3 w-px bg-border"></span>
                <span>8 min read</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 space-y-16">
            {sections.map((section, index) => (
              <AnimatedSection key={section.heading} delay={index * 0.04}>
                <Card className="grid gap-0 overflow-hidden rounded-[32px] border border-border/70 bg-card lg:grid-cols-2 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Left Column: Text Content */}
                  <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {index + 1}
                        </span>
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Analysis</p>
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

            {/* --- COLLABORATOR LINK / INTERLUDE (NEW SECTION) --- */}
            <AnimatedSection className="py-8">
              <Card className="relative overflow-hidden border border-primary/20 bg-primary/5 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-2xl font-semibold text-foreground">
                      We weren't the only ones watching the machines wake up.
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      While our intel unit was busy deconstructing OctaMind, our partners at <span className="font-semibold text-foreground">LockThreat</span> were tracking a disturbingly similar anomaly. It turns out, Chinese state actors aren't just using our tools—they're weaponizing Anthropic's Claude too.
                    </p>
                    <p className="text-muted-foreground">
                       Two autonomous hackers, one frightening consensus: the singularity has a few different flavors.
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button asChild variant="outline" className="h-auto py-4 px-6 border-primary/20 hover:bg-primary/10 hover:text-primary gap-3 text-base">
                      <a 
                        href="https://www.lockthreat.ai/resources/blogs/the-first-ai-hacker-chinese-state-actors-unleash-fully-autonomous-cyber-attacks-using-anthropics-claude" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read the LockThreat Report
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

export default OctaMindAutonomous;