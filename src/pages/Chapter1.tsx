import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronRight, ChevronLeft, Heart, AlertTriangle, Users, Clock, Phone, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter1-selfcare.jpg';

const Chapter1 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Cuídese para poder cuidar" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 1</div>
        <h1 className="text-4xl font-bold">Cuídese… para poder cuidar</h1>
      </div>

      <Alert className="bg-primary/5 border-primary/20">
        <Lightbulb className="h-5 w-5 text-primary" />
        <AlertDescription className="text-base">
          <strong>Resumen rápido:</strong> Cuidar a una persona dependiente es una tarea exigente que requiere que el cuidador también cuide de sí mismo. 
          Este capítulo le ayudará a identificar señales de sobrecarga, aprender técnicas de autocuidado y conocer recursos disponibles.
        </AlertDescription>
      </Alert>

      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-lg text-muted-foreground lead">
          Cuidar a una persona mayor dependiente implica ofrecer apoyo continuado para mantener su bienestar físico, emocional y social. 
          El cuidador principal asume la supervisión global de los cuidados, por lo que es esencial que también cuide de sí mismo para mantener la calidad de la atención.
        </p>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Users className="h-6 w-6" />
              1.1. ¿Qué implica ser persona cuidadora?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertDescription>
                <strong>Datos importantes:</strong> En España, más del 80% de los cuidadores son mujeres, con una dedicación media de 6 horas diarias. 
                El 60% de los cuidadores principales superan los 50 años de edad.
              </AlertDescription>
            </Alert>

            <p className="text-base">Asumir el rol de cuidador significa:</p>
            <ul className="space-y-2 text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Responsabilizarse de todas las actividades esenciales de la vida diaria: higiene, alimentación, vestido, medicación, movilidad, seguridad, etc.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Tomar decisiones sobre cómo y cuándo invertir tiempo, esfuerzo y recursos económicos.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Afrontar la sobrecarga física y emocional derivada de los cuidados prolongados.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Gestionar la pérdida de autonomía de la persona cuidada y, al mismo tiempo, mantener las relaciones familiares, laborales y sociales propias.</span>
              </li>
            </ul>

            <div className="bg-muted p-4 rounded-lg mt-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Situaciones comunes que enfrentan los cuidadores:
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• "No puedo salir de casa porque no hay nadie que me sustituya"</li>
                <li>• "Me siento culpable cuando dedico tiempo a mí mismo/a"</li>
                <li>• "He dejado de ver a mis amistades y familiares"</li>
                <li>• "No duermo bien porque estoy pendiente por la noche"</li>
                <li>• "He abandonado mis aficiones y actividades de ocio"</li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic my-6">
              "El cuidador desconoce cuánto tiempo desempeñará este rol. Por ello, debe formarse, organizarse y prepararse para hacerlo en las mejores condiciones posibles."
            </blockquote>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <AlertTriangle className="h-6 w-6" />
              1.2. El síndrome del cuidador quemado (Burnout)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base">
              El <strong>síndrome del cuidador quemado</strong> es un estado de agotamiento físico, emocional y mental causado por el estrés prolongado de cuidar a una persona dependiente. 
              Puede afectar gravemente a la salud del cuidador y a la calidad de los cuidados que presta.
            </p>

            <Alert className="bg-amber-50 border-amber-300">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertDescription>
                <strong>¡Importante!</strong> Identificar las señales de alerta a tiempo es fundamental para prevenir problemas de salud graves.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Señales de alerta
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Agotamiento físico constante:</strong> cansancio extremo que no mejora con el descanso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Irritabilidad o cambios de humor:</strong> enfadarse fácilmente, llanto frecuente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Problemas de sueño:</strong> insomnio o dormir demasiado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Aislamiento social:</strong> dejar de ver a familiares y amigos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Descuido de la propia salud:</strong> no acudir a revisiones médicas, mala alimentación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Sentimientos de culpa o resentimiento:</strong> hacia la persona cuidada o hacia uno mismo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Señales normales de adaptación
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Cansancio ocasional que mejora con el descanso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Momentos puntuales de frustración o tristeza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Necesidad de descansos regulares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Mantener contacto social aunque sea reducido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Seguir atendiendo sus propias necesidades básicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Aceptar ayuda sin sentirse culpable</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <Heart className="h-6 w-6" />
              1.3. ¿Qué puede hacer para cuidarse?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base font-semibold">Estrategias fundamentales de autocuidado:</p>
            <ul className="space-y-3 text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Atienda de forma activa a su propia salud física y emocional.</strong> Acuda a sus revisiones médicas.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Evite el aislamiento:</strong> mantenga el contacto con familiares, amistades y comunidad.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Pida ayuda cuando la necesite</strong> y delegue tareas sin sentir culpa.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Exprese sus emociones</strong> con naturalidad.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Reconozca su esfuerzo:</strong> cuidar también es un trabajo.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Establezca límites saludables</strong> ante demandas excesivas.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Utilice los recursos sociales y profesionales disponibles.</strong></span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Vigile el equilibrio</strong> entre necesidades de cuidados y recursos disponibles.</span>
              </li>
            </ul>

            <div className="bg-green-50 p-5 rounded-lg border border-green-200 mt-6">
              <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5" />
                Mi tiempo personal: técnicas rápidas de autocuidado
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h5 className="font-semibold mb-2 text-sm">Respiración 4-7-8</h5>
                  <p className="text-xs">Inhale 4 segundos, retenga 7 segundos, exhale 8 segundos. Repita 4 veces. Calma la ansiedad en 2 minutos.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h5 className="font-semibold mb-2 text-sm">Estiramientos de 5 minutos</h5>
                  <p className="text-xs">Cuello, hombros y espalda. Hágalos mientras espera que se caliente la comida. Previene dolores musculares.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h5 className="font-semibold mb-2 text-sm">Paseo de 10 minutos</h5>
                  <p className="text-xs">Salga a la calle aunque sea dar una vuelta a la manzana. El aire fresco y el movimiento mejoran el ánimo.</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-lg">Ejemplos prácticos por situaciones:</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-3 text-left font-semibold">Situación</th>
                      <th className="border p-3 text-left font-semibold">Qué hacer</th>
                      <th className="border p-3 text-left font-semibold">Ejemplo concreto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Se siente agotado/a constantemente</td>
                      <td className="border p-3">Pedir ayuda específica</td>
                      <td className="border p-3 bg-blue-50">"Llame a su hermana y dígale: ¿Puedes quedarte el sábado de 10 a 13h para que yo descanse?"</td>
                    </tr>
                    <tr>
                      <td className="border p-3">No tiene tiempo para sí mismo/a</td>
                      <td className="border p-3">Aprovechar micro-pausas</td>
                      <td className="border p-3 bg-blue-50">"Mientras hierve el agua del café, haga 5 respiraciones profundas con los ojos cerrados"</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Se siente solo/a o aislado/a</td>
                      <td className="border p-3">Conectar con otros</td>
                      <td className="border p-3 bg-blue-50">"Únase al grupo de WhatsApp de cuidadores de su centro de salud o busque asociaciones locales"</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Siente culpa por necesitar descansar</td>
                      <td className="border p-3">Normalizar sus necesidades</td>
                      <td className="border p-3 bg-blue-50">"Necesitar descanso no es abandonar. Es cuidarse para poder seguir cuidando bien"</td>
                    </tr>
                    <tr>
                      <td className="border p-3">La persona duerme pero usted no descansa</td>
                      <td className="border p-3">Priorizar el descanso</td>
                      <td className="border p-3 bg-blue-50">"Cuando la persona duerma la siesta, usted también descanse. Las tareas domésticas pueden esperar"</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Ha dejado sus aficiones</td>
                      <td className="border p-3">Recuperar actividades placenteras</td>
                      <td className="border p-3 bg-blue-50">"Dedique 20 minutos al día a algo que le guste: leer, escuchar música, hacer punto..."</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="selfcare-plan">
                <AccordionTrigger className="text-base font-semibold">
                  Mi plan personal de autocuidado (checklist)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 p-4">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">He identificado al menos 2 personas que pueden ayudarme (familia, amigos, vecinos)</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">Tengo programada al menos 1 hora a la semana para mí mismo/a</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">Mantengo contacto regular con al menos 1 amigo/a o familiar (llamada, mensaje, visita)</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">Tengo mis citas médicas al día (revisiones, medicación)</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">Practico al menos 1 técnica de relajación (respiración, meditación, estiramientos)</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">He contactado con servicios sociales para conocer ayudas disponibles</label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm">Me permito sentir emociones negativas sin culpa (cansancio, tristeza, enfado)</label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <blockquote className="border-l-4 border-accent pl-4 italic my-6 bg-muted p-4 rounded-r-lg">
              "Esté atento a las señales de sobrecarga. ¡Pida ayuda a tiempo!"
            </blockquote>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Phone className="h-6 w-6" />
              1.4. Recursos y ayudas disponibles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base">
              No está solo/a. Existen numerosos recursos y ayudas que pueden facilitarle la tarea de cuidar:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Servicios sociales</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Teleasistencia:</strong> servicio de emergencia 24h</li>
                  <li>• <strong>Ayuda a domicilio:</strong> apoyo en tareas diarias</li>
                  <li>• <strong>Centros de día:</strong> atención diurna especializada</li>
                  <li>• <strong>Servicio de comidas:</strong> entrega de comida a domicilio</li>
                  <li>• <strong>Respiro familiar:</strong> estancias temporales en residencias</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Prestaciones económicas</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Ley de Dependencia:</strong> prestaciones económicas según el grado</li>
                  <li>• <strong>Deducción fiscal:</strong> por ascendientes dependientes</li>
                  <li>• <strong>Reducción de jornada:</strong> con derecho a prestación</li>
                  <li>• <strong>Excedencia laboral:</strong> para cuidado de familiares</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Apoyo psicosocial</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Grupos de ayuda mutua:</strong> otros cuidadores que le entienden</li>
                  <li>• <strong>Asociaciones de familiares:</strong> según la enfermedad (Alzheimer, Parkinson...)</li>
                  <li>• <strong>Talleres formativos:</strong> técnicas de cuidado y autocuidado</li>
                  <li>• <strong>Atención psicológica:</strong> en centros de salud</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">Contactos útiles</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>012:</strong> Información social</li>
                  <li>• <strong>Servicios Sociales:</strong> ayuntamiento de su localidad</li>
                  <li>• <strong>Centro de Salud:</strong> trabajador social</li>
                  <li>• <strong>Cruz Roja:</strong> 900 107 917</li>
                  <li>• <strong>Teléfono de la Esperanza:</strong> 717 003 717</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-blue-50 border-blue-300 mt-4">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <strong>Consejo práctico:</strong> No espere a estar desbordado/a para pedir ayuda. Contacte con los servicios sociales de su ayuntamiento 
                cuanto antes para conocer qué recursos están disponibles en su zona.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-900">
              <Heart className="h-6 w-6" />
              1.5. Duelo: el proceso tras la pérdida
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base">
              El duelo es un proceso de adaptación emocional tras la pérdida de la persona cuidada. Es una experiencia natural, aunque siempre genera impacto y requiere tiempo. 
              <strong> No hay una forma "correcta" de hacer el duelo;</strong> cada persona lo vive de manera única.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3">Las fases del duelo (no son lineales):</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>1. Negación o shock:</strong> "No puedo creer que haya pasado". Es un mecanismo de protección inicial.
                </div>
                <div>
                  <strong>2. Enfado:</strong> "¿Por qué a mí/nosotros?". Es normal sentir rabia, incluso hacia la persona fallecida.
                </div>
                <div>
                  <strong>3. Negociación:</strong> "Si hubiera hecho esto diferente...". Pensamientos de culpa o de "y si..."
                </div>
                <div>
                  <strong>4. Tristeza profunda:</strong> El dolor es más intenso. Pueden aparecer síntomas físicos (cansancio, problemas de sueño).
                </div>
                <div>
                  <strong>5. Aceptación:</strong> No significa olvidar, sino aprender a vivir con la pérdida. Se recupera la capacidad de disfrutar.
                </div>
              </div>
              <p className="text-xs mt-3 italic">Nota: Estas fases no siguen un orden fijo. Es normal avanzar, retroceder, o experimentar varias a la vez.</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-3">Emociones normales durante el duelo:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-green-50 p-3 rounded-md border border-green-200">
                  <p className="text-sm"><strong>✓ Alivio:</strong> "Es normal sentir alivio tras el fallecimiento, especialmente si hubo mucho sufrimiento. No significa que no le quisiera."</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md border border-green-200">
                  <p className="text-sm"><strong>✓ Culpa:</strong> "Sentir que podría haber hecho más es común. Recuerde: usted hizo lo mejor que pudo con los recursos que tenía."</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md border border-green-200">
                  <p className="text-sm"><strong>✓ Enfado:</strong> "Si siente enfado hacia la persona, hacia otros familiares o hacia usted mismo, es parte del proceso. No se juzgue."</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md border border-green-200">
                  <p className="text-sm"><strong>✓ Vacío o desorientación:</strong> "Después de meses o años cuidando, es normal sentirse perdido/a. Su identidad se reajustará con tiempo."</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mt-6 mb-3">Consejos generales para afrontar el duelo:</h4>
            <ul className="space-y-2 text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Dése tiempo</strong> y valide sus emociones. No hay plazos establecidos.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Permítase estar en duelo</strong> sin aislarse; mantenga pequeñas rutinas diarias.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Mantenga una alimentación saludable</strong> y realice ejercicio moderado.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Acepte la realidad de la pérdida</strong> y hable de ella con naturalidad.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Exprese sus emociones</strong> sin avergonzarse: tristeza, culpa, alivio, ansiedad, soledad...</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Organice las pertenencias</strong> de la persona fallecida cuando se sienta preparado/a, no hay prisa.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Busque apoyo</strong> en familiares, amistades o profesionales (psicólogos, grupos de duelo).</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Deje que los recuerdos aparezcan</strong> y compártalos con libertad.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Realice actividades</strong> que faciliten la adaptación a la nueva etapa vital.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Permítase disfrutar sin culpa:</strong> usted sigue teniendo un proyecto de vida propio.</span>
              </li>
            </ul>

            <Alert className="bg-red-50 border-red-300 mt-6">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertDescription>
                <strong>Busque ayuda profesional si:</strong>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li>El dolor intenso persiste más de 6 meses sin mejoría</li>
                  <li>Tiene pensamientos de hacerse daño</li>
                  <li>Abusa del alcohol, tabaco u otras sustancias</li>
                  <li>No puede realizar actividades básicas diarias</li>
                  <li>Se aísla completamente durante semanas</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Alert className="bg-primary/10 border-primary">
          <Heart className="h-5 w-5 text-primary" />
          <AlertDescription className="text-base">
            <strong>Recuerde:</strong> Cuidarse a usted mismo/a no es egoísmo, es una necesidad. Solo si usted está bien podrá cuidar bien a la persona que depende de usted. 
            <span className="block mt-2 font-semibold">¡Su salud y bienestar también importan!</span>
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/">
          <Button variant="outline" size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al índice
          </Button>
        </Link>
        <Link to="/capitulo-2">
          <Button size="lg">
            Capítulo 2
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter1;
