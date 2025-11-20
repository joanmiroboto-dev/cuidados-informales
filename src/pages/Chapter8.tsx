import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter8-pressure.jpg';
const Chapter8 = () => {
  return <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Úlceras por Presión" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 8</div>
        <h1 className="text-4xl font-bold">Úlceras por Presión</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Las úlceras por presión (UPP), también llamadas úlceras por decúbito, son lesiones de la piel y tejidos subyacentes causadas por una presión mantenida entre una prominencia ósea y una superficie dura (cama, silla, etc.). Son frecuentes en personas mayores con movilidad reducida y constituyen un problema serio que puede afectar gravemente su calidad de vida.

        </p>

        <p className="font-semibold text-xl">La prevención es siempre la mejor estrategia.</p>

        <h2 className="font-bold text-2xl bg-lime-100">8.1. ¿Por qué es importante prevenirlas?</h2>
        <p>

Las úlceras por presión:</p>
        <ul>
          <li>Producen dolor, malestar e incapacidad</li>
          <li>Aumentan el riesgo de infecciones locales y sistémicas</li>
          <li>Agravan otras enfermedades existentes</li>
          <li>Requieren cuidados especializados y prolongados</li>
          <li>Pueden derivar en complicaciones graves (celulitis, sepsis)</li>
        </ul>

        <p>Las zonas más afectadas suelen ser aquellas donde el hueso sobresale y la piel es más fina:</p>
        <ul>
          <li>Talones</li>
          <li>Caderas</li>
          <li>Sacro</li>
          <li>Tobillos</li>
          <li>Codos</li>
          <li>Omóplatos</li>
          <li>Orejas en personas que usan mascarillas rígidas o están encamadas de lado</li>
        </ul>

        <h2>8.2. Factores de riesgo</h2>

        <h3>Factores intrínsecos (de la persona)</h3>
        <ul>
          <li>Edad avanzada</li>
          <li>Inmovilidad o movilidad reducida</li>
          <li>Deterioro cognitivo</li>
          <li>Malnutrición o deshidratación</li>
          <li>Incontinencia urinaria o fecal</li>
          <li>Enfermedades crónicas (diabetes, insuficiencia circulatoria, anemia)</li>
          <li>Piel frágil, seca o con edemas</li>
        </ul>

        <h3>Factores extrínsecos (del entorno)</h3>
        <ul>
          <li>Presión mantenida</li>
          <li>Fricción y cizallamiento (arrastre sobre sábanas)</li>
          <li>Humedad excesiva (sudor, orina, heces)</li>
          <li>Higiene inadecuada</li>
          <li>Uso de superficies duras o arrugas en la ropa de cama</li>
        </ul>

        <h2>8.3. Medidas de prevención</h2>

        <h3>A) Cambios posturales</h3>
        <p>Evitan que la presión se mantenga en un mismo punto durante mucho tiempo.</p>
        <ul>
          <li><strong>Frecuencia:</strong> Cada 2–3 horas en personas encamadas</li>
          <li><strong>Posiciones recomendadas:</strong>
            <ul>
              <li>Decúbito supino (boca arriba)</li>
              <li>Decúbito lateral derecho</li>
              <li>Decúbito lateral izquierdo</li>
              <li>Evitar decúbito prono si es posible (boca abajo)</li>
            </ul>
          </li>
          <li><strong>Técnica:</strong> Usar almohadas o cojines para aliviar zonas de apoyo</li>
        </ul>

        <h3>B) Cuidados de la piel</h3>
        <ul>
          <li>Inspeccionar la piel diariamente</li>
          <li>Lavar con agua tibia y jabón neutro, secando bien (especialmente pliegues)</li>
          <li>Hidratar con crema o aceite sin alcohol</li>
          <li>No friccionar zonas enrojecidas</li>
          <li>Cambiar pañales, empapadores o ropa húmeda de inmediato</li>
        </ul>

        <h3>C) Nutrición e hidratación</h3>
        <ul>
          <li>Dieta equilibrada rica en proteínas, vitaminas y minerales</li>
          <li>Ingesta de líquidos suficiente (2–2,5 litros/día si no hay contraindicación)</li>
          <li>Control de peso y estado nutricional</li>
        </ul>

        <h3>D) Superficies de apoyo</h3>
        <ul>
          <li>Colchones antiescaras (aire, espuma viscoelástica)</li>
          <li>Cojines de alivio de presión en sillas</li>
          <li>Evitar arrugas o pliegues en sábanas</li>
          <li>No usar flotadores o aros (pueden empeorar la presión)</li>
        </ul>

        <h3>E) Movilización activa</h3>
        <p>Fomentar la movilidad siempre que sea posible:</p>
        <ul>
          <li>Sedestación (sentarse en sillón) varias veces al día</li>
          <li>Estimular que la persona cambie de postura si puede hacerlo</li>
          <li>Realizar ejercicios pasivos o activos con ayuda de fisioterapeuta</li>
        </ul>

        <h2>8.4. Estadios de las úlceras por presión</h2>

        <h3>Estadio I</h3>
        <p>Piel intacta con enrojecimiento que no desaparece al presionar. Puede haber dolor, calor o cambio de textura.</p>

        <h3>Estadio II</h3>
        <p>Pérdida parcial del grosor de la piel. Se observa úlcera superficial con lecho rosado. Puede aparecer como ampolla.</p>

        <h3>Estadio III</h3>
        <p>Pérdida total del espesor de la piel. Se observa grasa subcutánea, pero no hueso, tendón ni músculo. Puede haber tunelización.</p>

        <h3>Estadio IV</h3>
        <p>Pérdida total del tejido con exposición de hueso, tendón o músculo. Suele haber tejido necrótico y tunelización extensa.</p>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h4>❗ Importante</h4>
          <p className="mb-0">Ante la aparición de cualquier lesión cutánea, consulte siempre con profesionales sanitarios para valoración y tratamiento adecuado. Las úlceras por presión requieren cuidados especializados.</p>
        </div>

        <h2>8.5. Tratamiento básico</h2>
        <p>El tratamiento debe ser realizado por profesionales de enfermería. El cuidador puede colaborar:</p>
        <ul>
          <li>Mantener la zona limpia según indicaciones</li>
          <li>Cambiar apósitos siguiendo las instrucciones</li>
          <li>Reforzar medidas preventivas</li>
          <li>Observar evolución y notificar cambios</li>
          <li>Asegurar nutrición e hidratación adecuadas</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-7">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 7
          </Button>
        </Link>
        <Link to="/capitulo-9">
          <Button>
            Capítulo 9
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>;
};
export default Chapter8;