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
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Hero Image - Top Center */}
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-accent/20 shadow-2xl">
              <img 
                src={heroFloral} 
                alt="Elegant floral centerpiece"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -left-8 bg-background/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-accent/20 animate-fade-in">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-elegant font-medium">Premium Quality</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-8 bg-background/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-accent/20 animate-fade-in delay-300">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-sm font-elegant font-medium">100% Custom</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-6 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-elegant text-sm font-medium tracking-wide uppercase">Jhanina Luxe Decor</span>
            </div>
            
            <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Elegant Centerpieces
              </span>
              <br />
              <span className="text-foreground">for Every Occasion</span>
            </h1>
            
            <p className="font-elegant text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your special moments with our exquisite floral arrangements and luxury balloon designs. 
              Creating unforgettable experiences through artistry and elegance.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="font-elegant text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Event
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('gallery')}
              className="font-elegant text-lg px-10 py-4 rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300">
              <div className="font-luxury text-3xl font-bold text-accent mb-2">500+</div>
              <div className="font-elegant text-muted-foreground text-sm uppercase tracking-wide">Events Decorated</div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300">
              <div className="font-luxury text-3xl font-bold text-accent mb-2">100%</div>
              <div className="font-elegant text-muted-foreground text-sm uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300">
              <div className="font-luxury text-3xl font-bold text-accent mb-2">5+</div>
              <div className="font-elegant text-muted-foreground text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-elegant text-muted-foreground uppercase tracking-wide">Scroll</span>
          <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;