import { Phone } from "lucide-react";
import videoAsset from "@/assets/brand/croc-sandwich.mp4.asset.json";
import posterAsset from "@/assets/brand/croc-poster.jpg.asset.json";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block text-foreground">Frais, généreux,</span>
            <span className="inline-block bg-primary text-primary-foreground px-3 mt-2">fait minute.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Des baguettes croustillantes garnies de produits frais, préparées devant vous chaque jour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#menu" className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-display text-lg font-bold uppercase tracking-wide hover:opacity-90 transition-opacity">
              Voir le menu
            </a>
            <a href="tel:0472684162" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 rounded-lg font-display text-lg font-bold uppercase tracking-wide hover:bg-foreground/10 transition-colors">
              <Phone size={18} />
              Appeler
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-[340px] lg:max-w-[400px] aspect-[9/16] max-h-[75vh] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <video
              src={videoAsset.url}
              poster={posterAsset.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-[1.55]"
              style={{ transformOrigin: "50% 18%" }}
              aria-label="Croc dans un sandwich Le Repère"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
