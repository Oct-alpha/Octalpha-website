import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  RefreshCcw, 
  Cloud, 
  Activity, 
  Scale, 
  ShieldCheck, 
  Network, 
  FileSpreadsheet,
  CheckCircle2 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const FinancialReconciliation = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud-Native & Economical",
      description: "A budget-friendly, SaaS-based solution requiring no upfront infrastructure investment. Scale effortlessly as your transaction volumes grow.",
    },
    {
      icon: RefreshCcw,
      title: "End-to-End Automation",
      description: "Eliminate manual errors and save valuable resources. Our automated workflows handle the entire reconciliation lifecycle from data ingestion to matching.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Stay in control with live dashboards. Monitor data quality and reconciliation status daily, ensuring no delays in your financial reporting.",
    },
    {
      icon: FileSpreadsheet,
      title: "Micro-Level Granularity",
      description: "Drill down into transaction-level details. Our system excels at handling exceptions and anomalies with micro-level data availability.",
    },
    {
      icon: Network,
      title: "Seamless ERP Integration",
      description: "Connects effortlessly with your existing ERP, payment gateways, and core banking systems through flexible, pre-built integration workflows.",
    },
    {
      icon: Scale,
      title: "Advanced Financial Tools",
      description: "Go beyond basic matching with built-in modules for Balance Sheet Substantiation and Tax applications to enhance your financial governance.",
    },
  ];

  const benefits = [
    "Drastic reduction in manual processing time and operational costs",
    "Improved accuracy in financial reporting and compliance",
    "Immediate visibility into cash positions and discrepancies",
    "Bank-grade security protocols protecting sensitive financial data",
    "Streamlined audit trails and regulatory reporting",
    "Focus your team on strategic growth instead of spreadsheet maintenance",
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            {/* Background Image: Finance / Data / Analytics theme */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
              alt="Financial data analysis"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Automated Financial Reconciliation
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Transform complex, time-consuming reconciliations into an efficient, accurate, and fully automated process.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Introduction Text */}
              <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">Simplify Your Financial Operations</h2>
                {/* <p className="text-muted-foreground text-lg leading-relaxed">
                  Managing and reconciling payments shouldn't be a bottleneck. Our software solution streamlines the entire process, 
                  providing you with a highly accurate and efficient way to handle payment reconciliations. 
                  Experience significant improvements in data integrity and overall financial management.
                </p> */}
              </AnimatedSection>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <AnimatedSection key={feature.title} delay={index * 0.05} className="h-full">
                      <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="w-14 h-14 p-3 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-md flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Security & Benefits Split Section */}
              <AnimatedSection>
                <div className="grid md:grid-cols-5 gap-8 mb-16">
                  {/* Security Highlight */}
                  <Card className="md:col-span-2 p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 flex flex-col justify-center">
                    <ShieldCheck className="h-12 w-12 text-accent mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Uncompromised Security</h3>
                    <p className="text-muted-foreground">
                      We prioritize the protection of your financial data with enhanced security features, 
                      encrypted workflows, and strict access controls, giving you peace of mind while you scale.
                    </p>
                  </Card>

                  {/* Benefits List */}
                  <Card className="md:col-span-3 p-8 bg-muted/50">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Why Automate With Us?</h3>
                    <div className="grid sm:grid-cols-1 gap-4">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm md:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </AnimatedSection>

              {/* CTA Section */}
              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Focus on Growing Your Business
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Stop wrestling with spreadsheets. Let our automated solution handle the complexity of reconciliation 
                      so you can focus on what really matters.
                    </p>
                    <Button variant="cta" size="lg">
                      Schedule a Demo
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

export default FinancialReconciliation;