Algoritmo ejercicio51
	//Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
	//n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo). 
	
	Definir N, i Como Entero;
	Definir es_primo Como Logico;
	
	es_primo = Verdadero; //Va a ser primo hasta que se demuestre lo contrario
	
	Escribir "Introduce un n�mero entero positivo para comprobar que es primo";
	Leer N;
	
	Para i = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod i == 0 Entonces
			es_primo = Falso;
		FinSi
	FinPara
	
	Si es_primo Entonces
		Escribir "El n�mero ", N, " es primo";
	SiNo
		Escribir "El n�mero ", N, " no es primo";
	FinSi
	
FinAlgoritmo
