import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlobeLock, Laptop, Fingerprint, Siren, CloudCog, ClipboardList } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const Cybersecurity = () => {
  const services = [
    {
      icon: GlobeLock, // Global Network Security
      title: "Network Security",
      description: "Deploy Next-Generation Firewalls (NGFW), IDS/IPS Systems, and Secure Web Gateways. Includes Network Access Control (NAC) and robust VPN solutions to secure your perimeter.",
    },
    {
      icon: Laptop, // Endpoint = Devices (Laptop)
      title: "Endpoint Security",
      description: "Protect every device with Endpoint Protection Platforms (EPP) and Detection & Response (EDR). Covers Mobile Device Management (MDM), anti-malware, and application whitelisting.",
    },
    {
      icon: Fingerprint, // Identity = Fingerprint
      title: "Identity & Access Management",
      description: "Secure user access with Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Privileged Access Management (PAM). Includes Directory Services and Password Vaults.",
    },
    {
      icon: Siren, // Threat Detection = Alert/Siren
      title: "Threat Detection & Response",
      description: "Detect and neutralize threats using SIEM Solutions, XDR, and MDR. We leverage Threat Intelligence Platforms and automated Incident Response (SOAR) for rapid action.",
    },
    {
      icon: CloudCog, // Cloud Security = Cloud + Gears
      title: "Cloud Security",
      description: "Safeguard cloud assets with CASB, CSPM, and CWPP. Features Web Application Firewalls (WAF) and Zero Trust Network Access (ZTNA) for modern workloads.",
    },
    {
      icon: ClipboardList, // Assessment = Checklist
      title: "Security Assessment",
      description: "Evaluate your posture with VAPT Services, risk assessments, and security audits. Includes rigorous compliance testing and comprehensive penetration testing.",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
              alt="Cybersecurity operations center"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Cybersecurity Services</h1>
              <p className="text-xl text-primary-foreground/80">
                Comprehensive security solutions to protect your business from evolving cyber threats.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary relative overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Protect Your Business from Cyber Threats
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Our multi-layered security approach ensures comprehensive protection across all attack surfaces,
                      from network perimeter to endpoint devices and cloud infrastructure.
                    </p>
                    <Button variant="cta" size="lg">
                      Schedule Security Assessment
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

export default Cybersecurity;