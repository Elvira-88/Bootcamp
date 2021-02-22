Algoritmo ejercicio51
	//Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
	//número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo). 
	
	Definir N, i Como Entero;
	Definir es_primo Como Logico;
	
	es_primo = Verdadero; //Va a ser primo hasta que se demuestre lo contrario
	
	Escribir "Introduce un número entero positivo para comprobar que es primo";
	Leer N;
	
	Para i = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod i == 0 Entonces
			es_primo = Falso;
		FinSi
	FinPara
	
	Si es_primo Entonces
		Escribir "El número ", N, " es primo";
	SiNo
		Escribir "El número ", N, " no es primo";
	FinSi
	
FinAlgoritmo
