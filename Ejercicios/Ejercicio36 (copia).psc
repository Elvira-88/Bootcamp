Algoritmo ejercicio36
	
	//Crear dos arrays de n�meros enteros de longitud 10 rellenos con n�meros aleatorios del 1 al 20.
	//Imprimir �ndice y el resultado de la multiplicaci�n de ambos elementos de los arrays del �ndice de
	//cada iteraci�n. Cuidado con los elementos del array sin inicializar.
	
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
