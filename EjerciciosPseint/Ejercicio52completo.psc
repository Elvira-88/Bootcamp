Algoritmo ejercicio52
	//Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número
	//introducido por teclado y nos debe decir si está incluido en el array y el índice de su primera
	//coincidencia. 
	
	Definir array, tamano, indice, N Como Entero;
	
	tamano = 10;
	Dimension array[tamano];
	
	//Rellenar e imprimir el array
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		array[indice] = Aleatorio(1,15);
		Escribir array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	Escribir "Introduce un número para comprobar si está incluido";
	Leer N;
	
	indice = 0;
	Mientras indice < tamano Y array[indice] <> N Hacer
		indice = indice + 1;
	FinMientras
	
	Si indice < tamano Entonces
		Escribir "La primera coincidencia de ", N, " es en el índice ", indice;
	SiNo
		Escribir N, "no está presente en el array";
	FinSi
	
FinAlgoritmo
