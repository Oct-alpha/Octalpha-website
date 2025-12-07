import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Cloud, Database, RefreshCw, FileKey, Activity, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const BackupDisasterRecovery = () => {
  const services = [
    {
      icon: Database,
      title: "Automated Data Backup",
      description: "Protect servers and workstations with fully automated, incremental backups. We ensure zero data loss while optimizing storage costs and network performance.",
    },
    {
      icon: Cloud,
      title: "Cloud Disaster Recovery (DRaaS)",
      description: "Replicate critical systems to a secure cloud for near-instant failover. Our DRaaS ensures remote access and business continuity during site-wide outages.",
    },
    {
      icon: ShieldCheck,
      title: "Ransomware Protection",
      description: "Defend against attacks with immutable, read-only storage. We guarantee clean, unalterable recovery points to neutralize ransomware threats.",
    },
    {
      icon: Activity,
      title: "Business Continuity Planning",
      description: "Go beyond backups with comprehensive Business Continuity Plans. We define roles and recovery protocols to keep operations running during any crisis.",
    },
    {
      icon: FileKey,
      title: "Compliance & Archiving",
      description: "Ensure long-term compliance with secure data archiving. Our solutions meet GDPR, HIPAA, and industry standards, keeping your data audit-ready.",
    },
    {
      icon: RefreshCw,
      title: "Rapid Recovery Testing",
      description: "Verify data integrity through automated testing and regular drills. We ensure backups are restorative and consistently meet Recovery Time Objectives.",
    },
  ];

  const benefits = [
    "Minimize financial loss with rapid Recovery Time Objectives (RTO)",
    "Prevent data loss with strict Recovery Point Objectives (RPO)",
    "Protect brand reputation and customer trust during outages",
    "End-to-end encryption for data in transit and at rest",
    "Scalable cloud storage that grows with your data needs",
    "24/7 monitoring of backup health and success rates",
    "Seamless failover for critical business applications",
    "Full compliance with local and international data regulations",
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            {/* UPDATED BACKGROUND IMAGE: Digital Security / Data Protection Theme */}
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80"
              alt="Digital security and data backup"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Backup &amp; Disaster Recovery
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Safeguard your critical assets with enterprise-grade data protection, automated backups, and rapid recovery strategies.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.title} delay={index * 0.05} className="h-full">
                      <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="w-14 h-14 p-3 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-md flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Benefits Section */}
              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-muted/50 mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Trust Our Recovery Solutions?</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              {/* CTA Section */}
              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Is Your Business Prepared for the Unexpected?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Don't wait for a disaster to strike. Secure your critical assets today with our comprehensive recovery solutions and risk assessment.
                    </p>
                    <Button variant="cta" size="lg">
                      Get a Free Risk Assessment
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

export default BackupDisasterRecovery;