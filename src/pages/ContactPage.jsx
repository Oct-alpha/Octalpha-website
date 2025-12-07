import { Mail, MessageCircle, Phone, Send, MapPin } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Contact } from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickContacts = [
  {
    title: "Talk to sales",
    description: "Schedule a discovery call to scope projects, timelines, and commercials.",
    icon: <Phone className="h-6 w-6" />,
    action: "Book a call",
    href: "tel:+971526543343",
  },
  {
    title: "Request a proposal",
    description: "Share your requirements and we will deliver a tailored proposal within 48 hours.",
    icon: <Mail className="h-6 w-6" />,
    action: "Email us",
    href: "mailto:info.dxb@octalpha.com",
  },
  {
    title: "Need rapid support?",
    description: "Existing customers can raise tickets or start a live chat with our helpdesk team.",
    icon: <MessageCircle className="h-6 w-6" />,
    action: "Open support",
    href: "mailto:support@octalpha.com",
  },
];

const ContactPage = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* --- HERO SECTION --- */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
              alt="Dubai city skyline"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
            <AnimatedSection className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Let’s build the future of your IT together</h1>
              <p className="text-lg text-muted-foreground">
                Reach out for consultations, partnerships, or support—we are ready to respond quickly and thoughtfully.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
                <MapPin className="h-4 w-4 text-accent" />
                <p>2408, 24th floor, Tower B, Business Central Towers, Dubai Internet City, Dubai, UAE</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- 1. CONTACT FORM SECTION --- */}
        <section className="container mx-auto px-4 py-20">
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </section>

        {/* --- 2. MAP SECTION (Full Width) --- */}
        <section className="w-full h-[400px] md:h-[500px] relative bg-muted/20">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2005021273934!2d55.15392437595676!3d25.094982739462557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4162609595%3A0x6968364539169607!2sBusiness%20Central%20Towers!5e0!3m2!1sen!2sae!4v1709225000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                // Map is colorful (no grayscale filter)
                className="w-full h-full"
                title="Octalpha Office Location Map"
            ></iframe>
            
            {/* Overlay Card for Context */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-card/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-border/50 max-w-xs hidden md:block">
                <h4 className="font-bold text-foreground mb-1">Visit Our Office</h4>
                <p className="text-sm text-muted-foreground">
                    Business Central Towers, Tower B<br/>
                    Dubai Internet City
                </p>
                <a 
                    href="https://maps.app.goo.gl/BusinessCentralTowers" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-accent font-semibold mt-2 inline-flex items-center hover:underline"
                >
                    Get Directions <Send className="h-3 w-3 ml-1" />
                </a>
            </div>
        </section>

        {/* --- 3. THE 3 CTA CARDS (Quick Contacts) --- */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {quickContacts.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <Card className="h-full p-8 bg-card border-border/70 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <Button asChild variant="hero" className="group">
                    <a href={item.href}>
                      {item.action}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
};

export default ContactPage;