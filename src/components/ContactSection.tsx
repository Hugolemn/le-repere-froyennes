import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Venez nous rendre visite</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-light text-primary flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground">Rue de la Taverne de Maire 7<br />7503 Froyennes, Tournai, Belgique</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-light text-primary flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Téléphone</h3>
                <a href="tel:0472684162" className="text-primary font-semibold hover:underline">0472 68 41 62</a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-light text-primary flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Horaires</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Lundi – Vendredi : 10h00 – 15h00</p>
                  <p>Samedi : 10h00 – 14h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Rue+de+la+Taverne+de+Maire+7,+7503+Froyennes,+Belgique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity w-full justify-center"
            >
              <Navigation size={18} />
              Itinéraire Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.5!2d3.376!3d50.615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2f44ed3e0c7e5%3A0x0!2sRue+de+la+Taverne+de+Maire+7%2C+7503+Froyennes!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Le Repère - Sandwicherie à Froyennes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
