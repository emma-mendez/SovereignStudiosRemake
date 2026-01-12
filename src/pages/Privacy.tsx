import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";

const Privacy = () => {
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
              Privacy <span className="text-primary">Policy</span>
            </h1>
            
            <div className="bg-card rounded-lg p-8 shadow-soft space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sovereign Studios is committed to protecting your privacy. This policy explains 
                  how we collect, use, and safeguard your personal information when you use our 
                  services or visit our website.
                </p>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Information We Collect
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Booking and payment details</li>
                  <li>• Event preferences and requirements</li>
                  <li>• Website usage data and cookies</li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To process and manage your bookings</li>
                  <li>• To communicate about your events and enquiries</li>
                  <li>• To improve our services and facilities</li>
                  <li>• To send promotional materials (with your consent)</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your 
                  personal data against unauthorised access, alteration, disclosure, or destruction. 
                  Your payment information is processed securely through our trusted payment partners.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will retain your personal data only for as long as necessary to fulfil the 
                  purposes for which it was collected, including to comply with legal, accounting, 
                  or reporting requirements.
                </p>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Sharing Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or rent your personal data to third parties. We may share your 
                  information with trusted service providers who assist us in operating our business, 
                  such as payment processors and marketing agencies, under strict confidentiality 
                  agreements.
                </p>
              </div>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under data protection law, you have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access your personal data</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Object to processing of your data</li>
                  <li>• Request data portability</li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies to enhance your browsing experience. You can manage 
                  your cookie preferences through your browser settings. Essential cookies are 
                  required for the website to function properly.
                </p>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or wish to exercise your 
                  rights, please contact us at{" "}
                  <a href="mailto:info@sovereignstudios.co.uk" className="text-primary hover:underline">
                    info@sovereignstudios.co.uk
                  </a>
                </p>
              </div>
              
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Last updated: January 2026
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

export default Privacy;
