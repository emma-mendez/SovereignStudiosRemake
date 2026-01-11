import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What's included in the £275 fee?",
    answer: "Private use of the entire venue (10hrs, 2pm–midnight) 9 XL tables & 80 chairs. Professional sound system & lighting. BYO food, drinks, decorations."
  },
  {
    question: "Can I view the space before booking?",
    answer: "Yes! Self-viewings available with 1hr notice. Request access via enquiry form."
  },
  {
    question: "Do you allow external caterers/DJs?",
    answer: "Absolutely – bring your own (no kitchen on-site)."
  },
  {
    question: "What's your capacity?",
    answer: "102 standing / 55 seated"
  },
  {
    question: "Parking available?",
    answer: "No on-site parking, but free street parking 2-min walk away."
  },
  {
    question: "Can I book outside 2pm–midnight?",
    answer: "Early access only: £12.50/hr (before 2pm). No charge for events ending past midnight (must finish by 6am)."
  },
  {
    question: "Security for parties?",
    answer: "Security is required for 18-25th birthdays where alcohol is available (2 guard minimum, arranged by client/in-house recommended company). Must be SIA Badged."
  },
  {
    question: "How many security guards required?",
    answer: "Under-25 events: 1-20 guests: 2 security guards required. 21-50 guests: 3 security guards. 51+ guests: 4 security guards. A quote will be provided with an enquiry."
  },
  {
    question: "Is alcohol allowed?",
    answer: "Allowed for private parties only (no alcohol sales permitted)."
  },
];

const FAQ = () => {
  const leftColumn = faqItems.slice(0, 4);
  const rightColumn = faqItems.slice(4);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-cream-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase">Questions</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4">
              Frequently Asked Questions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Accordion type="single" collapsible className="space-y-2">
                  {leftColumn.map((item, index) => (
                    <AccordionItem key={index} value={`left-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary py-4 [&[data-state=open]]:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right Column */}
              <div className="bg-background rounded-2xl p-6 shadow-soft">
                <Accordion type="single" collapsible className="space-y-2">
                  {rightColumn.map((item, index) => (
                    <AccordionItem key={index} value={`right-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary py-4 [&[data-state=open]]:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
