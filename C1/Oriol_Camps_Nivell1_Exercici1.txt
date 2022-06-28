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
            Console.Write("Introdueix el primer valor: ");
            int a = int.Parse(Console.ReadLine());

            Console.Write("Introdueix el segon valor: ");
            int b = int.Parse(Console.ReadLine());

            int suma = a + b;
            int resta = a - b;
            int producte = a * b;
            int divisio = a / b;
            int residu = a % b;

            Console.WriteLine("El resultat de la suma es: "+ suma);
            Console.WriteLine("El resultat de la resta es: "+ resta);
            Console.WriteLine("El resultat del producte es: "+ producte);
            Console.WriteLine("El resultat de la divisio es: "+ divisio);
            Console.WriteLine("El residu de la divisio anterior es: "+ residu);

            Console.ReadKey();
        }   
    }
}
