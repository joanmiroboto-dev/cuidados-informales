import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, AlertTriangle, Lightbulb, Heart, Shield, CheckCircle2, Info, Clock, Activity, Bed, Eye, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import chapterImg from '@/assets/chapter8-pressure.jpg';

const Chapter8 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Úlceras por Presión" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 8</div>
        <h1 className="text-4xl font-bold">Úlceras por Presión</h1>
      </div>

      {/* Resumen rápido */}
      <Alert className="bg-primary/5 border-primary/20">
        <Shield className="h-5 w-5 text-primary" />
        <AlertDescription className="text-base">
          <strong>Resumen:</strong> Las úlceras por presión son lesiones graves pero prevenibles. Aprenderás sobre factores de riesgo, medidas de prevención, los estadios de las úlceras y cómo colaborar en su cuidado.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Las úlceras por presión (UPP), también llamadas úlceras por decúbito o escaras, son lesiones de la piel y tejidos subyacentes causadas por una presión mantenida entre una prominencia ósea y una superficie dura. Son frecuentes en personas mayores con movilidad reducida.
        </p>

        <Card className="border-red-200 bg-red-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="h-5 w-5" />
              ¡La prevención es siempre la mejor estrategia!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-red-900">
            <p className="mb-0">Una vez formada la úlcera, el tratamiento es largo, costoso y doloroso. La mayoría de las úlceras por presión pueden evitarse con cuidados adecuados.</p>
          </CardContent>
        </Card>

        <h2 id="importancia">8.1. ¿Por qué es importante prevenirlas?</h2>

        <Card className="border-amber-200 bg-amber-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Consecuencias de las úlceras por presión
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900">
            <ul className="mb-0">
              <li>Producen <strong>dolor intenso</strong>, malestar e incapacidad</li>
              <li>Aumentan el riesgo de <strong>infecciones</strong> locales y sistémicas</li>
              <li>Agravan otras enfermedades existentes</li>
              <li>Requieren cuidados especializados y prolongados</li>
              <li>Pueden derivar en complicaciones graves (celulitis, sepsis)</li>
              <li>Afectan significativamente la calidad de vida</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Info className="h-5 w-5" />
              Zonas de mayor riesgo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <p className="mb-2">Las zonas más afectadas son aquellas donde el hueso sobresale y la piel es más fina:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Talones</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Caderas</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Sacro</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Tobillos</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Codos</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Omóplatos</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Rodillas</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-center">Orejas</span>
            </div>
          </CardContent>
        </Card>

        <h2 id="factores">8.2. Factores de riesgo</h2>

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
                <li>Inmovilidad o movilidad reducida</li>
                <li>Deterioro cognitivo</li>
                <li>Malnutrición o deshidratación</li>
                <li>Incontinencia urinaria o fecal</li>
                <li>Enfermedades crónicas (diabetes, insuficiencia circulatoria)</li>
                <li>Piel frágil, seca o con edemas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-orange-800 text-base">
                <Bed className="h-5 w-5" />
                Factores extrínsecos (del entorno)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-900 text-sm">
              <ul className="mb-0">
                <li>Presión mantenida (más de 2 horas)</li>
                <li>Fricción y cizallamiento (arrastre sobre sábanas)</li>
                <li>Humedad excesiva (sudor, orina, heces)</li>
                <li>Higiene inadecuada</li>
                <li>Arrugas en sábanas o ropa de cama</li>
                <li>Superficies duras sin protección</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 id="prevencion">8.3. Medidas de prevención</h2>

        <Card className="border-green-200 bg-green-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Clock className="h-5 w-5" />
              A) Cambios posturales
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <p className="mb-2">Evitan que la presión se mantenga en un mismo punto durante mucho tiempo.</p>
            <div className="bg-green-100 p-4 rounded-lg mb-3">
              <p className="mb-2"><strong>⏰ Frecuencia:</strong> Cada 2–3 horas en personas encamadas</p>
              <p className="mb-0"><strong>🪑 En sillón:</strong> Cada hora o aliviar presión cada 15 minutos</p>
            </div>
            <h4 className="font-semibold mb-2">Posiciones recomendadas:</h4>
            <ul className="mb-0">
              <li><strong>Decúbito supino:</strong> Boca arriba (proteger talones y sacro)</li>
              <li><strong>Decúbito lateral derecho:</strong> 30° de inclinación máximo</li>
              <li><strong>Decúbito lateral izquierdo:</strong> 30° de inclinación máximo</li>
              <li><strong>Evitar:</strong> Decúbito prono (boca abajo) si es posible</li>
            </ul>
            <p className="mt-2 text-sm italic">Usar almohadas o cojines para aliviar zonas de apoyo y evitar que las prominencias óseas se toquen entre sí.</p>
          </CardContent>
        </Card>

        {/* Ejemplo práctico */}
        <Card className="border-purple-300 bg-purple-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Lightbulb className="h-5 w-5" />
              Ejemplo práctico: Horario de cambios posturales
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>8:00</strong><br />Supino
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>10:00</strong><br />Lateral der.
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>12:00</strong><br />Sentado
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>14:00</strong><br />Lateral izq.
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>16:00</strong><br />Supino
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>18:00</strong><br />Lateral der.
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>20:00</strong><br />Sentado
              </div>
              <div className="bg-purple-100 p-2 rounded text-center">
                <strong>22:00</strong><br />Lateral izq.
              </div>
            </div>
            <p className="mt-2 mb-0 text-sm italic">Registra los cambios en una hoja para asegurar el cumplimiento.</p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 bg-cyan-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-cyan-800">
              <Eye className="h-5 w-5" />
              B) Cuidados de la piel
            </CardTitle>
          </CardHeader>
          <CardContent className="text-cyan-900">
            <ul className="mb-0">
              <li>✓ <strong>Inspeccionar</strong> la piel diariamente, especialmente zonas de riesgo</li>
              <li>✓ <strong>Lavar</strong> con agua tibia y jabón neutro, secando bien (especialmente pliegues)</li>
              <li>✓ <strong>Hidratar</strong> con crema o aceite sin alcohol</li>
              <li>✓ <strong>No friccionar</strong> zonas enrojecidas</li>
              <li>✓ <strong>Cambiar</strong> pañales, empapadores o ropa húmeda de inmediato</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-800 text-base">
                <Droplets className="h-5 w-5" />
                C) Nutrición e hidratación
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm">
              <ul className="mb-0">
                <li>Dieta equilibrada rica en <strong>proteínas</strong></li>
                <li>Vitaminas (especialmente C) y minerales (zinc)</li>
                <li>Ingesta de líquidos: 2–2,5 litros/día</li>
                <li>Control de peso y estado nutricional</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-blue-800 text-base">
                <Bed className="h-5 w-5" />
                D) Superficies de apoyo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="mb-0">
                <li>Colchones antiescaras (aire, espuma viscoelástica)</li>
                <li>Cojines de alivio de presión en sillas</li>
                <li>Evitar arrugas o pliegues en sábanas</li>
                <li><strong>No usar</strong> flotadores o aros (empeoran presión)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-teal-200 bg-teal-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-teal-800">
              <Activity className="h-5 w-5" />
              E) Movilización activa
            </CardTitle>
          </CardHeader>
          <CardContent className="text-teal-900">
            <p className="mb-2">Fomentar la movilidad siempre que sea posible:</p>
            <ul className="mb-0">
              <li>Sedestación (sentarse en sillón) varias veces al día</li>
              <li>Estimular que la persona cambie de postura si puede hacerlo</li>
              <li>Realizar ejercicios pasivos o activos con ayuda de fisioterapeuta</li>
              <li>Caminar aunque sea distancias cortas con ayuda</li>
            </ul>
          </CardContent>
        </Card>

        <h2 id="estadios">8.4. Estadios de las úlceras por presión</h2>

        <div className="grid gap-4 my-6">
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Estadio I - Eritema no blanqueable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-0">Piel intacta con <strong>enrojecimiento que no desaparece</strong> al presionar. Puede haber dolor, calor o cambio de textura. En pieles oscuras puede aparecer como zona de color diferente.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Estadio II - Pérdida parcial de piel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-0">Pérdida parcial del grosor de la piel. Se observa <strong>úlcera superficial con lecho rosado</strong>. Puede aparecer como ampolla intacta o rota con líquido seroso.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Estadio III - Pérdida total del grosor de la piel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-0">Pérdida total del espesor de la piel. Se observa <strong>grasa subcutánea</strong>, pero no hueso, tendón ni músculo. Puede haber esfacelos (tejido amarillento) y tunelización.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Estadio IV - Pérdida total de tejido</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-0">Pérdida total del tejido con <strong>exposición de hueso, tendón o músculo</strong>. Suele haber tejido necrótico (negro) y tunelización extensa. Riesgo alto de infección.</p>
            </CardContent>
          </Card>
        </div>

        <Alert className="bg-red-50 border-red-200 my-6">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-900">
            <strong>❗ Importante:</strong> Ante la aparición de cualquier lesión cutánea (incluso enrojecimiento persistente), <strong>consulte siempre con profesionales sanitarios</strong> para valoración y tratamiento adecuado. Las úlceras por presión requieren cuidados especializados.
          </AlertDescription>
        </Alert>

        <h2 id="tratamiento">8.5. Tratamiento básico</h2>

        <Card className="border-green-200 bg-green-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle2 className="h-5 w-5" />
              El cuidador puede colaborar en el tratamiento
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <p className="mb-2">El tratamiento debe ser dirigido por profesionales de enfermería. El cuidador puede colaborar:</p>
            <ul className="mb-0">
              <li>✓ Mantener la zona limpia según indicaciones específicas</li>
              <li>✓ Cambiar apósitos siguiendo las instrucciones dadas</li>
              <li>✓ <strong>Reforzar todas las medidas preventivas</strong></li>
              <li>✓ Observar evolución y notificar cualquier cambio</li>
              <li>✓ Asegurar nutrición e hidratación adecuadas</li>
              <li>✓ Registrar los cuidados realizados</li>
            </ul>
          </CardContent>
        </Card>

        <Alert className="bg-green-50 border-green-200">
          <Heart className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-900">
            <strong>Recuerda:</strong> La prevención es fundamental. Con los cuidados adecuados (cambios posturales, higiene, nutrición y superficies de apoyo), la mayoría de las úlceras por presión pueden evitarse.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-7">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 7: Incontinencia
          </Button>
        </Link>
        <Link to="/capitulo-9">
          <Button size="lg">
            Capítulo 9: Caídas
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter8;
