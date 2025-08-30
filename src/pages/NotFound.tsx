import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-heading text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-gradient-gold text-primary-foreground font-semibold hover:scale-105 transition-smooth"
          >
            <a href="/">Return Home</a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="border-primary text-primary hover:bg-primary/10 transition-smooth"
          >
            <a href="/events">View Our Events</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
