Algoritmo ejercicio22
	Definir num, contador1, contador2, max, num1, num2 como entero;
	max = 100;
	num = 0;
	contador1 = 0;
	contador2 = 0;
	num1 = 2;
	num2 = 3;
	Repetir
		num = num + 1;
		Si num mod num1 == 0 Entonces
			Escribir "Múltiplo de ", num1 " : " num;
			contador1 = contador1 + 1;
		FinSi
		Si num mod num2 == 0 Entonces
			Escribir "Múltiplo de ", num2, " : ", num;
			contador2 = contador2 + 1;
		FinSi
	Hasta Que num == max;
	Escribir "Total múltiplos de ", num1 " : ", contador1;
	Escribir "Total múltiplos de ", num2 " : ", contador2;
FinAlgoritmo
