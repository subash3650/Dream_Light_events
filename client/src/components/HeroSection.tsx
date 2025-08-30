import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wedding-florals.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant wedding florals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Making Your{' '}
          <span className="text-gradient-gold">
            Dreams
          </span>{' '}
          Unforgettable
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We specialize in creating extraordinary weddings and events that tell your unique story through elegant design and flawless execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-gold-glow hover:scale-105 transition-smooth group"
          >
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl transition-smooth"
          >
            Get In Touch
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">Trusted by over 200+ couples</p>
          <div className="flex justify-center items-center space-x-6 text-primary/60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-xs">Events Created</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5★</div>
              <div className="text-xs">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-xs">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;