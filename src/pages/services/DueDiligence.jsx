import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Cloud, 
  ScanSearch, 
  Code2, 
  Database, 
  ClipboardList, 
  Network, 
  Settings2, 
  FileCheck, 
  Users, 
  Globe, 
  ShieldAlert, 
  UserCheck, 
  Target, 
  Building2,
  Cpu 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const RiskAssessment = () => {
  // 16 Items for a perfect 4x4 grid
  // Theme: Alternating between Brand Cyan (#0ea5e9) and Dark Slate (bg-slate-800)
  const riskDomains = [
    { title: "Mobile Applications", icon: Smartphone, color: "bg-[#0ea5e9]" }, 
    { title: "Private & Public Cloud", icon: Cloud, color: "bg-slate-800" }, 
    { title: "Threat & Vulnerability", icon: ScanSearch, color: "bg-[#0ea5e9]" },
    { title: "Application Security", icon: Code2, color: "bg-slate-800" },
    { title: "Data Governance", icon: Database, color: "bg-[#0ea5e9]" },
    { title: "Process Reviews", icon: ClipboardList, color: "bg-slate-800" },
    { title: "Network Security", icon: Network, color: "bg-[#0ea5e9]" },
    { title: "IT General Controls", icon: Settings2, color: "bg-slate-800" },
    { title: "Compliance Frameworks", icon: FileCheck, color: "bg-[#0ea5e9]" },
    { title: "3rd Party Risk", icon: Users, color: "bg-slate-800" },
    { title: "Legal / GDPR", icon: Globe, color: "bg-[#0ea5e9]" },
    { title: "Data Privacy Laws", icon: ShieldAlert, color: "bg-slate-800" },
    { title: "Executive Security", icon: UserCheck, color: "bg-[#0ea5e9]" },
    { title: "Strategic Management", icon: Target, color: "bg-slate-800" },
    { title: "Enterprise Applications", icon: Building2, color: "bg-[#0ea5e9]" },
    { title: "IoT & Embedded Systems", icon: Cpu, color: "bg-slate-800" },
  ];

  return (
    <MainLayout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
              alt="Risk Assessment Background"
              className="h-full w-full object-cover opacity-25"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
                Risk Assessment
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Comprehensive Risk Coverage
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Identify operational, regulatory, and security risks across business functions before they impact your business value.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content Container */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Intro Text */}
              <AnimatedSection className="mb-16 text-center max-w-4xl mx-auto">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our risk assessment services provide clarity on your cybersecurity, regulatory compliance, and operational risks. Whether you are leading a merger, acquisition, or third-party relationship, we help uncover hidden weaknesses and data security gaps.
                </p>
              </AnimatedSection>

              {/* 16-Card Colored Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {riskDomains.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedSection key={item.title} delay={index * 0.05}>
                      <div 
                        className={`${item.color} p-6 h-40 flex flex-col items-center justify-center text-center rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-default`}
                      >
                        <Icon className="h-10 w-10 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-white font-semibold text-lg leading-tight px-2">
                          {item.title}
                        </h3>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Lifecycle Image Section */}
              <AnimatedSection className="mb-16">
                 <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground">Our Methodology</h2>
                 </div>
                 <Card className="p-4 md:p-8 bg-card border-border shadow-sm">
                    <img 
                      src="/Img/Index/lifecycle.png" 
                      alt="Risk Assessment Lifecycle Methodology" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                 </Card>
              </AnimatedSection>

              {/* CTA Box - Updated to Dark Blue Background with Cyan Button */}
              <AnimatedSection>
                <Card className="p-10 md:p-14 bg-[#072144] relative overflow-hidden text-center border-none shadow-2xl">
                    {/* Background Texture similar to image noise/gradient */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#1e40af,transparent_70%)]"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        
                        {/* INSIGHT PILL - Adjusted to fit dark theme */}
                        {/* <div className="bg-[#0ea5e9] text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-md">
                            Insight
                        </div> */}
                        
                        {/* Title */}
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Gain a clear view of security risks across your entire environment.
                        </h2>
                        
                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
                            Our unique approach goes beyond standard checklists to uncover real-world threats that impact your business value and reputation.
                        </p>
                        
                        {/* Button - Bright Cyan to pop against dark blue */}
                        <Button 
                          size="lg" 
                          className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-6 text-lg shadow-lg border-none"
                        >
                            Start Your Assessment
                        </Button>
                    </div>
                </Card>
              </AnimatedSection>

            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default RiskAssessment;