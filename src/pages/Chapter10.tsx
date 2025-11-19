import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import chapterImg from '@/assets/chapter10-medication.jpg';

const Chapter10 = () => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-xl">
        <img src={chapterImg} alt="Medicación" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-2">
        <div className="text-sm text-primary font-semibold">Capítulo 10</div>
        <h1 className="text-4xl font-bold">Medicación</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground lead">
          La medicación es un pilar fundamental en el tratamiento y la prevención de enfermedades en personas mayores. Su correcta administración aumenta la eficacia del tratamiento y reduce riesgos graves como interacciones, sobredosis, olvidos o errores de administración. El cuidador desempeña un papel clave para garantizar la seguridad farmacológica.
        </p>

        <h2>10.1. Consejos generales para manejo seguro de la medicación</h2>
        <ul>
          <li>Antes de administrar un medicamento, comprobar que la persona no es alérgica</li>
          <li>No administrar medicamentos no prescritos por profesionales sanitarios</li>
          <li>No suspender tratamientos por decisión propia, aunque la persona mejore</li>
          <li>No compartir medicación entre personas</li>
          <li>Comprender bien:
            <ul>
              <li>Qué medicamento se administra</li>
              <li>Para qué sirve</li>
              <li>Dosis</li>
              <li>Frecuencia</li>
              <li>Si va antes/durante/después de comidas</li>
              <li>Duración del tratamiento</li>
            </ul>
          </li>
          <li>Revisar siempre la fecha de caducidad</li>
          <li>Elaborar un planning o pauta farmacológica con horarios, dosis y observaciones</li>
          <li>Usar pastilleros semanales si hay múltiples medicamentos</li>
          <li>Conservar prospectos y envases originales</li>
          <li>Consultar dudas con médico o farmacéutico</li>
        </ul>

        <h2>10.2. Vías de administración</h2>

        <h3>A) Vía oral</h3>
        <p>Es la más frecuente. El medicamento se ingiere por la boca.</p>

        <h4>Tipos de presentaciones:</h4>
        <ul>
          <li>Comprimidos, cápsulas, grageas</li>
          <li>Jarabes, suspensiones, gotas</li>
          <li>Sobres, polvos</li>
        </ul>

        <h4>Recomendaciones:</h4>
        <ul>
          <li>Administrar con agua (salvo indicación contraria)</li>
          <li>Respetar si debe tomarse en ayunas, con comida o después de comer</li>
          <li>No partir ni triturar comprimidos de liberación prolongada o con cubierta entérica (salvo prescripción)</li>
          <li>Sentar o incorporar a la persona para evitar atragantamiento</li>
          <li>Esperar a que trague completamente</li>
        </ul>

        <h3>B) Vía sublingual</h3>
        <p>El medicamento se coloca bajo la lengua hasta que se disuelve.</p>
        <ul>
          <li>No masticar ni tragar</li>
          <li>No beber ni comer hasta que se disuelva</li>
          <li>Efecto más rápido que vía oral</li>
        </ul>

        <h3>C) Vía tópica (piel)</h3>
        <p>Aplicación de cremas, pomadas, geles o parches sobre la piel.</p>
        <ul>
          <li>Limpiar y secar zona antes de aplicar</li>
          <li>Aplicar cantidad indicada</li>
          <li>Extender suavemente sin frotar agresivamente</li>
          <li>Lavarse las manos antes y después</li>
        </ul>

        <h3>D) Vía rectal</h3>
        <p>Introducción de supositorios o enemas.</p>
        <ul>
          <li>Guardar supositorios en frigorífico</li>
          <li>Humedecer para facilitar inserción</li>
          <li>Revisar ano por si existen lesiones</li>
          <li>Colocar en posición lateral</li>
          <li>Insertar con dedo enguantado</li>
          <li>Mantener glúteos presionados unos minutos</li>
        </ul>

        <h3>E) Vía oftálmica (ojos)</h3>

        <h4>Colirios (gotas)</h4>
        <ul>
          <li>Usar cada colirio solo para un paciente</li>
          <li>Colocar sentado o en decúbito supino con leve hiperextensión de cuello</li>
          <li>Pedir que mire hacia arriba</li>
          <li>Limpiar previamente con suero si hay secreciones</li>
          <li>Desechar la primera gota del envase</li>
          <li>Instilar en el saco conjuntival sin tocar ojo ni pestañas</li>
          <li>Presionar conducto lagrimal 30 segundos</li>
        </ul>

        <h4>Pomada oftálmica</h4>
        <ul>
          <li>Aplicar cordón fino en párpado inferior</li>
        </ul>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h4>Importante</h4>
          <ul className="mb-0">
            <li>Fármaco a temperatura ambiente</li>
            <li>Si hay varias gotas, dejar 5 minutos entre aplicaciones</li>
            <li>Colirios abiertos → caducan en 1 mes</li>
          </ul>
        </div>

        <h3>F) Vía ótica (oído)</h3>
        <ul>
          <li>Colocar en decúbito lateral con oído afectado hacia arriba</li>
          <li>Tirar suavemente del pabellón hacia atrás y arriba (en adultos)</li>
          <li>Limpiar entrada del canal con suero</li>
          <li>Instilar gotas a temperatura corporal</li>
          <li>No introducir gasas en el canal</li>
          <li>Mantener posición 3–5 minutos</li>
        </ul>

        <h3>G) Vía intranasal</h3>
        <ul>
          <li>Limpiar fosas nasales</li>
          <li>Inclinar cabeza hacia atrás</li>
          <li>Aplicar gotas o spray</li>
          <li>Mantener posición 1 minuto</li>
        </ul>

        <h3>H) Vía inhalatoria</h3>
        <p>Consiste en administrar medicamentos directamente a los pulmones. Es fundamental una técnica correcta.</p>

        <h4>Tipos de dispositivos</h4>
        <ul>
          <li>Cartuchos presurizados (MDI)</li>
          <li>Inhaladores de polvo seco</li>
          <li>Nebulizadores</li>
          <li>Cámaras espaciadoras</li>
        </ul>

        <h4>Recomendaciones</h4>
        <ul>
          <li>Recibir formación de profesionales sanitarios</li>
          <li>Confirmar la técnica mediante demostración</li>
          <li>Realizar enjuague bucal tras inhaladores con corticoides</li>
          <li>Las cámaras espaciadoras facilitan la administración cuando hay mala coordinación</li>
        </ul>

        <h3>I) Vía transdérmica (parches)</h3>
        <ul>
          <li>Escoger zona con poco vello y sin roces</li>
          <li>Limpiar y secar bien</li>
          <li>Colocar parche evitando tocar el adhesivo con los dedos</li>
          <li>Rotar los lugares de aplicación</li>
          <li>Mantener el parche el tiempo indicado</li>
          <li>Retirar el anterior antes de poner uno nuevo</li>
          <li>No cortar parches salvo indicación del fabricante</li>
        </ul>

        <h2>10.3. Conservación de medicamentos</h2>
        <ul>
          <li>Guardar en lugar fresco y seco</li>
          <li>Proteger de la luz</li>
          <li>Respetar condiciones de refrigeración si es necesario</li>
          <li>Mantener fuera del alcance de niños</li>
          <li>No guardar en el baño (humedad)</li>
          <li>Revisar fechas de caducidad periódicamente</li>
          <li>Desechar medicamentos caducados en punto SIGRE de farmacia</li>
        </ul>

        <h2>10.4. Interacciones y efectos adversos</h2>
        <p>Algunos medicamentos pueden interactuar entre sí o con alimentos, disminuyendo su eficacia o aumentando toxicidad.</p>

        <h3>Señales de alerta:</h3>
        <ul>
          <li>Mareos, somnolencia o confusión</li>
          <li>Náuseas o vómitos</li>
          <li>Erupciones cutáneas</li>
          <li>Cambios en el ritmo cardíaco</li>
          <li>Dificultad para respirar</li>
        </ul>

        <p className="font-semibold">Ante cualquier reacción adversa, consultar inmediatamente con profesionales sanitarios.</p>
      </div>

      <div className="flex justify-between pt-8 border-t">
        <Link to="/capitulo-9">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Capítulo 9
          </Button>
        </Link>
        <Link to="/">
          <Button>Volver al índice</Button>
        </Link>
      </div>
    </div>
  );
};

export default Chapter10;
