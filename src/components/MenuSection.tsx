import { useState } from "react";

type Category = "classiques" | "speciaux" | "panini" | "salades" | "pates" | "petitdej" | "gouter" | "sauces" | "supplements" | "autres";

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "classiques", label: "Classiques", emoji: "⭐" },
  { key: "speciaux", label: "Spéciaux", emoji: "🌟" },
  { key: "panini", label: "Panini", emoji: "🌯" },
  { key: "salades", label: "Salades", emoji: "🥗" },
  { key: "pates", label: "Pâtes", emoji: "🍝" },
  { key: "petitdej", label: "Petit déj", emoji: "☕" },
  { key: "gouter", label: "Goûter", emoji: "🍩" },
  { key: "autres", label: "Autres", emoji: "🍕" },
  { key: "sauces", label: "Sauces", emoji: "🧂" },
  { key: "supplements", label: "Suppléments", emoji: "➕" },
];

const menuItems: Record<Category, { name: string; desc: string; price: string }[]> = {
  classiques: [
    { name: "Américain", desc: "", price: "4,00 €" },
    { name: "Jambon", desc: "", price: "4,00 €" },
    { name: "Gouda", desc: "", price: "4,00 €" },
    { name: "Salade de crabe", desc: "", price: "4,00 €" },
    { name: "Salade de viande", desc: "", price: "4,00 €" },
    { name: "Salade de crevette", desc: "", price: "4,20 €" },
    { name: "Salade de pita", desc: "", price: "4,00 €" },
    { name: "Thon mayo", desc: "", price: "4,00 €" },
    { name: "Thon piquant", desc: "", price: "4,00 €" },
    { name: "Thon cocktail", desc: "", price: "4,00 €" },
    { name: "Poulet mayo", desc: "", price: "4,00 €" },
    { name: "Poulet samouraï", desc: "", price: "4,00 €" },
    { name: "Poulet curry", desc: "", price: "4,00 €" },
    { name: "Poulet andalouse", desc: "", price: "4,00 €" },
    
    { name: "Boulette", desc: "", price: "4,20 €" },
    { name: "Émincés de poulet", desc: "", price: "4,50 €" },
    { name: "Scampis ail", desc: "", price: "4,50 €" },
  ],
  speciaux: [
    { name: "Le Kebab", desc: "Kebab, sauce au choix, crudités", price: "4,30 €" },
    { name: "Le Burger", desc: "Burger, sauce au choix, crudités", price: "4,30 €" },
    { name: "L'Hawaïen", desc: "Jambon, fromage, ananas, crudités, sauce au choix", price: "4,30 €" },
    { name: "Le Végé", desc: "Pesto, salade, maïs, tomates, concombre, carotte", price: "4,30 €" },
    { name: "L'Oasis Thon", desc: "Thon, pêche, crudités", price: "4,30 €" },
    { name: "Le Chori-Parme", desc: "Chorizo, copeaux de parmesan, crudités", price: "4,30 €" },
    { name: "Le Dagobert", desc: "Jambon, gouda, mayo, œufs", price: "4,30 €" },
    { name: "Le Lyonnais", desc: "Rosette, copeaux de parmesan, crudités", price: "4,50 €" },
    { name: "Le chèvre miel", desc: "Chèvre, lardons, miel, crudités", price: "4,50 €" },
    { name: "Le Grecque", desc: "Jambon de Parme, feta, olives, tomates séchées", price: "4,50 €" },
    { name: "Le Poulet Poivré", desc: "Émincés de poulet, gouda, sauce poivre, oignon frit", price: "4,50 €" },
    { name: "Le Vert Miel", desc: "Brie, pomme, noix, salade, miel", price: "4,50 €" },
    { name: "Pain de viande", desc: "Pain de viande, sauce au choix, crudités", price: "4,50 €" },
    { name: "Le PhilaFish", desc: "Saumon, Philadelphia, oignon rouge, concombre, salade", price: "4,80 €" },
    { name: "Le Big Américain", desc: "Jambon, fromage, américain, crudités", price: "4,80 €" },
    { name: "Le Bif Gourmet", desc: "Rosbif, salade, béarnaise", price: "4,80 €" },
    { name: "L'Italien", desc: "Jambon de Parme, parmesan, pesto, tomates séchées, huile d'olive", price: "4,80 €" },
  ],
  panini: [
    { name: "Le chèvre miel", desc: "Chèvre, miel, lardon, noix", price: "5,20 €" },
    { name: "L'hawaï", desc: "Jambon, ananas, mozzarella", price: "5,20 €" },
    { name: "Le Dolce Vita", desc: "Jambon de Parme, mozzarella, tomates séchées", price: "5,20 €" },
    { name: "Le poulet gourmand", desc: "Émincés de poulet, lardon, mozzarella, oignons frits", price: "5,20 €" },
    { name: "Le burger gourmand", desc: "Burger, fromage, oignons frits, sauce au choix", price: "5,20 €" },
    { name: "Le crousti boulette", desc: "Boulette, emmental, oignons frits, sauce au choix", price: "5,20 €" },
    { name: "Le 3 fromages", desc: "Emmental, fromage raclette, fromage de chèvre", price: "5,20 €" },
    { name: "Le Mexicanos gourmand", desc: "Mexicanos, fromage, oignons frits, sauce au choix", price: "5,20 €" },
    { name: "Le Savoyard", desc: "Fromage raclette, jambon, champignon", price: "5,20 €" },
    { name: "Le Kebab", desc: "Kebab, fromage, oignon rouge, sauce au choix", price: "5,20 €" },
  ],
  salades: [
    { name: "La Pêche mer", desc: "Base + pêche, thon", price: "8,50 €" },
    { name: "La Boulette", desc: "Base + tranches de boulette", price: "8,50 €" },
    { name: "La Pomme d'Or", desc: "Base + brie, pomme, œufs, miel", price: "8,50 €" },
    { name: "La Chèvre d'Or", desc: "Base + chèvre, pomme, œufs, miel", price: "8,50 €" },
    { name: "L'Italienne", desc: "Base + rosette, olives, copeaux de parmesan, tomates séchées, pesto", price: "9,00 €" },
    { name: "La Saumon", desc: "Base + saumon, avocat", price: "9,00 €" },
    { name: "La Burrata", desc: "Base + burrata, jambon de Parme, olives, tomates séchées", price: "9,00 €" },
    { name: "La Grecque", desc: "Base + fêta", price: "9,00 €" },
  ],
  pates: [
    { name: "Bolognaise", desc: "Parmesan & gruyère compris", price: "7,50 €" },
    { name: "Carbonara", desc: "Parmesan & gruyère compris", price: "7,50 €" },
    { name: "4 Fromages", desc: "Parmesan & gruyère compris", price: "7,50 €" },
  ],
  petitdej: [
    { name: "Pain au chocolat", desc: "", price: "1,20 €" },
    { name: "Croissant", desc: "", price: "1,20 €" },
    { name: "Sandwich au Nutella", desc: "", price: "2,50 €" },
  ],
  gouter: [
    { name: "Donuts", desc: "", price: "1,80 €" },
    { name: "Saucisse piquante sèche", desc: "", price: "2,20 €" },
    { name: "Saucisse sèche non piquante", desc: "", price: "2,20 €" },
    { name: "Muffins", desc: "", price: "2,90 €" },
  ],
  autres: [
    { name: "Croque Classique", desc: "Jambon, emmental, mozzarella", price: "3,00 €" },
  ],
  sauces: [
    { name: "Mayonnaise", desc: "", price: "" },
    { name: "Ketchup", desc: "", price: "" },
    { name: "Ketchup-Curry", desc: "", price: "" },
    { name: "Poivre", desc: "", price: "" },
    { name: "Bicky", desc: "", price: "" },
    { name: "Barbecue", desc: "", price: "" },
    { name: "Andalouse", desc: "", price: "" },
    { name: "Béarnaise", desc: "", price: "" },
    { name: "Américaine", desc: "", price: "" },
    { name: "Cocktail", desc: "", price: "" },
    { name: "Brasil", desc: "", price: "" },
    { name: "Algérienne", desc: "", price: "" },
    { name: "Pita ail", desc: "", price: "" },
  ],
  supplements: [
    { name: "Baguette fitness", desc: "", price: "+0,30 €" },
    { name: "Charcuterie / Fromage", desc: "", price: "+0,50 €" },
    { name: "Saumon / Jambon de Parme", desc: "", price: "+0,80 €" },
    { name: "Autres accomp. crudités", desc: "", price: "+0,20 €" },
    { name: "Faluche", desc: "", price: "+0,50 €" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("classiques");

  return (
    <section id="menu" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Notre carte</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-2 text-foreground">Le Menu</h2>
          <p className="text-muted-foreground text-sm mb-1">Sandwichs disponibles en baguette blanche, baguette fitness ou faluche</p>
          <p className="text-muted-foreground text-sm">Base salades : salade, tomate, carottes, concombre, œufs</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:text-foreground border border-border"
              }`}
            >
              <span className="mr-1">{c.emoji}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        {active === "sauces" ? (
          <div className="max-w-3xl mx-auto bg-background rounded-xl p-8 border border-border">
            <h3 className="font-display text-xl font-bold text-primary mb-4 text-center">Nos sauces</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {menuItems.sauces.map((item) => (
                <span key={item.name} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {menuItems[active].map((item) => (
              <div key={item.name} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-background rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                  {item.price && <span className="text-primary font-bold text-base whitespace-nowrap">{item.price}</span>}
                </div>
                {item.desc && <p className="text-muted-foreground text-sm">{item.desc}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
