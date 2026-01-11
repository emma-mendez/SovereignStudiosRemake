import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpaceCarousel from "@/components/SpaceCarousel";
import img1 from "@/assets/treatmentroom1.jpg";
import img2 from "@/assets/room-lounge.jpg";
import img3 from "@/assets/mainImage4.jpg";
import img4 from "@/assets/mainImage5.jpg";
import img6 from "@/assets/treatmentroom1.mp4";

const TreatmentRooms = () => {
  const media: MediaItem[] = [
  { type: "video", src: img6 },
  { type: "image", src: img1 },
  { type: "image", src: img2 },
];

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Treatment <span className="text-primary">Rooms</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Tranquil spaces designed for wellness and relaxation services
            </p>
            
            <SpaceCarousel media={media} spaceName="Main Room" />
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Private treatment rooms</li>
                  <li>• Ambient lighting & music</li>
                  <li>• Professional massage tables</li>
                  <li>• Aromatherapy diffusers</li>
                  <li>• En-suite facilities</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Ideal For</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Massage Therapy</li>
                  <li>• Beauty Treatments</li>
                  <li>• Holistic Therapies</li>
                  <li>• Wellness Consultations</li>
                  <li>• Private Sessions</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://www.sovereignwellnesslounge.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-md text-base font-medium tracking-wide hover:bg-cyan-600 transition-colors shadow-lg"
              >
                Book Treatment Room
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Explore Other Spaces</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/main-room"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Main Room
                </a>
                <a
                  href="/dance-space"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Dance Space
                </a>
                <a
                  href="/events-hire"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Events Hire
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default TreatmentRooms;
