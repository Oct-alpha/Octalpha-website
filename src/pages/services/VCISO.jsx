import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Landmark, 
  Scale, 
  BookOpen, 
  FileSearch, 
  Crown, 
  CheckCircle2 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const VCISO = () => {
  const services = [
    {
      icon: Briefcase, // Expertise/Executive role
      title: "On-Demand CISO Expertise",
      description: "Leverage flexible engagement models with no full-time salary overhead. We provide scalable security leadership and access to multiple experts for cost-effective executive guidance.",
    },
    {
      icon: Landmark, // Governance/Structure
      title: "Security Strategy & Governance",
      description: "Develop robust security strategies and policy frameworks. We design governance structures, plan security roadmaps, and provide comprehensive executive security reporting.",
    },
    {
      icon: Scale, // Compliance/Law/Balance
      title: "Risk Management & Compliance",
      description: "Expertly manage risk mitigation and ensure alignment with ISO, PCI, and GDPR. We handle regulatory requirements, audit preparation, and third-party risk management.",
    },
    {
      icon: BookOpen, // Training/Knowledge
      title: "Security Awareness & Training",
      description: "Conduct employee security training and phishing simulation programs. Includes tailored awareness campaigns, executive briefings, and incident response training.",
    },
    {
      icon: FileSearch, // Audit/Review/Advisory
      title: "Advisory & Audit Support",
      description: "Benefit from ongoing security advisory, internal audits, and vendor assessments. We conduct regular program reviews to ensure continuous improvement.",
    },
    {
      icon: Crown, // Board Level/Leadership/Top Tier
      title: "Board-Level Guidance",
      description: "Receive executive reporting and professional board presentations. We act as your trusted partner for strategic planning and effective risk communication.",
    },
  ];

  const benefits = [
    "Affordable executive-level cybersecurity leadership",
    "Faster compliance readiness",
    "Trusted partner for board-level security guidance",
    "Access to multiple security experts",
    "Scalable security leadership"
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
              alt="Virtual CISO Executive Leadership"
              className="h-full w-full object-cover opacity-20"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Virtual CISO Services
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Executive-Level Cybersecurity Leadership Without Full-Time Cost. Get C-Level security expertise to guide your strategy, policy, and compliance.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md w-fit">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">
                          {service.description}
                        </p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection className="mb-20">
                <div className="grid md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
                  <div className="bg-[#0ea5e9] p-10 md:p-12 text-white">
                    <h3 className="text-3xl font-bold mb-8">Key Benefits of Our vCISO Services</h3>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                          <span className="text-lg font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-[#0ea5e9] mb-6">Our vCISO Expertise</h3>
                    <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                      Our virtual CISOs bring decades of experience in cybersecurity leadership, risk management, and compliance. We understand both technical security challenges and business objectives, ensuring your security strategy drives business value.
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-slate-700 pt-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#0ea5e9] mb-2">15+</div>
                        <div className="text-slate-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#0ea5e9] mb-2">24/7</div>
                        <div className="text-slate-400">Executive Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary relative overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Elevate Your Security Strategy
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Don't leave your security strategy to chance. Partner with an experienced vCISO to lead your organization's cybersecurity efforts and ensure regulatory compliance.
                    </p>
                    <Button variant="cta" size="lg">
                      Schedule a Consultation
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

export default VCISO;