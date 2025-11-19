import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter4-clothing.jpg';

const Chapter4 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Vestido" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 4</div>
        <h1 className="text-4xl font-bold">Vestido</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Vestir adecuadamente a una persona mayor dependiente es una actividad esencial que contribuye a su bienestar físico y emocional. La ropa adecuada protege frente a agentes externos, facilita la regulación térmica, favorece la movilidad y mejora la autoestima de la persona cuidada.
        </p>

        <h2>4.1. Principios generales</h2>
        <ul>
          <li><strong>Fomentar la autonomía:</strong> permita que la persona mayor participe en el proceso de vestir y desvestir tanto como pueda</li>
          <li><strong>Cambio diario:</strong> promueva el uso de ropa limpia cada día</li>
          <li><strong>Respeto a las preferencias:</strong> seleccione prendas que la persona mayor conozca y le resulten cómodas, manteniendo su estilo propio</li>
          <li><strong>Organización del entorno:</strong> coloque las prendas en el orden correcto y al alcance, preferiblemente con la persona sentada para evitar caídas</li>
        </ul>

        <h2>4.2. La ropa: criterios de elección</h2>
        <p>La ropa debe cumplir con tres objetivos: comodidad, seguridad y facilidad de uso.</p>

        <h3>Características recomendadas</h3>
        <ul>
          <li>Prendas holgadas que permitan libertad de movimiento</li>
          <li>Aberturas delanteras que faciliten el vestido y desvestido</li>
          <li>Uso de elásticos y velcros en lugar de botones, cremalleras difíciles o cierres complejos</li>
          <li>Tejidos naturales (como el algodón), frescos, transpirables y de fácil planchado</li>
          <li>Ropa adaptable según la estación del año</li>
        </ul>

        <h3>❌ Evitar</h3>
        <ul>
          <li>Prendas ajustadas o demasiado pesadas</li>
          <li>Mangas o cuellos muy estrechos</li>
          <li>Tejidos rígidos o ásperos</li>
          <li>Ropa deteriorada o que provoque roces</li>
        </ul>

        <h2>4.3. El calzado</h2>
        <p>El calzado adecuado es fundamental para la seguridad y estabilidad en la marcha.</p>

        <h3>Recomendaciones</h3>
        <ul>
          <li>Zapatos confortables, ligeros y que no aprieten</li>
          <li>Suela de goma antideslizante</li>
          <li>Buen ajuste al pie y que sujeten correctamente el talón</li>
          <li>Cierre de velcro para facilitar la colocación</li>
        </ul>

        <h3>Para personas con edemas (pies hinchados)</h3>
        <p>Utilizar calzado especial con mayor capacidad y cierres ajustables.</p>

        <h2>4.4. Consejos prácticos durante el vestido</h2>
        <ul>
          <li>Realizar el proceso con calma, explicando cada paso</li>
          <li>Comenzar por el lado afectado si existe limitación de movilidad (hemiplejía, dolor, parálisis)</li>
          <li>Para desvestir, iniciar por el lado sano</li>
          <li>Facilitar la participación siempre que sea posible (subir cremalleras, estirar mangas, ajustar velcros)</li>
          <li>Comprobar que no quedan arrugas o pliegues que puedan causar lesiones por presión</li>
          <li>Asegurarse de que la ropa no restrinja la movilidad ni la respiración</li>
          <li>Usar prendas por capas en invierno para facilitar la regulación térmica</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-3">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 3
          </Button>
        </Link>
        <Link to="/capitulo-5">
          <Button>
            Capítulo 5
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter4;
