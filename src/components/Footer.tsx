
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const routes = [
    { name: { es: "Inicio", en: "Home" }, path: "/" },
    {
      name: { es: "Arte", en: "Art" },
      path: "/obras",
      submenu: [
        { name: { es: "Ilustración", en: "Illustration" }, path: "/obras/pintura" },
        { name: { es: "Cerámica", en: "Ceramics" }, path: "/obras/ceramica" },
        { name: { es: "Textil", en: "Textile" }, path: "/obras/escultura" },
        { name: { es: "Libros de Artista", en: "Artist Books" }, path: "/obras/digital" },
        { name: { es: "Papel", en: "Paper" }, path: "/obras/mixta" },
      ],
    },
    { name: { es: "Expos", en: "Exhibitions" }, path: "/exposiciones" },
    { name: { es: "Cursos", en: "Courses" }, path: "/clases" },
    { name: { es: "Arteterapia", en: "Art Therapy" }, path: "/arteterapia" },
    { name: { es: "Sobre mí", en: "About" }, path: "/sobre-mi" },
    { name: { es: "Contacto", en: "Contact" }, path: "/contacto" },
  ];

  return (
    <footer className="bg-accent/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: <a href="mailto:cminguillon1@gmail.com">cminguillon@gmail.com</a></p>
              <p>Tel: +34 600 000 000</p>
              <p>Orba, España</p>
            </div>
          </div>

          {/* Navigation - Single Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <div className="space-y-2">
              {routes.map((route) => (
                <div key={route.path}>
                  <Link
                    to={route.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {route.name.es}
                  </Link>
                  {route.submenu && (
                    <div className="pl-4 space-y-1 mt-1">
                      {route.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem.name.es}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">¿Conectamos?</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/cristina.minguillon.3" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/crisminguillon/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <Link to="/privacidad" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/legal" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
