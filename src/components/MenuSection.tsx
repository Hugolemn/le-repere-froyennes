import { useState } from "react";

type Category = "classiques" | "speciaux" | "salades" | "planches" | "boissons";

const categories: { key: Category; label: string }[] = [
  { key: "classiques", label: "Sandwichs classiques" },
  { key: "speciaux", label: "Sandwichs spéciaux" },
  { key: "salades", label: "Salades" },
  { key: "planches", label: "Planches apéro" },
  { key: "boissons", label: "Boissons" },
];

const menuItems: Record<Category, { name: string; desc: string; price: string }[]> = {
  classiques: [
    { name: "Le Classique", desc: "Jambon, fromage, salade, tomate, mayonnaise", price: "4,50€" },
    { name: "Le Poulet", desc: "Poulet pané, salade, tomate, sauce cocktail", price: "5,00€" },
    { name: "Le Thon", desc: "Thon, salade, tomate, oignon, mayonnaise", price: "4,80€" },
    { name: "Le Fromager", desc: "Triple fromage, salade, tomate, moutarde", price: "4,50€" },
    { name: "L'Américain", desc: "Américain préparé, oignon, cornichon, salade", price: "5,00€" },
    { name: "Le Veggie", desc: "Houmous, légumes grillés, salade, tomate", price: "5,00€" },
  ],
  speciaux: [
    { name: "Le Repère", desc: "Poulet mariné, avocat, tomates séchées, sauce maison", price: "6,50€" },
    { name: "Le Gourmand", desc: "Lard grillé, raclette fondue, oignons caramélisés", price: "7,00€" },
    { name: "L'Italien", desc: "Mozzarella, jambon de Parme, pesto, roquette", price: "6,80€" },
    { name: "Le Saumon", desc: "Saumon fumé, cream cheese, câpres, aneth", price: "7,50€" },
    { name: "Le Tex-Mex", desc: "Poulet épicé, guacamole, cheddar, jalapeños", price: "7,00€" },
  ],
  salades: [
    { name: "César", desc: "Poulet grillé, parmesan, croûtons, sauce césar", price: "8,50€" },
    { name: "Méditerranéenne", desc: "Feta, olives, tomates, concombre, vinaigrette", price: "7,50€" },
    { name: "Chèvre chaud", desc: "Chèvre pané, miel, noix, mesclun", price: "8,00€" },
    { name: "Nordique", desc: "Saumon fumé, avocat, agrumes, aneth", price: "9,00€" },
  ],
  planches: [
    { name: "Planche Mixte", desc: "Charcuteries et fromages variés, olives, pain", price: "10,00€" },
    { name: "Planche Fromages", desc: "Sélection de fromages affinés, confiture, noix", price: "9,00€" },
    { name: "Planche Italienne", desc: "Coppa, bresaola, mozzarella, tomates séchées", price: "10,00€" },
  ],
  boissons: [
    { name: "Eau plate / pétillante", desc: "50cl", price: "1,50€" },
    { name: "Coca-Cola", desc: "33cl", price: "2,00€" },
    { name: "Jus de fruits frais", desc: "Orange, pomme ou multifruits", price: "3,00€" },
    { name: "Café", desc: "Espresso ou allongé", price: "1,80€" },
    { name: "Thé / Infusion", desc: "Variétés au choix", price: "2,00€" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("classiques");

  return (
    <section id="menu" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Notre carte</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Le Menu</h2>
          <p className="text-muted-foreground text-lg">Des saveurs pour tous les goûts, préparées avec des produits frais.</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {menuItems[active].map((item) => (
            <div key={item.name} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
