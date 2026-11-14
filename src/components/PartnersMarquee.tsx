import logoAkt from "@/assets/media/partners/logo-6.png";
import logoChwapi from "@/assets/media/partners/logo-7.png";
import logoDecathlon from "@/assets/media/partners/logo-8.png";
import logoIpalle from "@/assets/media/partners/logo-9.png";
import logoMercedes from "@/assets/media/partners/logo-10.png";
import logoAssa from "@/assets/media/partners/logo-11.png";
import logoQuizRoom from "@/assets/media/partners/logo-12.png";
import logoNechin from "@/assets/media/partners/logo-13.png";
import logoTournai from "@/assets/media/partners/logo-14.png";

const partners = [
  { src: logoAkt, alt: "AKT for Wallonia" },
  { src: logoChwapi, alt: "CHwapi" },
  { src: logoDecathlon, alt: "Decathlon" },
  { src: logoIpalle, alt: "Ipalle" },
  { src: logoMercedes, alt: "Mercedes-Benz" },
  { src: logoAssa, alt: "ASSA Obigies" },
  { src: logoQuizRoom, alt: "Quiz Room" },
  { src: logoNechin, alt: "S.C. Nechin" },
  { src: logoTournai, alt: "Ville de Tournai" },
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest font-semibold">
          Ils nous font confiance
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-card to-transparent" />
        <div className="flex w-max animate-marquee gap-20 sm:gap-28 pr-20 sm:pr-28">
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p.alt}-${i}`} className="flex items-center justify-center shrink-0">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-20 sm:h-28 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
