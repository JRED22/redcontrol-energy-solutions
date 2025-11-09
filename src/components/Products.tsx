import { Activity, Power, Gauge, Cable, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Activity,
    title: "Analizadores Emporia",
    description: "Control y eficiencia energética en tiempo real",
    features: [
      "Monitoreo en tiempo real vía app móvil",
      "Detección de sobreconsumos",
      "Optimización de costos energéticos",
      "Alertas inteligentes",
      "Integración con domótica"
    ]
  },
  {
    icon: Power,
    title: "Breakers y Contactores",
    description: "Protecciones eléctricas de alta calidad",
    features: [
      "Marcas certificadas",
      "Diferentes capacidades",
      "Garantía extendida"
    ]
  },
  {
    icon: Gauge,
    title: "Sensores y Variadores",
    description: "Tecnología para control industrial",
    features: [
      "Sensores de última generación",
      "Variadores de frecuencia",
      "Control de velocidad"
    ]
  },
  {
    icon: Cable,
    title: "Tableros Eléctricos",
    description: "Tableros y accesorios profesionales",
    features: [
      "Diseño personalizado",
      "Normas RETIE",
      "Instalación incluida"
    ]
  },
  {
    icon: Lightbulb,
    title: "Iluminación LED",
    description: "Soluciones de iluminación eficiente",
    features: [
      "Ahorro energético",
      "Larga durabilidad",
      "Diferentes tonalidades"
    ]
  },
  {
    icon: Shield,
    title: "Protecciones Inteligentes",
    description: "Dispositivos de protección avanzados",
    features: [
      "Protección contra sobretensiones",
      "Monitoreo remoto",
      "Sistemas de respaldo"
    ]
  }
];

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Productos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Catálogo de productos eléctricos y electrónicos de alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <product.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-secondary"
                >
                  Solicitar información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 rounded-lg p-8 border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <Activity className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-center text-foreground mb-4">
              Analizadores de Red Emporia
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Los analizadores de red Emporia son herramientas de última generación diseñadas para medir, registrar y analizar el consumo energético en tiempo real, tanto en instalaciones residenciales como comerciales o industriales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Monitoreo en tiempo real mediante aplicación móvil o web</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Detección de sobreconsumos o fugas eléctricas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Optimización del consumo y reducción de costos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Historial de consumos y reportes automáticos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Alertas inteligentes ante picos de carga</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Integración con sistemas de automatización</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
