import { Card } from "@/components/ui/card";
import { Server, Shield, FileCheck, Headphones, Cloud, Wifi, Database, Lock } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Services = () => {
  const services = [
    {
      icon: Server,
      title: "IT Infrastructure & Cloud Solutions",
      items: [
        "IT Infrastructure Design & Implementation",
        "Virtualization & Applications",
        "Cloud Solutions (Azure, AWS, Oracle, Google)",
        "Data Center Building",
        "Unified Communications",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      items: [
        "Network Security (NGFW, IDS/IPS, VPN)",
        "Endpoint Security (EPP, EDR, MDM)",
        "Identity & Access Management (IAM)",
        "Threat Detection & Response (SIEM, XDR, MDR)",
        "Cloud Security (CASB, CSPM, WAF)",
      ],
    },
    {
      icon: FileCheck,
      title: "Governance, Risk & Compliance (GRC)",
      items: [
        "ISO 27001, ISO 27701, GDPR Compliance",
        "NIST Cybersecurity Framework",
        "UAE PDPL & NESA IAS Standards",
        "PCI-DSS, HIPAA Compliance",
        "Risk Management & Audit Services",
      ],
    },
    {
      icon: Headphones,
      title: "Managed IT Services",
      items: [
        "24/7 Remote & Onsite Support",
        "Proactive System Maintenance",
        "Backup & Disaster Recovery",
        "IT Asset & License Management",
        "Annual Maintenance Contracts",
      ],
    },
  ];

  const securityServices = [
    {
      icon: Lock,
      title: "VAPT Services",
      description: "Comprehensive vulnerability scanning and penetration testing to identify weaknesses before hackers do.",
    },
    {
      icon: Shield,
      title: "Virtual CISO (vCISO)",
      description: "On-demand CISO expertise with security strategy, policies, governance framework, and ongoing advisory support.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.05}>
                <Card className="p-8 hover:shadow-strong transition-all duration-500 border-l-4 border-l-accent">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground flex-1 pt-2">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Security Specialty Services */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {securityServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.05}>
                <Card className="p-8 bg-gradient-primary hover:shadow-strong transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-foreground flex-1 pt-2">{service.title}</h3>
                  </div>
                  <p className="text-primary-foreground/80 text-lg">{service.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
