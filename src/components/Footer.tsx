import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Le Repère</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Votre sandwicherie de quartier à Froyennes. Des produits frais, des portions généreuses et un accueil chaleureux.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Liens rapides</h4>
            <nav className="space-y-2">
              {["Accueil", "À propos", "Menu", "Avis", "Galerie", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace("à propos", "apropos")}`}
                  className="block text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Rue de la Taverne de Maire 7, 7503 Tournai
              </p>
              <a href="tel:0472684162" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone size={16} className="text-primary" />
                0472 68 41 62
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Le Repère · Sandwicherie à Froyennes, Tournai. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
