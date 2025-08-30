import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import eventsData from '@/data/events.json';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  type: string;
  image: string;
}

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [events, setEvents] = useState<Event[]>(eventsData);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Recent{' '}
            <span className="text-gradient-gold">Celebrations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of the magical moments we've helped create for our amazing clients
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-elegant">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Event Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <Tag className="w-4 h-4" />
                        {event.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)}
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {event.name}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? 'bg-primary shadow-gold-glow'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;