import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import BackToHome from "@/components/BackToHome";

const TermsConditions = () => {
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
            <BackToHome />
            {/* <span className="text-primary text-sm tracking-[0.2em] uppercase">Legal</span> */}
            <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4">
              Terms & Conditions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Hire Types At a Glance */}
            <div className="bg-background rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-display text-2xl text-primary mb-2">Hire Types</h2>
              <p className="text-muted-foreground text-sm mb-6">At a Glance - Sovereign Studios Venue Hire</p>
              <p className="text-xs text-muted-foreground mb-6">Last Updated: 20th Jan 2026</p>
              
              <p className="text-foreground mb-6">These are the key points to ensure a smooth and responsible use of the venue.</p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-foreground">General Hire</p>
                  <p className="text-primary text-lg font-medium">£12.50ph</p>
                  <p className="text-xs text-muted-foreground">(Rehearsals, Classes, Small Groups &amp; Low-Footfall Uses)</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-foreground">Dance Hire</p>
                  <p className="text-primary text-lg font-medium">£12.50ph</p>
                  <p className="text-xs text-muted-foreground">(2hrs Min Required)</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-foreground">Event Hire</p>
                  <p className="text-primary text-lg font-medium">£275 flat rate</p>
                  <p className="text-xs text-muted-foreground">(Any High-Footfall Occasion 25ppl +)</p>
                </div>
              </div>

              <h3 className="font-display text-xl text-foreground mb-4">Key Terms:</h3>
              
              <div className="space-y-6 text-foreground">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Booking Duration & Additional Charges</h4>
                  <p className="mb-2">Standard Booking Duration: All party/event bookings operate on a 10-hour block from 2pm to midnight. This includes time for setup and pack-down.</p>
                  
                  <p className="font-medium mt-4 mb-2">* Early Access & Additional Charges:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Access before 2pm is charged at £12.50 per hour and must be confirmed in advance.</li>
                    <li>Bookings starting earlier than 2pm will still run until midnight. Custom start/end times may allow other bookings to be scheduled 1 hour before or after your event.</li>
                  </ul>
                  
                  <p className="font-medium mt-4 mb-2">* SUBJECT TO CHANGE - General Hire on Saturdays & Sundays:</p>
                  <p className="text-muted-foreground ml-4">General hire bookings on weekends between 2pm and 9pm may be subject to rescheduling. In such cases, a minimum of 2 weeks' notice will be provided for any changes only where priority will be given to event hires. Clients booking during these hours must agree to this term as part of the booking process.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Entry and Exit</h4>
                  <p className="text-muted-foreground">Enter only after the previous client has secured the padlock. Use your personal access code.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Cleanliness</h4>
                  <p className="text-muted-foreground">Leave the space clean and tidy. Remove all rubbish/use the bin provided in the room to discard items.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Contact on Arrival</h4>
                  <p className="text-muted-foreground">If the venue is unsatisfactory upon entry, contact us immediately at 07983417736.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Overstay Penalty</h4>
                  <p className="text-muted-foreground">£5 fee for each 30-minute period exceeding booking time by more than 5 minutes. £10 fee if overstay affects next booking.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Electricity Usage</h4>
                  <p className="text-muted-foreground">Leaving lights on may incur a £5 - £10 fee.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">CCTV Monitoring</h4>
                  <p className="text-muted-foreground">The venue is monitored by CCTV to verify space usage and ensure compliance with booking terms.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Accurate Booking Information</h4>
                  <p className="text-muted-foreground">Providing false or misleading information about the nature of your hire may result in immediate termination of your booking and potential legal action.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Prohibited Activities</h4>
                  <p className="text-muted-foreground">Certain activities, including but not limited to nudist events, swinging parties, and unlicensed sale of alcohol, are strictly prohibited.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Right to Refuse</h4>
                  <p className="text-muted-foreground">Sovereign Studios reserves the right to refuse or terminate any booking that violates our terms or is deemed inappropriate for our venue.</p>
                </div>
              </div>
            </div>

            {/* Full Terms & Conditions */}
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h2 className="font-display text-2xl text-primary mb-6">SOVEREIGN STUDIOS VENUE HIRE AGREEMENT</h2>
              <p className="text-foreground font-semibold mb-8">TERMS & CONDITIONS OF HIRE</p>

              <div className="space-y-8 text-foreground">
                <div>
                  <h3 className="font-semibold text-lg mb-2">1. Understanding Hire Types</h3>
                  <p className="text-muted-foreground">It is essential that clients clearly understand the distinction between general hire and events. General hire applies to smaller uses, such as rehearsals, classes, and other non-event activities. Event hire applies to gatherings with higher footfall or that may require additional setup, amenities, or involve catering, entertainment, or larger groups. These distinctions carry different pricing, with events charged at a flat rate to account for increased resource use and logistical requirements.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">2. Acceptance of Terms</h3>
                  <p className="text-muted-foreground">By proceeding with your booking, you are deemed to have accepted the following terms and conditions for the hire of Sovereign Studios ("the Venue").</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">3. Undertaking of the Hirer</h3>
                  <p className="text-muted-foreground">The Hirer (referred to as "you" or "your") undertakes to ensure that they understand and comply with these Hire Conditions.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">4. Supervision and Responsibility</h3>
                  <p className="text-muted-foreground mb-2">You must be present, or arrange for responsible adult representatives to be present, throughout the hire period to ensure compliance with these terms. You are responsible for:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Familiarising yourself with the Venue's guidelines.</li>
                    <li>Ensuring the Venue remains secure during the hire period.</li>
                    <li>Supervising the use of the Venue, its fabric, and its contents.</li>
                    <li>Ensuring that the hire does not disrupt other activities or hires.</li>
                    <li>Leaving the Venue clean and tidy, with all rubbish removed.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">5. Cleaning and Tidiness</h3>
                  <p className="text-muted-foreground mb-2">You must:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Ensure that the Venue is left in the same clean condition as it was found. All rubbish must be removed from the premises.</li>
                    <li>Return all equipment, chairs, and tables to their original storage positions.</li>
                    <li>Clear the Venue of all attendees, turn off all lights, and secure the building at the end of the hire.</li>
                    <li>If the Venue requires cleaning after your hire, you will be liable for the full cost of cleaning services and will be invoiced accordingly.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">6. Use of Premises</h3>
                  <p className="text-muted-foreground mb-2">You shall not:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Use the Venue for any unlawful purpose or in any unlawful manner.</li>
                    <li>Bring onto the Venue anything that may endanger the premises or invalidate insurance policies.</li>
                    <li>Permit the use of drugs or smoking inside the Venue (a designated smoking area is provided).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7. Fire Safety</h3>
                  <p className="text-muted-foreground mb-2">You must:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Ensure that "Emergency Exit" signs are illuminated and unobstructed.</li>
                    <li>Call the Fire Brigade in the event of any fire, however minor, and report the incident to Venue management.</li>
                    <li>Inform attendees of fire exits and the Evacuation Meeting Point at the start of the event.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">8. Equipment and Electrical Appliances</h3>
                  <p className="text-muted-foreground mb-2">Any equipment or electrical appliances brought into the Venue must:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Be certified as safe and in good working order.</li>
                    <li>Be used in a manner that complies with safety standards.</li>
                    <li>Be PAT tested where necessary.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">9. Insurance and Liability</h3>
                  <p className="text-muted-foreground mb-2">You are responsible for any damage to the Venue, its fixtures, fittings, or contents, whether accidental or intentional. You agree to:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Make good or pay for any damage.</li>
                    <li>Ensure that your activities do not invalidate the Venue's insurance.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">10. Accidents and Dangerous Occurrences</h3>
                  <p className="text-muted-foreground">All accidents or incidents involving injury must be reported immediately to Sovereign Studios management and recorded via email to info@sovereignstudios.co.uk.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">11. Stored Equipment</h3>
                  <p className="text-muted-foreground">The Venue accepts no liability for any equipment or property stored or left on the premises. All items must be removed at the end of the hire. The Venue reserves the right to dispose of any uncollected items 7 days after the hire.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">12. No Alterations</h3>
                  <p className="text-muted-foreground">You may not make any alterations to the Venue or install fixtures without prior written approval. Any approved fixtures must be removed after the hire, and the premises must be restored to their original condition.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">13. Payments</h3>
                  <p className="text-muted-foreground">All bookings must be secured with full payment via our online system. Payments must be made prior to the event.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">14. Cancellations and Refunds</h3>
                  <p className="text-muted-foreground mb-2">To qualify for a refund, you must cancel your booking at least 30 days in advance, via email. Refunds will be processed within 7 working days. Cancellations made less than 30 days before the event are non-refundable.</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>More than 30 days' notice → 50% refund</li>
                    <li>Less than 30 days' notice → No refund</li>
                    <li>Option to reschedule instead of cancel.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">15. Compliance with Legislation</h3>
                  <p className="text-muted-foreground">You must ensure that any activities involving children or vulnerable adults comply with relevant legislation. You are responsible for having appropriate child protection policies in place.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">16. Car Parking</h3>
                  <p className="text-muted-foreground">No designated parking is available at Sovereign Studios. Please adhere to parking guidelines to avoid obstructing other vehicles.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">17. CCTV and Monitoring</h3>
                  <p className="text-muted-foreground">Sovereign Studios employs CCTV monitoring throughout the venue for security purposes and to ensure compliance with booking terms. By accepting these terms, you acknowledge and consent to CCTV recording during your hire period. Footage may be used to verify the nature and extent of venue usage, and in the event of disputes or legal proceedings.</p>
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

export default TermsConditions;
