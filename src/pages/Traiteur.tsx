import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import realisation1 from "@/assets/traiteur-realisation-1.jpeg";
import realisation3 from "@/assets/traiteur-realisation-3.jpeg";
import realisation4 from "@/assets/traiteur-realisation-4.png";
import realisation5 from "@/assets/traiteur-realisation-5.jpeg";
import realisation6 from "@/assets/traiteur-realisation-6.jpeg";
import realisationPauseCafe from "@/assets/traiteur-pause-cafe.jpeg";

const occasions = [
  { title: "Événements d'entreprise", desc: "Pauses gourmandes, lunchs et plateaux pour vos équipes et clients." },
  { title: "Mariages", desc: "Un service traiteur sur mesure pour le plus beau jour de votre vie." },
  { title: "Baptêmes", desc: "Des préparations délicates pour célébrer en famille en toute sérénité." },
  { title: "Anniversaires", desc: "Petits ou grands comités, on régale vos invités selon vos envies." },
  { title: "Réunions & séminaires", desc: "Formules pratiques et savoureuses pour vos rendez-vous professionnels." },
  { title: "Team Building & réceptions", desc: "Planches, mignardises et bouchées pour des moments conviviaux." },
  { title: "EVG & EVJF", desc: "Des planches et bouchées savoureuses pour fêter entre amis l'heureux événement." },
  { title: "Enterrements", desc: "Un service discret et respectueux pour accompagner vos proches." },
  { title: "Baby shower", desc: "Douceurs et gourmandises pour célébrer l'arrivée de bébé en toute convivialité." },
  { title: "Pause café & Déjeuner", desc: "Formules rapides et savoureuses pour vos pauses et repas du midi." },
];

const produits = [
  { emoji: "🥪", title: "Minis pains bagnats", desc: "Petits pains garnis frais, parfaits pour les buffets et cocktails." },
  { emoji: "🌯", title: "Wraps", desc: "Variés et colorés, à déguster en bouchées ou en format classique." },
  { emoji: "🥓", title: "Planche Charcuterie", desc: "Sélection de charcuteries fines, accompagnées de pickles et pains." },
  { emoji: "🍖", title: "Planche Mixte", desc: "Le meilleur des deux mondes : charcuterie et fromages affinés." },
  { emoji: "🧀", title: "Planche Fromage", desc: "Assortiment de fromages de caractère, fruits secs et confitures." },
  { emoji: "📋", title: "Autres demandes sur mesure", desc: "Une idée particulière ? Contactez-nous, nous étudions toutes vos demandes personnalisées." },
];

const realisations = [
  { image: realisationPauseCafe, alt: "Pause café gourmande avec croissant, pain au chocolat, muffin et cappuccino sur planche en bois" },
  { image: realisation1, alt: "Boîte traiteur Le Repère avec minis pains bagnats prêts à être servis" },
  { image: realisation6, alt: "Gros plan sur des wraps traiteur frais et généreusement garnis" },
  { image: realisation4, alt: "Sélection de wraps découpés et dressés sur planches en bois" },
  { image: realisation3, alt: "Assortiment de minis pains bagnats présenté sur planche en bois" },
  { image: realisation5, alt: "Gros plan sur des minis pains bagnats garnis pour un buffet traiteur" },
];

const eventTypes = [
  "Mariage",
  "Anniversaire",
  "Baptême",
  "Baby shower",
  "Événement d'entreprise",
  "Réunion / Séminaire",
  "Team Building / Réception",
  "EVG / EVJF",
  "Enterrement",
  "Pause café / Déjeuner",
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
  <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all group h-full flex flex-col">
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

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const id = crypto.randomUUID();
    const templateData = { ...form };
    try {
      const [notif, confirm] = await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "devis-notification",
            idempotencyKey: `devis-notif-${id}`,
            templateData,
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "devis-confirmation",
            recipientEmail: form.email,
            idempotencyKey: `devis-confirm-${id}`,
            templateData: { name: form.name, eventType: form.eventType },
          },
        }),
      ]);
      if (notif.error || confirm.error) throw notif.error || confirm.error;
      toast({
        title: "Demande envoyée !",
        description: "Nous reviendrons vers vous sous 24h. Un email de confirmation vient de vous être envoyé.",
      });
      setForm({ name: "", email: "", phone: "", eventType: "", guests: "", date: "", message: "" });
    } catch (err) {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Merci de réessayer ou de nous contacter au 0472 68 41 62.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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
              ✨ Service traiteur Le Repère Froyennes
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Un traiteur <span className="text-primary">à votre image</span>,<br />pour chaque événement
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
              De la réunion d'entreprise au grand mariage, nous mettons notre passion et nos produits frais au service de vos plus beaux moments.
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
            <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
              {produits.map((p) => (
                <div key={p.title} className="w-full sm:w-80">
                  <Card {...p} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Galerie */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <SectionTitle overline="Nos réalisations" title="Quelques moments gourmands" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {realisations.map((realisation) => (
                <div
                  key={realisation.alt}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card group"
                >
                  <img
                    src={realisation.image}
                    alt={realisation.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
            <p className="text-center text-primary font-semibold text-sm mb-8 -mt-6">
              Réponse en 24h · Devis gratuit · Sans engagement
            </p>
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
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity w-full sm:w-auto disabled:opacity-60"
                >
                  {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
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
