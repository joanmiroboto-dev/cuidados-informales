import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter7-incontinence.jpg';
const Chapter7 = () => {
  return <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Incontinencia Urinaria" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 7</div>
        <h1 className="text-4xl font-bold text-center">Incontinencia Urinaria</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          La incontinencia urinaria es la pérdida involuntaria de orina que afecta significativamente la calidad de vida de las personas mayores. No es una consecuencia normal del envejecimiento, sino un problema de salud que puede prevenirse, tratarse o paliarse.
        </p>

        <h2>7.1. Tipos de incontinencia urinaria</h2>

        <h3>A) Incontinencia de esfuerzo</h3>
        <p>Pérdida de orina al realizar actividades que aumentan la presión abdominal:</p>
        <ul>
          <li>Toser</li>
          <li>Estornudar</li>
          <li>Reír</li>
          <li>Levantar peso</li>
        </ul>

        <h3>B) Incontinencia de urgencia</h3>
        <p>Pérdida de orina precedida por una necesidad imperiosa e inmediata de orinar, sin tiempo suficiente para llegar al baño.</p>

        <h3>C) Incontinencia por rebosamiento</h3>
        <p>La vejiga no se vacía completamente y, al llenarse en exceso, la orina se derrama involuntariamente.</p>

        <h3>D) Incontinencia funcional</h3>
        <p>No existe alteración del aparato urinario, pero la persona no puede acceder al baño por:</p>
        <ul>
          <li>Limitaciones físicas</li>
          <li>Problemas cognitivos</li>
          <li>Barreras arquitectónicas</li>
        </ul>

        <h2>7.2. Productos de apoyo para la incontinencia</h2>

        <h3>A) Absorbentes (empapadores, pañales, compresas)</h3>
        <h4>Recomendaciones de uso:</h4>
        <ul>
          <li>Seleccionar la talla y capacidad adecuadas</li>
          <li>Cambiar con frecuencia suficiente para mantener piel seca</li>
          <li>Realizar higiene antes de cada cambio</li>
          <li>Aplicar crema barrera si hay irritación</li>
          <li>Desechar correctamente en contenedor</li>
        </ul>

        <h3>B) Colectores externos (preservativos urinarios)</h3>
        <p>Dispositivos que se ajustan al pene y conectan a una bolsa recolectora.</p>
        <h4>Recomendaciones:</h4>
        <ul>
          <li>Elegir talla correcta (pequeña, mediana, grande)</li>
          <li>Rasurar vello si es necesario</li>
          <li>Lavar y secar genitales antes de colocar</li>
          <li>Cambiar cada 24 horas</li>
          <li>Observar integridad de la piel del pene</li>
        </ul>

        <h3>C) Sondaje vesical</h3>
        <p>Es un procedimiento médico mediante el cual se introduce un catéter a través de la uretra hasta la vejiga para drenar la orina hacia una bolsa.</p>

        <h4>Indicaciones habituales</h4>
        <ul>
          <li>Retención urinaria</li>
          <li>Imposibilidad para orinar por sí mismo</li>
          <li>Necesidad de mediciones precisas de diuresis</li>
          <li>Necesidades especiales según criterio médico</li>
        </ul>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h4>❗ Importante</h4>
          <ul className="mb-0">
            <li>Siempre debe ser colocado por personal sanitario cualificado</li>
            <li>Requiere vigilancia estricta para evitar infecciones urinarias</li>
            <li>Puede ser temporal o permanente según criterio clínico</li>
          </ul>
        </div>

        <h2>7.3. Cuidados generales asociados a la incontinencia</h2>

        <h3>Higiene diaria</h3>
        <ul>
          <li>Lavar la zona genital con agua templada y jabón neutro</li>
          <li>Secar completamente, especialmente pliegues</li>
          <li>Aplicar crema barrera en caso de humedad persistente</li>
          <li>Cambiar absorbentes con frecuencia adecuada</li>
        </ul>

        <h3>Prevención de lesiones de la piel</h3>
        <ul>
          <li>Mantener piel limpia y seca</li>
          <li>Usar productos de pH adecuado</li>
          <li>Evitar talcos o fricciones</li>
          <li>Revisar piel a diario</li>
        </ul>

        <h3>Hidratación e ingesta</h3>
        <ul>
          <li>No recortar líquidos salvo prescripción médica</li>
          <li>Evitar bebidas irritantes (café, alcohol, refrescos)</li>
        </ul>

        <h3>Entorno y hábitos</h3>
        <ul>
          <li>Facilitar acceso al baño</li>
          <li>Ropa fácil de quitar y poner</li>
          <li>Estimular el vaciado regular (micción programada)</li>
          <li>Evitar ropa ajustada que aumente la presión</li>
        </ul>

        <h2>7.4. Impacto emocional de la incontinencia</h2>
        <p>La incontinencia no es solo un problema físico. Genera con frecuencia:</p>
        <ul>
          <li>Vergüenza</li>
          <li>Miedo a salir de casa</li>
          <li>Aislamiento</li>
          <li>Disminución de autoestima</li>
          <li>Dependencia creciente</li>
        </ul>

        <p className="font-semibold">El cuidador debe mantener una actitud respetuosa, tranquila y no infantilizadora. El acompañamiento emocional y la normalización del problema son fundamentales.</p>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-6">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 6
          </Button>
        </Link>
        <Link to="/capitulo-8">
          <Button>
            Capítulo 8
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>;
};
export default Chapter7;