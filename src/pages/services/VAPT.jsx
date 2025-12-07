import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Radar, 
  Skull, 
  ListChecks, 
  BadgeCheck, 
  Bug, 
  FileWarning, 
  CheckCircle2 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const VAPT = () => {
  const services = [
    {
      icon: Radar, // Scanning = Radar/Scan
      title: "Comprehensive Vulnerability Scanning",
      description: "Conduct Network Infrastructure Scanning, Web Application Vulnerability Assessments, and System Configuration Reviews. Includes Database Security and Wireless Network testing.",
    },
    {
      icon: Skull, // Penetration Testing = Attack simulation
      title: "Penetration Testing",
      description: "Simulate real-world attacks using Black Box, White Box, and Gray Box methodologies. We also perform specialized Social Engineering testing to identify human risks.",
    },
    {
      icon: ListChecks, // Risk Prioritization = Prioritized List
      title: "Risk Prioritization & Remediation",
      description: "Receive detailed Risk Assessment & Scoring with a clear remediation roadmap. We provide priority-based fix recommendations and implementation guidance.",
    },
    {
      icon: BadgeCheck, // Compliance = Certified/Badged
      title: "Compliance-Driven Assessments",
      description: "Ensure alignment with ISO 27001, PCI DSS, and HIPAA standards. Our testing also covers GDPR Data Protection and NESA UAE IAS compliance requirements.",
    },
    {
      icon: Bug, // Advanced Testing = Finding Bugs
      title: "Advanced Security Testing",
      description: "Thoroughly test Mobile Applications, APIs, and Cloud Infrastructure. We also conduct specialized security assessments for IoT devices and containerized environments.",
    },
    {
      icon: FileWarning, // Post-Assessment = Report/Warning file
      title: "Post-Assessment Support",
      description: "Get detailed technical reports and executive summaries. Includes dedicated remediation support, security awareness training, and ongoing consultation.",
    },
  ];

  const benefits = [
    "Identify weaknesses before hackers do",
    "Improve your compliance posture",
    "Reduce business risk and downtime",
    "Enhance security awareness",
    "Protect your reputation and data"
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
              alt="Vulnerability Assessment and Penetration Testing"
              className="h-full w-full object-cover opacity-20"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Vulnerability Assessment & Penetration Testing
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Identify and fix security vulnerabilities before they become threats. Our VAPT services provide comprehensive security testing to protect your assets.
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
                    <h3 className="text-3xl font-bold mb-8">Key Benefits of Our VAPT Services</h3>
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
                    <h3 className="text-3xl font-bold text-[#0ea5e9] mb-6">Our VAPT Expertise</h3>
                    <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                      Our certified security professionals use industry-leading tools and methodologies to conduct thorough security assessments. We provide actionable insights and practical recommendations to strengthen your security posture.
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-slate-700 pt-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#0ea5e9] mb-2">1000+</div>
                        <div className="text-slate-400">Security Tests Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#0ea5e9] mb-2">24/7</div>
                        <div className="text-slate-400">Support Available</div>
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
                      Secure Your Infrastructure Today
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Don't wait for a breach to happen. Schedule a comprehensive vulnerability assessment to understand your security posture and meet international compliance standards.
                    </p>
                    <Button variant="cta" size="lg">
                      Get a Free Quote
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

export default VAPT;