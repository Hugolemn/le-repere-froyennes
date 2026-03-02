import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#menu", label: "Menu" },
  { href: "#avis", label: "Avis" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#accueil" className="font-display text-2xl font-bold text-primary">
          Le Repère
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:0472684162" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            <Phone size={16} />
            Appeler
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-2">
                {l.label}
              </a>
            ))}
            <a href="tel:0472684162" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold">
              <Phone size={16} />
              0472 68 41 62
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
