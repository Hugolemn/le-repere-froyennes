import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Marie D.", text: "Service impeccable et produits toujours frais. Mon sandwich préféré, c'est Le Repère !", rating: 5 },
  { name: "Thomas L.", text: "Sandwichs généreux et délicieux. Le meilleur rapport qualité-prix de Tournai.", rating: 5 },
  { name: "Sophie B.", text: "Accueil chaleureux, je recommande les yeux fermés. On y retourne chaque semaine !", rating: 5 },
  { name: "Lucas M.", text: "La planche apéro est incroyable ! Produits frais et service rapide, que demander de plus ?", rating: 4 },
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
            <span className="text-muted-foreground text-sm">/ 5 · 47 avis Google</span>
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
