Algoritmo ejercicio19
	Definir N, suma, contador como entero;
	Leer N;	
	suma = 0;
	contador = 0;
	Mientras N <> -1 Hacer
		suma = suma + N;
		Escribir "Introduce otro número";
		Leer N;
		contador = contador + 1;
	Fin Mientras
	Escribir suma/contador;
	
FinAlgoritmo
