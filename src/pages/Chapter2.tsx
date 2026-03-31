import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronRight, ChevronLeft, Eye, Ear, Heart, Activity, Users, Brain, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter2-aging.jpg';

const Chapter2 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Qué es envejecer" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 2</div>
        <h1 className="text-4xl font-bold">Qué es envejecer</h1>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertDescription className="text-base">
          <strong>Resumen rápido:</strong> El envejecimiento es un proceso natural que afecta a todos los sistemas del cuerpo. Conocer estos cambios ayuda a ofrecer cuidados adecuados y respetuosos que mantengan la dignidad y el bienestar de la persona mayor.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-lg text-muted-foreground lead">
          El envejecimiento forma parte del ciclo vital y supone un conjunto de cambios biológicos, psicológicos y sociales que influyen directamente en la autonomía y el bienestar de la persona mayor. Conocer estos cambios ayuda a planificar cuidados adecuados y respetuosos.
        </p>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              2.1. Ciclo de la vida y sus etapas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El ciclo vital humano está compuesto por etapas sucesivas que abarcan desde el nacimiento hasta la muerte:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-semibold text-sm">Etapa prenatal</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-semibold text-sm">Infancia</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-semibold text-sm">Niñez</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-semibold text-sm">Adolescencia</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-semibold text-sm">Juventud</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-semibold text-sm">Adultez</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg text-center font-bold">
                <p className="text-sm">Vejez</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm mb-0">✓ La vejez no aparece de manera brusca, sino que forma parte de un proceso continuo: el envejecimiento.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              2.2. Envejecimiento y sus características
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El envejecimiento es un proceso <strong>universal y progresivo</strong> que comienza desde el nacimiento y finaliza con la muerte. Incluye transformaciones físicas, cognitivas y sociales.</p>

            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Clasificación de la edad según la OMS</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded">
                  <span className="font-bold text-blue-600">60-74 años:</span>
                  <span>Personas de edad avanzada</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded">
                  <span className="font-bold text-blue-600">75-90 años:</span>
                  <span>Personas ancianas</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded">
                  <span className="font-bold text-blue-600">90+ años:</span>
                  <span>Grandes viejos o longevos</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6">Características generales del envejecimiento</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Ritmo de actividad más lento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Cambios en el sistema excretor y metabólico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Envejecimiento celular progresivo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Variaciones en la vida sexual, social y en la autopercepción</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Cambios en la funcionalidad de órganos y sistemas</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">2.3. Cambios fisiológicos asociados al envejecimiento</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="h-5 w-5 text-blue-600" />
                  Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Atrofia lagrimal y debilitamiento muscular</li>
                  <li>• Disminución de la agudeza visual y discriminación de colores</li>
                  <li>• Opacidad progresiva del cristalino</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 rounded text-sm">
                  <strong>Ejemplo práctico:</strong> Asegurar buena iluminación en casa y usar letra grande en etiquetas
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Ear className="h-5 w-5 text-purple-600" />
                  Audición
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Hipoacusia (pérdida auditiva)</li>
                  <li>• Crecimiento del pabellón auditivo</li>
                  <li>• Dificultad para discriminar palabras en frecuencias altas</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 rounded text-sm">
                  <strong>Ejemplo práctico:</strong> Hablar de frente, despacio y con claridad, sin gritar
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-green-600" />
                  Tacto y piel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Reducción de colágeno, grasa subcutánea y masa muscular</li>
                  <li>• Aparición de arrugas, manchas, sequedad y flacidez</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded text-sm">
                  <strong>Consejo:</strong> Hidratar la piel diariamente y proteger del sol
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Droplets className="h-5 w-5 text-yellow-600" />
                  Olfato y gusto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Disminución de la capacidad para diferenciar olores</li>
                  <li>• Menor producción de saliva</li>
                  <li>• Reducción de la sensibilidad a ciertos sabores</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 rounded text-sm">
                  <strong>Alerta:</strong> Mayor riesgo de no detectar alimentos en mal estado
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Sistema cardiovascular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Estrechamiento y menor elasticidad de los vasos sanguíneos</li>
              <li>• Mayor presión sobre el ventrículo izquierdo</li>
              <li>• Disminución de la capacidad de contracción</li>
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm font-semibold text-green-700">✓ Importancia de controlar la presión arterial regularmente</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Sistema musculoesquelético
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Rigidez articular y degeneración de cartílagos</li>
              <li>• Fragilidad ósea y desmineralización</li>
              <li>• Reducción de masa y fuerza muscular</li>
            </ul>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <strong>Ejemplo de adaptación:</strong> Facilitar ejercicios suaves y regulares, evitar movimientos bruscos
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sistema respiratorio</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Capacidad vital disminuida</li>
                <li>• Mayor volumen residual</li>
                <li>• Debilitamiento de la musculatura respiratoria</li>
                <li>• Reducción de la función mucociliar</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sistema digestivo</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Disminución de la absorción de nutrientes</li>
                <li>• Tránsito intestinal más lento</li>
                <li>• Reducción del tono del esfínter gastroesofágico</li>
                <li>• Pérdidas dentales y menor producción de ácido</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              Rol social
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">El envejecimiento modifica el papel dentro de la familia y la comunidad.</p>
            <ul className="space-y-2">
              <li>• Cambios en la comprensión de la vida, la muerte y las relaciones</li>
              <li>• Influencia de factores personales (salud, economía, redes de apoyo)</li>
            </ul>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-sm font-semibold">💡 Es fundamental mantener la participación social y el sentido de utilidad</p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-purple-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-center">Recuerde</h3>
          <p className="text-center text-lg">
            Cada persona envejece de forma única. Los cambios descritos son orientativos, pero la capacidad de adaptación y la calidad de los cuidados pueden marcar una gran diferencia en el bienestar de la persona mayor.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-1">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 1
          </Button>
        </Link>
        <Link to="/capitulo-3">
          <Button size="lg">
            Capítulo 3
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter2;
