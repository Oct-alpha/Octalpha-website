import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const MAPS_URL = "https://maps.google.com/?q=904+9th+floor+Tower+B+Business+Central+Towers+Dubai+Internet+City+Dubai+UAE";

const isMobile = () => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const phoneHref = (number) => (isMobile() ? `tel:+${number}` : `https://wa.me/${number}`);

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* 1. Brand Info & Socials */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/octalpha-logo-Photoroom.png" 
                alt="Octalpha Business Solutions" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted technology partner for end-to-end IT solutions in the UAE and GCC region.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/octalpha/" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/octalphabusinesssolutions" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/octalpha_/?hl=en" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
              <a href="https://x.com/OctalphaS" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="X (Twitter)">
                <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* 2. Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/customers" className="text-primary-foreground/70 hover:text-accent transition-colors">Partnerships</Link></li>
              <li><Link to="/blogs" className="text-primary-foreground/70 hover:text-accent transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* 3. Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/it-infrastructure" className="text-primary-foreground/70 hover:text-accent transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/cloud-solutions" className="text-primary-foreground/70 hover:text-accent transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/ai-grc-automation" className="text-primary-foreground/70 hover:text-accent transition-colors">AI Powered GRC Automation</Link></li>
              <li><Link to="/services/customer-journey" className="text-primary-foreground/70 hover:text-accent transition-colors">Customer Journey Management</Link></li>
              <li><Link to="/services/financial-reconciliation" className="text-primary-foreground/70 hover:text-accent transition-colors">Financial Reconciliation</Link></li>
              <li><Link to="/services/digital-collaboration" className="text-primary-foreground/70 hover:text-accent transition-colors">Digital Collaboration</Link></li>
              <li><Link to="/services/cybersecurity" className="text-primary-foreground/70 hover:text-accent transition-colors">Cybersecurity Solutions</Link></li>
            </ul>
          </div>

          {/* 4. Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/managed-it-solutions" className="text-primary-foreground/70 hover:text-accent transition-colors">Managed IT Services</Link></li>
              <li><Link to="/services/backup-and-disaster-recovery" className="text-primary-foreground/70 hover:text-accent transition-colors">Back up & Disaster Recovery</Link></li>
              <li><Link to="/services/grc" className="text-primary-foreground/70 hover:text-accent transition-colors">Governance Risk & Compliance</Link></li>
            </ul>
          </div>
          
          {/* 5. Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">

              {/* Address → Google Maps */}
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors leading-relaxed block"
                >
                  904, 9th floor, Tower B,<br />
                  Business Central Towers,<br />
                  Dubai Internet City, UAE
                </a>
              </li>

              {/* Phone → dialer on mobile, WhatsApp Web on desktop */}
              <li>
                <a
                  href={phoneHref("97142424920")}
                  target={isMobile() ? undefined : "_blank"}
                  rel={isMobile() ? undefined : "noopener noreferrer"}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Tel: +971 4 242 4920
                </a>
                <a
                  href={phoneHref("971526543343")}
                  target={isMobile() ? undefined : "_blank"}
                  rel={isMobile() ? undefined : "noopener noreferrer"}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Tel: +971 5 265 43343
                </a>
              </li>

              {/* Email → Gmail compose */}
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info.dxb@octalpha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info.dxb@octalpha.com
                </a>
              </li>

            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Octalpha Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};