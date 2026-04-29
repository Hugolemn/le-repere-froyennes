import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-primary">
          Mentions légales
        </h1>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Éditeur du site</h2>
            <ul className="space-y-1 text-muted-foreground">
              <li><span className="text-foreground font-medium">Responsable :</span> Van Hoecke Lenny</li>
              <li><span className="text-foreground font-medium">Activité :</span> Le Repère — Sandwicherie</li>
              <li><span className="text-foreground font-medium">Adresse :</span> Rue de la Taverne de Maire 7, 7503 Froyennes, Belgique</li>
              <li><span className="text-foreground font-medium">Téléphone :</span> <a href="tel:0472684162" className="hover:text-primary transition-colors">0472 68 41 62</a></li>
              <li><span className="text-foreground font-medium">Email :</span> <a href="mailto:info@lereperefroyennes.be" className="hover:text-primary transition-colors">info@lereperefroyennes.be</a></li>
              <li><span className="text-foreground font-medium">N° BCE :</span> 1018.846.131</li>
              <li><span className="text-foreground font-medium">N° TVA :</span> BE 1018.846.131</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Hébergeur</h2>
            <p className="text-muted-foreground">
              Le présent site est hébergé par <span className="text-foreground font-medium">Lovable</span> (Gptengineer.app AB) — Suède.<br />
              Site : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">lovable.dev</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble des éléments présents sur ce site (textes, photographies, logos, graphismes) sont la propriété exclusive de Le Repère, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site est un site vitrine. Il ne collecte aucune donnée personnelle via un formulaire et n'utilise pas de cookies de suivi. Si vous nous contactez par téléphone ou par email, vos coordonnées sont utilisées uniquement pour répondre à votre demande et ne sont ni conservées, ni transmises à des tiers.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande, contactez-nous à <a href="mailto:info@lereperefroyennes.be" className="text-primary hover:underline">info@lereperefroyennes.be</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Liens externes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site contient un lien vers Google Maps pour faciliter la localisation du commerce. Le Repère ne saurait être tenu responsable du contenu ni des pratiques de confidentialité des sites tiers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Crédits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conception et développement : site réalisé avec Lovable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default MentionsLegales;
