import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter6-nutrition.jpg';

const Chapter6 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Alimentación e Hidratación" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 6</div>
        <h1 className="text-4xl font-bold">Alimentación y Nutrición</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          La alimentación es un pilar fundamental en la salud de las personas mayores dependientes. Con la edad disminuyen las necesidades energéticas, pero aumentan los riesgos de malnutrición, deshidratación y complicaciones asociadas. Una dieta adecuada contribuye a mantener la fuerza, prevenir enfermedades y mejorar la calidad de vida.
        </p>

        <h2>6.1. La malnutrición en personas mayores</h2>
        <p>Las personas mayores dependientes son especialmente vulnerables a la malnutrición. Puede aparecer por:</p>
        <ul>
          <li>Pérdida de apetito</li>
          <li>Problemas de masticación o deglución</li>
          <li>Enfermedades crónicas</li>
          <li>Medicamentos que alteran el apetito</li>
          <li>Dependencia funcional</li>
          <li>Aislamiento social</li>
        </ul>

        <p>La malnutrición empeora el deterioro funcional, aumenta la dependencia y genera riesgos de:</p>
        <ul>
          <li>Caídas</li>
          <li>Fracturas</li>
          <li>Sarcopenia (pérdida muscular)</li>
          <li>Deterioro cognitivo</li>
          <li>Infecciones</li>
        </ul>

        <h2>6.2. Consejos generales para una alimentación adecuada</h2>
        <ul>
          <li>Realizar cuatro comidas diarias: desayuno, comida, merienda y cena</li>
          <li>Se puede añadir una ingesta a media mañana</li>
          <li>Mantener horarios regulares y espaciados</li>
          <li>Cuidar el aspecto, la textura y la presentación de los alimentos</li>
          <li>Evitar dietas muy restrictivas en mayores de 70 años salvo prescripción médica</li>
          <li>Ofrecer una dieta variada y equilibrada:
            <ul>
              <li>Rica en cereales, frutas y verduras</li>
              <li>Reducida en grasas saturadas, sal y azúcares</li>
              <li>Con moderación en embutidos y dulces</li>
            </ul>
          </li>
          <li>Fomentar el consumo de pescado frente a la carne</li>
          <li>Asegurar 3–4 raciones de lácteos al día</li>
          <li>Evitar fritos, salsas pesadas y condimentos en exceso</li>
          <li>Utilizar hierbas aromáticas para potenciar el sabor cuando haya menor sensibilidad gustativa</li>
          <li>Servir los alimentos templados, ya que se toleran mejor</li>
          <li>Animar a beber 2,5 litros al día, preferiblemente agua</li>
          <li>Limitar el alcohol: solo un pequeño vaso de vino en comida y cena si no está contraindicado</li>
          <li>Controlar pérdidas de peso:
            <ul>
              <li>7,5% en 3 meses → alerta</li>
              <li>10% en 6 meses → riesgo elevado</li>
            </ul>
          </li>
        </ul>

        <h2>6.3. Si tiene que darle la comida</h2>
        <ul>
          <li>Crear un ambiente tranquilo y privado</li>
          <li>Explicar el proceso para favorecer su colaboración</li>
          <li>Dar tiempo suficiente para evitar atragantamientos</li>
          <li>Trocear homogéneo, sin cambios bruscos de textura</li>
          <li>Evitar distracciones o hablar mientras mastica</li>
          <li>Realizar higiene oral tras la comida</li>
        </ul>

        <h2>6.4. Disfagia (dificultad para tragar)</h2>
        <p>La disfagia es frecuente en personas mayores con enfermedades neurológicas (Parkinson, Alzheimer…) o polimedicadas. Puede causar:</p>
        <ul>
          <li>Malnutrición</li>
          <li>Deshidratación</li>
          <li>Neumonía por aspiración (muy grave)</li>
        </ul>

        <h3>Recomendaciones en caso de disfagia</h3>
        <ul>
          <li>Nunca forzar la ingesta</li>
          <li>No usar jeringuillas ni pajitas</li>
          <li>Ofrecer alimentos de textura homogénea (purés, triturados)</li>
          <li>Usar espesantes para lograr la textura adecuada (néctar, miel, pudding)</li>
          <li>Hidratar con gelatinas o agua gelificada</li>
          <li>Colocar a la persona sentada, espalda recta y cabeza hacia delante</li>
          <li>Si está encamada, elevar cabecero al máximo</li>
          <li>Mantener incorporada 30–40 minutos tras comer</li>
          <li>Dedicar el tiempo necesario; evitar prisas</li>
          <li>Nunca alimentar tumbado</li>
        </ul>

        <h2>6.5. Nutrición enteral (por sonda)</h2>
        <p>Es un soporte nutricional que se administra cuando la persona no puede tragar pero el aparato digestivo sí funciona.</p>

        <h3>Vías de nutrición enteral</h3>
        <ul>
          <li><strong>Sonda nasogástrica (SNG):</strong> entra por la nariz hasta el estómago</li>
          <li><strong>Gastrostomía endoscópica percutánea (PEG):</strong> sonda directa al estómago a través de un estoma abdominal</li>
        </ul>

        <h3>Procedimiento general (SNG o PEG)</h3>
        <dl>
          <dt><strong>Posición</strong></dt>
          <dd>Colocar siempre en Fowler o semi-Fowler antes, durante y 1 hora después de la administración.</dd>
          
          <dt><strong>Comprobaciones</strong></dt>
          <dd>Verificar la colocación y permeabilidad de la sonda antes de cada toma.</dd>
          
          <dt><strong>Limpieza</strong></dt>
          <dd>Al finalizar, lavar la sonda con 25 ml de agua (10 ml en niños).</dd>
          
          <dt><strong>Educación</strong></dt>
          <dd>Enseñar a la familia cómo evitar tirones o desplazamientos.</dd>
        </dl>

        <h2>6.6. Dos formas de administración</h2>
        <h3>1. Administración intermitente en bolo</h3>
        <ul>
          <li>Pinzar la sonda</li>
          <li>Conectar jeringa de 50 ml sin émbolo</li>
          <li>Llenar con alimento comercial</li>
          <li>Despinzar y dejar caer por gravedad</li>
          <li>Mantener ritmo suave y constante</li>
        </ul>

        <h3>2. Infusión continua con bomba</h3>
        <ul>
          <li>Verificar velocidad de infusión programada</li>
          <li>Mantener una hora en posición semi-incorporada tras la alimentación</li>
          <li>Cambiar bolsa y sistema cada 24 horas</li>
        </ul>

        <h2>6.7. Administración de medicamentos por sonda</h2>
        <h3>Reglas importantes</h3>
        <ul>
          <li>No mezclar medicamentos con la alimentación</li>
          <li>No mezclar entre sí varios medicamentos</li>
          <li>Usar jarabes o líquidos no efervescentes cuando sea posible</li>
          <li>Si es comprimido:
            <ul>
              <li>Triturar hasta polvo fino</li>
              <li>Diluir en 30 ml de agua</li>
            </ul>
          </li>
          <li>Lavar la sonda con 30–50 ml de agua después de cada medicamento</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-5">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 5
          </Button>
        </Link>
        <Link to="/capitulo-7">
          <Button>
            Capítulo 7
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter6;
