import { Cpu, Radio, Settings2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const automationServices = [
  {
    icon: Cpu,
    title: "Programación de PLC",
    description: "Instalación y programación de controladores lógicos programables, sensores y variadores de frecuencia para control de procesos industriales."
  },
  {
    icon: Radio,
    title: "Sistemas Automáticos",
    description: "Diseño de sistemas automáticos para control de procesos eléctricos, hidráulicos y mecánicos con monitoreo en tiempo real."
  },
  {
    icon: Settings2,
    title: "Actualización de Sistemas",
    description: "Actualización y mejoras de sistemas eléctricos existentes para aumentar eficiencia, seguridad y reducir costos operativos."
  }
];

const Automation = () => {
  return (
    <section id="automatizacion" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Automatización y Control</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnología avanzada para la optimización de procesos industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {automationServices.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all hover:scale-105 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="text-center">
                <service.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">
            Beneficios de la Automatización
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Mayor Eficiencia</h4>
                <p className="text-sm text-muted-foreground">Reducción de tiempos de operación y optimización de recursos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">💰</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Ahorro de Costos</h4>
                <p className="text-sm text-muted-foreground">Disminución de gastos operativos y mantenimiento</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">🛡️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Mayor Seguridad</h4>
                <p className="text-sm text-muted-foreground">Sistemas de protección y control de riesgos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-2xl">📊</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Monitoreo en Tiempo Real</h4>
                <p className="text-sm text-muted-foreground">Control y visualización de procesos desde cualquier lugar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
