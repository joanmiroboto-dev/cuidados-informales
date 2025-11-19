import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter2-aging.jpg';

const Chapter2 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Qué es envejecer" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 2</div>
        <h1 className="text-4xl font-bold">Qué es envejecer</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          El envejecimiento forma parte del ciclo vital y supone un conjunto de cambios biológicos, psicológicos y sociales que influyen directamente en la autonomía y el bienestar de la persona mayor. Conocer estos cambios ayuda a planificar cuidados adecuados y respetuosos.
        </p>

        <h2>2.1. Ciclo de la vida y sus etapas</h2>
        <p>El ciclo vital humano está compuesto por etapas sucesivas que abarcan desde el nacimiento hasta la muerte:</p>
        <ul>
          <li>Etapa prenatal</li>
          <li>Infancia</li>
          <li>Niñez</li>
          <li>Adolescencia</li>
          <li>Juventud</li>
          <li>Adultez</li>
          <li>Vejez</li>
        </ul>
        <p>La vejez no aparece de manera brusca, sino que forma parte de un proceso continuo: el envejecimiento.</p>

        <h2>2.2. Envejecimiento y sus características</h2>
        <p>El envejecimiento es un proceso universal y progresivo que comienza desde el nacimiento y finaliza con la muerte. Incluye transformaciones físicas, cognitivas y sociales.</p>

        <h3>Clasificación de la edad según la OMS</h3>
        <ul>
          <li><strong>60–74 años:</strong> Personas de edad avanzada</li>
          <li><strong>75–90 años:</strong> Personas ancianas</li>
          <li><strong>90+ años:</strong> Grandes viejos o longevos</li>
        </ul>

        <h3>Características generales del envejecimiento</h3>
        <ul>
          <li>Ritmo de actividad más lento</li>
          <li>Cambios en el sistema excretor y metabólico</li>
          <li>Envejecimiento celular progresivo</li>
          <li>Variaciones en la vida sexual, social y en la autopercepción</li>
          <li>Cambios en la funcionalidad de órganos y sistemas</li>
        </ul>

        <h2>2.3. Cambios fisiológicos asociados al envejecimiento</h2>

        <h3>Visión</h3>
        <ul>
          <li>Atrofia lagrimal y debilitamiento muscular</li>
          <li>Disminución de la agudeza visual y discriminación de colores</li>
          <li>Opacidad progresiva del cristalino</li>
        </ul>

        <h3>Audición</h3>
        <ul>
          <li>Hipoacusia</li>
          <li>Crecimiento del pabellón auditivo</li>
          <li>Dificultad para discriminar palabras, especialmente en frecuencias altas</li>
        </ul>

        <h3>Tacto y piel</h3>
        <ul>
          <li>Reducción de colágeno, grasa subcutánea y masa muscular</li>
          <li>Aparición de arrugas, manchas, sequedad y flacidez</li>
        </ul>

        <h3>Olfato y gusto</h3>
        <ul>
          <li>Disminución de la capacidad para diferenciar olores</li>
          <li>Menor producción de saliva</li>
          <li>Reducción de la sensibilidad a ciertos sabores</li>
        </ul>

        <h3>Sistema musculoesquelético</h3>
        <ul>
          <li>Rigidez articular y degeneración de cartílagos</li>
          <li>Fragilidad ósea y desmineralización</li>
          <li>Reducción de masa y fuerza muscular</li>
        </ul>

        <h3>Sistema cardiovascular</h3>
        <ul>
          <li>Estrechamiento y menor elasticidad de los vasos sanguíneos</li>
          <li>Mayor presión sobre el ventrículo izquierdo</li>
          <li>Disminución de la capacidad de contracción</li>
        </ul>

        <h3>Sistema respiratorio</h3>
        <ul>
          <li>Capacidad vital disminuida</li>
          <li>Mayor volumen residual</li>
          <li>Debilitamiento de la musculatura respiratoria</li>
          <li>Reducción de la función mucociliar</li>
        </ul>

        <h3>Sistema excretor y reproductor</h3>
        <ul>
          <li>Cambios hormonales (p. ej. disminución de testosterona)</li>
          <li>Aumento de tamaño de próstata</li>
          <li>Pérdida de funcionalidad ovárica</li>
          <li>Reducción progresiva de la función renal</li>
        </ul>

        <h3>Sistema digestivo</h3>
        <ul>
          <li>Disminución de la absorción de nutrientes</li>
          <li>Tránsito intestinal más lento</li>
          <li>Reducción del tono del esfínter gastroesofágico</li>
          <li>Pérdidas dentales y menor producción de ácido clorhídrico</li>
        </ul>

        <h3>Rol social</h3>
        <p>El envejecimiento modifica el papel dentro de la familia y la comunidad.</p>
        <ul>
          <li>Cambios en la comprensión de la vida, la muerte y las relaciones</li>
          <li>Influencia de factores personales (salud, economía, redes de apoyo)</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-1">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 1
          </Button>
        </Link>
        <Link to="/capitulo-3">
          <Button>
            Capítulo 3
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter2;
