import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Customers = () => {
  // Generate an array from 1 to 32
  const partnerCount = 32;
  const partners = Array.from({ length: partnerCount }, (_, i) => i + 1);

  // CONFIGURATION: Map specific Partner IDs to their URLs
  const partnerLinks = {
    1: "https://www.lockthreat.ai/",
    2: "https://smart-cjm.com/en/",
    3: "https://timestreamgroup.com/",
  };

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
            
            // Check if this specific number has a link assigned
            const linkUrl = partnerLinks[num];
            
            // Define the Card Content (Image)
            const CardContent = (
              <Card 
                className={`h-24 md:h-28 flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300 group border border-gray-200 bg-white dark:bg-white overflow-hidden ${linkUrl ? 'cursor-pointer hover:border-blue-400' : ''}`}
              >
                <img 
                  // ALL FILES ARE NOW .PNG
                  src={`/Img/partners/${num}.png`}
                  alt={`Partner ${num}`}
                  className="max-h-12 md:max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply"
                  loading="lazy"
                />
              </Card>
            );

            return (
              <AnimatedSection key={num} delay={index * 0.02}>
                {/* CONDITIONAL RENDERING: 
                    If a link exists for this ID, wrap it in an <a> tag. 
                    Otherwise, just render the card. 
                */}
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