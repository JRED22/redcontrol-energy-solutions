import { Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import jhonImg from "@/assets/team/jhon.jpg";


interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  email?: string;
  phone?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jhon Harold Rojo",
    position: "Fundador-Tecnico",
    image:  jhonImg,
    linkedin: "https://linkedin.com",
    email: "jhonharoldrojo@gmail.com",
    phone: "+57 300 123 4567"
  },
  {
    id: "2",
    name: "Carlos Martínez",
    position: "Ingeniero Eléctrico Senior",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "https://linkedin.com",
    email: "carlos@redcontrol.com",
    phone: "+57 300 123 4568"
  },
  {
    id: "3",
    name: "Ana Rodríguez",
    position: "Especialista en Automatización",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    linkedin: "https://linkedin.com",
    email: "ana@redcontrol.com",
    phone: "+57 300 123 4569"
  },
  {
    id: "4",
    name: "Luis Fernández",
    position: "Técnico en Mantenimiento",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedin: "https://linkedin.com",
    email: "luis@redcontrol.com",
    phone: "+57 300 123 4570"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-background" id="equipo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales que hacen posible la innovación
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              <CardContent className="relative pt-8 pb-6 flex flex-col items-center">
                {/* Foto circular con efecto hover */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-border group-hover:border-primary transition-all duration-500 group-hover:scale-110 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Información del miembro */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.position}
                  </p>
                </div>

                {/* Redes sociales */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label="Teléfono"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
