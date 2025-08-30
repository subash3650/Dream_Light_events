import { useState } from 'react';
import { Calendar, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import eventsData from '@/data/events.json';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  type: string;
  image: string;
}

const Events = () => {
  const [events] = useState<Event[]>(eventsData);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const eventTypes = ['All', ...Array.from(new Set(events.map(event => event.type)))];

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === 'All' || event.type === filter;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Event{' '}
            <span className="text-gradient-gold">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our collection of beautifully crafted celebrations, each one uniquely designed 
            to reflect our clients' personal style and vision.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type)}
                  className="rounded-full"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-surface rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold-glow transition-smooth hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {event.type}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.date)}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {event.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No events found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;