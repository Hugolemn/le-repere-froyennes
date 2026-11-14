import rep3 from "@/assets/media/rep-3.jpg";
import rep4 from "@/assets/media/rep-4.jpg";
import creation2 from "@/assets/media/creation-2.jpg";
import creation4 from "@/assets/media/creation-4.jpg";

const images = [
  { src: rep3, alt: "Sandwich Le Repère servi en main propre" },
  { src: creation2, alt: "Création Le Repère" },
  { src: rep4, alt: "Croc dans une baguette garnie Le Repère" },
  { src: creation4, alt: "Création de la sandwicherie Le Repère à Froyennes" },
];

const GallerySection = () => {
  return (
    <section id="galerie" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Galerie</span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-3 mb-4 text-foreground">Un aperçu de nos créations</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/5] group">
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  i === 1 ? "object-[35%_center]" : ""
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
