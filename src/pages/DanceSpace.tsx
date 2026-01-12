import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpaceCarousel from "@/components/SpaceCarousel";
import img1 from "@/assets/dance2square.png";
import img2 from "@/assets/group2.png";
import img3 from "@/assets/mainImage4.jpg";
import img4 from "@/assets/mainImage5.jpg";
import img6 from "@/assets/mainVidDance.mp4";
import BackToHome from "@/components/BackToHome";

const DanceSpace = () => {
type MediaItem = { type: "video" | "image"; src: string };
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
            <BackToHome />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dance <span className="text-primary">Space</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              A dedicated space for dance classes, rehearsals, and performances
            </p>
            
            <SpaceCarousel media={media} spaceName="Main Room" />
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sprung wooden floor</li>
                  <li>• Full-length mirrors</li>
                  <li>• Professional sound system</li>
                  <li>• Climate controlled</li>
                  <li>• Changing facilities</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Ideal For</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dance Classes</li>
                  <li>• Rehearsals</li>
                  <li>• Fitness Sessions</li>
                  <li>• Yoga & Pilates</li>
                  <li>• Performance Workshops</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://venue.appointedd.com/booking-widget/66b7ca766c4aed54088d97f6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-medium tracking-wide hover:bg-copper-dark transition-colors shadow-copper"
              >
                Book Dance Space
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
                  href="/treatment-rooms"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Treatment Rooms
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

export default DanceSpace;
