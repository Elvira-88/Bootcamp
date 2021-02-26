Algoritmo ejercicio22
	Definir num, contador_mult_2, contador_mult_3 como entero;
	num = 0;
	contador_mult_2 = 0;
	contador_mult_3 = 0;
	Repetir
		num = num + 1;
		Si num mod 2 == 0 Entonces
			Escribir "Múltiplo de 2 ",num;
			contador_mult_2 = contador_mult_2 + 1;
		FinSi
		Si num mod 3 == 0 Entonces
			Escribir "Múltiplo de 3 ", num;
			contador_mult_3 = contador_mult_3 + 1;
		FinSi
	Hasta Que num == 100;
	Escribir "Total múltiplos de 2 ", contador_mult_2;
	Escribir "Total múltiplos de 3 ", contador_mult_3;
FinAlgoritmo
