import { Zap, Wind, Gauge, Cog, Droplets, Wrench, Cpu, Activity, ClipboardCheck, Rotate3D, Shield, Hammer, Cable, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
          {services.map((service, index) => (
            service.link ? (
              <Link key={index} to={service.link}>
                <Card 
                  className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in border-border bg-card h-full cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in border-border bg-card h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
