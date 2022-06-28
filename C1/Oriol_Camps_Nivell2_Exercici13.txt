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
            Console.Write("Escriu el preu del producte: ");
            double preu = double.Parse(Console.ReadLine());
            double iva = preu*21/100;
            double total = preu + iva;

            Console.WriteLine("L'IVA del producte es " + iva + ". El preu total del producte es " + total);
            Console.ReadKey();
       }   
    }
}
