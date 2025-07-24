import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, MessageSquare, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    guestCount: "",
    venue: "",
    budget: "",
    serviceType: "",
    colorScheme: "",
    specialRequests: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.eventDate || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your consultation.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: "", email: "", phone: "", eventDate: "", eventTime: "",
      eventType: "", guestCount: "", venue: "", budget: "",
      serviceType: "", colorScheme: "", specialRequests: ""
    });
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">Book Your Event</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Schedule Your Consultation
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create something beautiful together. Fill out the form below and we'll contact you 
            within 24 hours to discuss your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-luxury">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-luxury text-2xl text-primary flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Event Details Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-elegant font-medium text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="font-elegant border-border/50 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-elegant font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="font-elegant border-border/50 focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-elegant font-medium text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="font-elegant border-border/50 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="font-elegant font-medium text-foreground">
                      Budget Range
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="font-elegant border-border/50 focus:border-accent">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="over-5000">Over $5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Event Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="font-elegant font-medium text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Event Date *
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      className="font-elegant border-border/50 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTime" className="font-elegant font-medium text-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      Event Time
                    </Label>
                    <Input
                      id="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => handleInputChange("eventTime", e.target.value)}
                      className="font-elegant border-border/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="font-elegant font-medium text-foreground">
                      Event Type
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                      <SelectTrigger className="font-elegant border-border/50 focus:border-accent">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="graduation">Graduation</SelectItem>
                        <SelectItem value="baby-shower">Baby Shower</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="font-elegant font-medium text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Guest Count
                    </Label>
                    <Input
                      id="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange("guestCount", e.target.value)}
                      placeholder="Number of guests"
                      className="font-elegant border-border/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue" className="font-elegant font-medium text-foreground">
                    Venue Name/Address
                  </Label>
                  <Input
                    id="venue"
                    value={formData.venue}
                    onChange={(e) => handleInputChange("venue", e.target.value)}
                    placeholder="Event venue location"
                    className="font-elegant border-border/50 focus:border-accent"
                  />
                </div>

                {/* Service Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="font-elegant font-medium text-foreground">
                      Service Type *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger className="font-elegant border-border/50 focus:border-accent">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="floral">Floral Centerpieces</SelectItem>
                        <SelectItem value="balloon">Balloon Designs</SelectItem>
                        <SelectItem value="wedding">Wedding Centerpieces</SelectItem>
                        <SelectItem value="corporate">Corporate Events</SelectItem>
                        <SelectItem value="special">Special Occasions</SelectItem>
                        <SelectItem value="luxury">Luxury Packages</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="colorScheme" className="font-elegant font-medium text-foreground">
                      Preferred Color Scheme
                    </Label>
                    <Input
                      id="colorScheme"
                      value={formData.colorScheme}
                      onChange={(e) => handleInputChange("colorScheme", e.target.value)}
                      placeholder="e.g., Blush pink and gold"
                      className="font-elegant border-border/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests" className="font-elegant font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Special Requests or Vision
                  </Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    placeholder="Tell us about your vision, any special requirements, or questions you have..."
                    className="font-elegant border-border/50 focus:border-accent min-h-[120px]"
                    rows={5}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    variant="luxury" 
                    size="lg"
                    className="font-elegant text-lg px-12 py-4"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request Consultation
                  </Button>
                  <p className="font-elegant text-sm text-muted-foreground mt-4">
                    We'll respond within 24 hours to schedule your free consultation.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;