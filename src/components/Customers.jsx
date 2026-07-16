import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Customers = () => {
  // Generate an array from 1 to 34
  const partnerCount = 34;
  const partners = Array.from({ length: partnerCount }, (_, i) => i + 1);

  // Real names for alt text / accessibility.
  const partnerNames = {
    1: "Google",
    2: "Trellix",
    3: "Red Hat",
    4: "Huawei",
    5: "xFusion",
    6: "HP",
    7: "Dell EMC",
    8: "Lenovo",
    9: "Aruba",
    10: "Microsoft",
    11: "Palo Alto Networks",
    12: "Fortinet",
    13: "Cisco",
    14: "Symantec",
    15: "AWS",
    16: "Azure",
    17: "VMware",
    18: "Veeam",
    19: "Zscaler",
    20: "ManageEngine",
    21: "Quorum",
    22: "K7",
    23: "Avaya",
    24: "Ruijie",
    25: "Eaton",
    26: "APC",
    27: "LockThreat",
    28: "Timestream",
    29: "MAXHUB",
    30: "Polycom",
    31: "evoko",
    32: "Logitech",
    33: "Grandstream",
    34: "Yealink",
  };

  // CONFIGURATION: Map specific Partner IDs to their URLs
  const partnerLinks = {};

  // CONFIGURATION: Bump up specific logos that render smaller than their
  // neighbors due to extra whitespace baked into the source PNG.
  const sizeOverrides = {
    1: "h-16 md:h-20",  // Google
    3: "h-16 md:h-20",  // Red Hat
    5: "h-16 md:h-20",  // xFusion
    9: "h-16 md:h-20",  // Aruba
    10: "h-16 md:h-20", // Microsoft
    14: "h-14 md:h-18", // Symantec
    16: "h-16 md:h-20", // Azure
    22: "h-16 md:h-20", // K7
    27: "h-16 md:h-20", // LockThreat
    31: "h-14 md:h-18", // Evoko
    32: "h-16 md:h-20", // Logitech
  };
  const defaultLogoSize = "h-12 md:h-16";

  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* --- Strategic Alliances Header --- */}
        <div className="text-center mb-12">
          <AnimatedSection>
             <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Strategic Alliances
             </h3>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Partnering with industry leaders to deliver best-in-class solutions
             </p>
             <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
          </AnimatedSection>
        </div>

        {/* --- Logo Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {partners.map((num, index) => {
            
            const linkUrl = partnerLinks[num];
            const logoSize = sizeOverrides[num] || defaultLogoSize;
            
            const CardContent = (
              <Card 
                className={`h-24 md:h-28 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300 group border border-gray-200 bg-white dark:bg-white overflow-hidden ${linkUrl ? 'cursor-pointer hover:border-blue-400' : ''}`}
              >
                <img 
                  src={`/Img/partners/${num}.png`}
                  alt={partnerNames[num] || `Partner ${num}`}
                  className={`${logoSize} w-auto object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply contrast-125 brightness-105`}
                  loading="lazy"
                />
              </Card>
            );

            return (
              <AnimatedSection key={num} delay={index * 0.02}>
                {linkUrl ? (
                  <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};