import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="RED CONTROL Ingeniería" className="h-16 w-auto" />
            </div>
            <p className="text-white/80">
              Soluciones integrales en electricidad, automatización y climatización
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-white/80 hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="text-white/80 hover:text-primary transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white/80 hover:text-primary transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/80 hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@redcontrol.com"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} RED CONTROL INGENIERÍA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
