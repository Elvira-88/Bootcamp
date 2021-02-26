Algoritmo Arrays
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 5;
	Dimension my_array[tamano];
	
	//my_array[0] = 5;
	//my_array[1] = 5;
	//my_array[2] = 5;
	//my_array[3] = 5;
	//my_array[4] = 5;
	
	//Inicializa array con todos los elementos a 5.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = indice + 1;
		Escribir "Indice ", indice, ": ", my_array[indice];
	Fin Para
	
	
	//Imprime el array completo.
//	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
//		Escribir my_array[indice], " " Sin saltar;
//	Fin Para
	Escribir "";
	FinAlgoritmo
