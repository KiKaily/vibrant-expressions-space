
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Tienda</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bienvenido/a a mi tienda</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Puedes encontrar mis obras disponibles para compra en mi tienda de Etsy. Allí encontrarás cerámicas, pinturas y más piezas únicas.
            </p>
            <Button className="hover-lift" onClick={() => window.open("https://www.etsy.com", "_blank")}>
              Visitar mi tienda en Etsy
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <section className="relative w-full h-[60vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
