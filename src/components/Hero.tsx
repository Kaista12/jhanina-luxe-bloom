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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroFloral})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 mb-8">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">Premium Event Decor Specialists</span>
          </div>

          <h1 className="font-luxury text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elegant Centerpieces
            <span className="block text-accent">for Every Occasion</span>
          </h1>
          
          <p className="font-elegant text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Transform your special moments with our exquisite floral arrangements and luxury balloon designs. 
            Creating unforgettable experiences through artistry and elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="accent" 
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
              className="font-elegant text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Heart className="w-5 h-5 mr-2" />
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-luxury text-3xl font-bold text-accent mb-2">500+</div>
              <div className="font-elegant text-primary-foreground/80">Events Decorated</div>
            </div>
            <div className="text-center">
              <div className="font-luxury text-3xl font-bold text-accent mb-2">100%</div>
              <div className="font-elegant text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-luxury text-3xl font-bold text-accent mb-2">5+</div>
              <div className="font-elegant text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;