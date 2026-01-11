import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-placeholder.jpg";

const AboutUs = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              About <span className="text-primary">Us</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={aboutImage} 
                  alt="About Sovereign Studios" 
                  className="rounded-lg shadow-elevated w-full h-80 object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                Emma Mendez and<span className="text-primary"> Master Sovereign (Son)</span>
                </h1>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                Founders of Sovereign Studios                
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Sovereign Studios, Birmingham's premier event and wellness venue. 
                  Located in the heart of the city, we offer versatile spaces designed to host 
                  everything from intimate gatherings to grand celebrations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to provide exceptional spaces and services that exceed 
                  expectations. Sovereign Studios is where creativity meets purpose — 
                  a space of well-being to inspire, collaborate, and launch bold ideas
                  we ensure every event is memorable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're planning a business event, private party, or seeking 
                  wellness services, Sovereign Studios is your destination for excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default AboutUs;
