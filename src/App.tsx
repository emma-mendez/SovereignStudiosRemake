import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import MainRoom from "./pages/MainRoom";
import DanceSpace from "./pages/DanceSpace";
import TreatmentRooms from "./pages/TreatmentRooms";
import EventsHire from "./pages/EventsHire";
import TermsConditions from "./pages/TermsConditions";
import Cancellations from "./pages/Cancellations";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/main-room" element={<MainRoom />} />
          <Route path="/dance-space" element={<DanceSpace />} />
          <Route path="/treatment-rooms" element={<TreatmentRooms />} />
          <Route path="/events-hire" element={<EventsHire />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/terms/cancellations" element={<Cancellations />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
