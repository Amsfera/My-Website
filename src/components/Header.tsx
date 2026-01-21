import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import amsferaLogo from "@/assets/amsfera-logo.png";

const navItems = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Contacts", href: "/contacts", isRoute: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    if (item.isRoute) {
      return (
        <Link
          to={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {item.label}
      </a>
    );
  };

  const MobileNavLink = ({ item }: { item: typeof navItems[0] }) => {
    if (item.isRoute) {
      return (
        <Link
          to={item.href}
          onClick={() => setIsOpen(false)}
          className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        onClick={() => setIsOpen(false)}
        className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={amsferaLogo} 
              alt="Amsfera" 
              className="h-[150px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-64 bg-background border-l border-border shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <MobileNavLink key={item.label} item={item} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
