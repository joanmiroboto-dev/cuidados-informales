import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
interface LayoutProps {
  children: ReactNode;
}
const chapters = [{
  id: 1,
  title: 'Cuídese para poder cuidar',
  path: '/capitulo-1'
}, {
  id: 2,
  title: 'Qué es envejecer',
  path: '/capitulo-2'
}, {
  id: 3,
  title: 'Higiene Personal',
  path: '/capitulo-3'
}, {
  id: 4,
  title: 'Vestido',
  path: '/capitulo-4'
}, {
  id: 5,
  title: 'Movilización',
  path: '/capitulo-5'
}, {
  id: 6,
  title: 'Alimentación e Hidratación',
  path: '/capitulo-6'
}, {
  id: 7,
  title: 'Incontinencia Urinaria',
  path: '/capitulo-7'
}, {
  id: 8,
  title: 'Úlceras por Presión',
  path: '/capitulo-8'
}, {
  id: 9,
  title: 'Prevención de Caídas',
  path: '/capitulo-9'
}, {
  id: 10,
  title: 'Medicación',
  path: '/capitulo-10'
}];
export const Layout = ({
  children
}: LayoutProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const NavigationContent = () => <nav className="flex flex-col gap-2">
      <Link to="/" className={`px-4 py-2 rounded-lg transition-colors ${location.pathname === '/' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setOpen(false)}>
        <div className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          <span>Inicio</span>
        </div>
      </Link>
      {chapters.map(chapter => <Link key={chapter.id} to={chapter.path} className={`px-4 py-2 rounded-lg transition-colors ${location.pathname === chapter.path ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`} onClick={() => setOpen(false)}>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Capítulo {chapter.id}</span>
            <span className="font-medium">{chapter.title}</span>
          </div>
        </Link>)}
    </nav>;
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-8">
                  <h2 className="mb-4 text-lg font-semibold">Navegación</h2>
                  <NavigationContent />
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex items-center gap-2">
              
              <span className="font-semibold hidden sm:inline-block text-2xl">Curso Cuidados Informales en entorno domiciliario</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container flex gap-8 py-8 px-4">
        {/* Sidebar Desktop */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <h2 className="mb-4 text-lg font-semibold">Capítulos</h2>
            <NavigationContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">{children}</main>
      </div>
    </div>;
};