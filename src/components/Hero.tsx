import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Award } from "lucide-react";
import heroFloral from "@/assets/hero-floral.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-muted/20 via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="relative min-h-[80vh] flex items-center">
          
          {/* Main Content Area */}
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Left Content - Takes up more space */}
            <div className="lg:col-span-7 space-y-8 relative z-20">
              
              {/* Brand Badge */}
              <div className="flex items-start gap-4">
                <div className="bg-accent w-1 h-16 rounded-full"></div>
                <div>
                  <div className="text-xs font-elegant text-muted-foreground uppercase tracking-widest mb-1">
                    Premium Event Decor
                  </div>
                  <div className="font-luxury text-lg font-semibold text-accent">
                    Jhanina Luxe Decor
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="font-luxury text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
                  <span className="block text-foreground">Elegant</span>
                  <span className="block text-accent opacity-80">Centerpieces</span>
                  <span className="block text-muted-foreground text-4xl md:text-5xl lg:text-6xl font-elegant font-light">
                    for every occasion
                  </span>
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-accent"></div>
                  <p className="font-elegant text-lg text-muted-foreground max-w-md">
                    Transforming special moments with exquisite floral arrangements and luxury balloon designs.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => scrollToSection('booking')}
                  className="font-elegant px-8 py-4 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Book Your Event
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  onClick={() => scrollToSection('gallery')}
                  className="font-elegant px-8 py-4 rounded-none border-b-2 border-transparent hover:border-accent hover:bg-transparent group"
                >
                  View Our Work
                  <Heart className="w-5 h-5 ml-2 group-hover:text-accent transition-colors" />
                </Button>
              </div>

            </div>

            {/* Right Visual Area */}
            <div className="lg:col-span-5 relative">
              
              {/* Main Image Card */}
              <div className="relative">
                <div className="bg-background border border-border/20 shadow-2xl p-3 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src={heroFloral} 
                    alt="Elegant floral centerpiece"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                
                {/* Overlapping Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="font-luxury text-3xl font-bold mb-1">500+</div>
                    <div className="font-elegant text-sm opacity-90 uppercase tracking-wide">Events</div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Award className="w-6 h-6 mb-1" />
                  <span className="text-xs font-elegant font-semibold">100%</span>
                  <span className="text-xs font-elegant">Quality</span>
                </div>
              </div>

              {/* Secondary Info Cards */}
              <div className="absolute top-16 -left-12 hidden lg:block">
                <div className="bg-background/90 backdrop-blur-md border border-border/50 p-4 shadow-lg w-32 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="w-4 h-4 text-accent" />
                    </div>
                    <div className="font-elegant text-xs text-muted-foreground">Custom Design</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/50 backdrop-blur-sm border-t border-border/50">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center text-center">
                <div className="flex-1">
                  <div className="font-luxury text-2xl font-bold text-accent">5+</div>
                  <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="w-px h-8 bg-border/50"></div>
                <div className="flex-1">
                  <div className="font-luxury text-2xl font-bold text-accent">100%</div>
                  <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">Satisfaction</div>
                </div>
                <div className="w-px h-8 bg-border/50"></div>
                <div className="flex-1">
                  <div className="font-luxury text-2xl font-bold text-accent">24/7</div>
                  <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">Support</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 right-8 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 border border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-1 animate-pulse"></div>
        </div>
        <span className="text-xs font-elegant text-muted-foreground uppercase tracking-wide transform rotate-90 origin-center whitespace-nowrap mt-4">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;