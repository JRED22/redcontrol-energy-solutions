import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="RED CONTROL Ingeniería" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-foreground hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("productos")} className="text-foreground hover:text-primary transition-colors">
              Productos
            </button>
            <button onClick={() => scrollToSection("videos")} className="text-foreground hover:text-primary transition-colors">
              Videos
            </button>
            <button onClick={() => scrollToSection("marcas")} className="text-foreground hover:text-primary transition-colors">
              Marcas
            </button>
            <button onClick={() => scrollToSection("galeria")} className="text-foreground hover:text-primary transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="bg-primary hover:bg-secondary">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection("inicio")} className="block text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("servicios")} className="block text-foreground hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("productos")} className="block text-foreground hover:text-primary transition-colors">
              Productos
            </button>
            <button onClick={() => scrollToSection("videos")} className="block text-foreground hover:text-primary transition-colors">
              Videos
            </button>
            <button onClick={() => scrollToSection("marcas")} className="block text-foreground hover:text-primary transition-colors">
              Marcas
            </button>
            <button onClick={() => scrollToSection("galeria")} className="block text-foreground hover:text-primary transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="block text-foreground hover:text-primary transition-colors">
              Nosotros
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="w-full bg-primary hover:bg-secondary">
              Contacto
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
