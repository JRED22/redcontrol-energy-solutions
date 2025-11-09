import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Lightbulb, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const banners = [
    {
      image: banner1,
      title: "Instalaciones Eléctricas Profesionales",
      subtitle: "Sistemas eléctricos de alta calidad para sectores residencial, comercial e industrial"
    },
    {
      image: banner2,
      title: "Automatización y Control",
      subtitle: "Soluciones tecnológicas para optimizar procesos eléctricos e industriales"
    },
    {
      image: banner3,
      title: "Eficiencia Energética",
      subtitle: "Climatización, monitoreo y control inteligente para reducir costos"
    }
  ];

  return (
    <section id="inicio" className="relative min-h-screen pt-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full min-h-screen"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${banner.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-20 relative z-10">
                  <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
                    <div className="flex items-center justify-center gap-4 flex-wrap text-3xl md:text-5xl font-bold text-foreground">
                      <span className="flex items-center gap-2">
                        <Zap className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                        Solución
                      </span>
                      <span className="text-primary">|</span>
                      <span className="flex items-center gap-2">
                        <Lightbulb className="h-8 w-8 md:h-12 md:w-12 text-accent" />
                        Innovación
                      </span>
                      <span className="text-primary">|</span>
                      <span className="flex items-center gap-2">
                        <Settings className="h-8 w-8 md:h-12 md:w-12 text-secondary" />
                        Automatización
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                        {banner.title}
                      </h2>
                      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {banner.subtitle}
                      </p>
                    </div>

                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      Somos una empresa especializada en ofrecer soluciones integrales en mantenimiento, con personal técnico calificado en instalación y automatización de sistemas eléctricos, electrónicos y de climatización. Atendemos los sectores residencial, comercial e industrial, brindando servicios técnicos con altos estándares de calidad, seguridad y eficiencia energética.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-secondary text-white transition-all hover:scale-105"
                        onClick={() => scrollToSection("servicios")}
                      >
                        Conoce nuestros servicios
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105"
                        onClick={() => scrollToSection("contacto")}
                      >
                        Contáctanos
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="left-4 h-12 w-12 bg-background/80 hover:bg-background border-primary text-primary" />
        <CarouselNext className="right-4 h-12 w-12 bg-background/80 hover:bg-background border-primary text-primary" />

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
