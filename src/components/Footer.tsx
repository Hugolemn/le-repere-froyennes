import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-primary">Le Repère</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre sandwicherie de quartier à Froyennes. Des produits frais, des portions généreuses et un accueil chaleureux.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Liens rapides</h4>
            <nav className="space-y-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "À propos", href: "#apropos" },
                { label: "Menu", href: "#menu" },
                { label: "Avis", href: "#avis" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Rue de la Taverne de Maire 7, 7503 Froyennes
              </p>
              <a href="tel:0472684162" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                0472 68 41 62
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Le Repère · Sandwicherie à Froyennes. Tous droits réservés.
          </p>
          <Link
            to="/mentions-legales"
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
