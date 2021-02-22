Algoritmo Ejercicio12
	Definir T, N como entero;
	Escribir "Introduce el número de sonidos por minuto";
	Leer N;
	Si N <= 0 Entonces
		Escribir "error";
	SiNo
		T = N / 4 + 40;
		Escribir "La temperatura es de ", T, "ºC";
	Fin Si
FinAlgoritmo
