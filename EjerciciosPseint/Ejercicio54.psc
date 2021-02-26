Funcion  resultado <- es_primo (N)
	
	Definir indice Como Entero;
	Definir resultado Como Logico;
	
	resultado = Verdadero;
	
	Para indice = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod indice == 0 Entonces
			resultado = Falso;
		FinSi
	FinPara
	
Fin Funcion

//Dise�ar un algoritmo que lea el n�mero N e imprima y cuente todos los n�meros primos menores
//que N.

Algoritmo ejercicio54
	
	Definir N, i, contador_primos Como Entero;
		
	Escribir "Introduce un n�mero";
	Leer N;
	
	contador_primos = 0;
	
	Para i = 2 Hasta N Con Paso 1 Hacer
		Si es_primo(i) Entonces
			Escribir i, " es primo";
			contador_primos = contador_primos + 1;
		FinSi
	FinPara
	Escribir "Antes de ", N, " (incluyendo N) hay ", contador_primos, " n�meros primos";
	
FinAlgoritmo
