Algoritmo ejercicio35
	//Crear un array de n�meros donde le indicaremos el tama�o por teclado. Rellenar� cada elemento
	//con n�meros aleatorios entre 0 y 9. Posteriormente, mostrar� por pantalla el valor de cada posici�n
	//junto con su �ndice y finalmente, la suma de todos los valores.
	
	Definir my_array, tamano, indice, suma como entero;
	
	Escribir "Indica el tama�o del array";
	Leer tamano;
	
	Dimension my_array[tamano];
	
	//Rellenar nuestro array uno a uno de tamano introducido 
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = Aleatorio (0,9);
	Fin Para
	
	//Lo imprime elemento a elemento y acumula la suma
	suma = 0;
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir "Indice ", indice, ": " my_array[indice];
		suma = suma + my_array[indice];
	Fin Para
	Escribir "La suma de los elementos es ", suma;
FinAlgoritmo
