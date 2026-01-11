import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open email client
    const mailtoLink = `mailto:info@sovereignstudios.co.uk?subject=Inquiry from ${formData.name}&body=${formData.message}%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase">Send Us Email</span>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mt-4 mb-8">
              Feel Free to Write
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Write a Message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-charcoal-light border border-charcoal-light rounded-lg px-4 py-3 text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium hover:bg-copper-dark transition-colors shadow-copper"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase">Need Any Help?</span>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mt-4 mb-8">
              Get in Touch With Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-light rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Visit Anytime</p>
                  <p className="text-muted-foreground">
                    Sovereign Studios, Western House<br />
                    Western Rd, Hockley<br />
                    West Midlands, B18 7QD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Have Any Question?</p>
                  <p className="text-muted-foreground">Text: 07983417736</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Write Email</p>
                  <a href="mailto:info@sovereignstudios.co.uk" className="text-primary hover:underline">
                    info@sovereignstudios.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">24/7 Self Access</p>
                  <p className="text-muted-foreground">On-demand bookings available</p>
                </div>
              </div>
            </div>

            {/* Map placeholder - can be replaced with actual Google Maps embed */}
            <div className="mt-8 h-48 bg-charcoal-light rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.8!2d-1.92!3d52.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI5JzI0LjAiTiAxwrA1NSczMS4yIlc!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sovereign Studios Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
