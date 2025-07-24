import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
      variant: "default"
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@jhaninaluxedecor.com",
      subtitle: "24/7 Support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "123 Luxury Lane, Design District",
      subtitle: "City, State 12345"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Monday - Friday: 9AM - 6PM",
      subtitle: "Saturday: 10AM - 4PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">Get In Touch</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create something beautiful? Get in touch with our team to discuss your vision. 
            We're here to make your event unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-luxury text-2xl font-semibold text-primary mb-6">
                Let's Start Planning
              </h3>
              <p className="font-elegant text-muted-foreground mb-8 leading-relaxed">
                Whether you're planning an intimate gathering or a grand celebration, our team is 
                ready to bring your vision to life. Contact us for a free consultation and let's 
                create something extraordinary together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-accent">
                        {info.icon}
                      </div>
                    </div>
                    <h4 className="font-luxury text-lg font-semibold text-primary mb-2">
                      {info.title}
                    </h4>
                    <p className="font-elegant text-foreground font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="font-elegant text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="font-luxury text-xl font-semibold text-primary mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="elegant" 
                  size="icon"
                  className="rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  variant="elegant" 
                  size="icon"
                  className="rounded-full"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
              <p className="font-elegant text-sm text-muted-foreground mt-2">
                @jhaninaluxedecor
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 shadow-luxury">
            <CardContent className="p-8">
              <h3 className="font-luxury text-2xl font-semibold text-primary mb-6 text-center">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="font-elegant font-medium">
                      Name *
                    </Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="font-elegant border-border/50 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="font-elegant font-medium">
                      Email *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="font-elegant border-border/50 focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject" className="font-elegant font-medium">
                    Subject
                  </Label>
                  <Input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="What can we help you with?"
                    className="font-elegant border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="font-elegant font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your event or ask any questions..."
                    className="font-elegant border-border/50 focus:border-accent min-h-[120px]"
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg"
                  className="w-full font-elegant text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h3 className="font-luxury text-xl font-semibold text-primary mb-4">
            Last-Minute Events?
          </h3>
          <p className="font-elegant text-muted-foreground mb-4">
            Need centerpieces on short notice? Call our emergency hotline for rush orders.
          </p>
          <Button variant="accent" size="lg" className="font-elegant">
            <Phone className="w-5 h-5 mr-2" />
            Emergency: (555) 999-LUXE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;