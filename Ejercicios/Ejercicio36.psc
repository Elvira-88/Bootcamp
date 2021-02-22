Algoritmo ejercicio36
	
	//Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20.
	//Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
	//cada iteración. Cuidado con los elementos del array sin inicializar.
	
	Definir my_array1, my_array2, tamano, indice, multiplicacion como entero;
	tamano = 10;
	Dimension my_array1[tamano], my_array2[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array1[indice] = Aleatorio (1,20);
		my_array2[indice] = Aleatorio (1,20);
		
		multiplicacion = my_array1[indice] * my_array2[indice];
		
		Escribir " Indice ", indice, ": ", my_array1[indice], " * ",my_array1[indice], " = ", multiplicacion;
	Fin Para
	
	
	
FinAlgoritmo
