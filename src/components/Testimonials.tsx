import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ebikoboere E.",
    event: "Birthday Party",
    source: "Google Review",
    rating: 5,
    text: "Emma was super nice and helpful. If you ever want to host a small event for 100 people this is the right place for you. It's affordable as well... alcohol approved 👍😄",
  },
  {
    name: "Dami S.",
    event: "Private Event",
    source: "Google Review",
    rating: 5,
    text: "Emma is such an amazing and fantastic host. She understands what it takes to make your event memorable, no stress, no worries, just pure happiness. Thank you so much Emma! 🎉🙏",
  },
  {
    name: "Maryam",
    event: "Birthday Party",
    source: "TagVenue Review",
    rating: 5,
    text: "Sovereign Studio was everything I wanted for my child's birthday party! The venue was clean, tidy and organised. Everything promised was provided. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase">Our Customer Feedback</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
            What Clients Say?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                <p className="text-xs text-primary mt-1">{testimonial.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://share.google/Zq9i5QqU0ZGCJ8WuI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl px-8 py-4 shadow-soft inline-flex items-center gap-4 hover:shadow-elevated transition-shadow cursor-pointer"
          >            <div className="text-center">
              <p className="font-display text-2xl text-foreground">4.7</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-medium text-foreground">Google Reviews</p>
              <p className="text-sm text-muted-foreground">19+ verified reviews</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
