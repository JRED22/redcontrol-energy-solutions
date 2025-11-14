import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un correo electrónico válido",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      if (error) throw error;

      toast({
        title: "✅ Mensaje enviado",
        description: "Hemos recibido tu mensaje. Te contactaremos pronto.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "❌ Error al enviar",
        description: "Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phone = "573001234567"; // Código país (57) + número sin espacios ni símbolos
    const message = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios de RED CONTROL INGENIERÍA");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Teléfono</h4>
                    <p className="text-muted-foreground">+57 300 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@redcontrol.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Ubicación</h4>
                    <p className="text-muted-foreground">Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center gap-2"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              Contactar por WhatsApp
            </Button>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Ubicación</h3>
              <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9422448684614!2d-74.07209968523657!3d4.6097102427876205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQ29sb21iaWE!5e0!3m2!1ses!2sco!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de RED CONTROL INGENIERÍA"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-secondary" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
