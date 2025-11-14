import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // Si estamos en la página principal, hacer scroll
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      // Si estamos en otra página, navegar a inicio con el hash
      navigate(`/#${id}`);
      setIsOpen(false);
      // Después de navegar, hacer scroll al elemento
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
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
            
            {/* Dropdown Nosotros */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                    Nosotros
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover/98 backdrop-blur-md border-border shadow-lg">
                    <ul className="grid w-[280px] gap-1 p-2">
                      <li>
                        <button
                          onClick={() => scrollToSection("nosotros")}
                          className="block w-full text-left select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Sobre Nosotros</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            Conoce nuestra historia y valores
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("nosotros")}
                          className="block w-full text-left select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Misión y Visión</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            Nuestro compromiso y objetivos
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("equipo")}
                          className="block w-full text-left select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Nuestro Equipo</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            Profesionales expertos y certificados
                          </p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
          <div className="md:hidden py-4 space-y-3">
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
            
            {/* Submenu Nosotros Mobile */}
            <div className="border-l-2 border-primary/30 pl-4 space-y-2">
              <p className="text-sm font-semibold text-primary mb-2">Nosotros</p>
              <button onClick={() => scrollToSection("nosotros")} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nosotros
              </button>
              <button onClick={() => scrollToSection("nosotros")} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Misión y Visión
              </button>
              <button onClick={() => scrollToSection("equipo")} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Nuestro Equipo
              </button>
            </div>
            
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
