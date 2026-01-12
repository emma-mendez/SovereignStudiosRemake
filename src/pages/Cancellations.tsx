import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";

const Cancellations = () => {
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
            <BackToHome />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cancellation <span className="text-primary">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg p-8 shadow-soft space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    General Cancellation Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand that plans can change. Please review our cancellation policy 
                    carefully before making a booking. All cancellations must be made in writing 
                    via email to our bookings team.
                  </p>
                </div>
                <div className="text-primary font-semibold">
                  Event Deposits (£137.50) are non-refundable.
                  Once a booking is confirmed, the £137.50 deposit is non-refundable under any circumstances.

                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Cancellation Timeframes
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold">30+ days:</span>
                      <span>Cancellations with more than 30 days’ notice: Clients will receive a 50% refund of the total booking fee (excluding the non-refundable deposit).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold">14-29 days:</span>
                      <span>Cancellations within 30 days of the event: No refund will be issued, Rescheduling offered.
</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold">Less than 7 days:</span>
                      <span>No refund available/remedy offered</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Rescheduling
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Subject to availability, bookings may be rescheduled once without penalty 
                    if requested more than 14 days before the original booking date. 
                    Rescheduling requests made within 14 days may incur an administrative fee.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Force Majeure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In the event of circumstances beyond our control (including but not limited 
                    to natural disasters, government restrictions, or public health emergencies), 
                    alternative arrangements or full refunds will be offered.
                  </p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground">
                    For any questions regarding cancellations, please contact us at{" "}
                    <a href="mailto:info@sovereignstudios.co.uk" className="text-primary hover:underline">
                      info@sovereignstudios.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Cancellations;
