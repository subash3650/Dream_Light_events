import HeroSection from '@/components/HeroSection';
import EventsCarousel from '@/components/EventsCarousel';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventsCarousel />
      
      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Ready to Create Your{' '}
            <span className="text-gradient-gold">Perfect Event?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expertise in elegant design and flawless execution. 
            Every detail matters when it comes to your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-gold-glow hover:scale-105 transition-smooth">
              Start Planning Today
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-xl transition-smooth">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;