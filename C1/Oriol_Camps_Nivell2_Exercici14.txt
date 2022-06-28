using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Introdueix el nombre de ventes realitzades: ");
            int nventes = int.Parse(Console.ReadLine());

            Console.Write("Introdueix ara el valor d'import de cada venta: ");
            int [] import = new int[nventes];
            int suma = 0;
            for (int i = 0; i <=nventes-1; i++)
            {
                import[i] = int.Parse(Console.ReadLine());

                suma = suma + import[i];

                if (import[i] < 0)
                {
                    Console.WriteLine("El valor introduit no es valid. Intenti-ho de nou.");
                    i = i - 1;
                }
            }

            Console.Write("El sumatori de tots els imports es: " + suma);
            Console.ReadKey();
       }   
    }
}
