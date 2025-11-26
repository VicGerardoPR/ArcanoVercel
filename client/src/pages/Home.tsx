import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { AnimatedCard } from "@/components/AnimatedCard";
import { ContactForm } from "@/components/ContactForm";
import {
  Menu,
  X,
  Zap,
  Code,
  Palette,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Servicios", href: "#services" },
  { label: "Casos de Éxito", href: "#cases" },
  { label: "Tecnología", href: "#technology" },
  { label: "Proceso", href: "#process" },
  { label: "Contacto", href: "#contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur border-b border-border" : ""
          }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img
              src={APP_LOGO}
              alt="Arcano Intelligence"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline">Arcano Intelligence</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection("#contact")}
          >
            Contacto
            <ArrowRight className="w-4 h-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("#contact")}
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative container z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformamos tu negocio con{" "}
              <span className="text-primary">Inteligencia Artificial</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              Somos expertos en automatización con IA, desarrollo web de última
              generación, branding estratégico y diseño gráfico que impulsa
              resultados reales.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-foreground/60">
                  Proyectos completados
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-foreground/60">
                  Satisfacción del cliente
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-foreground/60">
                  Soporte disponible
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("#contact")}
              >
                Agendar consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#cases")}
              >
                Ver casos de éxito
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-foreground/60 text-lg">
              Ofrecemos un portafolio completo de servicios tecnológicos
              diseñados para llevar tu negocio al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: IA + Ops */}
            <AnimatedCard delay={0}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/services/ai-automation.png"
                    alt="Automatización con IA"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold">Automatización con IA</h3>
                  </div>
                  <p className="text-foreground/60 mb-6">
                    Implementamos soluciones de inteligencia artificial que
                    automatizan procesos, reducen costos operativos y aumentan la
                    eficiencia hasta un 300%.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Chatbots inteligentes",
                      "Análisis predictivo",
                      "Procesamiento de datos",
                      "Machine Learning",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedCard>

            {/* Service 2: Web Development */}
            <AnimatedCard delay={100}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden md:scale-105 h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/services/web-development.png"
                    alt="Desarrollo Web"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold">Desarrollo Web</h3>
                  </div>
                  <p className="text-foreground/60 mb-6">
                    Creamos sitios web y aplicaciones escalables, rápidas y
                    optimizadas para conversión, utilizando las tecnologías más
                    modernas del mercado.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Landing pages de alto rendimiento",
                      "E-commerce profesional",
                      "Aplicaciones web custom",
                      "SEO y optimización",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedCard>

            {/* Service 3: Branding */}
            <AnimatedCard delay={200}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/services/branding.png"
                    alt="Branding & Diseño"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold">Branding & Diseño</h3>
                  </div>
                  <p className="text-foreground/60 mb-6">
                    Desarrollamos identidades de marca memorables y diseños que
                    comunican la esencia de tu negocio y conectan con tu audiencia.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Identidad corporativa",
                      "Diseño de logos",
                      "Guías de marca",
                      "Material publicitario",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Casos de Éxito
            </h2>
            <p className="text-foreground/60 text-lg">
              Resultados medibles para marcas reales que combinan automatización,
              producto digital y branding.
            </p>
          </div>

          <div className="space-y-12">
            {/* Case 1: ShopWave */}
            <AnimatedCard>
              <Card className="bg-card border-border p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        Retail
                      </span>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        Ecommerce
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      ShopWave
                    </h3>
                    <p className="text-foreground/60 mb-6">
                      Diseñamos un funnel inteligente con motores de recomendación
                      personalizados y campañas omnicanal que optimizaron la
                      retención y el valor promedio de cada cliente activo.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">+65%</div>
                        <div className="text-sm text-foreground/60">
                          Procesos automatizados
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">3.2x</div>
                        <div className="text-sm text-foreground/60">
                          Incremento en ventas
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                      <p className="text-sm text-foreground/40">
                        Ecommerce Platform
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>

            {/* Case 2: Lumen Capital */}
            <AnimatedCard>
              <Card className="bg-card border-border p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg h-64 flex items-center justify-center order-2 md:order-1">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                      <p className="text-sm text-foreground/40">SaaS Platform</p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        Finanzas
                      </span>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        SaaS
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Lumen Capital
                    </h3>
                    <p className="text-foreground/60 mb-6">
                      Construimos una plataforma web segura con onboarding
                      automático, dashboards en tiempo real y un asistente virtual
                      que responde consultas regulatorias 24/7.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">-72%</div>
                        <div className="text-sm text-foreground/60">
                          Menos fricción en registro
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">+118%</div>
                        <div className="text-sm text-foreground/60">
                          Pipeline mensual
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>

            {/* Case 3: Isla Verde Collective */}
            <AnimatedCard>
              <Card className="bg-card border-border p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        Hospitalidad
                      </span>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        Turismo
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Isla Verde Collective
                    </h3>
                    <p className="text-foreground/60 mb-6">
                      Rediseñamos su identidad visual y habilitamos una experiencia
                      de reservas asistida por IA que personaliza recomendaciones
                      y sincroniza inventario con marketplaces.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">+82%</div>
                        <div className="text-sm text-foreground/60">
                          Reservas directas
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">-40%</div>
                        <div className="text-sm text-foreground/60">
                          Costo de soporte
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Palette className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                      <p className="text-sm text-foreground/40">
                        Booking Platform
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-foreground/60 text-lg">
              Trabajamos con las mejores herramientas mantenidas por nuestro
              equipo DevOps 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Frontend */}
            <AnimatedCard delay={0}>
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-6">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </Card>
            </AnimatedCard>

            {/* Backend */}
            <AnimatedCard delay={100}>
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-6">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedCard>

            {/* AI & ML */}
            <AnimatedCard delay={200}>
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-6">IA & ML</h3>
                <div className="flex flex-wrap gap-3">
                  {["OpenAI", "TensorFlow", "Claude AI", "LangChain"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </Card>
            </AnimatedCard>

            {/* Cloud & DevOps */}
            <AnimatedCard delay={300}>
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-6">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  {["AWS", "Vercel", "Docker", "GitHub Actions"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-foreground/60 text-lg">
              De la idea a la realidad en cuatro pasos clave.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Descubrimiento",
                description:
                  "Analizamos tu negocio, objetivos y audiencia para crear una estrategia personalizada.",
              },
              {
                number: "02",
                title: "Estrategia",
                description:
                  "Diseñamos un plan de acción detallado con hitos claros y métricas de éxito.",
              },
              {
                number: "03",
                title: "Desarrollo",
                description:
                  "Construimos tu solución utilizando metodologías ágiles y las mejores prácticas.",
              },
              {
                number: "04",
                title: "Lanzamiento",
                description:
                  "Implementamos tu proyecto y brindamos soporte continuo para garantizar el éxito.",
              },
            ].map((step, index) => (
              <AnimatedCard key={step.number} delay={index * 100}>
                <Card className="bg-card border-border p-8 h-full">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/60 text-sm">
                    {step.description}
                  </p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-primary/50 rotate-90" />
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-foreground/60 text-lg mb-12">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos.
            </p>

            <AnimatedCard className="mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Formulario de Contacto</h3>
                <ContactForm />
              </div>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <AnimatedCard delay={0}>
                <Card className="bg-card border-border p-8">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-center">Email</h3>
                  <a
                    href="mailto:info@arcanointelligence.com"
                    className="text-primary hover:underline text-center block"
                  >
                    info@arcanointelligence.com
                  </a>
                </Card>
              </AnimatedCard>
              <AnimatedCard delay={100}>
                <Card className="bg-card border-border p-8">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-center">Teléfono</h3>
                  <a
                    href="tel:+17875551234"
                    className="text-primary hover:underline text-center block"
                  >
                    +1 (787) 555-1234
                  </a>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img
                src={APP_LOGO}
                alt="Arcano Intelligence"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold">Arcano Intelligence</span>
            </div>
            <p className="text-foreground/60 text-sm">
              © 2024 Arcano Intelligence. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
