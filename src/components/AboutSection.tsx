import { Leaf, Clock, Heart, Users } from "lucide-react";

const features = [
  { icon: Leaf, title: "Produits frais", desc: "Ingrédients sélectionnés chaque jour pour une qualité irréprochable." },
  { icon: Heart, title: "Portions généreuses", desc: "Nos sandwichs sont préparés avec générosité pour vous régaler." },
  { icon: Clock, title: "Service rapide", desc: "Commandez et savourez en un temps record, sans compromis." },
  { icon: Users, title: "Accueil chaleureux", desc: "Une équipe souriante qui vous accueille comme à la maison." },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">À propos</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
            Bienvenue chez <span className="text-primary">Le Repère</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Située à Froyennes, notre sandwicherie est le rendez-vous des amateurs de bons produits. 
            Chez Le Repère, chaque sandwich est préparé avec des ingrédients frais et beaucoup d'amour.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-border group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-light text-primary mb-5 group-hover:scale-110 transition-transform">
                <f.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
