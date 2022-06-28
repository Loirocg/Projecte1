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
            int N = 2;
            double A = 3.3;
            char C = 'A';
            Console.WriteLine("El valor de N es " + N + "; el valor de A es " + A + "; i el valor de C es " + C);

            double suma = (double) N + A;
            Console.WriteLine("El resultat de la suma N+A es " + suma);

            double resta = (double) N - A;
            Console.WriteLine("El resultat de la resta N-A es " + resta);

            int int_C = (int) C;
            Console.WriteLine("El valor equivalent de C es " + int_C);

            Console.ReadKey();
        }   
    }
}
