import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    video: "/Img/Hero/Hero1.mp4",
    title: "Your End-to-End Technology Partner",
    subtitle: "Empowering Connections. Driving the Future.",
    description:
      "From data centers to digital transformation. We help enterprises scale faster with secure, intelligent IT infrastructure.",
    cta: "Contact Us",
  },
  {
    id: 2,
    video: "https://cdn.pixabay.com/video/2025/09/13/303881_tiny.mp4",
    title: "AI-Ready IT Infrastructure",
    subtitle: "Modernize. Automate. Orchestrate.",
    description:
      "Build resilient hybrid foundations with AI-ready architecture, automated observability, and zero-downtime operations.",
    cta: "Explore Infrastructure",
  },
  {
    id: 3,
    video: "/Img/Hero/Hero2.mp4",
    title: "Advanced Cybersecurity & Compliance",
    subtitle: "Secure Your Assets. Protect Your Future.",
    description:
      "Comprehensive threat detection, GRC compliance, and network security solutions tailored for modern enterprises.",
    cta: "View Security Plans",
  },
  {
    id: 4,
    video: "/Img/Hero/Hero3.mp4",
    title: "Seamless Cloud Transformation",
    subtitle: "Scalable. Flexible. Efficient.",
    description:
      "Migrate, modernize, and manage your workloads with our expert Azure and AWS cloud enablement services.",
    cta: "Explore Cloud",
  },
  {
    id: 5,
    video: "/Img/Hero/Hero4.mp4",
    title: "AI Smart Customer Journey Management",
    subtitle: "Personalized Journeys. Predictable Outcomes.",
    description:
      "Activate AI-driven customer journey orchestration that unifies marketing, sales, and service touchpoints with measurable ROI.",
    cta: "Get Support",
  },
  {
    id: 6,
    video: "/Img/Hero/Hero5.mp4",
    title: "AI-Based GRC Automation",
    subtitle: "Governance Meets AI Innovation.",
    description:
      "Deploy autonomous GRC automation that documents controls, predicts risk, and keeps regulators satisfied in real time.",
    cta: "Discover GRC",
  },
  {
    id: 7,
    video: "https://cdn.pixabay.com/video/2024/03/15/204306-923909642_tiny.mp4",
    title: "Financial Reconciliation Automation",
    subtitle: "Close your books with AI speed and precision.",
    description:
      "AI-driven reconciliation matches ledgers, payment gateways, and ERP data in minutes—flagging anomalies and generating audit-ready evidence automatically.",
    cta: "Optimize Finance",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND VIDEO LAYER --- */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-60" 
          >
            <source src={slide.video} type="video/mp4" />
          </video>
          
          {/* Dark Overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col justify-center h-full py-20">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div>
            <div className="space-y-4 min-h-[180px] flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.42em] text-cyan-300/80 font-semibold transition-all duration-300">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl transition-all duration-300">
                {slides[currentSlide].title}
              </h1>
            </div>
          </div>

          <div>
            <div className="min-h-[80px] flex items-start justify-center">
              <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-300">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="group bg-cyan-600 hover:bg-cyan-500 text-white border-0"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto border-t border-white/10 mt-12">
              {[
                { value: "300+", label: "Happy Clients" },
                { value: "200+", label: "Finished Projects" },
                { value: "50+", label: "Global Partners" },
              ].map((stat) => (
                <div key={stat.label} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTROLS --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-12 bg-cyan-500" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
      
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all hidden md:block">
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all hidden md:block">
        <ChevronRight className="h-10 w-10" />
      </button>
    </section>
  );
};