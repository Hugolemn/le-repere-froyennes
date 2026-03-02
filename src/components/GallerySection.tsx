import gallerySandwiches from "@/assets/gallery-sandwiches.jpg";
import gallerySalad from "@/assets/gallery-salad.jpg";
import galleryPlanche from "@/assets/gallery-planche.jpg";
import galleryAmbiance from "@/assets/gallery-ambiance.jpg";

const images = [
  { src: gallerySandwiches, alt: "Assortiment de sandwichs et wraps frais" },
  { src: gallerySalad, alt: "Salade fraîche préparée chez Le Repère" },
  { src: galleryPlanche, alt: "Planche apéro avec charcuterie et fromages" },
  { src: galleryAmbiance, alt: "Intérieur chaleureux de la sandwicherie Le Repère" },
];

const GallerySection = () => {
  return (
    <section id="galerie" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Galerie</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Un aperçu de nos créations</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
