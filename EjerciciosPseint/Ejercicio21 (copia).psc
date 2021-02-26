Algoritmo ejercicio21
	Definir N, contador, suma, máximo, mínimo como entero;
	Definir media como real;
	Leer N;
	contador = 0;
	suma = 0;
	Mientras N <> 0 Hacer
		Si contador == 0 O N > máximo Entonces
			Escribir "El número máximo es ", N;
			máximo = N;
		Fin Si
		Si contador == 0 O N < mínimo Entonces
			Escribir "El número mínimo es ", N;
			mínimo = N;
		Fin Si
		contador = contador + 1;
		suma = suma + N;
		Escribir "Introduzca otro número";
		Leer N;
	Fin Mientras
	Si contador == 0 Entonces
		Escribir "No has introducido ningún número";
	SiNo
		media = suma / contador;
		Escribir "La media es ", media;
		Escribir "El máximo es ", máximo, " y el mínimo es ", mínimo;
	FinSi
FinAlgoritmo
