const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">À propos</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
            Bienvenue chez <span className="text-primary">Le Repère</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Située à Froyennes, notre sandwicherie est le rendez-vous des amateurs de bons produits. 
            Chez Le Repère, chaque sandwich est préparé avec des ingrédients frais et beaucoup d'amour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
