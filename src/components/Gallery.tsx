import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, PartyPopper, Calendar, X } from "lucide-react";
import heroFloral from "@/assets/hero-floral.jpg";
import balloonLuxury from "@/assets/balloons-luxury.jpg";
import weddingCenterpiece from "@/assets/wedding-centerpiece.jpg";
import serviceFloral from "@/assets/service-floral.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image: heroFloral,
      title: "Romantic Rose Centerpiece",
      category: "wedding",
      description: "Elegant pink roses with crystal accents for a luxury wedding reception."
    },
    {
      id: 2,
      image: balloonLuxury,
      title: "Metallic Balloon Bouquet",
      category: "balloon",
      description: "Sophisticated balloon arrangement with gold and blush tones."
    },
    {
      id: 3,
      image: weddingCenterpiece,
      title: "Classic Wedding Arrangement",
      category: "wedding",
      description: "Timeless white roses and eucalyptus with candlelight."
    },
    {
      id: 4,
      image: serviceFloral,
      title: "Vibrant Floral Display",
      category: "floral",
      description: "Colorful mixed florals perfect for special celebrations."
    },
    {
      id: 5,
      image: heroFloral,
      title: "Luxury Table Setting",
      category: "corporate",
      description: "Professional centerpiece for corporate gala event."
    },
    {
      id: 6,
      image: balloonLuxury,
      title: "Birthday Celebration",
      category: "balloon",
      description: "Fun yet elegant balloon design for milestone birthday."
    },
    {
      id: 7,
      image: weddingCenterpiece,
      title: "Anniversary Romance",
      category: "floral",
      description: "Intimate floral arrangement for anniversary dinner."
    },
    {
      id: 8,
      image: serviceFloral,
      title: "Garden Party Centerpiece",
      category: "floral",
      description: "Fresh spring florals for outdoor garden celebration."
    }
  ];

  const categories = [
    { id: "all", label: "All Work", icon: <Camera className="w-4 h-4" /> },
    { id: "wedding", label: "Weddings", icon: <Heart className="w-4 h-4" /> },
    { id: "floral", label: "Floral", icon: <Camera className="w-4 h-4" /> },
    { id: "balloon", label: "Balloons", icon: <PartyPopper className="w-4 h-4" /> },
    { id: "corporate", label: "Corporate", icon: <Calendar className="w-4 h-4" /> }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Camera className="w-5 h-5 text-accent" />
            <span className="text-accent font-elegant font-medium">Our Portfolio</span>
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Gallery of Elegance
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning centerpieces and event decor. Each piece 
            tells a story of celebration, beauty, and unforgettable moments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "luxury" : "elegant"}
              className="font-elegant"
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden border-border/50 hover:shadow-luxury transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-luxury text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="font-elegant text-sm opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-2xl p-8 shadow-lg">
          <h3 className="font-luxury text-2xl font-bold text-primary mb-4">
            Love What You See?
          </h3>
          <p className="font-elegant text-muted-foreground mb-6">
            Let's create something beautiful for your special event. Book a consultation 
            and bring your vision to life.
          </p>
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToBooking}
            className="font-elegant"
          >
            <Heart className="w-5 h-5 mr-2" />
            Book Your Event
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground"
            >
              <X className="w-6 h-6" />
            </Button>
            <img 
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="font-luxury text-xl font-semibold mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="font-elegant text-white/80">
                {filteredItems[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;