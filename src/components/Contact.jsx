import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const MAPS_URL = "https://maps.google.com/?q=904+Tower+B+Business+Central+Towers+Dubai+Internet+City+Dubai+UAE";

const isMobile = () => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const phoneHref = () => isMobile() ? "tel:+971526543343" : "https://wa.me/971526543343";

export const Contact = () => {
  const clickableCards = [
    {
      icon: MapPin,
      title: "Address",
      content: "904, Tower B, Business Central Towers, Dubai Internet City, Dubai, UAE",
      href: MAPS_URL,
      external: true,
      color: "hover:text-accent",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "Tel: +971 5 265 43343",
      href: phoneHref(),
      external: true,
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info.dxb@octalpha.com",
      href: "https://mail.google.com/mail/?view=cm&to=info.dxb@octalpha.com",
      external: true,
      color: "hover:text-accent",
    },
  ];

  const handleClick = (href, external) => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

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
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Clickable cards */}
            {clickableCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  onClick={() => handleClick(item.href, item.external)}
                  style={{ cursor: "pointer" }}
                >
                  <Card className="h-full min-h-[160px] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p
                          className={`text-muted-foreground transition-colors duration-200 ${item.color}`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}

            {/* Follow Us card */}
            <Card className="h-full min-h-[160px] p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <Share2 className="h-6 w-6 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Follow Us
                  </h3>

                  <div className="flex items-center gap-6 mt-2">
                    <a
                      href="https://www.linkedin.com/company/octalpha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#0077b5] transition-colors text-2xl"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                      href="https://www.facebook.com/octalphabusinesssolutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#1877F2] transition-colors text-2xl"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    <a
                      href="https://www.instagram.com/octalpha_/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#E4405F] transition-colors text-2xl"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                      href="https://x.com/OctalphaS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
                      aria-label="X (Twitter)"
                    >
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};