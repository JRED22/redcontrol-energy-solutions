import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectIndustrial1 from "@/assets/project-industrial-1.jpg";

const InstalacionesElectricas = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const features = [
    "Certificación RETIE y RETILAP",
    "Diseño personalizado según necesidades",
    "Materiales de alta calidad",
    "Personal técnico certificado",
    "Garantía en todos los trabajos",
    "Atención residencial, comercial e industrial"
  ];

  const projects = [
    { image: projectResidential1, title: "Instalación Residencial", type: "Residencial" },
    { image: projectCommercial1, title: "Instalación Comercial", type: "Comercial" },
    { image: projectIndustrial1, title: "Instalación Industrial", type: "Industrial" }
  ];

  const faqs = [
    {
      question: "¿Qué incluye una instalación eléctrica completa?",
      answer: "Una instalación eléctrica completa incluye el diseño del sistema, cableado estructurado, tableros de distribución, puntos de iluminación y tomas, sistema de tierra física, protecciones eléctricas y certificación RETIE."
    },
    {
      question: "¿Cuánto tiempo toma una instalación eléctrica?",
      answer: "El tiempo varía según el tamaño del proyecto. Una vivienda promedio puede tomar de 3 a 7 días, mientras que proyectos comerciales o industriales pueden requerir varias semanas. Realizamos una evaluación inicial para dar tiempos precisos."
    },
    {
      question: "¿Ofrecen garantía en las instalaciones?",
      answer: "Sí, todas nuestras instalaciones cuentan con garantía de 1 año en mano de obra y seguimos las garantías del fabricante en materiales y equipos instalados."
    },
    {
      question: "¿Realizan instalaciones con energías renovables?",
      answer: "Sí, tenemos experiencia en instalación de sistemas solares fotovoltaicos y su integración con la red eléctrica convencional, cumpliendo todas las normativas vigentes."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, mi nombre es ${formData.name}. Necesito cotización para: ${formData.projectType}. ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Solicitud enviada",
      description: "Te contactaremos pronto por WhatsApp",
    });

    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Volver a inicio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="h-16 w-16 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Instalaciones Eléctricas
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Soluciones eléctricas profesionales para proyectos residenciales, comerciales e industriales con certificación RETIE y RETILAP
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Instalaciones de Alta Calidad
              </h2>
              <p className="text-muted-foreground mb-4">
                En RED CONTROL contamos con un equipo de ingenieros y técnicos especializados en el diseño, instalación y mantenimiento de sistemas eléctricos para todo tipo de proyectos.
              </p>
              <p className="text-muted-foreground mb-4">
                Nuestras instalaciones cumplen con todas las normativas vigentes (RETIE y RETILAP), garantizando seguridad, eficiencia energética y confiabilidad en cada proyecto que ejecutamos.
              </p>
              <p className="text-muted-foreground">
                Trabajamos con materiales de primera calidad y tecnología de punta para asegurar instalaciones duraderas que optimicen el consumo energético de tu hogar, negocio o industria.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Características de Nuestro Servicio
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Proyectos Realizados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Solicita tu Cotización
              </h2>
              <p className="text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Tipo de proyecto (Residencial/Comercial/Industrial)"
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Describe tu proyecto o necesidad"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-secondary">
                    Enviar Solicitud por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstalacionesElectricas;