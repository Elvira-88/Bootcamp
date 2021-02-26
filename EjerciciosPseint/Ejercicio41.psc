Algoritmo ejercicio41
//Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
//a) Obtenga cuántos números son mayores que 0.
//b) Calcule el promedio de los números positivos.
//c) Obtenga el promedio de todos los números.

	Definir my_array, tamano, indice, contador, suma_positivos, suma_total Como Entero;
	Definir media_positivos, media_total Como Real;
	Escribir "Introduce el tamaño del array";
	Leer tamano;
	Dimension my_array[tamano];
	
	contador = 0;
	suma_positivos = 0;
	suma_total = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = Aleatorio (-5,15);
		Escribir my_array[indice];
		
		Si my_array[indice] > 0 Entonces
			contador = contador + 1;
			suma_positivos = suma_positivos + my_array[indice];
		Fin Si
		
		suma_total = my_array[indice] + suma_total;
	Fin Para
	
	media_positivos = suma_positivos / contador;
	media_total = suma_total / tamano;
	
	Escribir "Los números mayores que 0 son: ", contador;
	Escribir "La media de los números positivos es: ", media_positivos;
	Escribir "La media de todos los números es: ", media_total;	
	
FinAlgoritmo
