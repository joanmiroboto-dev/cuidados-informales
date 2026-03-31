import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronRight, ChevronLeft, Shirt, CheckCircle2, XCircle, ShoppingBag, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrintButton } from '@/components/PrintButton';
import chapterImg from '@/assets/chapter4-clothing.jpg';

const Chapter4 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Vestido" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 4</div>
        <h1 className="text-4xl font-bold">Vestido</h1>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertDescription className="text-base">
          <strong>Resumen rápido:</strong> Vestir adecuadamente contribuye al bienestar físico y emocional. La ropa debe ser cómoda, segura, fácil de usar y respetar las preferencias de la persona mayor.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-lg text-muted-foreground lead">
          Vestir adecuadamente a una persona mayor dependiente es una actividad esencial que contribuye a su bienestar físico y emocional. La ropa adecuada protege frente a agentes externos, facilita la regulación térmica, favorece la movilidad y mejora la autoestima de la persona cuidada.
        </p>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              4.1. Principios generales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Fomentar la autonomía</p>
                <p className="text-sm text-muted-foreground">Permita que la persona mayor participe en el proceso tanto como pueda</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Cambio diario</p>
                <p className="text-sm text-muted-foreground">Promueva el uso de ropa limpia cada día</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Respeto a preferencias</p>
                <p className="text-sm text-muted-foreground">Seleccione prendas que conozca y le resulten cómodas</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Organización del entorno</p>
                <p className="text-sm text-muted-foreground">Coloque las prendas en orden y al alcance, preferiblemente sentada</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-semibold mb-2">💡 Ejemplo práctico:</p>
              <p className="text-sm">"Deje que elija entre dos opciones de ropa: '¿Prefieres el jersey azul o el verde?' Esto mantiene su sentido de control y autonomía."</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shirt className="h-5 w-5 text-blue-600" />
              4.2. La ropa: criterios de elección
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-base">La ropa debe cumplir con tres objetivos: <strong className="text-blue-600">comodidad</strong>, <strong className="text-green-600">seguridad</strong> y <strong className="text-purple-600">facilidad de uso</strong>.</p>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">✓ Características recomendadas</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Prendas holgadas que permitan libertad de movimiento</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Aberturas delanteras fáciles de usar</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Elásticos y velcros en lugar de botones complejos</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Tejidos naturales, transpirables y fáciles de planchar</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Ropa adaptable según la estación del año</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="text-lg font-bold text-red-700">❌ Evitar</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <span className="text-sm">Prendas ajustadas o demasiado pesadas</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <span className="text-sm">Mangas o cuellos muy estrechos</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <span className="text-sm">Tejidos rígidos o ásperos</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <span className="text-sm">Ropa deteriorada o que provoque roces</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-6">
              <p className="text-sm font-semibold mb-2">💡 Consejo práctico:</p>
              <p className="text-sm">"Elija camisas con botones grandes o polos con cremallera. Son más fáciles de poner y quitar que los botones pequeños."</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-orange-600" />
              4.3. El calzado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-semibold text-orange-700">El calzado adecuado es fundamental para la seguridad y estabilidad en la marcha.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">✓ Recomendaciones</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">Zapatos confortables, ligeros y que no aprieten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">Suela de goma antideslizante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">Buen ajuste al pie y que sujeten el talón</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">Cierre de velcro para facilitar la colocación</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Para personas con edemas</h4>
                <p className="text-sm mb-3">(Pies hinchados)</p>
                <p className="text-sm">Utilizar calzado especial con mayor capacidad y cierres ajustables.</p>
              </div>
            </div>

            <Alert className="bg-yellow-50 border-yellow-300">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>¡Cuidado!</strong> Evite pantuflas sueltas o calcetines sin calzado, aumentan el riesgo de caídas
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shirt className="h-5 w-5 text-purple-600" />
              4.4. Consejos prácticos durante el vestido
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-purple-900 mb-3">🎯 Técnica fundamental</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-bold text-purple-700 mb-1">Para vestir:</p>
                  <p className="text-sm">Comenzar por el <strong>lado afectado</strong></p>
                  <p className="text-xs text-muted-foreground mt-1">(Hemiplejía, dolor, parálisis)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-bold text-green-700 mb-1">Para desvestir:</p>
                  <p className="text-sm">Iniciar por el <strong>lado sano</strong></p>
                  <p className="text-xs text-muted-foreground mt-1">(Evita dolor y molestias)</p>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-6">Recomendaciones generales</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Realizar el proceso con calma, explicando cada paso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Facilitar la participación siempre que sea posible (subir cremalleras, estirar mangas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Comprobar que no quedan arrugas o pliegues que puedan causar lesiones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Asegurarse de que la ropa no restrinja movilidad ni respiración</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Usar prendas por capas en invierno para regular la temperatura</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm font-semibold mb-2">💡 Ejemplo 1:</p>
                <p className="text-sm">"Si tiene el brazo derecho débil, meta primero la manga derecha y termine con la izquierda."</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm font-semibold mb-2">💡 Ejemplo 2:</p>
                <p className="text-sm">"Use un calzador de mango largo para evitar que se agache y pierda el equilibrio."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-purple-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-center">Recuerde</h3>
          <p className="text-center text-lg">
            Vestirse es un acto de autonomía y dignidad. Respete los gustos, fomente la participación y adapte la ropa a las necesidades de la persona. La comodidad y la seguridad son prioritarias.
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-6 print:hidden">
        <PrintButton />
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-3">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 3
          </Button>
        </Link>
        <Link to="/capitulo-5">
          <Button size="lg">
            Capítulo 5
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter4;
