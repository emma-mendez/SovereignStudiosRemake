import { motion } from "framer-motion";
import roomMain from "@/assets/room-main.jpg";
import roomSpa from "@/assets/mainDance1.jpg";
import roomLounge from "@/assets/room-lounge.jpg";

const spaces = [
  {
    name: "Main Room",
    description: "Versatile blank-canvas space perfect for events, dance, and workshops",
    image: roomMain,
    capacity: "102 standing / 55 seated",
    price: "From £12.50/hr",
    featured: true,
    link: "/main-room",
  },
  {
    name: "Dance Space",
    description: "Dedicated dance studio with mirrors and professional flooring",
    image: roomSpa,
    capacity: "Private room",
    price: "Hourly hire",
    featured: true,
    link: "/dance-space",

  },
  {
   name: "Treatment Rooms",
    description: "Serene space for wellness, beauty treatments, and massage services",
    image: roomLounge,
    capacity: "Included for events",
    price: "Complementary",
    featured: true,
    link: "/treatment-rooms",

  },
];

const Spaces = () => {
  return (
    <section id="spaces" className="py-24 bg-cream-dark">
      {/* Marquee */}
      <div className="overflow-hidden mb-16">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 font-display text-4xl md:text-5xl text-muted-foreground/20">
              SOVEREIGN STUDIOS ★ ROOMS & BEAUTY SUITES ★
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase">Discover Our Spaces</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
            Rooms & Spaces
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-2xl ${
                space.featured ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${space.featured ? "h-full min-h-[500px]" : "h-72"}`}>
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-primary text-xs tracking-wider uppercase mb-2">
                    {space.capacity}
                  </span>
                  <h3 className="font-display text-2xl text-primary-foreground mb-2">
                    {space.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-4 line-clamp-2">
                    {space.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium">{space.price}</span>
                    <a
                      href={space.link}
                      className="text-primary-foreground text-sm hover:text-primary transition-colors"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://venue.appointedd.com/booking-widget/66b7ca766c4aed54088d97f6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-copper-dark transition-all shadow-copper"
          >
            Book Your Space
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Spaces;
