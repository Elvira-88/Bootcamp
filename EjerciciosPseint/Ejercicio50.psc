Algoritmo ejercicio50
	//Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
	//introduciremos por teclado.
	
	Definir letra, frase Como Caracter;
	Definir indice, contador Como Entero;
	
	contador = 0;
	
	Escribir "Introduce una frase";
	Leer frase;
	
	Escribir "Introduce una letra";
	Leer letra;
	
	Para indice = 0 Hasta Longitud(frase) - 1 Con Paso 1 Hacer
		Si subcadena(frase, indice, indice) == letra Entonces
			contador = contador + 1;
		FinSi
	FinPara
	
	Escribir "La letra ", letra, " aparece ", contador, " veces.";
	
FinAlgoritmo
