import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSpaces = () => {
    if (isHomePage) {
      const spacesSection = document.getElementById("spaces");
      if (spacesSection) {
        spacesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#spaces";
    }
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
      subItems: [
        { name: "About Us", href: "/about-us" },
      ],
    },
    {
      name: "Spaces",
      href: "/#spaces",
      scrollAction: scrollToSpaces,
      subItems: [
        { name: "Main Room", href: "/main-room" },
        { name: "Dance Space", href: "/dance-space" },
        { name: "Treatment Rooms", href: "/treatment-rooms" },
        { name: "Events Hire", href: "/events-hire" },
      ],
    },
    {
      name: "T&C's",
      href: "/terms",
      subItems: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Cancellations", href: "/terms/cancellations" },
        { name: "FAQs", href: "/faq" },
      ],
    },
    {
      name: "Privacy",
      href: "/privacy",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const textColor = isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";
  const hoverTextColor = isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground/90";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold tracking-wide">
          <span className={textColor}>Sovereign</span>
          <span className="text-primary"> Studios</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <div className="flex items-center gap-1">
                  <Link
                    to={item.href}
                    onClick={item.scrollAction}
                    className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${hoverTextColor}`}
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`transition-colors hover:text-primary ${hoverTextColor}`}
                  >
                    <ChevronDown size={16} className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${hoverTextColor}`}
                >
                  {item.name}
                </Link>
              )}
              
              {item.subItems && (
                <div className={`absolute top-full left-0 mt-2 bg-background rounded-md shadow-elevated border border-border min-w-[180px] transition-all duration-200 ${
                  openDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-md last:rounded-b-md"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://venue.appointedd.com/booking-widget/66b7ca766c4aed54088d97f6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium tracking-wide hover:bg-copper-dark transition-colors shadow-copper"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://venue.appointedd.com/booking-widget/66b7ca766c4aed54088d97f6"
              target="_blank"
              rel="noopener noreferrer"
              className={`md:hidden ${textColor}`}            
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navigation;
