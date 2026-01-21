import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import amsferaLogo from "@/assets/amsfera-logo.png";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Brand */}
          <Link to="/">
            <img 
              src={amsferaLogo} 
              alt="Amsfera" 
              className="h-[100px] w-auto object-contain"
            />
          </Link>

          {/* Contact Email */}
          <a
            href="mailto:hello@amsfera.studio"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">Connect@amsfera.com</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {currentYear} Amsfera Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
