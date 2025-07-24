import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flower, PartyPopper, Calendar, Sparkles, Heart, Gift } from "lucide-react";
import floralService from "@/assets/service-floral.jpg";
import balloonLuxury from "@/assets/balloons-luxury.jpg";
import weddingCenterpiece from "@/assets/wedding-centerpiece.jpg";

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Floral Centerpieces",
      description: "Exquisite fresh flower arrangements crafted with premium blooms and artistic flair for your special occasions.",
      features: ["Fresh Premium Flowers", "Custom Color Schemes", "Seasonal Arrangements", "Vase Included"],
      image: floralService,
      price: "Starting at $85"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Balloon Designs",
      description: "Sophisticated balloon arrangements that add elegance and whimsy to any celebration or corporate event.",
      features: ["Metallic & Latex Options", "Custom Color Matching", "Balloon Bouquets", "Delivery Included"],
      image: balloonLuxury,
      price: "Starting at $65"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wedding Centerpieces",
      description: "Romantic and luxurious wedding centerpieces designed to create the perfect ambiance for your special day.",
      features: ["Bridal Consultation", "Venue Coordination", "Multiple Arrangements", "Setup Service"],
      image: weddingCenterpiece,
      price: "Starting at $125"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Professional and sophisticated decor solutions for corporate gatherings, conferences, and business celebrations.",
      features: ["Brand Color Integration", "Professional Setup", "Bulk Pricing", "Event Coordination"],
      image: floralService,
      price: "Custom Quote"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Memorable centerpieces for birthdays, anniversaries, graduations, and all of life's important moments.",
      features: ["Theme Customization", "Age-Appropriate Designs", "Quick Turnaround", "Personal Touch"],
      image: balloonLuxury,
      price: "Starting at $55"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Packages",
      description: "Complete event transformation with multiple centerpieces, ambient lighting, and premium decor elements.",
      features: ["Full Event Design", "Premium Materials", "Lighting Effects", "White Glove Service"],
      image: weddingCenterpiece,
      price: "Starting at $250"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">Our Services</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Luxury Centerpiece Collections
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we create stunning centerpieces 
            that become the focal point of your event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 bg-accent/90 rounded-full text-accent-foreground">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-luxury text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-elegant text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="font-elegant text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-luxury text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button 
                    variant="elegant" 
                    size="sm"
                    onClick={scrollToBooking}
                    className="font-elegant"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToBooking}
            className="font-elegant text-lg px-8"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;