import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Sparkles, Users, Clock, Shield } from "lucide-react";
import weddingCenterpiece from "@/assets/wedding-centerpiece.jpg";

const About = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Beauty",
      description: "Every arrangement is crafted with love and attention to detail, ensuring your event reflects your unique style and vision."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We source only the finest materials - from fresh premium flowers to high-quality balloons - to create lasting memories."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Service",
      description: "Our dedicated team works closely with you from consultation to setup, ensuring every detail exceeds your expectations."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Reliable setup and delivery services ensure your centerpieces are perfect and ready when your guests arrive."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Our artistic approach combines traditional elegance with modern trends to create truly unforgettable centerpieces."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee because your happiness is our top priority."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">About Us</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Creating Memories Through Artistry
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 5 years of experience in luxury event decor, we specialize in transforming 
            ordinary moments into extraordinary celebrations.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src={weddingCenterpiece} 
              alt="Elegant wedding centerpiece"
              className="rounded-2xl shadow-luxury w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4">
                <p className="font-luxury text-lg font-semibold text-primary mb-1">
                  Jhanina Rodriguez
                </p>
                <p className="font-elegant text-muted-foreground">
                  Founder & Creative Director
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-luxury text-3xl font-bold text-primary">
              Our Story
            </h3>
            <div className="space-y-4 font-elegant text-muted-foreground leading-relaxed">
              <p>
                Jhanina Luxe Decor was born from a passion for creating beautiful moments. 
                What started as a love for floral design has blossomed into a full-service 
                luxury centerpiece company serving discerning clients throughout the region.
              </p>
              <p>
                Our founder, Jhanina Rodriguez, brings over a decade of artistic experience 
                and an eye for detail that transforms ordinary events into extraordinary 
                celebrations. Every arrangement tells a story, and we're honored to be part 
                of your special moments.
              </p>
              <p>
                From intimate dinner parties to grand wedding receptions, we believe that 
                beautiful centerpieces are more than decoration - they're the heart of 
                celebration, bringing people together and creating lasting memories.
              </p>
            </div>
            <Button 
              variant="luxury" 
              size="lg"
              onClick={scrollToBooking}
              className="font-elegant"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Work With Us
            </Button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="font-luxury text-3xl font-bold text-primary text-center mb-12">
            Why Choose Jhanina Luxe Decor?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-accent">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-luxury text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h4>
                  <p className="font-elegant text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <h3 className="font-luxury text-2xl font-bold text-primary mb-8">
            Our Experience in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">5+</div>
              <div className="font-elegant text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">500+</div>
              <div className="font-elegant text-muted-foreground">Events Created</div>
            </div>
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">100%</div>
              <div className="font-elegant text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="font-luxury text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="font-elegant text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;