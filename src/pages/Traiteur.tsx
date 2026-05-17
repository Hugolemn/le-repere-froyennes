import { useState } from "react";
import {
  ArrowDown,
  Leaf,
  Settings2,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  PartyPopper,
  Send,
  UtensilsCrossed,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import heroImg from "@/assets/traiteur-hero.jpg";

const trustCards = [
  {
    icon: Leaf,
    title: "Frais du matin",
    text: "Chaque plateau est assemblé le jour même, avec des produits choisis chaque matin. Chez nous, rien ne traîne depuis la veille.",
  },
  {
    icon: Settings2,
    title: "Adapté à vos envies",
    text: "Peu importe la taille de votre groupe ou vos contraintes alimentaires, on construit la formule qui correspond vraiment à votre événement.",
  },
  {
    icon: MapPin,
    title: "Livraison incluse",
    text: "On livre directement à votre adresse, que ce soit chez vous, dans vos bureaux ou sur votre lieu de réception, à Froyennes et dans les communes alentours.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Vous nous contactez",
    text: "Remplissez le formulaire ci-dessous ou appelez-nous directement. Dites-nous la date, le nombre de personnes et le type d'événement.",
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    text: "On revient vers vous rapidement avec une proposition sur mesure et un devis clair. Aucun engagement à ce stade.",
  },
  {
    icon: CheckCircle,
    title: "Vous validez",
    text: "Un simple accord de votre part suffit. On prend en charge la préparation complète et organise la livraison.",
  },
  {
    icon: PartyPopper,
    title: "Vos invités se régalent",
    text: "Le jour J, tout arrive frais et prêt. Il ne vous reste qu'à profiter du moment.",
  },
];

const occasions = [
  "Réunion d'entreprise",
  "Anniversaire",
  "Repas de famille",
  "Pot de départ ou d'arrivée",
  "Remise de diplômes",
  "Événement associatif ou sportif",
  "Petite réception privée",
  "Journée scolaire ou parascolaire",
  "Fête de fin d'année",
  "Team building",
];

const Traiteur = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    people: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demande de devis traiteur:", form);
    toast({
      title: "Demande envoyée !",
      description: "Nous revenons vers vous sous 24h avec votre devis personnalisé.",
    });
    setForm({ name: "", email: "", phone: "", type: "", people: "", date: "", message: "" });
  };

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "85vh" }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="Plateaux traiteur Le Repère Froyennes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/55" />
        </div>
        <div className="relative z-10 container text-center px-4 py-32">
          <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up">
            <UtensilsCrossed size={16} /> Service Traiteur Le Repère Froyennes
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up">
            On s'occupe de tout,<br />
            <span className="text-primary">vous profitez de vos invités.</span>
          </h1>
          <p className="text-lg text-foreground/85 max-w-xl mx-auto mb-10 font-body">
            Plateaux garnis, buffets sur mesure et livraison à votre porte — Le Repère vous accompagne pour chaque occasion, des plus simples aux plus festives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#devis" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity">
              Demander un devis gratuit
            </a>
            <a href="#formules" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground/10 backdrop-blur-sm text-foreground border border-foreground/30 px-8 py-4 rounded-xl text-base font-semibold hover:bg-foreground/20 transition-colors">
              Voir les formules
            </a>
          </div>
        </div>
        <a href="#confiance" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 animate-bounce">
          <ArrowDown size={24} />
        </a>
      </section>

      {/* TRUST */}
      <section id="confiance" className="py-20 lg:py-28 bg-card" style={{ scrollMarginTop: "80px" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Un traiteur généreux, à taille humaine
            </h2>
            <p className="text-muted-foreground text-base">
              Tout ce qu'on met dans nos sandwichs du quotidien, on le met dans vos plateaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustCards.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background border border-border rounded-xl p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-brand-light text-primary flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-balance">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section id="formules" className="py-20 lg:py-28 bg-background" style={{ scrollMarginTop: "80px" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">Nos formules traiteur</h2>
            <p className="text-muted-foreground">Des propositions claires, ajustables selon vos besoins.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Découverte */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col">
              <span className="self-start text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-4">10 à 20 personnes</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Plateau Découverte</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow text-balance">
                L'essentiel pour bien recevoir. Un assortiment de sandwichs variés préparés avec nos garnitures maison, présentés en plateau prêt à poser sur la table.
              </p>
              <p className="font-bold text-foreground text-lg mb-5">À partir de XX €/pers</p>
              <a href="#devis" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Demander un devis
              </a>
            </div>

            {/* Convivial - highlight */}
            <div className="bg-card border-2 border-primary rounded-2xl p-8 shadow-lg shadow-primary/20 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                Le plus demandé
              </span>
              <span className="self-start text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full mb-4 mt-2">20 à 50 personnes</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Buffet Convivial</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow text-balance">
                Sandwichs, salades maison, petites bouchées salées et une touche sucrée pour finir en beauté. Tout est dressé avec soin avant la livraison.
              </p>
              <p className="font-bold text-foreground text-lg mb-5">À partir de XX €/pers</p>
              <a href="#devis" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Demander un devis
              </a>
            </div>

            {/* Événement */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col">
              <span className="self-start text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-4">50 personnes et +</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Formule Événement</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow text-balance">
                Pour les grandes occasions, on compose ensemble le menu qui correspond à votre moment. Aucune limite de personnalisation, tout se discute.
              </p>
              <p className="font-bold text-foreground text-lg mb-5">Sur devis personnalisé</p>
              <a href="#devis" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">Simple, rapide, sans prise de tête</h2>
            <p className="text-muted-foreground">De votre demande à la livraison, on gère tout.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="text-center relative">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary bg-background mb-4">
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-balance">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">Pour chaque évènement</h2>
            <p className="text-muted-foreground">Petite ou grande, professionnelle ou familiale, chaque occasion mérite un bon repas.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {occasions.map((o) => (
              <span
                key={o}
                className="cursor-default px-5 py-2.5 rounded-full text-sm font-medium bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section id="devis" className="py-20 lg:py-28 bg-background" style={{ scrollMarginTop: "80px" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Votre devis gratuit en quelques lignes
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">Réponse sous 24h</span>
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">Devis 100% gratuit</span>
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">Sans engagement</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Prénom & Nom *</label>
              <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Adresse email *</label>
              <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Type d'événement</label>
              <select value={form.type} onChange={(e) => update("type", e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                <option value="">Sélectionner...</option>
                <option>Réunion professionnelle</option>
                <option>Anniversaire</option>
                <option>Repas de famille</option>
                <option>Pot de départ ou d'arrivée</option>
                <option>Événement associatif</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nombre de personnes *</label>
              <input type="number" min={1} required value={form.people} onChange={(e) => update("people", e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Date souhaitée *</label>
              <input type="date" required value={form.date} onChange={(e) => update("date", e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Message ou précisions complémentaires</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Indiquez vos préférences, contraintes alimentaires, lieu de livraison..."
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 text-center mt-2">
              <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <Send size={18} />
                Envoyer ma demande
              </button>
              <p className="text-foreground/50 text-xs mt-4 max-w-md mx-auto">
                Nous lisons chaque demande avec attention et revenons vers vous dans les 24 heures. Aucun engagement avant votre confirmation.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Traiteur;
