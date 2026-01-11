import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Spaces from "@/components/Spaces";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Spaces />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
