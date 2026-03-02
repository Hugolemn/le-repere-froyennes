import { UtensilsCrossed, ShoppingBag, Truck, ChefHat } from "lucide-react";

const services = [
  { icon: UtensilsCrossed, title: "Sur place", desc: "Installez-vous confortablement et savourez votre repas dans notre espace accueillant." },
  { icon: ShoppingBag, title: "À emporter", desc: "Commandez et récupérez votre sandwich fraîchement préparé en quelques minutes." },
  { icon: Truck, title: "Livraison", desc: "Recevez vos plats favoris directement chez vous ou au bureau." },
  { icon: ChefHat, title: "Service Traiteur", desc: "Pour vos événements, fêtes ou réunions, faites appel à notre service traiteur sur mesure." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nos services</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Comment nous retrouver</h2>
          <p className="text-muted-foreground text-lg">Que vous préfériez manger sur place, emporter ou vous faire livrer, on s'adapte !</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <s.icon size={36} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
