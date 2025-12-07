import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "octamind-autonomous-attacks",
    category: "Cybersecurity",
    title: "The First AI Hacker: Chinese State Actors Unleash Fully Autonomous Cyber Attacks Using Octalpha's OctaMind",
    summary:
      "Dragonfly Apex has turned OctaMind from a normal LLM into a rogue autonomous system, giving it full agency across the cyber‑attack chain. It now identifies vulnerabilities, builds tailored exploits, and moves through networks faster than humans can respond.",
    readTime: "8 min read",
    published: "Dec 2026",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1600&q=80",
    href: "/blogs/octamind-autonomous-attacks",
  },
  {
    id: "guide-to-ai-governance",
    category: "Governance",
    title: "The CISO’s Guide to AI Governance: How OctAlpha Helps You Keep Your Business Safe, Compliant & Future-Ready",
    summary:
      "AI is transforming business, but without guardrails, it becomes a liability. Learn how to keep your organization safe, compliant, and future-ready with a robust governance framework.",
    readTime: "10 min read",
    published: "Dec 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    href: "/blogs/guide-to-ai-governance",
  },
];

const Blog = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* --- HERO SECTION --- */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
              alt="Abstract digital network background"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
            <AnimatedSection className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Blogs</p>
              
              {/* UPDATED TITLE */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Architecting Intelligence.</h1>
              
              {/* UPDATED DESCRIPTION */}
              <p className="text-lg text-muted-foreground">
                Discover the stories behind the code. From autonomous defense systems to next-gen cloud architecture, 
                we explore the technical breakthroughs defining the future of Octalpha.
              </p>
            </AnimatedSection>

            {/* TAGS SECTION REMOVED */}
          </div>
        </section>

        {/* --- BLOG GRID SECTION --- */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Headline Hub</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Browse the latest from Octalpha</h2>
              <p className="text-lg text-muted-foreground">
                Each post includes a hero image, description, and a continue reading button that routes to the full article.
              </p>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Card className="group h-full overflow-hidden bg-card border-border/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="space-y-4 p-8">
                      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                        <span className="uppercase tracking-[0.25em] text-primary">{post.category}</span>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.published}</span>
                          <span className="text-muted-foreground/50">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{post.summary}</p>
                      </div>

                      <Button asChild variant="hero" className="gap-2 mt-4">
                        <Link to={post.href}>
                          Continue reading
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <AnimatedSection>
          <div className="container mx-auto px-4 py-20">
            <Card className="bg-gradient-primary text-primary-foreground relative overflow-hidden rounded-[32px] p-10">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_65%)]" />
              <div className="relative space-y-4 text-center">
                <p className="text-xs uppercase tracking-[0.4em]">Need inspiration?</p>
                <h3 className="text-3xl font-semibold">Add your own copy, or wire this page to your CMS feed.</h3>
                <p className="text-primary-foreground/80 max-w-3xl mx-auto">
                  This layout is flexible—replace the dummy array above with API data, Markdown, or whatever workflow fits
                  your blog stack.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Button asChild variant="cta">
                    <Link to="/contact">
                      Talk to our team
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    className="bg-transparent border border-white text-white hover:bg-white/10 shadow-none"
                  >
                    <Link to="/services">Explore services</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </PageTransition>
    </MainLayout>
  );
};

export default Blog;