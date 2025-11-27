import { Button } from '@/components/ui/button';
import { ChevronLeft, Pill, AlertTriangle, Lightbulb, Heart, Shield, CheckCircle2, Info, Clock, Eye, Droplets, ThermometerSun, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import chapterImg from '@/assets/chapter10-medication.jpg';

const Chapter10 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Medicación" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 10</div>
        <h1 className="text-4xl font-bold">Medicación</h1>
      </div>

      {/* Resumen rápido */}
      <Alert className="bg-primary/5 border-primary/20">
        <Pill className="h-5 w-5 text-primary" />
        <AlertDescription className="text-base">
          <strong>Resumen:</strong> La correcta administración de medicamentos es fundamental para la seguridad. Aprenderás consejos generales, las diferentes vías de administración, conservación y señales de alerta.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          La medicación es un pilar fundamental en el tratamiento y la prevención de enfermedades en personas mayores. Su correcta administración aumenta la eficacia del tratamiento y reduce riesgos graves como interacciones, sobredosis, olvidos o errores. <strong>El cuidador desempeña un papel clave</strong> para garantizar la seguridad farmacológica.
        </p>

        {/* Regla de los 5 correctos */}
        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <CheckCircle2 className="h-5 w-5" />
              Los 5 "correctos" de la medicación
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
              <div className="bg-blue-100 p-3 rounded">
                <strong>1. Paciente</strong><br />correcto
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <strong>2. Medicamento</strong><br />correcto
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <strong>3. Dosis</strong><br />correcta
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <strong>4. Vía</strong><br />correcta
              </div>
              <div className="bg-blue-100 p-3 rounded">
                <strong>5. Hora</strong><br />correcta
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 id="consejos">10.1. Consejos generales para manejo seguro de la medicación</h2>

        <Card className="border-green-200 bg-green-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Shield className="h-5 w-5" />
              Normas fundamentales de seguridad
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900">
            <ul className="mb-0">
              <li>✓ <strong>Antes de administrar:</strong> comprobar que la persona no es alérgica</li>
              <li>✓ <strong>No administrar</strong> medicamentos no prescritos por profesionales sanitarios</li>
              <li>✓ <strong>No suspender</strong> tratamientos por decisión propia, aunque la persona mejore</li>
              <li>✓ <strong>No compartir</strong> medicación entre personas</li>
              <li>✓ <strong>Revisar siempre</strong> la fecha de caducidad</li>
              <li>✓ <strong>Conservar prospectos</strong> y envases originales</li>
              <li>✓ <strong>Consultar dudas</strong> con médico o farmacéutico</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-300 bg-purple-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Lightbulb className="h-5 w-5" />
              Qué debe saber el cuidador de cada medicamento
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="mb-0">
                <li>¿Qué medicamento es?</li>
                <li>¿Para qué sirve?</li>
                <li>¿Cuál es la dosis?</li>
              </ul>
              <ul className="mb-0">
                <li>¿Con qué frecuencia?</li>
                <li>¿Antes/durante/después de comidas?</li>
                <li>¿Cuánto tiempo dura el tratamiento?</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Ejemplo práctico */}
        <Card className="border-purple-300 bg-purple-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Lightbulb className="h-5 w-5" />
              Ejemplo práctico: Organización de la medicación
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">📋 Planning farmacológico:</h4>
                <p className="text-sm mb-2">Crear una tabla con:</p>
                <ul className="text-sm mb-0">
                  <li>Nombre del medicamento</li>
                  <li>Horario de toma</li>
                  <li>Dosis</li>
                  <li>Observaciones especiales</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💊 Pastillero semanal:</h4>
                <ul className="text-sm mb-0">
                  <li>Preparar una vez por semana</li>
                  <li>Dividir por días y momentos (mañana/tarde/noche)</li>
                  <li>Revisar que no falte ninguna dosis</li>
                  <li>Guardar en lugar fresco y seco</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 id="vias">10.2. Vías de administración</h2>

        <Accordion type="single" collapsible className="w-full my-6">
          <AccordionItem value="oral">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" />
                A) Vía oral (la más frecuente)
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <p>El medicamento se ingiere por la boca.</p>
              <h4>Tipos de presentaciones:</h4>
              <ul>
                <li>Comprimidos, cápsulas, grageas</li>
                <li>Jarabes, suspensiones, gotas</li>
                <li>Sobres, polvos</li>
              </ul>
              <Card className="border-green-200 bg-green-50/50 mt-4">
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2 text-green-800">✓ Recomendaciones:</h4>
                  <ul className="text-green-900 mb-0">
                    <li>Administrar con agua (salvo indicación contraria)</li>
                    <li>Respetar si debe tomarse en ayunas, con comida o después de comer</li>
                    <li><strong>No partir ni triturar</strong> comprimidos de liberación prolongada o con cubierta entérica</li>
                    <li>Sentar o incorporar a la persona para evitar atragantamiento</li>
                    <li>Esperar a que trague completamente</li>
                  </ul>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sublingual">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                B) Vía sublingual
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <p>El medicamento se coloca <strong>bajo la lengua</strong> hasta que se disuelve.</p>
              <ul>
                <li>No masticar ni tragar</li>
                <li>No beber ni comer hasta que se disuelva completamente</li>
                <li>Efecto más rápido que vía oral (absorción directa)</li>
              </ul>
              <Alert className="bg-blue-50 border-blue-200 mt-4">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-900">
                  <strong>Ejemplo común:</strong> Nitroglicerina para dolor de angina de pecho. Actúa en 1-2 minutos.
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="topica">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                C) Vía tópica (piel)
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <p>Aplicación de cremas, pomadas, geles o lociones sobre la piel.</p>
              <ul>
                <li>Limpiar y secar zona antes de aplicar</li>
                <li>Aplicar cantidad indicada (generalmente una capa fina)</li>
                <li>Extender suavemente sin frotar agresivamente</li>
                <li><strong>Lavarse las manos</strong> antes y después</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rectal">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" />
                D) Vía rectal (supositorios y enemas)
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <p>Introducción de supositorios o enemas por el recto.</p>
              <ul>
                <li>Guardar supositorios en frigorífico para que mantengan consistencia</li>
                <li>Humedecer ligeramente para facilitar inserción</li>
                <li>Revisar ano por si existen lesiones</li>
                <li>Colocar en posición lateral (decúbito lateral)</li>
                <li>Insertar con dedo enguantado y lubricado</li>
                <li>Mantener glúteos presionados unos minutos</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="oftalmica">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                E) Vía oftálmica (ojos)
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <h4>Colirios (gotas):</h4>
              <ul>
                <li>Usar cada colirio solo para un paciente</li>
                <li>Colocar sentado o acostado con leve extensión de cuello</li>
                <li>Pedir que mire hacia arriba</li>
                <li>Limpiar previamente con suero si hay secreciones</li>
                <li>Desechar la primera gota del envase</li>
                <li>Instilar en el saco conjuntival <strong>sin tocar ojo ni pestañas</strong></li>
                <li>Presionar conducto lagrimal 30 segundos</li>
              </ul>
              <Alert className="bg-amber-50 border-amber-200 mt-4">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <AlertDescription className="text-amber-900">
                  <strong>Importante:</strong> Medicamento a temperatura ambiente. Si hay varias gotas, esperar 5 minutos entre aplicaciones. <strong>Colirios abiertos caducan en 1 mes.</strong>
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="otica">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                F) Vía ótica (oído)
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <ul>
                <li>Colocar en decúbito lateral con oído afectado hacia arriba</li>
                <li>Tirar suavemente del pabellón hacia atrás y arriba (en adultos)</li>
                <li>Limpiar entrada del canal con suero fisiológico</li>
                <li>Instilar gotas a <strong>temperatura corporal</strong> (calentar en la mano)</li>
                <li>No introducir gasas en el canal</li>
                <li>Mantener posición 3–5 minutos</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="inhalatoria">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-primary" />
                G) Vía inhalatoria
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <p>Administración de medicamentos directamente a los pulmones. Es fundamental una <strong>técnica correcta</strong>.</p>
              <h4>Tipos de dispositivos:</h4>
              <ul>
                <li>Cartuchos presurizados (MDI) - "puff"</li>
                <li>Inhaladores de polvo seco</li>
                <li>Nebulizadores</li>
                <li>Cámaras espaciadoras (facilitan la coordinación)</li>
              </ul>
              <Card className="border-green-200 bg-green-50/50 mt-4">
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2 text-green-800">✓ Recomendaciones:</h4>
                  <ul className="text-green-900 mb-0">
                    <li>Recibir formación de profesionales sanitarios</li>
                    <li>Confirmar la técnica mediante demostración</li>
                    <li><strong>Enjuague bucal</strong> tras inhaladores con corticoides</li>
                    <li>Las cámaras espaciadoras ayudan cuando hay mala coordinación</li>
                  </ul>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="transdermica">
            <AccordionTrigger className="text-lg font-semibold">
              <span className="flex items-center gap-2">
                <ThermometerSun className="h-5 w-5 text-primary" />
                H) Vía transdérmica (parches)
              </span>
            </AccordionTrigger>
            <AccordionContent className="prose prose-lg max-w-none">
              <ul>
                <li>Escoger zona con poco vello y sin roces</li>
                <li>Limpiar y secar bien la piel</li>
                <li>Colocar parche <strong>evitando tocar el adhesivo</strong> con los dedos</li>
                <li><strong>Rotar los lugares</strong> de aplicación</li>
                <li>Mantener el parche el tiempo indicado</li>
                <li><strong>Retirar el anterior</strong> antes de poner uno nuevo</li>
                <li>No cortar parches salvo indicación del fabricante</li>
              </ul>
              <Alert className="bg-blue-50 border-blue-200 mt-4">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-900">
                  <strong>Ejemplos comunes:</strong> Parches de fentanilo (dolor), parches de nicotina, parches de estrógenos.
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 id="conservacion">10.3. Conservación de medicamentos</h2>

        <Card className="border-blue-200 bg-blue-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <ThermometerSun className="h-5 w-5" />
              Almacenamiento correcto
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <ul className="mb-0">
              <li>✓ Guardar en lugar <strong>fresco y seco</strong></li>
              <li>✓ Proteger de la luz directa</li>
              <li>✓ Respetar condiciones de <strong>refrigeración</strong> si es necesario (2-8°C)</li>
              <li>✓ Mantener <strong>fuera del alcance</strong> de niños</li>
              <li>✓ <strong>No guardar en el baño</strong> (humedad)</li>
              <li>✓ Revisar fechas de caducidad periódicamente</li>
              <li>✓ Desechar medicamentos caducados en <strong>punto SIGRE</strong> de farmacia</li>
            </ul>
          </CardContent>
        </Card>

        <h2 id="interacciones">10.4. Interacciones y efectos adversos</h2>

        <p>Algunos medicamentos pueden interactuar entre sí o con alimentos, disminuyendo su eficacia o aumentando toxicidad.</p>

        <Card className="border-amber-200 bg-amber-50/50 my-6">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Señales de alerta - Consultar inmediatamente
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <span className="bg-amber-100 px-3 py-2 rounded text-center">Mareos o somnolencia</span>
              <span className="bg-amber-100 px-3 py-2 rounded text-center">Confusión</span>
              <span className="bg-amber-100 px-3 py-2 rounded text-center">Náuseas o vómitos</span>
              <span className="bg-amber-100 px-3 py-2 rounded text-center">Erupciones cutáneas</span>
              <span className="bg-amber-100 px-3 py-2 rounded text-center">Cambios ritmo cardíaco</span>
              <span className="bg-amber-100 px-3 py-2 rounded text-center">Dificultad respirar</span>
            </div>
          </CardContent>
        </Card>

        <Alert className="bg-red-50 border-red-200 my-6">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-900">
            <strong>❗ Importante:</strong> Ante cualquier reacción adversa, <strong>consultar inmediatamente</strong> con profesionales sanitarios. No suspender medicación por cuenta propia sin consultar.
          </AlertDescription>
        </Alert>

        <Alert className="bg-green-50 border-green-200">
          <Heart className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-900">
            <strong>Recuerda:</strong> Una correcta administración de medicamentos es fundamental para la salud y seguridad de la persona cuidada. Ante cualquier duda, consulta siempre con el médico o farmacéutico.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-9">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 9: Caídas
          </Button>
        </Link>
        <Link to="/">
          <Button size="lg">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Volver al índice
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter10;
