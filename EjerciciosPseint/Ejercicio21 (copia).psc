Algoritmo ejercicio21
	Definir N, contador, suma, m�ximo, m�nimo como entero;
	Definir media como real;
	Leer N;
	contador = 0;
	suma = 0;
	Mientras N <> 0 Hacer
		Si contador == 0 O N > m�ximo Entonces
			Escribir "El n�mero m�ximo es ", N;
			m�ximo = N;
		Fin Si
		Si contador == 0 O N < m�nimo Entonces
			Escribir "El n�mero m�nimo es ", N;
			m�nimo = N;
		Fin Si
		contador = contador + 1;
		suma = suma + N;
		Escribir "Introduzca otro n�mero";
		Leer N;
	Fin Mientras
	Si contador == 0 Entonces
		Escribir "No has introducido ning�n n�mero";
	SiNo
		media = suma / contador;
		Escribir "La media es ", media;
		Escribir "El m�ximo es ", m�ximo, " y el m�nimo es ", m�nimo;
	FinSi
FinAlgoritmo
