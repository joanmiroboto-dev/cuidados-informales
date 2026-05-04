import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-cuidados.jpg';
import chapter1Img from '@/assets/chapter1-selfcare.jpg';
import chapter2Img from '@/assets/chapter2-aging.jpg';
import chapter3Img from '@/assets/chapter3-hygiene.jpg';
import chapter4Img from '@/assets/chapter4-clothing.jpg';
import chapter5Img from '@/assets/chapter5-mobility.jpg';
import chapter6Img from '@/assets/chapter6-nutrition.jpg';
import chapter7Img from '@/assets/chapter7-incontinence.jpg';
import chapter8Img from '@/assets/chapter8-pressure.jpg';
import chapter9Img from '@/assets/chapter9-falls.jpg';
import chapter10Img from '@/assets/chapter10-medication.jpg';
const chapters = [{
  id: 1,
  title: 'Cuídese para poder cuidar',
  description: 'Aprenda a cuidar de sí mismo para poder cuidar mejor. Recomendaciones para evitar la sobrecarga y gestionar el duelo.',
  path: '/capitulo-1',
  image: chapter1Img
}, {
  id: 2,
  title: 'Qué es envejecer',
  description: 'Comprenda el proceso de envejecimiento, sus etapas y los cambios fisiológicos asociados.',
  path: '/capitulo-2',
  image: chapter2Img
}, {
  id: 3,
  title: 'Higiene Personal',
  description: 'Técnicas y procedimientos para mantener una higiene óptima en personas mayores dependientes.',
  path: '/capitulo-3',
  image: chapter3Img
}, {
  id: 4,
  title: 'Vestido',
  description: 'Consejos para vestir y desvestir a personas con movilidad reducida de forma segura y cómoda.',
  path: '/capitulo-4',
  image: chapter4Img
}, {
  id: 5,
  title: 'Movilización',
  description: 'Técnicas de movilización segura, cambios posturales y uso de productos de apoyo.',
  path: '/capitulo-5',
  image: chapter5Img
}, {
  id: 6,
  title: 'Alimentación e Hidratación',
  description: 'Nutrición adecuada, manejo de disfagia y administración de nutrición enteral.',
  path: '/capitulo-6',
  image: chapter6Img
}, {
  id: 7,
  title: 'Incontinencia Urinaria',
  description: 'Tipos de incontinencia, manejo, productos de apoyo y cuidados del sondaje vesical.',
  path: '/capitulo-7',
  image: chapter7Img
}, {
  id: 8,
  title: 'Úlceras por Presión',
  description: 'Prevención, valoración y tratamiento de las úlceras por presión.',
  path: '/capitulo-8',
  image: chapter8Img
}, {
  id: 9,
  title: 'Prevención de Caídas',
  description: 'Factores de riesgo, adaptación del hogar y actuación ante una caída.',
  path: '/capitulo-9',
  image: chapter9Img
}, {
  id: 10,
  title: 'Medicación',
  description: 'Manejo seguro de medicamentos, vías de administración y conservación.',
  path: '/capitulo-10',
  image: chapter10Img
}];
const Home = () => {
  return <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <img
          src={heroImage}
          alt="Curso Cuidados Informales en entorno domiciliario"
          className="w-full h-auto block"
        />
      </section>

      {/* Autoría */}
      <section className="text-center space-y-1">
        <p className="text-base text-muted-foreground">Material cedido por la autora:</p>
        <p className="text-lg font-semibold">Silvia Navarro Soriano</p>
        <p className="text-base text-muted-foreground">Enfermera SESCV y Docente UV</p>
        <p className="text-sm text-muted-foreground">
          Asociación La Casa Grande - Colegio Oficial de Enfermería de Valencia
        </p>
      </section>

      {/* Intro */}
      <section className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground">
          Este manual proporciona información práctica y profesional para cuidadores de personas mayores.
          Cada capítulo aborda aspectos esenciales del cuidado, desde la higiene personal hasta la
          administración de medicamentos, con técnicas y recomendaciones basadas en buenas prácticas sanitarias.
        </p>
      </section>

      {/* Chapters Grid */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Índice de Capítulos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {chapters.map(chapter => <Link key={chapter.id} to={chapter.path}>
              <Card className="h-full transition-all hover:shadow-[var(--card-shadow-hover)] group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        Capítulo {chapter.id}
                      </div>
                      <CardTitle className="transition-colors text-sky-800">
                        {chapter.title}
                      </CardTitle>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardDescription>{chapter.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>)}
        </div>
      </section>
    </div>;
};
export default Home;