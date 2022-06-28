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
            string opcio;
            string missatge;
            bool condicio = false;

            bool palindromReturn;

            string camelCaseReturn;

            Console.Write("Escull una opció. Pitja 1 per detectar un palíndrom. Pitja 2 per implementar Camel Case a un missatge.");

            while (condicio == false)
            {
                opcio = Console.ReadLine();

                if (opcio == "1")
                {
                    Console.WriteLine("Has escollit detectar un palindrom. Introdueix el missatge: ");
                    missatge = Console.ReadLine();

                    palindromReturn = Palindrom(missatge);

                    if (palindromReturn == true)
                        Console.WriteLine("El missatge si es un palindrom.");

                    if (palindromReturn == false)
                        Console.WriteLine("El missatge no es un palindrom.");

                    condicio = true;

                }

                else if(opcio == "2")
                {
                    Console.WriteLine("Has escollit aplicar Camel Case. Introdueix el missatge: ");
                    missatge = Console.ReadLine();

                    camelCaseReturn = CamelCase(missatge);

                    Console.WriteLine("El missatge resultant es: " + camelCaseReturn);

                    condicio = true;
                }

                else
                    Console.WriteLine("L'opcio introduida no és correcte.");
            }

            Console.Write("Apreta qualsevol tecla per sortir.");
            Console.ReadLine();
        }

        static bool Palindrom(string missatge)
        {
            char[] LletraMin = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
            char[] LletraMaj = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };


            bool palindrom = true;

            int Llargada = missatge.Length;

            char[] Missatge;
            Missatge = missatge.ToCharArray();

            for (int i = 0; i <= Llargada - 1; i++)
            {

                for (int j = 0; j <= LletraMaj.Length - 1; j++)
                {
                    if (Missatge[i] == LletraMaj[j])
                        Missatge[i] = LletraMin[j];

                    if (Missatge[Llargada - 1] == LletraMaj[j])
                        Missatge[Llargada - 1] = LletraMin[j];
                }


                if (Missatge[i] == Missatge[Llargada - 1])

                    Llargada = Llargada - 1;


                else
                {

                    palindrom = false;

                    break;
                }
            }

            if (palindrom == true)
                return true;

            else
                return false;
        }

        static string CamelCase(string missatge)
        {

            char[] LletraMin = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
            char[] LletraMaj = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

            string exemple = "a b";
            char[] EXEMPLE;
            EXEMPLE = exemple.ToCharArray();
            char Espai = EXEMPLE[1];

            bool EspaiActiu = false;
            int i_array = 0;

            char[] Missatge;
            Missatge = missatge.ToCharArray();

            char [] ArrayChar = new char [Missatge.Length];

            for (int j = 1; j <= Missatge.Length; j++)    
            {
                if (Missatge[j - 1] != Espai)
                {
                    if (EspaiActiu == false)
                    {
                        for (int k = 1; k <= LletraMin.Length; k++)   
                        {
                            if (Missatge[j - 1] == LletraMin[k - 1])
                                ArrayChar[i_array] = Missatge[j - 1];

                            else if (Missatge[j - 1] == LletraMaj[k - 1])
                                ArrayChar[i_array] = LletraMin[k - 1];
                        }

                        i_array = i_array + 1;
                    }

                    else if (EspaiActiu == true)        
                    {
                        for (int k = 1; k <= LletraMaj.Length; k++)
                        {
                            if (Missatge[j - 1] == LletraMaj[k - 1])
                                ArrayChar[i_array] = Missatge[j - 1];

                            else if (Missatge[j - 1] == LletraMin[k - 1])
                                ArrayChar[i_array] = LletraMaj[k - 1];
                        }

                        i_array = i_array + 1;
                    }

                    EspaiActiu = false;
                }

                else if (Missatge[j-1] == Espai)
                    EspaiActiu = true;                 

            }

            string resultat = new string (ArrayChar);

            return resultat;
        }
    }
}
