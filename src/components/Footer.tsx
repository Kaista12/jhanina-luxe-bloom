import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-luxury text-2xl font-bold mb-4">
              Jhanina Luxe Decor
            </h3>
            <p className="font-elegant text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Creating unforgettable moments through exquisite centerpieces and luxury event decor. 
              Let us transform your special occasions into works of art.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-accent" />
              </div>
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-luxury text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-elegant">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#booking" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-luxury text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 font-elegant">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@jhaninaluxedecor.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Luxury Lane<br />
                  Design District<br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <h4 className="font-luxury text-lg font-semibold mb-4 text-center">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center font-elegant text-sm">
            <div className="text-primary-foreground/80">Floral Centerpieces</div>
            <div className="text-primary-foreground/80">Balloon Designs</div>
            <div className="text-primary-foreground/80">Wedding Decor</div>
            <div className="text-primary-foreground/80">Corporate Events</div>
            <div className="text-primary-foreground/80">Special Occasions</div>
            <div className="text-primary-foreground/80">Luxury Packages</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-elegant text-primary-foreground/80 text-sm">
            © {currentYear} Jhanina Luxe Decor. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-elegant text-primary-foreground/80 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>for beautiful celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;