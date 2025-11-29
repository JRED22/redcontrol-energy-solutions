import { useState } from "react";
import { Building2, Factory, Home, X, Droplets, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// ==========================
//     IMÁGENES DE PROYECTOS
// (Reemplaza estas rutas por las tuyas)
// ==========================

import marino1 from "@/assets/jobs/marinas/tablero1.jpeg";
import marino2 from "@/assets/jobs/marinas/tablero2.jpeg";

import projectResidential1 from "@/assets/jobs/20250803_115237.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectResidential3 from "@/assets/jobs/20250930_142541.jpg";
import projectCommercial1 from "@/assets/jobs/20250728_085611.jpg";
import projectCommercial2 from "@/assets/jobs/20251003_151936.jpg";
import projectIndustrial1 from "@/assets/project-industrial-1.jpg";
import projectIndustrial2 from "@/assets/jobs/20250916_153911.jpg";
import projectIrrigation from "@/assets/jobs/20230813_124210.jpg";
import projectIrrigation2 from "@/assets/jobs/20230821_085715.jpg";

interface Project {
  id: number;
  title: string;
  category: "residencial" | "comercial" | "industrial" | "Sistema de Riego" | "marinos";
  image: string;
  description: string;
  details: string[];
}

const projects: Project[] = [
  // ============================== //
  //      PROYECTOS RESIDENCIALES   //
  // ============================== //
  {
    id: 1,
    title: "Instalación Eléctrica Residencial",
    category: "residencial",
    image: projectResidential1,
    description: "Cambio protecciones eléctricas enchufables por minipragmas.",
    details: [
      "Tablero principal de 12 circuitos",
      "Cambio de caja con peine",
      "Circuitos especializados",
      "Certificación RETIE completa"
    ]
  },
  {
    id: 2,
    title: "Instalación Eléctrica Residencial",
    category: "residencial",
    image: projectResidential3,
    description: "Actualización de tablero general.",
    details: [
      "12 circuitos nuevos",
      "Peine monofásico",
      "Protecciones sensibles",
      "Certificación completa"
    ]
  },
  {
    id: 3,
    title: "Sistema HVAC Residencial",
    category: "residencial",
    image: projectResidential2,
    description: "Climatización con aire central.",
    details: [
      "AC central 5 toneladas",
      "Ductos personalizados",
      "Control inteligente",
      "Mantenimientos incluidos"
    ]
  },

  // ============================== //
  //         PROYECTOS COMERCIALES  //
  // ============================== //
  {
    id: 4,
    title: "Iluminación Helipuerto",
    category: "comercial",
    image: projectCommercial1,
    description: "Renovación completa del sistema de iluminación.",
    details: [
      "25 luminarias LED",
      "Ahorro energético 60%",
      "Control automático"
    ]
  },
  {
    id: 5,
    title: "Automatización Jardín-Piscina",
    category: "comercial",
    image: projectCommercial2,
    description: "Automatización y control inteligente.",
    details: [
      "Minibreakers y diferenciales",
      "Totalizador",
      "Temporizadores"
    ]
  },

  // ============================== //
  //       PROYECTOS INDUSTRIALES   //
  // ============================== //
  {
    id: 6,
    title: "Sala de Control Industrial",
    category: "industrial",
    image: projectIndustrial1,
    description: "Implementación de sala SCADA.",
    details: [
      "Centro de control de motores",
      "Sistema SCADA",
      "PLCs Siemens",
      "Redundancia crítica"
    ]
  },
  {
    id: 7,
    title: "Variadores ABB ACS480",
    category: "industrial",
    image: projectIndustrial2,
    description: "Variadores para bombeo.",
    details: [
      "ABB ACS480",
      "Optimización de presión",
      "Ahorro 40%",
      "Capacitación operativa"
    ]
  },

  // ============================== //
  //      SISTEMA DE RIEGO          //
  // ============================== //
  {
    id: 8,
    title: "Sistema de Riego Automatizado",
    category: "Sistema de Riego",
    image: projectIrrigation,
    description: "Instalación completa para jardines y cultivos.",
    details: [
      "Controladores programables",
      "Sensores de humedad",
      "Aspersores eficientes",
      "App móvil",
      "Ahorro del 30%"
    ]
  },
  {
    id: 9,
    title: "Controlador de Riego Inteligente",
    category: "Sistema de Riego",
    image: projectIrrigation2,
    description: "Controlador avanzado automatizado.",
    details: [
      "Programación avanzada",
      "Sensores de humedad",
      "App móvil",
      "Ahorro 30%"
    ]
  },

  // ============================== //
  //          MARINOS               //
  // ============================== //
  {
    id: 10,
    title: "Panel Electrico de control",
    category: "marinos",
    image: marino1,
    description: "Sistema eléctrico Grupo Electrogeno.",
    details: [
      "Tablero Sincronismo",
      "Control Automatico",
      "Red 12/24V",
      "Protecciones marinas"
    ]
  },
  {
    id: 11,
    title: "Sistemas de Navegación",
    category: "marinos",
    image: marino2,
    description: "Integración de equipos de navegación.",
    details: [
      "GPS + Radar",
      "Autopiloto",
      "Sonda y ecosonda",
      "Cableado estructurado naval"
    ]
  }
];

const categories = [
  { id: "todos", label: "Todos", icon: null },
  { id: "residencial", label: "Residencial", icon: Home },
  { id: "comercial", label: "Comercial", icon: Building2 },
  { id: "industrial", label: "Industrial", icon: Factory },
  { id: "Sistema de Riego", label: "Sistema de Riego", icon: Droplets },
  { id: "marinos", label: "Marinos", icon: Anchor }
];


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Proyectos Realizados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más destacados
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
             <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className={`transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "hover:bg-primary/10"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                {cat.label}
              </Button>

            );
          })}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-all"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all">
                <div className="absolute bottom-0 p-6 text-white">
                  <Badge className="mb-2 bg-primary">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>

                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
  <DialogContent
    className="
      max-w-3xl 
      bg-background 
      p-6 
      rounded-xl 
      border 
      shadow-2xl 
    "
  >
    {selectedProject && (
      <>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-3">
            <Badge className="bg-primary text-white px-3 py-1 text-sm rounded-md">
              {selectedProject.category.toUpperCase()}
            </Badge>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject.title}
            </DialogTitle>
          </div>

          <DialogDescription className="text-base">
            {selectedProject.description}
          </DialogDescription>
        </DialogHeader>

        {/* IMAGEN AJUSTADA */}
        <img
          src={selectedProject.image}
          className="
            w-full 
            max-h-[400px] 
            object-cover 
            rounded-lg 
            shadow-md 
            mb-6
          "
        />

        {/* LISTA DE DETALLES */}
        <h4 className="font-semibold text-lg mb-3">Detalles del Proyecto:</h4>

        <ul className="space-y-2">
          {selectedProject.details.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary font-bold mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )}
  </DialogContent>
</Dialog>

      </div>
    </section>
  );
};

export default Gallery;
