import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      event: "Wedding Reception",
      rating: 5,
      text: "Jhanina Luxe Decor transformed our wedding reception into a fairy tale. The floral centerpieces were absolutely stunning and perfectly matched our vision. Every guest complimented the beautiful arrangements. Highly recommend!",
      location: "Downtown Grand Ballroom"
    },
    {
      name: "Michael Chen",
      event: "Corporate Gala",
      rating: 5,
      text: "Professional, elegant, and exactly what we needed for our annual corporate gala. The team incorporated our brand colors seamlessly and the setup was flawless. Our clients were impressed with the sophisticated atmosphere.",
      location: "Marriott Conference Center"
    },
    {
      name: "Emily Rodriguez",
      event: "Birthday Celebration",
      rating: 5,
      text: "The balloon designs for my daughter's sweet 16 were incredible! They created the perfect balance of fun and elegance. The attention to detail and quality exceeded our expectations. Worth every penny!",
      location: "Private Residence"
    },
    {
      name: "David & Jessica Thompson",
      event: "Anniversary Party",
      rating: 5,
      text: "For our 25th anniversary, we wanted something special. Jhanina delivered beyond our dreams with romantic centerpieces that told our love story. The consultation process was thorough and the execution was perfect.",
      location: "Garden Pavilion"
    },
    {
      name: "Amanda Foster",
      event: "Baby Shower",
      rating: 5,
      text: "The most beautiful baby shower centerpieces! Soft, elegant, and perfectly themed. The team was responsive to all my requests and delivered exactly what I envisioned. Guests are still talking about them!",
      location: "Country Club"
    },
    {
      name: "Robert Williams",
      event: "Graduation Party",
      rating: 5,
      text: "Celebrating our son's graduation with style! The luxury package was worth every dollar. From consultation to cleanup, the service was impeccable. The centerpieces were the highlight of our celebration.",
      location: "University Club"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-accent fill-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">Client Reviews</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied clients who trusted us to make their special 
            moments unforgettable with our elegant centerpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="font-elegant text-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border/50 pt-4">
                  <h4 className="font-luxury text-lg font-semibold text-primary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="font-elegant text-sm text-muted-foreground mb-1">
                    {testimonial.event}
                  </p>
                  <p className="font-elegant text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-luxury rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-primary-foreground">
            <div>
              <div className="font-luxury text-3xl font-bold text-accent mb-2">500+</div>
              <div className="font-elegant text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="font-luxury text-3xl font-bold text-accent mb-2">1,200+</div>
              <div className="font-elegant text-primary-foreground/80">Events Decorated</div>
            </div>
            <div>
              <div className="font-luxury text-3xl font-bold text-accent mb-2">100%</div>
              <div className="font-elegant text-primary-foreground/80">Satisfaction Rate</div>
            </div>
            <div>
              <div className="font-luxury text-3xl font-bold text-accent mb-2">5★</div>
              <div className="font-elegant text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;