import { Target, Eye, Building2 } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Más de una década transformando la industria con soluciones eléctricas, 
            automatización y climatización de clase mundial
          </p>
        </div>

        {/* Grid de Cards Grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card Nosotros */}
          <div 
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-background border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-fade-in p-8"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-block p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Building2 className="h-16 w-16 text-blue-500" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Nosotros
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Somos una empresa especializada en ingeniería eléctrica, automatización industrial y climatización. 
                Con un equipo altamente capacitado, ofrecemos soluciones integrales que garantizan eficiencia, 
                seguridad y rendimiento óptimo en cada proyecto.
              </p>
            </div>
          </div>

          {/* Card Misión */}
          <div 
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-background border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 animate-fade-in p-8"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-block p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Target className="h-16 w-16 text-emerald-500" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Misión
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Proporcionar soluciones técnicas innovadoras y sostenibles en electricidad, climatización y automatización, 
                asegurando eficiencia, ahorro energético y desempeño confiable en todos los proyectos que emprendemos.
              </p>
            </div>
          </div>

          {/* Card Visión */}
          <div 
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/10 via-violet-600/5 to-background border-2 border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 animate-fade-in p-8"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-block p-4 bg-violet-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Eye className="h-16 w-16 text-violet-500" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Visión
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser una empresa líder en mantenimiento y automatización eléctrica a nivel regional, 
                reconocida por su excelencia técnica, innovación constante, compromiso con la calidad y cumplimiento excepcional.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
