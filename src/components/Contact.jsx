import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
// UPDATED: Imported FontAwesome for solid brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Business Central Tower, Tower B, Office No. 2408, Dubai Internet City, Dubai, UAE",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "Tel: +971 5 265 43343" /* | Fax: +971 4 242 4917" */,
    },
    {
      icon: Mail,
      title: "Email",
      content: "info.dxb@octalpha.com",
    },
    {
      icon: Share2,
      title: "Follow Us",
      content: (
        // UPDATED: Increased gap to gap-6 and icon size
        <div className="flex items-center gap-6 mt-2">
          <a 
            href="https://www.linkedin.com/company/octalpha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#0077b5] transition-colors hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
          <a 
            href="https://www.facebook.com/octalphabusinesssolutions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#1877F2] transition-colors hover:scale-110 duration-200"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/octalpha_/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#E4405F] transition-colors hover:scale-110 duration-200"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
          <a 
            href="https://x.com/OctalphaS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.05}>
                  <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <div className="text-muted-foreground">{item.content}</div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};