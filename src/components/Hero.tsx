import { motion } from "framer-motion";
import heroImage from "../assets/main-Image.jpg";
import loungeImage from "../assets/room-lounge.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sovereign Studios Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Birmingham's Creative Event Space
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight"
          >
            Dance, Rehearsal,
            <br />
            <span className="italic">Events</span> & <span className="italic">Zen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            At Sovereign Studios, be inspired and harness the power of creativity. 
            A unique space for events, workshops, and business ventures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://venue.appointedd.com/booking-widget/66b7ca766c4aed54088d97f6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-medium tracking-wide hover:bg-copper-dark transition-all duration-300 shadow-copper hover:shadow-elevated"
            >
              Book Now<br/> Dance/Venue/Events
            </a>
            <a
            href="https://www.sovereignwellnesslounge.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white px-8 py-4 rounded-md text-base font-medium tracking-wide hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book <br/> Massage/Treatmennt
            </a>
            <a
              href="#spaces"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md text-base font-medium tracking-wide hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Explore Spaces
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
