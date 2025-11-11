import { Zap, Wind, Gauge, Cog, Droplets, Wrench, Cpu, Activity, ClipboardCheck, Rotate3D, Shield, Hammer, Cable, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Import service background images
import instalacionesElectricasImg from "@/assets/services/instalaciones-electricas.jpg";
import climatizacionImg from "@/assets/services/climatizacion.jpg";
import tablerosElectricosImg from "@/assets/services/tableros-electricos.jpg";
import automatizacionIndustrialImg from "@/assets/services/automatizacion-industrial.jpg";
import sistemasRiegoImg from "@/assets/services/sistemas-riego.jpg";
import estructurasMetalicasImg from "@/assets/services/estructuras-metalicas.jpg";
import integracionElectronicaImg from "@/assets/services/integracion-electronica.jpg";
import analizadoresEmporiaImg from "@/assets/services/analizadores-emporia.jpg";
import mantenimientoPreventivoImg from "@/assets/services/mantenimiento-preventivo.jpg";
import defaultImg from "@/assets/services/default.jpg";

// Service image mapping - easily customizable
// To add/edit images: update the mapping below with the service title and image path
const serviceImageMap: Record<string, string> = {
  "Instalaciones Eléctricas": instalacionesElectricasImg,
  "Climatización": climatizacionImg,
  "Tableros Eléctricos": tablerosElectricosImg,
  "Automatización Industrial": automatizacionIndustrialImg,
  "Sistemas de Riego": sistemasRiegoImg,
  "Estructuras Metálicas": estructurasMetalicasImg,
  "Integración Electrónica": integracionElectronicaImg,
  "Analizadores Emporia": analizadoresEmporiaImg,
  "Mantenimiento Preventivo": mantenimientoPreventivoImg,
  // Services without specific images will use the default background
};

const services = [
  {
    icon: Zap,
    title: "Instalaciones Eléctricas",
    description: "Instalaciones eléctricas residenciales, comerciales e industriales con certificación RETIE y RETILAP.",
    link: "/servicios/instalaciones-electricas"
  },
  {
    icon: Wind,
    title: "Climatización",
    description: "Instalación y mantenimiento de sistemas de aire acondicionado para todo tipo de espacios."
  },
  {
    icon: Gauge,
    title: "Tableros Eléctricos",
    description: "Diseño, montaje y mantenimiento de tableros eléctricos, bombas y variadores de velocidad."
  },
  {
    icon: Cog,
    title: "Automatización Industrial",
    description: "Automatización y control de procesos eléctricos e hidráulicos con tecnología avanzada."
  },
  {
    icon: Droplets,
    title: "Sistemas de Riego",
    description: "Instalación de sistemas de riego automatizados para agricultura y jardinería."
  },
  {
    icon: Hammer,
    title: "Estructuras Metálicas",
    description: "Fabricación e instalación de estructuras metálicas para proyectos industriales."
  },
  {
    icon: Cpu,
    title: "Integración Electrónica",
    description: "Montaje e integración de equipos electrónicos e industriales."
  },
  {
    icon: Activity,
    title: "Analizadores Emporia",
    description: "Suministro e instalación de analizadores de red eléctrica Emporia para monitoreo de energía."
  },
  {
    icon: ClipboardCheck,
    title: "Mantenimiento Preventivo",
    description: "Mantenimiento preventivo y predictivo de equipos de generación.",
    link: "/servicios/mantenimiento"
  },
  {
    icon: Wrench,
    title: "Revisión de Sistemas",
    description: "Revisión, limpieza y ajuste de sistemas eléctricos y mecánicos."
  },
  {
    icon: Rotate3D,
    title: "Mantenimiento de Motores",
    description: "Diagnóstico, limpieza y cambio de rodamientos en motores eléctricos con informes."
  },
  {
    icon: Shield,
    title: "Reparación Electrónica",
    description: "Reparación y reemplazo de bobinas, diodos, tarjetas de control y componentes AVR."
  },
  {
    icon: Cable,
    title: "Tableros de Control",
    description: "Diseño y construcción de tableros de control, fuerza, arranque y automatización."
  },
  {
    icon: Scale,
    title: "Mantenimiento de Básculas",
    description: "Mantenimiento, calibración y verificación de básculas electrónicas."
  }
];

const Services = () => {
  // Helper function to get background image for a service
  const getServiceBackground = (title: string): string => {
    return serviceImageMap[title] || defaultImg;
  };

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para todos tus proyectos eléctricos y de automatización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const backgroundImage = getServiceBackground(service.title);
            
            // Card wrapper with background image and overlay
            const cardContent = (
              <div 
                className="relative overflow-hidden rounded-lg h-full group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background image with lazy loading */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                  role="img"
                  aria-label={`${service.title} background`}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 transition-all duration-300 group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90" />
                
                {/* Card content */}
                <Card 
                  className="relative bg-transparent border-0 shadow-none h-full transition-all duration-300 group-hover:shadow-2xl animate-fade-in"
                >
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="text-white drop-shadow-md">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200 drop-shadow-md">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            );

            // Wrap with Link if service has a link, otherwise render as div
            return service.link ? (
              <Link 
                key={index} 
                to={service.link}
                className="block h-full"
              >
                {cardContent}
              </Link>
            ) : (
              <div key={index} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
