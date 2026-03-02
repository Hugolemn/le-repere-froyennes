import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-sandwich.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Sandwich frais artisanal chez Le Repère à Tournai" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-32">
        <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up">
          🥖 Sandwicherie à Froyennes · Tournai
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Des sandwichs frais<br />et généreux à Tournai
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Produits frais, accueil chaleureux et saveurs gourmandes chaque jour.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#menu" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity">
            Voir le menu
          </a>
          <a href="tel:0472684162" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-foreground/30 transition-colors">
            <Phone size={18} />
            Appeler
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#apropos" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
