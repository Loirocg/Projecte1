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
            Console.WriteLine("Indica el dia de la setmana.");
            string dia = Console.ReadLine();

            switch (dia)
            {
                case string d when (d == "Dilluns" || d == "Dimarts" || d == "Dimecres" || d == "Dijous" || d == "Divendres"):
                    Console.WriteLine("El dia indicat es laboral.");
                    break;

                case string d when (d == "Dissabte" || d == "Diumenge"):
                    Console.WriteLine("El dia indicat no es laboral.");
                    break;

                default:
                    Console.WriteLine("El dia introduit no es valid.");
                    break;
            }

            Console.ReadKey();
        }   
    }
}
