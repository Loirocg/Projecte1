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
            Console.Write("Introdueix un valor:");
            int a = int.Parse(Console.ReadLine());
            int residu = a % 2;

            if (residu == 0)
                Console.WriteLine("El valor introduit es multiple de 2.");
            else
                Console.WriteLine("El valor introduit no es multiple de 2.");

            Console.ReadKey();
       }   
    }
}
