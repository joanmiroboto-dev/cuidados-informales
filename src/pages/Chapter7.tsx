import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Droplets, AlertTriangle, Lightbulb, Heart, Shield, CheckCircle2, Info, Package, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import chapterImg from '@/assets/chapter7-incontinence.jpg';

const Chapter7 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Incontinencia Urinaria" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 7</div>
        <h1 className="text-4xl font-bold">Incontinencia Urinaria</h1>
      </div>

      {/* Resumen rápido */}
      <Alert className="bg-primary/5 border-primary/20">
        <Droplets className="h-5 w-5 text-primary" />
        <AlertDescription className="text-base">
          <strong>Resumen:</strong> La incontinencia urinaria afecta la calidad de vida pero puede prevenirse, tratarse o paliarse. En este capítulo aprenderás sobre los tipos de incontinencia, productos de apoyo y cuidados esenciales.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          La incontinencia urinaria es la pérdida involuntaria de orina que afecta significativamente la calidad de vida de las personas mayores. <strong>No es una consecuencia normal del envejecimiento</strong>, sino un problema de salud que puede prevenirse, tratarse o paliarse.
        </p>

        {/* Tarjeta informativa */}
        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Info className="h-5 w-5" />
              ¿Sabías que...?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <p className="mb-0">Aproximadamente el 30-40% de las personas mayores de 65 años experimentan algún grado de incontinencia urinaria. Sin embargo, muchos casos pueden mejorarse significativamente con el tratamiento adecuado.</p>
          </CardContent>
        </Card>

        <h2 id="tipos">7.1. Tipos de incontinencia urinaria</h2>

        <div className="grid gap-4 my-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">A) Incontinencia de esfuerzo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Pérdida de orina al realizar actividades que aumentan la presión abdominal:</p>
              <ul className="mb-0 grid grid-cols-2 gap-1">
                <li>Toser</li>
                <li>Estornudar</li>
                <li>Reír</li>
                <li>Levantar peso</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">B) Incontinencia de urgencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-0">Pérdida de orina precedida por una <strong>necesidad imperiosa e inmediata</strong> de orinar, sin tiempo suficiente para llegar al baño. También conocida como "vejiga hiperactiva".</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">C) Incontinencia por rebosamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-0">La vejiga no se vacía completamente y, al llenarse en exceso, la orina se derrama involuntariamente. Suele asociarse a problemas prostáticos en hombres.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">D) Incontinencia funcional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">No existe alteración del aparato urinario, pero la persona no puede acceder al baño por:</p>
              <ul className="mb-0">
                <li>Limitaciones físicas (movilidad reducida)</li>
                <li>Problemas cognitivos (demencia)</li>
                <li>Barreras arquitectónicas (escaleras, baño lejos)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 id="productos">7.2. Productos de apoyo para la incontinencia</h2>

        <Card className="border-green-200 bg-green-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Package className="h-5 w-5" />
              A) Absorbentes (empapadores, pañales, compresas)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <h4 className="font-semibold mb-2">Recomendaciones de uso:</h4>
            <ul className="mb-0">
              <li>✓ Seleccionar la talla y capacidad adecuadas según el nivel de incontinencia</li>
              <li>✓ Cambiar con frecuencia suficiente para mantener piel seca (cada 3-4 horas mínimo)</li>
              <li>✓ Realizar higiene antes de cada cambio</li>
              <li>✓ Aplicar crema barrera si hay irritación</li>
              <li>✓ Desechar correctamente en contenedor cerrado</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Activity className="h-5 w-5" />
              B) Colectores externos (preservativos urinarios)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <p>Dispositivos que se ajustan al pene y conectan a una bolsa recolectora.</p>
            <h4 className="font-semibold mb-2">Recomendaciones:</h4>
            <ul className="mb-0">
              <li>✓ Elegir talla correcta (pequeña, mediana, grande)</li>
              <li>✓ Rasurar vello si es necesario para mejor adhesión</li>
              <li>✓ Lavar y secar genitales antes de colocar</li>
              <li>✓ Cambiar cada 24 horas</li>
              <li>✓ Observar integridad de la piel del pene diariamente</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Shield className="h-5 w-5" />
              C) Sondaje vesical
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900">
            <p>Procedimiento médico mediante el cual se introduce un catéter a través de la uretra hasta la vejiga para drenar la orina hacia una bolsa.</p>
            <h4 className="font-semibold mb-2">Indicaciones habituales:</h4>
            <ul>
              <li>Retención urinaria</li>
              <li>Imposibilidad para orinar por sí mismo</li>
              <li>Necesidad de mediciones precisas de diuresis</li>
              <li>Necesidades especiales según criterio médico</li>
            </ul>
          </CardContent>
        </Card>

        <Alert className="bg-amber-50 border-amber-200 my-6">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="text-amber-900">
            <strong>❗ Importante sobre el sondaje:</strong>
            <ul className="mb-0 mt-2">
              <li>Siempre debe ser colocado por personal sanitario cualificado</li>
              <li>Requiere vigilancia estricta para evitar infecciones urinarias</li>
              <li>Puede ser temporal o permanente según criterio clínico</li>
            </ul>
          </AlertDescription>
        </Alert>

        <h2 id="cuidados">7.3. Cuidados generales asociados a la incontinencia</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-800 text-base">
                <Droplets className="h-5 w-5" />
                Higiene diaria
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm">
              <ul className="mb-0">
                <li>Lavar la zona genital con agua templada y jabón neutro</li>
                <li>Secar completamente, especialmente pliegues</li>
                <li>Aplicar crema barrera en caso de humedad persistente</li>
                <li>Cambiar absorbentes con frecuencia adecuada</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-blue-800 text-base">
                <Shield className="h-5 w-5" />
                Prevención de lesiones de la piel
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="mb-0">
                <li>Mantener piel limpia y seca</li>
                <li>Usar productos de pH adecuado (5.5)</li>
                <li>Evitar talcos o fricciones</li>
                <li>Revisar piel a diario buscando enrojecimiento</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-cyan-200 bg-cyan-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-cyan-800 text-base">
                <Droplets className="h-5 w-5" />
                Hidratación e ingesta
              </CardTitle>
            </CardHeader>
            <CardContent className="text-cyan-900 text-sm">
              <ul className="mb-0">
                <li><strong>No recortar líquidos</strong> salvo prescripción médica</li>
                <li>Evitar bebidas irritantes (café, alcohol, refrescos)</li>
                <li>Distribuir la ingesta de líquidos a lo largo del día</li>
                <li>Reducir líquidos 2 horas antes de acostarse</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-purple-800 text-base">
                <CheckCircle2 className="h-5 w-5" />
                Entorno y hábitos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm">
              <ul className="mb-0">
                <li>Facilitar acceso al baño (luz nocturna, camino despejado)</li>
                <li>Ropa fácil de quitar y poner (velcro, elásticos)</li>
                <li>Estimular el vaciado regular (micción programada)</li>
                <li>Evitar ropa ajustada que aumente la presión</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Ejemplo práctico */}
        <Card className="border-purple-300 bg-purple-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Lightbulb className="h-5 w-5" />
              Ejemplo práctico: Micción programada
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900">
            <p className="mb-2">La micción programada consiste en establecer horarios fijos para ir al baño, independientemente de sentir ganas:</p>
            <ul className="mb-0">
              <li><strong>Mañana:</strong> Al despertar, después del desayuno, a media mañana</li>
              <li><strong>Tarde:</strong> Antes y después de comer, a media tarde</li>
              <li><strong>Noche:</strong> Después de cenar, antes de acostarse</li>
              <li><strong>Frecuencia:</strong> Cada 2-3 horas aproximadamente</li>
            </ul>
            <p className="mt-2 mb-0 text-sm italic">Esta técnica ayuda a "reeducar" la vejiga y reducir los episodios de incontinencia.</p>
          </CardContent>
        </Card>

        <h2 id="emocional">7.4. Impacto emocional de la incontinencia</h2>
        
        <p>La incontinencia no es solo un problema físico. Genera con frecuencia:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-amber-800 text-base">
                <AlertTriangle className="h-5 w-5" />
                Consecuencias emocionales
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <ul className="mb-0">
                <li>Vergüenza y humillación</li>
                <li>Miedo a salir de casa</li>
                <li>Aislamiento social</li>
                <li>Disminución de autoestima</li>
                <li>Dependencia creciente</li>
                <li>Ansiedad y depresión</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-800 text-base">
                <Heart className="h-5 w-5" />
                Cómo apoyar emocionalmente
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900">
              <ul className="mb-0">
                <li>Mantener actitud respetuosa y tranquila</li>
                <li>No infantilizar ni usar términos humillantes</li>
                <li>Normalizar el problema sin restarle importancia</li>
                <li>Preservar la intimidad y dignidad</li>
                <li>Celebrar pequeños logros</li>
                <li>Animar a mantener vida social</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert className="bg-green-50 border-green-200">
          <Heart className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-900">
            <strong>Recuerda:</strong> El acompañamiento emocional y la normalización del problema son fundamentales. La incontinencia no define a la persona, y con el manejo adecuado, se puede mantener una buena calidad de vida.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-6">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 6: Nutrición
          </Button>
        </Link>
        <Link to="/capitulo-8">
          <Button size="lg">
            Capítulo 8: Úlceras
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter7;
