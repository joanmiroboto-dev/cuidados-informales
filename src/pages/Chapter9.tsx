import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
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

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Las caídas son uno de los principales riesgos en personas mayores. Pueden provocar lesiones graves, fracturas, hospitalización y pérdida de autonomía. Muchas caídas pueden prevenirse mediante adaptaciones del entorno y medidas de seguridad.
        </p>

        <h2>9.1. Factores de riesgo de caídas</h2>

        <h3>Factores intrínsecos (de la persona)</h3>
        <ul>
          <li>Edad avanzada</li>
          <li>Problemas de equilibrio o marcha</li>
          <li>Debilidad muscular</li>
          <li>Deterioro cognitivo</li>
          <li>Alteraciones visuales o auditivas</li>
          <li>Mareos o hipotensión postural</li>
          <li>Enfermedades crónicas (Parkinson, artrosis, diabetes)</li>
          <li>Polimedicación</li>
          <li>Miedo a caer (que paradójicamente aumenta el riesgo)</li>
        </ul>

        <h3>Factores extrínsecos (del entorno)</h3>
        <ul>
          <li>Suelos resbaladizos o irregulares</li>
          <li>Alfombras sueltas</li>
          <li>Mala iluminación</li>
          <li>Escaleras sin pasamanos</li>
          <li>Obstáculos en el paso (cables, muebles)</li>
          <li>Calzado inadecuado</li>
          <li>Ausencia de barras de apoyo en baño</li>
        </ul>

        <h2>9.2. Consecuencias de las caídas</h2>
        <ul>
          <li>Lesiones físicas: fracturas (cadera, muñeca), traumatismos craneoencefálicos, heridas</li>
          <li>Síndrome post-caída: miedo intenso a volver a caer que lleva al inmovilismo</li>
          <li>Pérdida de confianza y autonomía</li>
          <li>Aislamiento social</li>
          <li>Aumento de la dependencia</li>
          <li>Ingreso en residencias o institucionalización</li>
        </ul>

        <h2>9.3. Medidas de prevención</h2>

        <h3>A) Adaptaciones del hogar</h3>
        
        <h4>Espacios comunes</h4>
        <ul>
          <li>Eliminar obstáculos: cables, muebles pequeños, objetos en el suelo</li>
          <li>Retirar alfombras o fijarlas al suelo con cinta antideslizante</li>
          <li>Asegurar buena iluminación en todos los espacios, especialmente pasillos nocturnos</li>
          <li>Instalar interruptores accesibles o luces con sensor de movimiento</li>
          <li>Marcar desniveles con colores contrastados</li>
          <li>Colocar señales visuales sencillas</li>
        </ul>

        <h4>Para personas con deterioro cognitivo</h4>
        <ul>
          <li>Señalizar puertas con dibujos o pictogramas</li>
          <li>Evitar estímulos que generen confusión</li>
        </ul>

        <h3>B) Cuarto de baño</h3>
        <p>Es uno de los lugares con mayor riesgo de caídas.</p>

        <h4>Recomendaciones:</h4>
        <ul>
          <li>Asideros firmes en pared, correctamente atornillados</li>
          <li>Alfombra antideslizante dentro y fuera de la ducha</li>
          <li>Superficies lo menos resbaladizas posible</li>
          <li>Considerar asiento de ducha o tabla de bañera</li>
          <li>Grifería accesible y temperatura regulable</li>
          <li>Mantener el baño bien iluminado</li>
          <li>Evitar suelos mojados</li>
        </ul>

        <h2>9.4. ¿Qué hacer si se produce una caída?</h2>
        <p className="font-semibold">La prioridad es proteger la integridad física de la persona mayor y del cuidador.</p>

        <h3>Paso 1 · Valorar</h3>
        <ul>
          <li>Si hay dolor intenso, deformidad o imposibilidad de moverse → llamar al 112</li>
          <li>No mover a la persona si se sospecha fractura o traumatismo grave</li>
        </ul>

        <h3>Paso 2 · Actuar con calma</h3>
        <ul>
          <li>Hablarle suavemente para tranquilizar</li>
          <li>Observar si está consciente y orientada</li>
          <li>Comprobar si respira con normalidad</li>
        </ul>

        <h3>Paso 3 · Ayudar a levantarse (solo si es seguro)</h3>
        <ul>
          <li>Hacerlo despacio</li>
          <li>Guiar los movimientos para evitar mareos</li>
          <li>Nunca tirar de los brazos o levantar bruscamente</li>
        </ul>

        <h3>Paso 4 · Supervisión posterior</h3>
        <p>Observar varias horas por si aparecen:</p>
        <ul>
          <li>Dolor creciente</li>
          <li>Hinchazón</li>
          <li>Dificultad para caminar</li>
          <li>Confusión</li>
          <li>Somnolencia anormal</li>
        </ul>

        <p className="font-semibold">Si hay cualquier duda → consultar con profesionales sanitarios.</p>

        <h2>9.5. Sistemas de alerta y teleasistencia</h2>
        <p>Existen dispositivos que detectan caídas y pueden avisar automáticamente al cuidador o a un servicio profesional:</p>
        <ul>
          <li>Detectores de caída integrados en pulseras o colgantes</li>
          <li>Botón de emergencia (teleasistencia)</li>
          <li>Sensores de movimiento en el hogar</li>
        </ul>

        <p>Estos sistemas pueden reducir tiempos de atención y mejorar la seguridad.</p>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-8">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 8
          </Button>
        </Link>
        <Link to="/capitulo-10">
          <Button>
            Capítulo 10
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter9;
