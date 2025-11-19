// --- IMPORTS ---

import { Activity, Power, Gauge, Cable, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

// --- DATA ---


// --- FEATURED PRODUCTS ---
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
  },
    {
    image: "https://sc04.alicdn.com/kf/H4fd47690de39425fa1fe2a5b3088b3d6I.jpg",
    title: "Interruptor de luz con Control remoto Digital",
    discount: "20% OFF",
    originalPrice: "$150.000",
    discountedPrice: "$70.000",
    description: "interruptor de Control remoto inalámbrico de encendido y apagado para lámpara de bombilla, 220V, RF433, 1/2/3/4 vías.",
    features: [
      "Activacion manual y remota",
      "3 canales de control",
      "Domotica",
      "Integración IoT"
    ]
  },
    {
    image: "https://aquadusa.com/cdn/shop/products/IMAGEN2_5b849534-fa54-4556-839e-51c06a98c4a8@2x.jpg?v=1618241742",
    title: "Controladores de Riego",
    discount: "20% OFF",
    originalPrice: "$750.000",
    discountedPrice: "$450.000",
    description: "Activar solenoides sistema de riego automatico.",
    features: [
      "Control temporizado",
      "App móvil intuitiva",
      "Activacion manual y WIFI con modulo",
      "8 estaciones"
    ]
  },
  
];

// --- COMPONENT ---
const Products = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">

      

        {/* --- FEATURED PRODUCTS --- */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8">Productos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Catálogo de productos eléctricos y electrónicos de alta calidad
          </p>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
  <Card
    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border-0 bg-gradient-to-br from-card to-card/80 shadow-lg mx-4 h-full flex flex-col"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    {/* Badge de descuento */}
    <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
      {product.discount}
    </div>

    {/* Imagen */}
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Contenido del Card */}
    <div className="flex flex-col flex-grow mb-16">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
          {product.title}
        </CardTitle>

        {/* Precios */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg font-bold text-primary">{product.discountedPrice}</span>
          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
        </div>

        <CardDescription className="text-muted-foreground leading-relaxed">
          {product.description}
        </CardDescription>
      </CardHeader>

      {/* Lista de características */}
      <CardContent className="pt-0 flex-grow flex flex-col justify-between pb-6">
        <ul className="space-y-2">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Botón */}
               <Button 
  onClick={scrollToContact}
  className="w-full bg-[#00A651] hover:bg-[#F4C21B] text-white font-semibold"
>
  Solicitar información
</Button>



      </CardContent>
    </div>
  </Card>
</CarouselItem>

              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 h-10 w-10 bg-background/80 hover:bg-background border border-primary text-primary" />
            <CarouselNext className="right-2 h-10 w-10 bg-background/80 hover:bg-background border border-primary text-primary" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    current === index
                      ? "bg-primary w-8 shadow-lg"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground w-3"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* --- OTHER PRODUCTS ---lo borre  */}

        {/* --- EMPORIA SECTION (sin cambios) --- */}
        <div className="mt-16 bg-primary/10 rounded-lg p-8 border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <Activity className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-center text-foreground mb-4">
              Analizadores de Red Emporia
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Los analizadores de red Emporia son herramientas de última generación diseñadas para medir, registrar y analizar el consumo energético en tiempo real.
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
