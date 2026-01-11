import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 border-t border-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <a href="#home" className="font-display text-2xl">
              <span className="text-primary-foreground">Sovereign</span>
              <span className="text-primary"> Studios</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Feel free to reach out if you want to collaborate with us, or simply chat.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-primary-foreground font-medium mb-3 text-center md:text-right">Follow Us</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563353317751"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sovereignstudiosbirmz"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/shorts/dxfhZGcjTog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmamendez/"
                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-charcoal-light text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sovereign Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
