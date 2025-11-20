import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter1-selfcare.jpg';
const Chapter1 = () => {
  return <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Cuídese para poder cuidar" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 1</div>
        <h1 className="text-4xl font-bold">Cuídese… para poder cuidar</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Cuidar a una persona mayor dependiente implica ofrecer apoyo continuado para mantener su bienestar físico, emocional y social. El cuidador principal asume la supervisión global de los cuidados, por lo que es esencial que también cuide de sí mismo para mantener la calidad de la atención.


        </p>

        <h2 className="text-xl">1.1. ¿Qué implica ser persona cuidadora?</h2>
        <p>Asumir el rol de cuidador significa:</p>
        <ul>
          <li>Responsabilizarse de todas las actividades esenciales de la vida diaria de la persona mayor: higiene, alimentación, vestido, medicación, movilidad, seguridad, etc.</li>
          <li>Tomar decisiones sobre cómo y cuándo invertir tiempo, esfuerzo y recursos económicos.</li>
          <li>Afrontar la sobrecarga física y emocional derivada de los cuidados prolongados.</li>
          <li>Gestionar la pérdida de autonomía de la persona cuidada y, al mismo tiempo, mantener las relaciones familiares, laborales y sociales propias.</li>
        </ul>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          "El cuidador desconoce cuánto tiempo desempeñará este rol. Por ello, debe formarse, organizarse y prepararse para hacerlo en las mejores condiciones posibles."
        </blockquote>

        <h2 className="text-xl">1.2. ¿Qué puede hacer para cuidarse?</h2>
        <ul>
          <li>Atienda de forma activa a su propia salud física y emocional.</li>
          <li>Evite el aislamiento: mantenga el contacto con familiares, amistades y comunidad.</li>
          <li>Pida ayuda cuando la necesite y delegue tareas sin sentir culpa.</li>
          <li>Exprese sus emociones con naturalidad.</li>
          <li>Reconozca su esfuerzo: cuidar también es un trabajo.</li>
          <li>Establezca límites saludables ante demandas excesivas.</li>
          <li>Utilice los recursos sociales y profesionales disponibles.</li>
          <li>Vigile el equilibrio entre necesidades de cuidados y recursos disponibles.</li>
        </ul>

        <blockquote className="border-l-4 border-accent pl-4 italic my-6 bg-muted p-4 rounded-r-lg">
          "Esté atento a las señales de sobrecarga. ¡Pida ayuda a tiempo!"
        </blockquote>

        <h2 className="text-xl">1.3. Duelo</h2>
        <p>
          El duelo es un proceso de adaptación emocional tras la pérdida de la persona cuidada. Es una experiencia natural, aunque siempre genera impacto y requiere tiempo.
        </p>

        <h3>Consejos generales para afrontar el duelo</h3>
        <ul>
          <li>Dése tiempo y valide sus emociones.</li>
          <li>Permítase estar en duelo sin aislarse; mantenga pequeñas rutinas.</li>
          <li>Mantenga una alimentación saludable y realice ejercicio moderado.</li>
          <li>Acepte la realidad de la pérdida y hable de ella con naturalidad.</li>
          <li>Exprese sus emociones sin avergonzarse: tristeza, culpa, alivio, ansiedad, soledad…</li>
          <li>Organice las pertenencias de la persona fallecida cuando se sienta preparado.</li>
          <li>Busque apoyo en familiares, amistades o profesionales.</li>
          <li>Deje que los recuerdos aparezcan y compártalos con libertad.</li>
          <li>Realice actividades que faciliten la adaptación a la nueva etapa vital.</li>
          <li>Permítase disfrutar sin culpa: usted sigue teniendo un proyecto de vida propio.</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al índice
          </Button>
        </Link>
        <Link to="/capitulo-2">
          <Button>
            Capítulo 2
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>;
};
export default Chapter1;