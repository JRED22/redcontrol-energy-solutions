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

// ⭐ Productos destacados (URLs corregidas)
const featuredProducts = [
  {
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_887509-MLV73375069839_122023-F.webp",
    title: "Analizador Emporia Vue",
    discount: "20% OFF",
    originalPrice: "$150.000",
    discountedPrice: "$120.000",
    description: "Monitoreo energético avanzado para hogares inteligentes.",
    features: [
      "Monitoreo en tiempo real",
      "App móvil intuitiva",
      "Detección de fugas",
      "Integración IoT"
    ]
  },
  {
    image: "https://www.hola.com/horizon/original_aspect_ratio/8acc075d445c-iluminacion-led-12a-a.jpg",
    title: "Kit de Iluminación LED",
    discount: "15% OFF",
    originalPrice: "$80.000",
    discountedPrice: "$68.000",
    description: "Iluminación eficiente y duradera para espacios comerciales.",
    features: [
      "Ahorro de hasta 70% en energía",
      "Vida útil de 50.000 horas",
      "Colores personalizables",
      "Instalación fácil"
    ]
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQp_6ksAI4_h4sm8hHSWRnjvpm5JeZl2CRA&s",
    title: "Sistema de Protección Inteligente",
    discount: "10% OFF",
    originalPrice: "$200.000",
    discountedPrice: "$180.000",
    description: "Protege tus instalaciones contra sobrecargas y fallos.",
    features: [
      "Monitoreo remoto 24/7",
      "Alertas automáticas",
      "Respaldo de energía",
      "Certificación internacional"
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

        {/* Productos destacados */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Productos Destacados</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                    loading="lazy"
                  />
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-foreground">{product.title}</CardTitle>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      {product.discount}
                    </span>
                  </div>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span className="line-through">{product.originalPrice}</span>
                    <span className="text-primary font-bold">{product.discountedPrice}</span>
                  </div>
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
        </div>


        {/* Otros productos */}
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
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
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


        {/* Sección Emporia */}
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
              {[
                "Monitoreo en tiempo real mediante aplicación móvil o web",
                "Detección de sobreconsumos o fugas eléctricas",
                "Optimización del consumo y reducción de costos",
                "Historial de consumos y reportes automáticos",
                "Alertas inteligentes ante picos de carga",
                "Integración con sistemas de automatización"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
