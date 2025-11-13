import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Brand {
  id: string;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  {
    id: "1",
    name: "Schneider Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Schneider_Electric_2007.svg/320px-Schneider_Electric_2007.svg.png"
  },
  {
    id: "2",
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/320px-Siemens-logo.svg.png"
  },
  {
    id: "3",
    name: "ABB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png"
  },
  {
    id: "4",
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/320px-LG_symbol.svg.png"
  },
  {
    id: "5",
    name: "General Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/320px-General_Electric_logo.svg.png"
  },
  {
    id: "6",
    name: "Eaton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Eaton_Corporation_logo.svg/320px-Eaton_Corporation_logo.svg.png"
  }
];

const BrandPartners = () => {
  return (
    <section className="py-20 bg-secondary/10" id="marcas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Marcas con las que trabajamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soporte técnico autorizado y distribución de las marcas líderes en el sector eléctrico e industrial
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {brands.map((brand, index) => (
                <CarouselItem key={brand.id} className="md:basis-1/3 lg:basis-1/4">
                  <div
                    className="p-8 flex items-center justify-center h-32 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 filter hover:brightness-100 brightness-75"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hidden md:flex" />
            <CarouselNext className="-right-12 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
