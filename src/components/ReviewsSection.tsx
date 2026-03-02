import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Cédric D.", text: "C'est la 1ère fois que j'y suis allé aujourd'hui. J'y retournerai, l'accueil est sympa et fiable avec des ingrédients frais. 😉", rating: 5 },
  { name: "Zoë P.", text: "Excellente découverte ! Les sandwiches sont savoureux, avec un gros coup de cœur pour le Kebab, à la fois original et gourmand. Le personnel est chaleureux et toujours à l'écoute pour s'adapter à vos préférences. Une adresse à tester sans hésiter !", rating: 5 },
  { name: "Megan D.", text: "Très bon sandwich, des baguettes généreuses et moelleuses ! Rapport qualité prix 👍 Le personnel est très réactif et attentionné.", rating: 5 },
  { name: "Mike M.", text: "Merveilleux, délicieux, un service agréable avec des propriétaires sympathiques. Enfin un sandwich qui te calle la faim. Je recommande, allez-y !", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section id="avis" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Témoignages</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Ce que disent nos clients</h2>
          
          {/* Rating badge */}
          <div className="inline-flex items-center gap-3 bg-card rounded-2xl px-6 py-3 border border-border mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < 5 ? "fill-accent text-accent" : "text-border"} />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-foreground">4,7</span>
            <span className="text-muted-foreground text-sm">/ 5 · 48 avis Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border relative hover:shadow-lg transition-shadow">
              <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className={j < r.rating ? "fill-accent text-accent" : "text-border"} />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed italic">"{r.text}"</p>
              <span className="text-primary font-semibold text-sm">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
