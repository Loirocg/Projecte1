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
            Console.Write("Introdueix els dos operants: ");
            int op1 = int.Parse(Console.ReadLine());
            int op2 = int.Parse(Console.ReadLine());

            Console.Write("Ara introdueix el signe aritmetic: ");
            string simbol = Console.ReadLine();

            switch(simbol)
            {
                case "+":
                    int suma = op1+op2;
                    Console.WriteLine("El resultat de la suma es: "+ suma);
                    break;

                case "-":
                    int resta = op1-op2;
                    Console.WriteLine("El resultat de la resta es: " + resta);
                    break;

                case "*":
                    int producte = op1*op2;
                    Console.WriteLine("El resultat del producte es: " + producte);
                    break;

                case "/":
                    double divisio = op1/op2;
                    Console.WriteLine("El resultat de la divisio es: " + divisio);
                    break;

                case "^":
                    int potencia = op1^(op2);
                    Console.WriteLine("El resultat de la suma es: " + potencia);
                    break;

                case "%":
                    int modul = op1%op2;
                    Console.WriteLine("El resultat del modul es: " + modul);
                    break;

                default:
                    Console.WriteLine("Operacio introduida invalida.");
                    break;
            }

            Console.ReadKey();
       }   
    }
}
