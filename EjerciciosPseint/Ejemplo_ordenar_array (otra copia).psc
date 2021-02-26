Algoritmo ejemplo_ordenar_array
	
	Definir array, tamano, aux, indice, i, j Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//para verlo por consola
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	Fin Para
	Escribir "";
	
	Para i = 0 Hasta tamano - 2 Con Paso 1 Hacer
		//Envía el número mayor al final
		Para j = 0 Hasta tamano - 2
			Si array[j] > array[j+1] Entonces
		        aux = array[j];
			   array[j] = array[j+1];
			   array[j+1] = aux;
			FinSi
		FinPara
	FinPara
	
	//para verlo por consola
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	Fin Para
	Escribir "";
	
FinAlgoritmo
