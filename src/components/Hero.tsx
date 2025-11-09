import { Button } from "@/components/ui/button";
import { Zap, Lightbulb, Settings } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-20">
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

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
    </section>
  );
};

export default Hero;
