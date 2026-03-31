import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handlePrint}
      className="print:hidden gap-2"
    >
      <Printer className="h-4 w-4" />
      Imprimir / PDF
    </Button>
  );
};
