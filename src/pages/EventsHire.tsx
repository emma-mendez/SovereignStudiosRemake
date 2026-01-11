import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpaceCarousel from "@/components/SpaceCarousel";
import img1 from "@/assets/mainEvents1.jpg";
import img2 from "@/assets/events1.jpg";
import img3 from "@/assets/mainEvent6.jpg";
import img4 from "@/assets/mainImage5.jpg";
import img6 from "@/assets/eventClip2.mp4";

type MediaType = "image" | "video";

interface MediaItem {
  type: MediaType;
  src: string;
}


const EventsHire = () => {
  const media: MediaItem[] = [
  { type: "image", src: img2 },
  { type: "video", src: img6 },
  { type: "image", src: img1 },
  { type: "image", src: img3 },

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
              Events <span className="text-primary">Hire</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Flexible venue hire options for all your event needs
            </p>
            
            <SpaceCarousel media={media} spaceName="Main Room" />
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Packages Include</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flexible hire periods</li>
                  <li>• Professional AV equipment</li>
                  <li>• Catering options available</li>
                  <li>• Event coordination support</li>
                  <li>• Custom setup arrangements</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">Event Types</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Corporate Functions</li>
                  <li>• Private Celebrations</li>
                  <li>• Workshops & Seminars</li>
                  <li>• Photo & Video Shoots</li>
                  <li>• Pop-up Events</li>
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
                Enquire About Hire
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Explore Other Spaces</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="main-room"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Main Room
                </a>
                <a
                  href="dance-space"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Dance Space
                </a>
                <a
                  href="treatment-rooms"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Treatment Rooms
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

export default EventsHire;
