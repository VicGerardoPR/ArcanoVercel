import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);


    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1077d5e3-9adb-4e9a-8dfa-be9bb08bd444");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode: "cors",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });
      console.log("Web3Forms response status:", response.status, response.ok);
      const data = await response.json();
      console.log("Web3Forms response data:", data);


      if (data.success) {

        toast.success("¡Mensaje enviado correctamente!");
        event.currentTarget.reset();
        onSuccess?.();
      } else {
        console.error("Web3Forms Error:", data);

        toast.error(data.message || "Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Error de conexión. Por favor intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+1 (787) 555-1234"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tu empresa"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {isLoading ? "Enviando..." : "Enviar mensaje"}
      </Button>

      <p className="text-xs text-foreground/50 text-center">
        Nos pondremos en contacto dentro de 24 horas.
      </p>
    </form>
  );
}
