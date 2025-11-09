import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectIndustrial1 from "@/assets/project-industrial-1.jpg";
import projectIndustrial2 from "@/assets/project-industrial-2.jpg";
import projectCommercial2 from "@/assets/project-commercial-2.jpg";

const Mantenimiento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    equipmentType: "",
    message: ""
  });

  const features = [
    "Mantenimiento preventivo y predictivo",
    "Diagnóstico con equipos especializados",
    "Informes técnicos detallados",
    "Repuestos originales y certificados",
    "Planes de mantenimiento personalizados",
    "Servicio de emergencia 24/7"
  ];

  const services = [
    "Mantenimiento de equipos de generación",
    "Revisión de sistemas eléctricos y mecánicos",
    "Mantenimiento de motores eléctricos",
    "Reparación de componentes electrónicos",
    "Calibración de básculas electrónicas",
    "Limpieza y ajuste de sistemas"
  ];

  const faqs = [
    {
      question: "¿Con qué frecuencia se debe realizar el mantenimiento preventivo?",
      answer: "La frecuencia depende del tipo de equipo y su uso. Generalmente recomendamos mantenimiento cada 3-6 meses para equipos industriales, y anual para equipos de menor uso. Realizamos una evaluación inicial para crear un plan personalizado."
    },
    {
      question: "¿Qué incluye el mantenimiento preventivo?",
      answer: "El mantenimiento preventivo incluye inspección visual, limpieza de componentes, medición de parámetros eléctricos, ajuste de conexiones, lubricación de partes móviles, pruebas de funcionamiento e informe técnico con recomendaciones."
    },
    {
      question: "¿Realizan mantenimiento en sitio?",
      answer: "Sí, contamos con equipos móviles para realizar mantenimiento en las instalaciones del cliente, especialmente para equipos de gran tamaño o críticos que no pueden detenerse."
    },
    {
      question: "¿Ofrecen contratos de mantenimiento?",
      answer: "Sí, ofrecemos contratos anuales de mantenimiento con visitas programadas, descuentos en repuestos y atención prioritaria en emergencias."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola, mi nombre es ${formData.name}. Necesito mantenimiento para: ${formData.equipmentType}. ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Solicitud enviada",
      description: "Te contactaremos pronto por WhatsApp",
    });

    setFormData({ name: "", email: "", phone: "", equipmentType: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Volver a inicio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Wrench className="h-16 w-16 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Mantenimiento Industrial
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Servicios especializados de mantenimiento preventivo, predictivo y correctivo para equipos eléctricos e industriales
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Experiencia y Confiabilidad
              </h2>
              <p className="text-muted-foreground mb-4">
                Nuestro equipo técnico especializado realiza mantenimiento preventivo, predictivo y correctivo de equipos eléctricos e industriales, garantizando su óptimo funcionamiento y prolongando su vida útil.
              </p>
              <p className="text-muted-foreground mb-4">
                Utilizamos equipos de diagnóstico de última tecnología y seguimos protocolos internacionales para asegurar la calidad de cada intervención.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Servicios que ofrecemos:</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Ventajas de Nuestro Servicio
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Proyectos de Mantenimiento
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src={projectIndustrial1} alt="Mantenimiento Industrial" className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground mb-1">Mantenimiento de Planta</h3>
                <p className="text-sm text-muted-foreground">Industrial</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src={projectIndustrial2} alt="Equipos Eléctricos" className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground mb-1">Equipos Eléctricos</h3>
                <p className="text-sm text-muted-foreground">Industrial</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src={projectCommercial2} alt="Mantenimiento Comercial" className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground mb-1">Sistemas Comerciales</h3>
                <p className="text-sm text-muted-foreground">Comercial</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Solicita tu Servicio de Mantenimiento
              </h2>
              <p className="text-muted-foreground">
                Contáctanos para programar una visita técnica
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Tipo de equipo o sistema"
                    value={formData.equipmentType}
                    onChange={(e) => setFormData({...formData, equipmentType: e.target.value})}
                    required
                  />
                  <Textarea
                    placeholder="Describe el servicio que necesitas"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={4}
                  />
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

export default Mantenimiento;