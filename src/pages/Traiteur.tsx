import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const occasions = [
  { emoji: "🏢", title: "Événements d'entreprise", desc: "Pauses gourmandes, lunchs et plateaux pour vos équipes et clients." },
  { emoji: "💍", title: "Mariages", desc: "Un service traiteur sur mesure pour le plus beau jour de votre vie." },
  { emoji: "🍼", title: "Baptêmes", desc: "Des préparations délicates pour célébrer en famille en toute sérénité." },
  { emoji: "🎂", title: "Anniversaires", desc: "Petits ou grands comités, on régale vos invités selon vos envies." },
  { emoji: "🤝", title: "Réunions & séminaires", desc: "Formules pratiques et savoureuses pour vos rendez-vous professionnels." },
  { emoji: "🎉", title: "Cocktails & réceptions", desc: "Planches, mignardises et bouchées pour des moments conviviaux." },
];

const produits = [
  { emoji: "🥖", title: "Minis pains bagnats", desc: "Petits pains garnis frais, parfaits pour les buffets et cocktails." },
  { emoji: "🌯", title: "Wraps", desc: "Variés et colorés, à déguster en bouchées ou en format classique." },
];

const planches = [
  { title: "Planche Charcuterie", desc: "Sélection de charcuteries fines, accompagnées de pickles et pains." },
  { title: "Planche Mixte", desc: "Le meilleur des deux mondes : charcuterie et fromages affinés." },
  { title: "Planche Fromage", desc: "Assortiment de fromages de caractère, fruits secs et confitures." },
];

const eventTypes = [
  "Mariage",
  "Anniversaire",
  "Baptême",
  "Événement d'entreprise",
  "Réunion / Séminaire",
  "Cocktail",
  "Autre",
];

const SectionTitle = ({ overline, title, subtitle }: { overline: string; title: string; subtitle?: string }) => (
  <div className="text-center max-w-2xl mx-auto mb-12">
    <span className="text-primary font-semibold text-sm uppercase tracking-widest">{overline}</span>
    <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-base">{subtitle}</p>}
  </div>
);

const Card = ({ emoji, title, desc }: { emoji?: string; title: string; desc: string }) => (
  <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all group">
    {emoji && <div className="text-4xl mb-3">{emoji}</div>}
    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </div>
);

const Traiteur = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const scrollToDevis = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous reviendrons vers vous dans les plus brefs délais.",
    });
    setForm({ name: "", email: "", phone: "", eventType: "", guests: "", date: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-brand-light via-background to-card" />
            <div className="absolute inset-0 bg-background/60" />
          </div>
          <div className="relative z-10 container text-center px-4 py-24">
            <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up">
              🍽️ Service traiteur
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Un traiteur <span className="text-primary">à votre image</span>,<br />pour chaque événement
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Du cocktail intimiste au grand mariage, nous mettons notre passion et nos produits frais au service de vos plus beaux moments.
            </p>
            <a
              href="#devis"
              onClick={scrollToDevis}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Demander un devis
            </a>
          </div>
        </section>

        {/* 2. Occasions */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <SectionTitle
              overline="Pour quelles occasions ?"
              title="Pour tous vos événements"
              subtitle="Que ce soit pour 10 ou 500 personnes, nous adaptons notre service traiteur à chaque moment de votre vie."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {occasions.map((o) => (
                <Card key={o.title} {...o} />
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <span className="inline-block bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold">
                ✨ Chaque événement est unique — nous sommes là pour tous les célébrer, grands ou petits.
              </span>
            </div>
          </div>
        </section>

        {/* 3. Produits */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container">
            <SectionTitle
              overline="Nos produits traiteur"
              title="Frais, généreux, savoureux"
              subtitle="Des préparations fraîches et généreuses, pensées pour régaler vos invités."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
              {produits.map((p) => (
                <Card key={p.title} {...p} />
              ))}
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-6">
                <span className="text-4xl">🧆</span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Planches Apéros</h3>
              </div>
              <p className="text-center text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
                Trois variantes pour tous les goûts, à partager entre amis ou collègues.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {planches.map((p) => (
                  <Card key={p.title} title={p.title} desc={p.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Galerie */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <SectionTitle overline="Nos réalisations" title="Quelques moments gourmands" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-gradient-to-br from-brand-light to-card flex items-center justify-center group cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-5xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-125">
                    🍽️
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Devis */}
        <section id="devis" className="py-20 lg:py-28 bg-card scroll-mt-20">
          <div className="container">
            <SectionTitle
              overline="Demande de devis"
              title="Parlons de votre événement"
              subtitle="Remplissez ce formulaire et nous vous répondrons rapidement avec une proposition adaptée."
            />
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto bg-background rounded-2xl p-6 sm:p-8 border border-border space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type d'événement *</label>
                  <select
                    required
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre de personnes *</label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date souhaitée *</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message / détails supplémentaires</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Parlez-nous de votre événement, vos envies, vos contraintes alimentaires..."
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Traiteur;
