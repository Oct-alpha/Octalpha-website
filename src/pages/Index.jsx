import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { PageTransition } from "@/components/animations/PageTransition";
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  // Generate array for 30 vendor images
  const vendorCount = 30;
  const vendors = Array.from({ length: vendorCount }, (_, i) => i + 1);

  // --- CAROUSEL REFS & STATE ---
  const carouselRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- INFINITE SCROLL & DRAG LOGIC ---
  useEffect(() => {
    const slider = carouselRef.current;
    let animationFrameId;

    const animate = () => {
      // If user is NOT dragging, we auto-scroll
      if (!isDown && slider) {
        slider.scrollLeft += 1; // Adjust speed (0.5 for slower, 2 for faster)

        // Infinite Loop Logic:
        // If we have scrolled past the first set of items (halfway), reset to 0
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDown]);

  // --- DRAG HANDLERS ---
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // *2 determines drag speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // --- PAGE CONTENT DATA ---
  const capabilityHighlights = [
    {
      title: "One SLA, Zero Fragmentation",
      description: "Unified project management, architecture, support, billing, and governance across every engagement.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&q=80",
    },
    {
      title: "End-to-End Technology Support",
      description:
        "Solutions for every department—from IT and Finance to Compliance, Marketing, and C-level stakeholders.",
      image: "/Img/Index/Personalised_Service.jpg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Azure, AWS, Oracle, and Google Cloud specialists delivering cost-optimized, secure cloud journeys.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=640&q=80",
    },
    {
      title: "24/7 Managed IT Services",
      description: "Let our dedicated team handle your IT operations so you can focus on driving your core business forward.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=640&q=80",
    },
  ];

  const successStories = [
    {
      title: "IT Enterprise",
      description:
        "Built the HQ data center for 160+ stores with DR sites, unified communications, virtualization, backup and DR, WLAN, Exchange Server, UPS/EMS, and EDR—supported through a 5-year AMC.",
      image: "/Img/Index/Retail_Enterprise.png",
    },
    {
      title: "Enterprise Corporation",
      description:
        "vCISO for 2+ years covering risk assessments, VAPT, data center revamp, DR site, virtualization, networking, UPS/EMS, and ongoing AMC aligned with compliance goals.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=720&q=80",
    },
    {
      title: "Security-Focused Organization",
      description:
        "Delivered privileged access management, OPSWAT sanitization, Fortinet SIEM/NAC/Analyzer, ManageEngine UEM & MDM, data center power, CCTV networking, and a 6-year AMC.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=720&q=80",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <Hero />

        <section className="bg-background">
          <div className="container mx-auto px-4 py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">About Octalpha</p>
              <h2 className="text-4xl font-bold text-foreground">From Data Centers to Digital Transformation</h2>
              <p className="text-lg text-muted-foreground">
                Octalpha Business Solutions is a UAE-based technology partner focused on enabling businesses through intelligent and secure IT solutions for the past 10 years.
                We have helped various organizations scale faster and smarter with tailored services in IT infrastructure, cybersecurity, data center support, cloud enablement, compliance, and managed services.
              </p>
              <p className="text-lg text-muted-foreground">
                Backed by strategic vendor alliances and a strong local presence, we deliver high-impact, cost-effective solutions — from office IT setups and networking to complex enterprise-level integrations.
                Our lean, expert-driven team ensures agility, accountability, and personalized service for every project
              </p>
              <p className="text-lg text-muted-foreground">
                At Octalpha, we don't just supply IT — we deliver business continuity, operational efficiency, and technology-led growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" className="group">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative">
              <img
                src="/Img/Index/About.jpg"
                alt="digital collaboration team working together"
                className="w-full rounded-3xl border border-border shadow-strong object-cover"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-muted/25">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                Comprehensive IT Solutions for Modern Businesses
              </p>
              <h2 className="text-4xl font-bold text-foreground">Empowering enterprises with innovative, secure technology</h2>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {capabilityHighlights.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.05}>
                  <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="h-48 overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground flex-1">{item.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- DRAGGABLE INFINITE CLIENT CAROUSEL --- */}
        <section className="py-20 bg-background border-b border-border/40 overflow-hidden select-none">
          <div className="container mx-auto px-4 mb-12 text-center">
            <AnimatedSection>
              {/* STYLE UPDATE: Matched exact style of 'About' and 'Success Stories' headers */}
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">
                Our Clients
              </p>
              <h2 className="text-4xl font-bold text-foreground">
                Trusted by leading organizations
              </h2>
            </AnimatedSection>
          </div>

          <div className="relative w-full group">
            <div
              ref={carouselRef}
              className="flex items-center gap-12 md:gap-20 overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{
                width: "100%",
                whiteSpace: "nowrap",
              }}
            >
              {[...vendors, ...vendors].map((num, index) => (
                <div key={index} className="flex-shrink-0 w-32 md:w-40 h-24 flex items-center justify-center">
                  <img
                    draggable={false}
                    src={`/Img/vendors/vendor-${num}.png`}
                    alt={`Client ${num}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Fade effect on edges */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                Learn More About Our Success Stories
              </p>
              <h2 className="text-4xl font-bold text-foreground">Delivering measurable impact across industries</h2>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              {successStories.map((story, index) => (
                <AnimatedSection key={story.title} delay={index * 0.05}>
                  <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="h-48 overflow-hidden flex-shrink-0">
                      <img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col">
                      <h3 className="text-2xl font-semibold text-foreground">{story.title}</h3>
                      <p className="text-muted-foreground flex-1">{story.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <AnimatedSection direction="up">
          <div className="container mx-auto px-4 pb-20">
            <Card className="relative overflow-hidden bg-gradient-primary text-primary-foreground p-12 shadow-strong">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_65%)]" />
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] mb-4 text-primary-foreground/70">Need guidance?</p>
                  <h3 className="text-3xl font-bold mb-4">Talk with our consultants today</h3>
                  <p className="text-lg text-primary-foreground/80 max-w-2xl">
                    Whether you are planning a cloud migration, strengthening cybersecurity posture, or rolling out ERP,
                    we will tailor a roadmap aligned with your goals.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00d2ff] to-[#00a6ff] hover:opacity-90 text-white font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/contact" className="flex items-center gap-3">
                    Schedule a call
                    <FontAwesomeIcon icon={faPhoneVolume} className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </PageTransition>
    </MainLayout>
  );
};

export default Index;