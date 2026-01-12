import { motion } from "framer-motion";
import { Users, Clock, Car, Star } from "lucide-react";
import signatureImage from "../assets/signature.jpg";


const stats = [
  { icon: Users, number: "102", label: "Standing Capacity", sublabel: "55 seated" },
  { icon: Users, number: "25", label: "Dance Capacity", sublabel: "persons max" },
  { icon: Clock, number: "24/7", label: "Self Access", sublabel: "on demand" },
  { icon: Star, number: "4.7", label: "Google Rating", sublabel: "19+ reviews" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase">Experience Sovereign Studios</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Here To Help You Have A<br />Wonderful Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your Events, Your Way, In Your Time. No Pressure! A versatile space 
            in Birmingham designed to bring your creative vision to life.
          </p>
          <img
            src={signatureImage}
            alt="Sovereign Studios Signature"
            className="mx-auto mt-6 h-12 object-contain"
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-3xl md:text-4xl text-foreground mb-1">{stat.number}</p>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-soft"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                We Provide A Blank Canvas
              </h3>
              <p className="text-muted-foreground mb-8">
                With over two decades of experience providing start-up business support 
                and excellent customer service to small enterprises and individuals.
              </p>
              <ul className="space-y-4">
                {[
                  "9 XL Tables & 60+ Chairs Available",
                  "Professional Disco Lights & Sound System",
                  "Bluetooth Speaker Included",
                  "BYO Catering or In-house Options",
                  "Self-entry Keyless System",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <p className="font-display text-xl text-foreground mb-4">Pricing Starts From</p>
                <p className="font-display text-5xl text-primary mb-2">£12.50</p>
                <p className="text-muted-foreground">per hour</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Event Hire Flat Rate</p>
                  <p className="font-display text-2xl text-foreground">£275</p>
                  <p className="text-xs text-muted-foreground">10hrs (2pm - midnight)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
