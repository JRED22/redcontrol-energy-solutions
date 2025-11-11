import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email });

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "RED CONTROL <onboarding@resend.dev>",
      to: ["jhonharoldrojo@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2CAB5A;">Nuevo Mensaje de Contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2CAB5A;">
            <h3 style="color: #003D73; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de RED CONTROL INGENIERÍA
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to user
    await resend.emails.send({
      from: "RED CONTROL <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu mensaje - RED CONTROL",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2CAB5A;">¡Gracias por contactarnos, ${name}!</h2>
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Tu mensaje:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #003D73;"><strong>RED CONTROL INGENIERÍA</strong></p>
          <p style="color: #666;">Solución | Innovación | Automatización</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
