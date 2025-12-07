import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  CalendarClock, 
  MessageSquareQuote, 
  BarChart3, 
  MonitorSmartphone, 
  MapPin, 
  ArrowRightLeft 
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const CustomerJourney = () => {
  // Replaced generic project phases with specific CJM Core Solutions
  const solutions = [
    {
      icon: Users,
      title: "Intelligent Queue Management",
      description: "Streamline visitor flows and reduce wait times with smart queuing systems. Manage walk-ins and appointments seamlessly to enhance the on-site experience.",
      features: ["Virtual queuing", "Ticketless options", "Priority management", "Wait time notifications"],
    },
    {
      icon: CalendarClock,
      title: "Online Appointment Scheduling",
      description: "Empower customers to book appointments 24/7. Balance staff workload and reduce lobby congestion by managing demand before visitors arrive.",
      features: ["Self-service booking", "Calendar integration", "Automated reminders", "Resource allocation"],
    },
    {
      icon: MessageSquareQuote,
      title: "Customer Feedback & Surveys",
      description: "Capture real-time sentiment at key touchpoints. Understand visitor satisfaction instantly to make data-driven improvements to your service delivery.",
      features: ["Touchscreen kiosks", "SMS/Email surveys", "NPS & CSAT tracking", "Instant alert notifications"],
    },
    {
      icon: MonitorSmartphone,
      title: "Digital Signage & Guidance",
      description: "Keep visitors informed and directed with integrated digital displays. Show queue status, promotional content, and wayfinding information in real-time.",
      features: ["Counter displays", "Lobby overview screens", "Personalized messaging", "Multi-language support"],
    },
  ];

  // Replaced generic services with Advanced Capabilities/Benefits
  const capabilities = [
    {
      icon: BarChart3,
      title: "Predictive Analytics & Reporting",
      description: "Leverage AI-driven insights to forecast visitor volume, optimize staffing levels, and identify service bottlenecks before they happen.",
    },
    {
      icon: ArrowRightLeft,
      title: "Omnichannel Flow Management",
      description: "Connect the digital and physical worlds. Ensure a consistent journey whether a customer interacts via mobile, web, or in-person.",
    },
    {
      icon: MapPin,
      title: "Multi-Location Centralization",
      description: "Manage complex branch networks from a single dashboard. Standardize processes and compare performance across all your locations.",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            {/* Background: Flow / Movement / People theme */}
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
              alt="Customer journey flow"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Customer Journey Management
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Optimize every interaction from the first click to the final visit. 
                Manage flows, reduce waiting, and exceed expectations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Core Solutions Grid (Previously Phases) */}
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Core Flow Solutions</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <AnimatedSection key={solution.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-gradient-primary rounded-lg shadow-md shrink-0">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6 flex-grow">{solution.description}</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Advanced Capabilities Grid (Previously Services) */}
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Advanced Capabilities</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedSection key={item.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md w-fit">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">{item.description}</p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* CTA Section */}
              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Transform Your Visitor Experience
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Join organizations worldwide in creating efficient, pleasant, and measurable customer journeys.
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

export default CustomerJourney;