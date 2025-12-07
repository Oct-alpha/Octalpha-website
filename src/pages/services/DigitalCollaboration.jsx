import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MonitorPlay, 
  Video, 
  PhoneForwarded, 
  CalendarCheck, 
  TabletSmartphone, 
  Check,
  Projector // Imported Projector for Interactive Screens
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const DigitalCollaboration = () => {
  const services = [
    {
      icon: MonitorPlay, // Teams Rooms = Screen/Presentation
      title: "Microsoft Teams Rooms",
      description: "Fully integrated Teams meeting rooms with advanced AV equipment and seamless collaboration.",
    },
    {
      icon: Video, // Zoom Rooms = Video Camera
      title: "Zoom Rooms",
      description: "Professional Zoom conference rooms with HD video, audio, and screen sharing capabilities.",
    },
    {
      icon: PhoneForwarded, // PABX = Call Routing
      title: "PABX Systems",
      description: "Modern IP-based phone systems for efficient internal and external communications.",
    },
    {
      icon: Projector, // NEW: Unique icon for Interactive Screens
      title: "All-in-One Interactive Screens",
      description: "Advanced touch-enabled displays combining digital whiteboarding, wireless casting, and video conferencing.",
    },
    {
      icon: CalendarCheck, // Booking = Calendar + Check
      title: "Smart Room Booking",
      description: "Intelligent room scheduling and resource management systems.",
    },
    {
      icon: TabletSmartphone, // Mobile/Remote = Multiple devices
      title: "Mobile & Remote Enablement",
      description: "Solutions for mobile workforce and remote collaboration capabilities.",
    },
  ];

  const features = [
    "Enterprise-grade Wi-Fi with high availability design",
    "Access Points and Controllers for optimal coverage",
    "Managed switches for network reliability",
    "Guest user management and security",
    "Unified Communications platforms",
    "Video conferencing solutions",
    "Smart meeting room technology",
    "Remote workforce enablement tools",
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Digital collaboration workshop"
              className="h-full w-full object-cover opacity-30"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Digital Collaboration Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Empower your teams with modern unified communications and collaboration tools.
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
                        <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-muted/50 mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                    Complete Unified Communications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Transform Your Workplace Communication
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Enable seamless collaboration across your organization with our integrated communication solutions.
                    </p>
                    <Button variant="cta" size="lg">
                      Request Demo
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

export default DigitalCollaboration;