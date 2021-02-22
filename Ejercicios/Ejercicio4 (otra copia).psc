Algoritmo Ejercicio3
	Definir num1 Como Entero;
	Definir num2 Como Entero;
	Definir num3 Como Entero;
	Leer num1;
	Leer num2;
	Leer num3;
	Si num1>num2 Y num1>num3 Entonces
		Escribir "num1 es el mayor";
	SiNo
		Si num2>num1 y num2>num3 Entonces
			Escribir "num2 es el mayor";
		SiNo
			Escribir "num3 es el mayor";
		FinSi
	FinSi
FinAlgoritmo
