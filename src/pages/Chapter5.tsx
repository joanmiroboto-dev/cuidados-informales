import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          Las movilizaciones y transferencias son procedimientos esenciales para garantizar la comodidad, la seguridad y la prevención de complicaciones en personas mayores dependientes. Una correcta técnica protege tanto al cuidador como a la persona cuidada, evitando lesiones, roces, caídas o úlceras por presión.
        </p>

        <h2>5.1. Conceptos básicos</h2>
        
        <h3>Movilizaciones</h3>
        <p>Son los movimientos realizados sobre una misma superficie para cambiar la posición de la persona (por ejemplo, moverla dentro de la cama).</p>

        <h3>Transferencias</h3>
        <p>Son los movimientos que permiten pasar de una superficie a otra, como:</p>
        <ul>
          <li>De la cama a la silla</li>
          <li>De la silla al sillón</li>
          <li>Del sillón a la cama</li>
          <li>De sentado a de pie</li>
        </ul>

        <p>Ambas técnicas favorecen:</p>
        <ul>
          <li>Prevención de úlceras por presión</li>
          <li>Conservación de la movilidad articular</li>
          <li>Mejora de la comodidad y descanso</li>
          <li>Prevención de complicaciones respiratorias y circulatorias</li>
        </ul>

        <h2>5.2. Mecánica corporal del cuidador</h2>
        <p>Para proteger su espalda y evitar lesiones:</p>
        <ul>
          <li>Ampliar la base de sustentación separando los pies</li>
          <li>Flexionar rodillas y caderas, NO la espalda</li>
          <li>Mantener la carga cerca del cuerpo</li>
          <li>Contraer abdomen y glúteos durante el esfuerzo</li>
          <li>Girar todo el cuerpo, no solo el tronco</li>
          <li>Sincronizar movimientos con la persona cuidada mediante instrucciones verbales</li>
        </ul>

        <h2>5.3. Movilizaciones en cama</h2>

        <h3>Subir hacia el cabecero</h3>
        <p><strong>Con ayuda de la persona:</strong></p>
        <ul>
          <li>Retirar almohada</li>
          <li>Flexionar rodillas</li>
          <li>Sujetar con ambas manos la cabecera de la cama</li>
          <li>Empujar con pies y tirar de la cabecera al mismo tiempo</li>
        </ul>

        <p><strong>Sin colaboración de la persona:</strong></p>
        <ul>
          <li>Dos cuidadores, uno a cada lado</li>
          <li>Colocar brazo superior de la persona en cruz sobre su pecho</li>
          <li>Cuidadores colocan su antebrazo más cercano al cabecero bajo los hombros</li>
          <li>El otro antebrazo bajo las caderas/muslos</li>
          <li>Sincronizar: "A la de tres…"</li>
        </ul>

        <h3>Decúbito supino a decúbito lateral</h3>
        <ul>
          <li>Cruzar brazos sobre pecho</li>
          <li>Flexionar pierna del lado hacia el que girará</li>
          <li>Girar en bloque sujetando hombro y cadera</li>
          <li>Colocar almohada entre rodillas</li>
          <li>Almohada en espalda para mantener posición</li>
        </ul>

        <h3>Decúbito supino a sentado al borde de cama</h3>
        <ol>
          <li>Colocar en decúbito lateral</li>
          <li>Bajar piernas por el borde de la cama</li>
          <li>Apoyar en el colchón con el brazo inferior</li>
          <li>Impulsar el tronco hacia arriba</li>
        </ol>

        <h2>5.4. Transferencias</h2>

        <h3>De cama a silla de ruedas</h3>
        <ol>
          <li>Colocar silla junto a la cama con freno puesto</li>
          <li>Retirar reposapiés</li>
          <li>Sentar persona al borde de la cama</li>
          <li>Calzar</li>
          <li>Rodear cintura con sus brazos</li>
          <li>Girar pivotando sobre pies hasta quedar de espaldas a la silla</li>
          <li>Descender flexionando rodillas hasta sentarse</li>
        </ol>

        <h3>De sentado a de pie</h3>
        <p><strong>Recomendaciones:</strong></p>
        <ul>
          <li>Piernas flexionadas; una entre las de la persona</li>
          <li>Antebrazos del cuidador bajo los del paciente</li>
          <li>Inclinación del tronco hacia delante</li>
          <li>Bascular hacia atrás para elevar</li>
          <li>Revisar el equilibrio antes de comenzar a caminar</li>
        </ul>

        <h2>5.5. Ayudas para la marcha</h2>

        <h3>Si camina arrastrando los pies</h3>
        <ul>
          <li>Cuidador delante, antebrazos por debajo de los del mayor</li>
          <li>Acompañar el paso con movimientos cruzados brazo-pierna</li>
        </ul>

        <h3>Si camina rígido</h3>
        <ul>
          <li>Colocarse detrás, sujetar bajo las axilas</li>
          <li>Acompañar el movimiento del hombro contrario al pie avanzado</li>
        </ul>

        <h3>Si tiene hemiplejía</h3>
        <ul>
          <li>Ofrecer apoyo por el lado sano</li>
          <li>Introducir antebrazo bajo el lado afectado para estabilidad</li>
        </ul>

        <h3>Dispositivos de ayuda</h3>
        <ul>
          <li>Bastón</li>
          <li>Muletas</li>
          <li>Andadores (ruedas, fijos o mixtos)</li>
        </ul>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-4">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 4
          </Button>
        </Link>
        <Link to="/capitulo-6">
          <Button>
            Capítulo 6
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter5;
