
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const contentPasswords: { [key: string]: string } = {
  "curso-historia": "historia6291",
  "masterclass": "masterclass6291",
  "tecnicas": "tecnicas6291",
  "analisis": "analisis6291",
  "recursos": "recursos6291",
  "workshops": "workshops6291"
};

const contentTitles: { [key: string]: string } = {
  "curso-historia": "Curso Completo de Historia del Arte",
  "masterclass": "Masterclass de Arte Contemporáneo",
  "tecnicas": "Técnicas Artísticas Avanzadas",
  "analisis": "Análisis de Obras Maestras",
  "recursos": "Recursos y Materiales Exclusivos",
  "workshops": "Workshops en Directo"
};

const PasswordProtectedContent = () => {
  const { contentId } = useParams();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!contentId || !contentPasswords[contentId]) {
    return <Navigate to="/contenido-premium" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === contentPasswords[contentId]) {
      setIsAuthenticated(true);
    } else {
      toast({
        title: "Error",
        description: "Contraseña incorrecta",
        variant: "destructive",
      });
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{contentTitles[contentId]}</h1>
          <div className="grid gap-6">
            {[1, 2, 3].map((videoNumber) => (
              <Card key={videoNumber}>
                <CardHeader>
                  <CardTitle>Video {videoNumber}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video contenido {videoNumber}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Acceso Protegido</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Introduce la contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Acceder
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default PasswordProtectedContent;
