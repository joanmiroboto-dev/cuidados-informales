import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, AlertTriangle, Lightbulb, Heart, Shield, CheckCircle2, Info, Phone, Home, Activity, Eye, Bath, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrintButton } from '@/components/PrintButton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import chapterImg from '@/assets/chapter9-falls.jpg';

const Chapter9 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Prevención de Caídas" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 9</div>
        <h1 className="text-4xl font-bold">Prevención de Caídas</h1>
      </div>

      {/* Resumen rápido */}
      <Alert className="bg-primary/5 border-primary/20">
        <Shield className="h-5 w-5 text-primary" />
        <AlertDescription className="text-base">
          <strong>Resumen:</strong> Las caídas son uno de los principales riesgos en personas mayores. Muchas pueden prevenirse. Aprenderás sobre factores de riesgo, adaptaciones del hogar y cómo actuar si ocurre una caída.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Las caídas son uno de los principales riesgos en personas mayores. Pueden provocar lesiones graves, fracturas, hospitalización y pérdida de autonomía. <strong>Muchas caídas pueden prevenirse</strong> mediante adaptaciones del entorno y medidas de seguridad.
        </p>

        {/* Estadística destacada */}
        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Info className="h-5 w-5" />
              ¿Sabías que...?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <p className="mb-0">Aproximadamente <strong>1 de cada 3 personas mayores de 65 años</strong> sufre al menos una caída al año. La fractura de cadera es una de las consecuencias más graves, y el 90% de ellas se producen por caídas.</p>
          </CardContent>
        </Card>

        <h2 id="factores">9.1. Factores de riesgo de caídas</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-purple-800 text-base">
                <Heart className="h-5 w-5" />
                Factores intrínsecos (de la persona)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm">
              <ul className="mb-0">
                <li>Edad avanzada</li>
                <li>Problemas de equilibrio o marcha</li>
                <li>Debilidad muscular</li>
                <li>Deterioro cognitivo</li>
                <li>Alteraciones visuales o auditivas</li>
                <li>Mareos o hipotensión postural</li>
                <li>Enfermedades crónicas (Parkinson, artrosis)</li>
                <li>Polimedicación (4+ medicamentos)</li>
                <li><strong>Miedo a caer</strong> (paradójicamente aumenta el riesgo)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-orange-800 text-base">
                <Home className="h-5 w-5" />
                Factores extrínsecos (del entorno)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-900 text-sm">
              <ul className="mb-0">
                <li>Suelos resbaladizos o irregulares</li>
                <li>Alfombras sueltas</li>
                <li>Mala iluminación</li>
                <li>Escaleras sin pasamanos</li>
                <li>Obstáculos en el paso (cables, muebles)</li>
                <li>Calzado inadecuado</li>
                <li>Ausencia de barras de apoyo en baño</li>
                <li>Mascotas que se cruzan</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 id="consecuencias">9.2. Consecuencias de las caídas</h2>

        <Card className="border-amber-200 bg-amber-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Impacto de las caídas en personas mayores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Consecuencias físicas:</h4>
                <ul className="mb-0">
                  <li>Fracturas (cadera, muñeca, vértebras)</li>
                  <li>Traumatismos craneoencefálicos</li>
                  <li>Heridas y contusiones</li>
                  <li>Hematomas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Consecuencias psicosociales:</h4>
                <ul className="mb-0">
                  <li><strong>Síndrome post-caída:</strong> miedo intenso a volver a caer</li>
                  <li>Pérdida de confianza y autonomía</li>
                  <li>Aislamiento social</li>
                  <li>Aumento de la dependencia</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 id="prevencion">9.3. Medidas de prevención</h2>

        <Card className="border-green-200 bg-green-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Home className="h-5 w-5" />
              A) Adaptaciones del hogar - Espacios comunes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <ul className="mb-0">
              <li>✓ <strong>Eliminar obstáculos:</strong> cables, muebles pequeños, objetos en el suelo</li>
              <li>✓ <strong>Alfombras:</strong> retirar o fijar al suelo con cinta antideslizante</li>
              <li>✓ <strong>Iluminación:</strong> asegurar buena luz en todos los espacios, especialmente pasillos nocturnos</li>
              <li>✓ <strong>Interruptores:</strong> accesibles desde la cama, o usar luces con sensor de movimiento</li>
              <li>✓ <strong>Desniveles:</strong> marcar con colores contrastados</li>
              <li>✓ <strong>Pasamanos:</strong> instalar en escaleras y pasillos largos</li>
            </ul>
          </CardContent>
        </Card>

        {/* Ejemplo práctico */}
        <Card className="border-purple-300 bg-purple-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Lightbulb className="h-5 w-5" />
              Ejemplo práctico: Lista de verificación del hogar seguro
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Dormitorio:</h4>
                <ul className="mb-2">
                  <li>□ Luz nocturna junto a la cama</li>
                  <li>□ Interruptor al alcance de la mano</li>
                  <li>□ Teléfono accesible</li>
                  <li>□ Camino despejado al baño</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cocina:</h4>
                <ul className="mb-0">
                  <li>□ Objetos de uso frecuente a altura accesible</li>
                  <li>□ Evitar subirse a taburetes</li>
                  <li>□ Suelo siempre seco</li>
                  <li>□ Alfombrilla antideslizante</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 bg-cyan-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-cyan-800">
              <Bath className="h-5 w-5" />
              B) Cuarto de baño - Zona de alto riesgo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-cyan-900">
            <p className="mb-2">Es uno de los lugares con <strong>mayor riesgo de caídas</strong> por la combinación de superficies mojadas y movimientos de transferencia.</p>
            <h4 className="font-semibold mb-2">Recomendaciones:</h4>
            <ul className="mb-0">
              <li>✓ <strong>Asideros firmes</strong> en pared, correctamente atornillados (no con ventosa)</li>
              <li>✓ <strong>Alfombra antideslizante</strong> dentro y fuera de la ducha/bañera</li>
              <li>✓ <strong>Asiento de ducha</strong> o tabla de bañera para sentarse</li>
              <li>✓ <strong>Grifería accesible</strong> tipo monomando y temperatura regulable</li>
              <li>✓ <strong>Buena iluminación</strong> sin zonas de sombra</li>
              <li>✓ <strong>Secar derrames</strong> inmediatamente</li>
              <li>✓ Considerar <strong>plato de ducha</strong> en lugar de bañera</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Eye className="h-5 w-5" />
              Para personas con deterioro cognitivo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <ul className="mb-0">
              <li>Señalizar puertas con dibujos o pictogramas claros</li>
              <li>Evitar estímulos que generen confusión</li>
              <li>Mantener rutinas y ubicación constante de objetos</li>
              <li>Considerar sensores de movimiento con alarma</li>
              <li>Cerraduras de seguridad en zonas peligrosas</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-teal-200 bg-teal-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-teal-800">
              <Footprints className="h-5 w-5" />
              C) Calzado y vestimenta adecuada
            </CardTitle>
          </CardHeader>
          <CardContent className="text-teal-900">
            <ul className="mb-0">
              <li>✓ Zapatos cerrados con suela antideslizante</li>
              <li>✓ Evitar zapatillas sin talón o muy holgadas</li>
              <li>✓ No caminar en calcetines sobre superficies lisas</li>
              <li>✓ Pantalones de largo adecuado (sin arrastrar)</li>
              <li>✓ Batas y camisones que no lleguen al suelo</li>
            </ul>
          </CardContent>
        </Card>

        <h2 id="actuacion">9.4. ¿Qué hacer si se produce una caída?</h2>

        <Alert className="bg-red-50 border-red-200 my-6">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-900">
            <strong>La prioridad es proteger la integridad física</strong> de la persona mayor y del cuidador. No actuar precipitadamente.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 my-6">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Paso 1 · Valorar la situación</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mb-2">
                <li>Si hay <strong>dolor intenso, deformidad o imposibilidad de moverse</strong> → llamar al 112</li>
                <li><strong>No mover</strong> a la persona si se sospecha fractura o traumatismo grave</li>
                <li>Buscar signos de golpe en la cabeza</li>
              </ul>
              <div className="bg-red-100 p-3 rounded">
                <strong>🚨 Llamar al 112 si:</strong> Pérdida de consciencia, confusión, dolor intenso, deformidad visible, sangrado abundante, no puede moverse
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Paso 2 · Actuar con calma</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mb-0">
                <li>Hablarle suavemente para tranquilizar</li>
                <li>Observar si está consciente y orientada</li>
                <li>Comprobar si respira con normalidad</li>
                <li>Mantenerla cómoda mientras evalúas la situación</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Paso 3 · Ayudar a levantarse (solo si es seguro)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mb-0">
                <li>Hacerlo <strong>despacio</strong>, sin prisas</li>
                <li>Primero sentarse, luego ponerse a cuatro apoyos</li>
                <li>Usar una silla estable como apoyo para incorporarse</li>
                <li><strong>Nunca tirar de los brazos</strong> ni levantar bruscamente</li>
                <li>Guiar los movimientos para evitar mareos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Paso 4 · Supervisión posterior (24-48 horas)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Observar varias horas por si aparecen:</p>
              <div className="grid grid-cols-2 gap-2">
                <span className="bg-blue-100 px-3 py-1 rounded">Dolor creciente</span>
                <span className="bg-blue-100 px-3 py-1 rounded">Hinchazón</span>
                <span className="bg-blue-100 px-3 py-1 rounded">Dificultad para caminar</span>
                <span className="bg-blue-100 px-3 py-1 rounded">Confusión</span>
                <span className="bg-blue-100 px-3 py-1 rounded">Somnolencia anormal</span>
                <span className="bg-blue-100 px-3 py-1 rounded">Dolor de cabeza intenso</span>
              </div>
              <p className="mt-2 mb-0 font-semibold">Si hay cualquier duda → consultar con profesionales sanitarios.</p>
            </CardContent>
          </Card>
        </div>

        <h2 id="teleasistencia">9.5. Sistemas de alerta y teleasistencia</h2>

        <Card className="border-green-200 bg-green-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Phone className="h-5 w-5" />
              Dispositivos que pueden salvar vidas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <p className="mb-2">Existen dispositivos que detectan caídas y pueden avisar automáticamente:</p>
            <ul className="mb-0">
              <li><strong>Detectores de caída:</strong> Pulseras o colgantes que detectan impactos y alertan automáticamente</li>
              <li><strong>Botón de emergencia (teleasistencia):</strong> Pulsador conectado a central de atención 24h</li>
              <li><strong>Sensores de movimiento:</strong> Detectan ausencia de actividad en el hogar</li>
              <li><strong>GPS y localizadores:</strong> Para personas con demencia que puedan desorientarse</li>
            </ul>
            <div className="bg-green-100 p-3 rounded mt-3">
              <strong>💡 Consejo:</strong> Los servicios de teleasistencia suelen estar subvencionados para personas mayores. Consulta en tu ayuntamiento o servicios sociales.
            </div>
          </CardContent>
        </Card>

        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-900">
            <strong>Recuerda:</strong> La prevención es la clave. La mayoría de las caídas pueden evitarse con adaptaciones sencillas del entorno, calzado adecuado y sistemas de apoyo. Invertir en prevención es invertir en calidad de vida.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-8">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 8: Úlceras
          </Button>
        </Link>
        <Link to="/capitulo-10">
          <Button size="lg">
            Capítulo 10: Medicación
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter9;
