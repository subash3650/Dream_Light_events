import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About{' '}
            <span className="text-gradient-gold">Radiant Events</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are passionate event designers dedicated to creating extraordinary celebrations 
            that reflect your unique story and style.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016, Radiant Events was born from a passion for creating unforgettable moments. 
                  What started as a small dream has blossomed into a full-service event planning company 
                  known for our attention to detail and creative vision.
                </p>
                <p>
                  We believe that every celebration should be as unique as the people it honors. 
                  Our team works closely with each client to understand their vision, preferences, 
                  and dreams, transforming them into reality with elegant design and flawless execution.
                </p>
                <p>
                  From intimate gatherings to grand celebrations, we approach every event with the same 
                  level of care, creativity, and commitment to excellence that has made us a trusted 
                  name in the industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface rounded-2xl p-8 shadow-elegant">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-3 shadow-gold-glow">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Events Created</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-3 shadow-gold-glow">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-3 shadow-gold-glow">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Awards Won</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-3 shadow-gold-glow">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              What We{' '}
              <span className="text-gradient-gold">Stand For</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from initial consultation to the final moments of your celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pour our heart into every project, treating each event as if it were our own special celebration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the highest standards in design, planning, and execution to ensure perfection in every detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with you as partners, ensuring your vision comes to life exactly as you imagined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start{' '}
            <span className="text-gradient-gold">Planning?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear about your vision and discuss how we can bring it to life. 
            Contact us today for a consultation.
          </p>
          <button className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-gold-glow hover:scale-105 transition-smooth">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;