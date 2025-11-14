import { Target, Eye, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nosotros</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromiso con la excelencia y la innovación tecnológica
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="hover:shadow-lg transition-all animate-fade-in border-border bg-card">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl text-foreground">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluciones técnicas innovadoras y sostenibles en electricidad, climatización y automatización, asegurando eficiencia, ahorro energético y desempeño confiable en todos los proyectos.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all animate-fade-in border-border bg-card" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl text-foreground">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser una empresa líder en mantenimiento y automatización eléctrica a nivel regional, reconocida por su calidad y cumplimiento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
