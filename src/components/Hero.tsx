import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Award, ArrowRight } from "lucide-react";
import heroFloral from "@/assets/hero-floral.jpg";
import balloonLuxury from "@/assets/balloons-luxury.jpg";
import weddingCenterpiece from "@/assets/wedding-centerpiece.jpg";
import serviceFloral from "@/assets/service-floral.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-background">
      
      {/* Top Navigation Space */}
      <div className="h-20"></div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-accent/5 px-4 py-1 rounded-full mb-6">
            <span className="text-accent font-elegant text-sm uppercase tracking-wider">Est. 2019</span>
          </div>
          
          <h1 className="font-luxury text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.85]">
            <span className="block">JHANINA</span>
            <span className="block text-accent">LUXE</span>
            <span className="block text-muted-foreground text-4xl md:text-5xl lg:text-6xl font-elegant font-light tracking-wider">
              DECOR
            </span>
          </h1>
          
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting extraordinary moments through elegant centerpieces, 
            luxury florals, and bespoke balloon artistry.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="font-elegant px-12 py-4 text-lg group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <button
              onClick={() => scrollToSection('gallery')}
              className="font-elegant text-lg text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="space-y-6">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src={heroFloral} 
                alt="Floral centerpiece"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center">
              <div className="font-luxury text-sm font-semibold mb-1">Floral</div>
              <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">
                Arrangements
              </div>
            </div>
          </div>

          <div className="space-y-6 md:mt-12">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src={balloonLuxury} 
                alt="Balloon design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center">
              <div className="font-luxury text-sm font-semibold mb-1">Balloon</div>
              <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">
                Artistry
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src={weddingCenterpiece} 
                alt="Wedding centerpiece"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center">
              <div className="font-luxury text-sm font-semibold mb-1">Wedding</div>
              <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">
                Centerpieces
              </div>
            </div>
          </div>

          <div className="space-y-6 md:mt-12">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src={serviceFloral} 
                alt="Event decor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center">
              <div className="font-luxury text-sm font-semibold mb-1">Event</div>
              <div className="font-elegant text-xs text-muted-foreground uppercase tracking-wide">
                Styling
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-border pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">500+</div>
              <div className="font-elegant text-sm text-muted-foreground uppercase tracking-wider">
                Events Crafted
              </div>
            </div>
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">100%</div>
              <div className="font-elegant text-sm text-muted-foreground uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">5+</div>
              <div className="font-elegant text-sm text-muted-foreground uppercase tracking-wider">
                Years Excellence
              </div>
            </div>
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="font-elegant text-sm text-muted-foreground uppercase tracking-wider">
                Design Support
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
            <h2 className="font-luxury text-2xl md:text-3xl font-semibold mb-6">
              Our Philosophy
            </h2>
            <p className="font-elegant text-lg text-muted-foreground leading-relaxed">
              Every celebration deserves to be extraordinary. We believe in transforming ordinary spaces 
              into magical experiences through thoughtful design, premium materials, and meticulous attention to detail.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span className="font-elegant text-muted-foreground">Premium Quality</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span className="font-elegant text-muted-foreground">Handcrafted with Love</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-elegant text-muted-foreground">Uniquely Yours</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Padding */}
      <div className="h-16"></div>
    </section>
  );
};

export default Hero;