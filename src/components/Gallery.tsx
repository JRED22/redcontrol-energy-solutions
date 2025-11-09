import { useState } from "react";
import { Building2, Factory, Home, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// Import project images
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectCommercial2 from "@/assets/project-commercial-2.jpg";
import projectIndustrial1 from "@/assets/project-industrial-1.jpg";
import projectIndustrial2 from "@/assets/project-industrial-2.jpg";

interface Project {
  id: number;
  title: string;
  category: "residencial" | "comercial" | "industrial";
  image: string;
  description: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Instalación Eléctrica Residencial Premium",
    category: "residencial",
    image: projectResidential1,
    description: "Sistema eléctrico completo con domótica en residencia de lujo",
    details: [
      "Tablero principal de 24 circuitos",
      "Sistema de iluminación LED inteligente",
      "Instalación de circuitos especializados",
      "Certificación RETIE completa"
    ]
  },
  {
    id: 2,
    title: "Sistema HVAC Residencial",
    category: "residencial",
    image: projectResidential2,
    description: "Instalación de climatización central en conjunto residencial",
    details: [
      "Aire acondicionado central 5 toneladas",
      "Ductos y difusores personalizados",
      "Sistema de control inteligente",
      "Mantenimiento programado incluido"
    ]
  },
  {
    id: 3,
    title: "Iluminación Comercial LED",
    category: "comercial",
    image: projectCommercial1,
    description: "Renovación completa de iluminación en centro comercial",
    details: [
      "Instalación de 300+ luminarias LED",
      "Reducción del 60% en consumo energético",
      "Sistema de control automático",
      "Inversión recuperada en 18 meses"
    ]
  },
  {
    id: 4,
    title: "Automatización Oficinas Corporativas",
    category: "comercial",
    image: projectCommercial2,
    description: "Sistema de automatización y control de energía para edificio de oficinas",
    details: [
      "Analizadores de red Emporia",
      "Control de iluminación por zonas",
      "Sistema de gestión de energía",
      "Monitoreo en tiempo real"
    ]
  },
  {
    id: 5,
    title: "Sala de Control Industrial",
    category: "industrial",
    image: projectIndustrial1,
    description: "Diseño e implementación de sala de control para planta de producción",
    details: [
      "Centro de control de motores",
      "Sistema SCADA completo",
      "Integración de PLCs Siemens",
      "Redundancia en sistemas críticos"
    ]
  },
  {
    id: 6,
    title: "Variadores de Frecuencia Industrial",
    category: "industrial",
    image: projectIndustrial2,
    description: "Instalación y programación de VFDs en línea de producción",
    details: [
      "12 variadores de frecuencia ABB",
      "Optimización de procesos de producción",
      "Ahorro energético del 40%",
      "Capacitación al personal operativo"
    ]
  }
];

const categories = [
  { id: "todos", label: "Todos", icon: null },
  { id: "residencial", label: "Residencial", icon: Home },
  { id: "comercial", label: "Comercial", icon: Building2 },
  { id: "industrial", label: "Industrial", icon: Factory }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Proyectos Realizados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más destacados
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`transition-all ${
                  selectedCategory === category.id 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "hover:bg-primary/10"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-2 bg-primary">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-background">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary">
                      {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                    </Badge>
                  </div>
                  <DialogTitle className="text-2xl text-foreground">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-lg mb-6"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Detalles del Proyecto:</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
