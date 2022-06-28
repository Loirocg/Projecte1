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
            string contrasenya = "1234";
            bool correcte = false;

            Console.Write("Introdueix la contrasenya: ");
            string c_usuari = Console.ReadLine();

            for (int i = 0; i <= 2; i++)
            {
                if (contrasenya != c_usuari)
                {
                    Console.WriteLine("La contrasenya introduida es incorrecte. Prova-ho de nou.");
                    c_usuari = Console.ReadLine();
                }


                if (contrasenya == c_usuari)
                {
                    correcte = true;
                    break;
                }
            }

            if (correcte == true)
                Console.WriteLine("Enhorabona.");

            if (correcte == false)
                Console.WriteLine("Contrasenya introduida incorrecte. S'han acabat els intents.");

            Console.ReadKey();
        }   
    }
}
