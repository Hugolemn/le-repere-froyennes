import photoSandwiches from "@/assets/photo-sandwiches.jpg";
import photoProduits from "@/assets/photo-produits.jpg";
import photoComptoir from "@/assets/photo-comptoir.jpg";
import photoCarte from "@/assets/photo-carte.jpg";

const images = [
  { src: photoSandwiches, alt: "Assortiment de sandwichs et bowls frais chez Le Repère" },
  { src: photoComptoir, alt: "Le comptoir de la sandwicherie Le Repère à Froyennes" },
  { src: photoProduits, alt: "Sandwichs, salades et pâtisseries Le Repère" },
  { src: photoCarte, alt: "La carte du menu Le Repère" },
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
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
