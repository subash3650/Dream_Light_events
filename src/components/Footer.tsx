import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold-glow">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-gradient-gold">
                Radiant Events
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating unforgettable moments through elegant event design and flawless execution. 
              Your dream celebration starts here.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Get In Touch
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>{/* Phone: (555) 123-4567 */}Contact us for phone</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>{/* Email: hello@radiantevents.com */}Email us for inquiries</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{/* 123 Wedding Ave, City, State 12345 */}Visit our studio</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Our Services
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-smooth cursor-pointer">
                Wedding Planning & Design
              </li>
              <li className="hover:text-primary transition-smooth cursor-pointer">
                Corporate Events
              </li>
              <li className="hover:text-primary transition-smooth cursor-pointer">
                Birthday Celebrations
              </li>
              <li className="hover:text-primary transition-smooth cursor-pointer">
                Anniversary Parties
              </li>
              <li className="hover:text-primary transition-smooth cursor-pointer">
                Bridal Showers
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Radiant Events. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-smooth">Privacy Policy</button>
            <button className="hover:text-primary transition-smooth">Terms of Service</button>
            <button 
              className="text-primary hover:text-primary-glow transition-smooth font-medium"
              onClick={() => {
                // TODO: Open admin modal
                alert('Admin panel coming soon!');
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;