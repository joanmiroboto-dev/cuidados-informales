import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter3-hygiene.jpg';
const Chapter3 = () => {
  return <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Higiene Personal" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 3</div>
        <h1 className="text-4xl font-bold">Higiene Personal</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="font-bold text-2xl">3.1. Objetivos de la higiene personal</h2>
        <ul>
          <li>Contribuir al bienestar físico, psicológico y emocional de la persona cuidada</li>
          <li>Prevenir infecciones, irritaciones y lesiones cutáneas</li>
          <li>Mantener la piel limpia, hidratada y en buen estado</li>
          <li>Favorecer la autonomía y el autocuidado en la medida de lo posible</li>
          <li>Educar a la persona y a la familia en hábitos higiénicos adecuados

        </li>
        </ul>

        <h2 className="text-2xl font-bold">3.2. Antes de iniciar la higiene</h2>
        <ul>
          <li>Preservar la intimidad y dignidad de la persona mayor</li>
          <li>Valorar el grado de autonomía y fomentar su participación</li>
          <li>Realizar lavado de manos y utilizar guantes cuando sea necesario</li>
          <li>Informar a la persona sobre lo que se va a hacer y cómo</li>
          <li>Ayudar a desvestirse si lo precisa</li>
          <li>Tener en cuenta factores culturales relacionados con la higiene</li>
          <li>Preparar un entorno seguro: barras de apoyo, alfombra antideslizante, supervisión continua</li>
          <li>Mantener temperatura ambiente entre 24–25 ºC</li>
          <li>Evitar corrientes de aire</li>
          <li>Verificar que el agua esté a 35–36 ºC</li>
          <li>Enjabonar siempre con movimientos suaves y circulares

        </li>
        </ul>

        <h2 className="text-2xl font-bold">3.3. Consejos para la higiene en cama</h2>
        <h3>Preparación</h3>
        <ul>
          <li>Cambie el agua tantas veces como sea necesario</li>
          <li>Use un recipiente para agua jabonosa y otro para aclarado</li>
          <li>Utilice guantes cuando haya contacto con fluidos</li>
          <li>Destape solo la zona que vaya a lavar</li>
          <li>Evite mojar apósitos o heridas</li>
          <li>Avise antes de realizar cualquier movimiento</li>
          <li>Si hay dolor, valorar administración previa de analgésico</li>
        </ul>

        <h3>Secado e hidratación</h3>
        <p>Secar sin arrastrar para evitar dañar piel frágil. Aplicar crema hidratante al finalizar.</p>
        <p>Revisar la piel buscando:</p>
        <ul>
          <li>Enrojecimientos</li>
          <li>Heridas</li>
          <li>Ampollas</li>
          <li>Hematomas

        </li>
        </ul>

        <h2 className="font-bold">3.4. Orden recomendado de lavado en cama</h2>
        <ol>
          <li>Cara (solo con agua), orejas y cuello</li>
          <li>Brazos y axilas; permitir que se lave las manos si puede</li>
          <li>Cambiar el agua</li>
          <li>Pecho y abdomen; en mujeres, secar bien bajo las mamas</li>
          <li>Piernas</li>
          <li>De lado: espalda y nalgas</li>
          <li>De nuevo boca arriba: cambiar el agua y lavar zona genital</li>
          <li>Secar todos los pliegues cuidadosamente</li>
          <li>Aplicar crema hidratante</li>
          <li>Inspeccionar la piel</li>
        </ol>

        <h2>3.5. Higiene genital en cama</h2>
        <h3>Procedimiento</h3>
        <p>Colocar una cuña o protector. Rociar agua templada desde pubis hacia el ano. Lavar con jabón neutro y aclarar.</p>

        <h3>En mujeres</h3>
        <p>Lavar siempre de adelante hacia atrás.</p>

        <h3>En hombres</h3>
        <p>Retirar el prepucio, lavar el glande y volver a cubrirlo tras secar.</p>

        <h3>Recomendaciones</h3>
        <ul>
          <li>Secar bien los pliegues</li>
          <li>Usar crema barrera en caso de incontinencia</li>
          <li>Realizar higiene genital diariamente</li>
        </ul>

        <h2>3.6. Lavado del pelo en cama</h2>
        <ul>
          <li>Proteger cuello con toalla</li>
          <li>Colocar cabeza en el borde y usar un plástico que haga canal hacia un cubo</li>
          <li>Mojar, aplicar champú y aclarar</li>
          <li>Si el cabecero es retirable, lavar desde la parte superior</li>
          <li>Se pueden usar productos de limpieza en seco</li>
          <li>Existen dispositivos portátiles e hinchables para facilitar el lavado</li>
        </ul>

        <h2>3.7. Higiene bucal</h2>
        <p>Objetivo: mantener mucosa oral hidratada, prevenir infecciones, evitar mal olor y facilitar la alimentación.</p>

        <h2>3.8. Higiene ocular</h2>
        <ul>
          <li>Humedecer una gasa con suero fisiológico</li>
          <li>Limpiar del ángulo interno al externo</li>
          <li>Utilizar una gasa distinta por ojo</li>
          <li>Con párpados cerrados</li>
          <li>Abrir párpados suavemente y aplicar suero desde el lado opuesto al lagrimal</li>
          <li>Usar una jeringa estéril por cada ojo</li>
          <li>Secar con gasa estéril</li>
        </ul>

        <h2>3.9. Cuidado de manos y pies</h2>
        <ul>
          <li>Lavar con agua templada y jabón</li>
          <li>Secar bien, sobre todo entre los dedos</li>
          <li>Valorar el tamaño de uñas semanalmente</li>
          <li>Cortar uñas tras el baño</li>
          <li>En pies, cortar en línea recta</li>
          <li>Vigilar heridas (especial atención a diabéticos)</li>
        </ul>

        <h2>3.10. Lavado de manos: tipos</h2>
        <p>El lavado de manos es un procedimiento esencial que previene contagios y reduce riesgos clínicos.</p>

        <h3>Tipos de lavado</h3>
        <ul>
          <li>Lavado higiénico o convencional</li>
          <li>Lavado antiséptico asistencial</li>
          <li>Lavado quirúrgico</li>
        </ul>

        <h3>Tiempos de referencia</h3>
        <ul>
          <li>Agua y jabón: 40–60 segundos</li>
          <li>Solución hidroalcohólica: 20–30 segundos</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-2">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 2
          </Button>
        </Link>
        <Link to="/capitulo-4">
          <Button>
            Capítulo 4
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>;
};
export default Chapter3;