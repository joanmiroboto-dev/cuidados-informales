import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronRight, ChevronLeft, Apple, Droplets, Utensils, AlertTriangle, Activity, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrintButton } from '@/components/PrintButton';
import chapterImg from '@/assets/chapter6-nutrition.jpg';

const Chapter6 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Alimentación e Hidratación" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 6</div>
        <h1 className="text-4xl font-bold">Alimentación y Nutrición</h1>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertDescription className="text-base">
          <strong>Resumen rápido:</strong> Una alimentación adecuada mantiene la fuerza, previene enfermedades y mejora la calidad de vida. La deshidratación y malnutrición son riesgos importantes a evitar.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-lg text-muted-foreground lead">
          La alimentación es un pilar fundamental en la salud de las personas mayores dependientes. Con la edad disminuyen las necesidades energéticas, pero aumentan los riesgos de malnutrición, deshidratación y complicaciones asociadas. Una dieta adecuada contribuye a mantener la fuerza, prevenir enfermedades y mejorar la calidad de vida.
        </p>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              6.1. La malnutrición en personas mayores
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Las personas mayores dependientes son especialmente vulnerables a la malnutrición.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-3">⚠️ Causas principales</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Pérdida de apetito</li>
                  <li>• Problemas de masticación o deglución</li>
                  <li>• Enfermedades crónicas</li>
                  <li>• Medicamentos que alteran el apetito</li>
                  <li>• Dependencia funcional</li>
                  <li>• Aislamiento social</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-900 mb-3">Riesgos asociados</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Caídas</li>
                  <li>• Fracturas</li>
                  <li>• Sarcopenia (pérdida muscular)</li>
                  <li>• Deterioro cognitivo</li>
                  <li>• Infecciones</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-red-50 border-red-300">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-sm">
                <strong>Señales de alerta de pérdida de peso:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 7,5% en 3 meses → alerta</li>
                  <li>• 10% en 6 meses → riesgo elevado</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Apple className="h-5 w-5 text-green-600" />
              6.2. Consejos generales para una alimentación adecuada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Horarios regulares</p>
                <p className="text-sm">4 comidas diarias espaciadas: desayuno, comida, merienda y cena</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Presentación atractiva</p>
                <p className="text-sm">Cuidar aspecto, textura y temperatura de los alimentos</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Dieta variada</p>
                <p className="text-sm">Rica en cereales, frutas y verduras</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✓ Hidratación</p>
                <p className="text-sm">2,5 litros de agua al día</p>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Recomendaciones específicas</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Lácteos:</strong> 3-4 raciones diarias</li>
                <li>• <strong>Proteínas:</strong> Preferir pescado sobre carne</li>
                <li>• <strong>Grasas:</strong> Reducir saturadas, usar aceite de oliva</li>
                <li>• <strong>Sal y azúcares:</strong> Moderación en dulces y embutidos</li>
                <li>• <strong>Sabor:</strong> Usar hierbas aromáticas si hay menor sensibilidad gustativa</li>
                <li>• <strong>Temperatura:</strong> Servir alimentos templados (mejor tolerancia)</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-semibold mb-2">💡 Ejemplo práctico:</p>
              <p className="text-sm">"Si la comida parece poco atractiva, use platos de colores vivos, añada perejil fresco o presente los alimentos de forma ordenada y apetecible. El aspecto visual estimula el apetito."</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-purple-600" />
              6.3. Si tiene que darle la comida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-bold">1</span>
                <div>
                  <p className="font-semibold">Crear ambiente tranquilo</p>
                  <p className="text-sm text-muted-foreground">Sin distracciones, respetando su ritmo</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-bold">2</span>
                <div>
                  <p className="font-semibold">Explicar el proceso</p>
                  <p className="text-sm text-muted-foreground">Favorecer su colaboración</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-bold">3</span>
                <div>
                  <p className="font-semibold">Dar tiempo suficiente</p>
                  <p className="text-sm text-muted-foreground">Evitar atragantamientos</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-bold">4</span>
                <div>
                  <p className="font-semibold">Textura homogénea</p>
                  <p className="text-sm text-muted-foreground">Sin cambios bruscos de consistencia</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-bold">5</span>
                <div>
                  <p className="font-semibold">Higiene oral posterior</p>
                  <p className="text-sm text-muted-foreground">Después de cada comida</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              6.4. Disfagia (dificultad para tragar)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-red-50 border-red-300">
              <AlertDescription>
                La disfagia es frecuente en enfermedades neurológicas (Parkinson, Alzheimer) y puede causar neumonía por aspiración (muy grave)
              </AlertDescription>
            </Alert>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-l-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3">⚠️ Recomendaciones esenciales</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span><strong>Nunca</strong> forzar la ingesta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span><strong>No</strong> usar jeringuillas ni pajitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span><strong>Nunca</strong> alimentar tumbado</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">✓ Textura</h4>
                <ul className="text-sm space-y-1">
                  <li>• Alimentos homogéneos (purés)</li>
                  <li>• Usar espesantes según necesidad</li>
                  <li>• Agua gelificada para hidratar</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">✓ Posición</h4>
                <ul className="text-sm space-y-1">
                  <li>• Sentado, espalda recta</li>
                  <li>• Cabeza ligeramente hacia delante</li>
                  <li>• Mantener 30-40 min tras comer</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-semibold mb-2">💡 Ejemplo práctico:</p>
              <p className="text-sm">"Si nota que tose al beber agua, use un espesante para darle textura de néctar. Esto facilita el control del líquido en la boca y reduce el riesgo de aspiración."</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              6.5. Nutrición enteral (por sonda)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Soporte nutricional cuando la persona no puede tragar pero el aparato digestivo funciona.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-base">Sonda nasogástrica (SNG)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Entra por la nariz hasta el estómago</p>
                  <p className="text-xs text-muted-foreground mt-2">Uso temporal o a medio plazo</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-base">Gastrostomía (PEG)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Sonda directa al estómago a través de un estoma abdominal</p>
                  <p className="text-xs text-muted-foreground mt-2">Uso a largo plazo</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-l-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3">⚠️ Normas fundamentales</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Posición:</strong> Siempre en Fowler o semi-Fowler antes, durante y 1 hora después</li>
                <li><strong>Comprobaciones:</strong> Verificar colocación y permeabilidad antes de cada toma</li>
                <li><strong>Limpieza:</strong> Lavar la sonda con 25 ml de agua al finalizar</li>
                <li><strong>Educación:</strong> Enseñar a la familia cómo evitar tirones o desplazamientos</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">1. Administración en bolo</h4>
                <ul className="text-sm space-y-1">
                  <li>• Pinzar la sonda</li>
                  <li>• Conectar jeringa de 50 ml</li>
                  <li>• Dejar caer por gravedad</li>
                  <li>• Ritmo suave y constante</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">2. Infusión continua</h4>
                <ul className="text-sm space-y-1">
                  <li>• Con bomba de infusión</li>
                  <li>• Verificar velocidad programada</li>
                  <li>• Cambiar bolsa cada 24h</li>
                  <li>• Mantener posición 1h después</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-orange-600" />
              6.7. Administración de medicamentos por sonda
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-red-50 border-red-300">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-sm">
                <strong>Nunca mezclar:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Medicamentos con la alimentación</li>
                  <li>• Varios medicamentos entre sí</li>
                </ul>
              </AlertDescription>
            </Alert>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3">✓ Procedimiento correcto</h4>
              <ol className="space-y-2 text-sm">
                <li><strong>1.</strong> Usar jarabes o líquidos no efervescentes cuando sea posible</li>
                <li><strong>2.</strong> Si es comprimido: triturar hasta polvo fino y diluir en 30 ml de agua</li>
                <li><strong>3.</strong> Administrar cada medicamento por separado</li>
                <li><strong>4.</strong> Lavar la sonda con 30-50 ml de agua después de <strong>cada</strong> medicamento</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-purple-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-center">Recuerde</h3>
          <p className="text-center text-lg">
            La nutrición es medicina. Una dieta adecuada, hidratación suficiente y técnicas correctas de alimentación son fundamentales para mantener la salud y calidad de vida de la persona mayor.
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-6 print:hidden">
        <PrintButton />
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-5">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 5
          </Button>
        </Link>
        <Link to="/capitulo-7">
          <Button size="lg">
            Capítulo 7
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter6;
