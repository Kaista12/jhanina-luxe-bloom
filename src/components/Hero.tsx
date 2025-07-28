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
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-accent font-elegant font-medium">Premium Event Decor Specialists</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-luxury text-4xl md:text-6xl font-bold leading-tight">
                Elegant Centerpieces
                <span className="block text-accent mt-2">for Every Occasion</span>
              </h1>
              
              <p className="font-elegant text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transform your special moments with our exquisite floral arrangements and luxury balloon designs. 
                Creating unforgettable experiences through artistry and elegance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => scrollToSection('booking')}
                className="font-elegant text-lg px-8 py-4"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Event
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => scrollToSection('gallery')}
                className="font-elegant text-lg px-8 py-4"
              >
                <Heart className="w-5 h-5 mr-2" />
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="font-luxury text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
                <div className="font-elegant text-sm text-muted-foreground">Events Decorated</div>
              </div>
              <div className="text-center">
                <div className="font-luxury text-2xl md:text-3xl font-bold text-accent mb-1">100%</div>
                <div className="font-elegant text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-luxury text-2xl md:text-3xl font-bold text-accent mb-1">5+</div>
                <div className="font-elegant text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={heroFloral} 
                alt="Elegant floral centerpiece"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border/50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-luxury text-sm font-semibold">Premium Quality</div>
                  <div className="font-elegant text-xs text-muted-foreground">Handcrafted with love</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-4 shadow-lg border border-border/50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-luxury text-sm font-semibold">Custom Design</div>
                  <div className="font-elegant text-xs text-muted-foreground">Tailored to your vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;