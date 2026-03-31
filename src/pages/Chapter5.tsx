import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight, ChevronLeft, Move, Shield, User, AlertCircle, ArrowRightLeft, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter5-mobility.jpg';

const Chapter5 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Movilización" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 5</div>
        <h1 className="text-4xl font-bold">Transferencias y Movilizaciones</h1>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <AlertDescription className="text-base">
          <strong>Resumen rápido:</strong> Las movilizaciones y transferencias correctas protegen tanto al cuidador como a la persona cuidada, evitando lesiones y complicaciones. La técnica adecuada es fundamental.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-lg text-muted-foreground lead">
          Las movilizaciones y transferencias son procedimientos esenciales para garantizar la comodidad, la seguridad y la prevención de complicaciones en personas mayores dependientes. Una correcta técnica protege tanto al cuidador como a la persona cuidada, evitando lesiones, roces, caídas o úlceras por presión.
        </p>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              5.1. Conceptos básicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Move className="h-5 w-5 text-blue-600" />
                    Movilizaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Movimientos realizados sobre una <strong>misma superficie</strong> para cambiar la posición de la persona.</p>
                  <div className="mt-3 p-3 bg-white rounded">
                    <p className="text-sm font-semibold text-blue-700">Ejemplo:</p>
                    <p className="text-sm text-muted-foreground">Mover a la persona dentro de la cama de un lado a otro</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ArrowRightLeft className="h-5 w-5 text-purple-600" />
                    Transferencias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Movimientos que permiten pasar de una <strong>superficie a otra</strong>.</p>
                  <div className="mt-3 p-3 bg-white rounded">
                    <ul className="text-sm space-y-1">
                      <li>• De la cama a la silla</li>
                      <li>• De la silla al sillón</li>
                      <li>• Del sillón a la cama</li>
                      <li>• De sentado a de pie</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3">✓ Beneficios de una correcta movilización</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Prevención de úlceras por presión</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Conservación de la movilidad articular</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Mejora de la comodidad y descanso</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Prevención de complicaciones respiratorias</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              5.2. Mecánica corporal del cuidador
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-yellow-50 border-yellow-300">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription>
                <strong>Fundamental:</strong> Proteger su espalda es esencial para evitar lesiones y poder seguir cuidando
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Ampliar base de sustentación</p>
                <p className="text-sm">Separe los pies para mayor estabilidad</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Flexionar rodillas y caderas</p>
                <p className="text-sm">NUNCA doblar solo la espalda</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Mantener carga cerca</p>
                <p className="text-sm">Acerque la persona a su cuerpo</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Contraer abdomen y glúteos</p>
                <p className="text-sm">Durante todo el esfuerzo</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Girar todo el cuerpo</p>
                <p className="text-sm">No solo el tronco, gire los pies</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-900 mb-2">⚠️ Sincronizar movimientos</p>
                <p className="text-sm">Use instrucciones verbales: "A la de tres..."</p>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg mt-4">
              <p className="text-sm font-semibold mb-2">💡 Ejemplo práctico:</p>
              <p className="text-sm">"Antes de mover a la persona, diga: 'Vamos a girar hacia la derecha. A la de tres: uno, dos, tres'. Esto coordina el esfuerzo y reduce riesgo de lesiones."</p>
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="bed">
            <AccordionTrigger className="text-lg font-bold">
              5.3. Movilizaciones en cama
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Subir hacia el cabecero</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-3">✓ Con ayuda de la persona</h4>
                      <ol className="space-y-2 text-sm">
                        <li><strong>1.</strong> Retirar almohada</li>
                        <li><strong>2.</strong> Flexionar rodillas</li>
                        <li><strong>3.</strong> Sujetar con ambas manos la cabecera</li>
                        <li><strong>4.</strong> Empujar con pies y tirar de la cabecera al mismo tiempo</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-3">Sin colaboración de la persona</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Dos cuidadores</strong>, uno a cada lado</li>
                        <li>• Colocar brazo superior de la persona en cruz sobre su pecho</li>
                        <li>• Cuidadores colocan su antebrazo más cercano al cabecero bajo los hombros</li>
                        <li>• El otro antebrazo bajo las caderas/muslos</li>
                        <li>• <strong>Sincronizar:</strong> "A la de tres…"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Decúbito supino a decúbito lateral</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">1</span>
                        <span>Cruzar brazos sobre pecho</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">2</span>
                        <span>Flexionar pierna del lado hacia el que girará</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">3</span>
                        <span>Girar en bloque sujetando hombro y cadera</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">4</span>
                        <span>Colocar almohada entre rodillas</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">5</span>
                        <span>Almohada en espalda para mantener posición</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Decúbito supino a sentado al borde de cama</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">1</span>
                        <span>Colocar en decúbito lateral</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">2</span>
                        <span>Bajar piernas por el borde de la cama</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">3</span>
                        <span>Apoyar en el colchón con el brazo inferior</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary">4</span>
                        <span>Impulsar el tronco hacia arriba</span>
                      </li>
                    </ol>
                    <div className="mt-4 p-3 bg-purple-50 rounded">
                      <p className="text-sm">💡 La gravedad de las piernas ayuda a levantar el tronco</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="transfer">
            <AccordionTrigger className="text-lg font-bold">
              5.4. Transferencias
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle>De cama a silla de ruedas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-blue-600 text-lg">1</span>
                        <div>
                          <p className="font-semibold">Preparar silla</p>
                          <p className="text-sm text-muted-foreground">Junto a la cama con freno puesto y reposapiés retirados</p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-blue-600 text-lg">2</span>
                        <p>Sentar persona al borde de la cama</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-blue-600 text-lg">3</span>
                        <p>Calzar</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-blue-600 text-lg">4</span>
                        <p>Rodear cintura con sus brazos</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-blue-600 text-lg">5</span>
                        <p>Girar pivotando sobre pies hasta quedar de espaldas a la silla</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-blue-600 text-lg">6</span>
                        <p>Descender flexionando rodillas hasta sentarse</p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-green-600" />
                      De sentado a de pie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-3">✓ Recomendaciones</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Piernas flexionadas; una entre las de la persona</li>
                        <li>• Antebrazos del cuidador bajo los del paciente</li>
                        <li>• Inclinación del tronco hacia delante</li>
                        <li>• Bascular hacia atrás para elevar</li>
                        <li>• <strong>Revisar el equilibrio</strong> antes de comenzar a caminar</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="walking">
            <AccordionTrigger className="text-lg font-bold">
              5.5. Ayudas para la marcha
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Si camina arrastrando los pies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Cuidador delante, antebrazos por debajo de los del mayor</li>
                      <li>• Acompañar el paso con movimientos cruzados brazo-pierna</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Si camina rígido</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Colocarse detrás, sujetar bajo las axilas</li>
                      <li>• Acompañar el movimiento del hombro contrario al pie avanzado</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Si tiene hemiplejía</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Ofrecer apoyo por el <strong>lado sano</strong></li>
                      <li>• Introducir antebrazo bajo el lado afectado para estabilidad</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-3">Dispositivos de ayuda</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded text-center">
                      <p className="font-semibold">Bastón</p>
                      <p className="text-xs text-muted-foreground mt-1">Para equilibrio leve</p>
                    </div>
                    <div className="p-3 bg-white rounded text-center">
                      <p className="font-semibold">Muletas</p>
                      <p className="text-xs text-muted-foreground mt-1">Soporte bilateral</p>
                    </div>
                    <div className="p-3 bg-white rounded text-center">
                      <p className="font-semibold">Andadores</p>
                      <p className="text-xs text-muted-foreground mt-1">Ruedas, fijos o mixtos</p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gradient-to-r from-primary/10 to-purple-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-center">Recuerde</h3>
          <p className="text-center text-lg">
            La seguridad es lo primero. Si no puede realizar una movilización de forma segura, pida ayuda. Cuidarse usted mismo es parte de cuidar bien a la otra persona.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t print:hidden">
        <Link to="/capitulo-4">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 4
          </Button>
        </Link>
        <Link to="/capitulo-6">
          <Button size="lg">
            Capítulo 6
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter5;
