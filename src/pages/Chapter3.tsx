import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, ChevronLeft, Droplets, Shield, Eye, Hand, Heart, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter3-hygiene.jpg';

const Chapter3 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Higiene Personal" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 3</div>
        <h1 className="text-4xl font-bold">Higiene Personal</h1>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertDescription className="text-base">
          <strong>Resumen rápido:</strong> La higiene personal es esencial para el bienestar físico y emocional. Una correcta técnica previene infecciones, lesiones cutáneas y favorece la autonomía de la persona cuidada.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none space-y-8">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-blue-600" />
              3.1. Objetivos de la higiene personal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-green-800 mb-2">✓ Bienestar físico y emocional</p>
                <p className="text-sm text-muted-foreground">Mantener la dignidad y autoestima</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-green-800 mb-2">✓ Prevenir infecciones</p>
                <p className="text-sm text-muted-foreground">Evitar irritaciones y lesiones</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-green-800 mb-2">✓ Cuidado de la piel</p>
                <p className="text-sm text-muted-foreground">Mantenerla limpia e hidratada</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-green-800 mb-2">✓ Fomentar autonomía</p>
                <p className="text-sm text-muted-foreground">Participación activa en su cuidado</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              3.2. Antes de iniciar la higiene
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-900 mb-3">⚠️ Principios fundamentales</p>
              <ul className="space-y-2 text-sm">
                <li>• Preservar la intimidad y dignidad de la persona</li>
                <li>• Valorar el grado de autonomía y fomentar su participación</li>
                <li>• Realizar lavado de manos y usar guantes cuando sea necesario</li>
                <li>• Informar a la persona sobre lo que se va a hacer</li>
              </ul>
            </div>

            <h3 className="text-lg font-bold mt-6">Preparación del entorno</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-blue-50 rounded text-center">
                <Droplets className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-semibold">Agua a 35-36°C</p>
              </div>
              <div className="p-3 bg-blue-50 rounded text-center">
                <p className="text-2xl mb-2">🌡️</p>
                <p className="text-sm font-semibold">Ambiente 24-25°C</p>
              </div>
              <div className="p-3 bg-blue-50 rounded text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-semibold">Entorno seguro</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-4">
              <p className="text-sm font-semibold mb-2">💡 Ejemplo práctico:</p>
              <p className="text-sm">"Antes del baño, cierre ventanas, compruebe la temperatura del agua con el codo y tenga toallas a mano para evitar que la persona se enfríe."</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-purple-600" />
              3.3. Higiene en cama: paso a paso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-blue-50">
              <AlertDescription>
                <strong>Indicado para:</strong> Personas con movilidad muy reducida o encamadas que no pueden acudir al baño.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h4 className="font-bold">Preparación</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Cambiar el agua tantas veces como sea necesario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Usar un recipiente para agua jabonosa y otro para aclarado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Utilizar guantes cuando haya contacto con fluidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Destape solo la zona que vaya a lavar</span>
                </li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Importante</p>
                <ul className="text-sm space-y-1">
                  <li>• Evite mojar apósitos o heridas</li>
                  <li>• Avise antes de realizar cualquier movimiento</li>
                  <li>• Si hay dolor, valore administrar analgésico previo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="order">
            <AccordionTrigger className="text-lg font-bold">
              3.4. Orden recomendado de lavado en cama
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-4">
                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600 text-lg">1</span>
                  <div>
                    <p className="font-semibold">Cara, orejas y cuello</p>
                    <p className="text-sm text-muted-foreground">Solo con agua, sin jabón</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600 text-lg">2</span>
                  <div>
                    <p className="font-semibold">Brazos y axilas</p>
                    <p className="text-sm text-muted-foreground">Permitir que se lave las manos si puede</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-yellow-50 rounded-lg">
                  <span className="font-bold text-yellow-600 text-lg">3</span>
                  <div>
                    <p className="font-semibold">⚠️ Cambiar el agua</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600 text-lg">4</span>
                  <div>
                    <p className="font-semibold">Pecho y abdomen</p>
                    <p className="text-sm text-muted-foreground">En mujeres, secar bien bajo las mamas</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600 text-lg">5</span>
                  <p className="font-semibold">Piernas y pies</p>
                </div>

                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600 text-lg">6</span>
                  <div>
                    <p className="font-semibold">De lado: espalda y nalgas</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-yellow-50 rounded-lg">
                  <span className="font-bold text-yellow-600 text-lg">7</span>
                  <div>
                    <p className="font-semibold">⚠️ Cambiar el agua nuevamente</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <span className="font-bold text-blue-600 text-lg">8</span>
                  <div>
                    <p className="font-semibold">De nuevo boca arriba: zona genital</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-green-50 rounded-lg">
                  <span className="font-bold text-green-600 text-lg">9</span>
                  <div>
                    <p className="font-semibold">Finalizar</p>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Secar todos los pliegues cuidadosamente</li>
                      <li>• Aplicar crema hidratante</li>
                      <li>• Inspeccionar la piel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="genital">
            <AccordionTrigger className="text-lg font-bold">
              3.5. Higiene genital en cama
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <Alert>
                  <AlertDescription>
                    Colocar una cuña o protector. Rociar agua templada desde pubis hacia el ano. Lavar con jabón neutro y aclarar.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">En mujeres</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-pink-700">Lavar siempre de adelante hacia atrás</p>
                      <p className="text-sm text-muted-foreground mt-2">Esto previene infecciones urinarias</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">En hombres</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Retirar el prepucio, lavar el glande y volver a cubrirlo tras secar.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">✓ Recomendaciones</p>
                  <ul className="text-sm space-y-1">
                    <li>• Secar bien los pliegues</li>
                    <li>• Usar crema barrera en caso de incontinencia</li>
                    <li>• Realizar higiene genital diariamente</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Droplets className="h-5 w-5 text-blue-600" />
                3.6. Lavado del pelo en cama
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Proteger cuello con toalla</li>
                <li>• Colocar cabeza en el borde y usar un plástico que haga canal hacia un cubo</li>
                <li>• Mojar, aplicar champú y aclarar</li>
                <li>• Si el cabecero es retirable, lavar desde la parte superior</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded">
                <p className="text-sm">💡 <strong>Alternativa:</strong> Existen productos de limpieza en seco y dispositivos portátiles e hinchables</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="h-5 w-5 text-green-600" />
                3.8. Higiene ocular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Humedecer una gasa con suero fisiológico</li>
                <li>• Limpiar del ángulo interno al externo</li>
                <li>• Utilizar una gasa distinta por ojo</li>
                <li>• Con párpados cerrados</li>
                <li>• Secar con gasa estéril</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 rounded">
                <p className="text-sm">⚠️ Usar una jeringa estéril por cada ojo</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hand className="h-5 w-5 text-purple-600" />
              3.9. Cuidado de manos y pies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              <li>• Lavar con agua templada y jabón</li>
              <li>• Secar bien, sobre todo entre los dedos</li>
              <li>• Valorar el tamaño de uñas semanalmente</li>
              <li>• Cortar uñas tras el baño (están más blandas)</li>
              <li>• En pies, cortar en línea recta para evitar uñas encarnadas</li>
            </ul>
            <Alert className="bg-red-50 border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-sm">
                <strong>Atención especial:</strong> Vigilar heridas en personas diabéticas. Consultar con podólogo si hay problemas
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-green-50">
          <CardHeader>
            <CardTitle>3.10. Lavado de manos: esencial para el cuidador</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El lavado de manos es un procedimiento esencial que previene contagios y reduce riesgos clínicos.</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg text-center">
                <p className="font-bold text-blue-600">Lavado higiénico</p>
                <p className="text-sm text-muted-foreground mt-2">Uso diario general</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <p className="font-bold text-blue-600">Lavado antiséptico</p>
                <p className="text-sm text-muted-foreground mt-2">Cuidados asistenciales</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <p className="font-bold text-blue-600">Lavado quirúrgico</p>
                <p className="text-sm text-muted-foreground mt-2">Procedimientos invasivos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold mb-2">⏱️ Agua y jabón</p>
                <p className="text-2xl font-bold text-blue-600">40-60 seg</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold mb-2">⏱️ Solución hidroalcohólica</p>
                <p className="text-2xl font-bold text-green-600">20-30 seg</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary/10 to-purple-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-center">Recuerde</h3>
          <p className="text-center text-lg">
            La higiene no es solo limpieza física, es un acto de respeto, cuidado y dignidad. Cada detalle cuenta para que la persona se sienta valorada y cómoda.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-2">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 2
          </Button>
        </Link>
        <Link to="/capitulo-4">
          <Button size="lg">
            Capítulo 4
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter3;
