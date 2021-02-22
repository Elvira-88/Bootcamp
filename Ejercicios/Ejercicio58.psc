Algoritmo ejercicio58
//Crear un array de 3 páginas, 4 filas y 5 columnas donde el primer elemento valga 1, el segundo 2,
//el tercero 3 y así sucesivamente, e imprimirla.
	
	Definir array, filas, columnas, paginas, tamano_filas, tamano_columnas, tamano_paginas, contador Como Entero;
	
	tamano_filas = 4;
	tamano_columnas = 5;
	tamano_paginas = 3;
	
	contador = 0;
	
	Dimension array[tamano_paginas, tamano_filas, tamano_columnas];	
	
	Para paginas = 0 Hasta tamano_paginas - 1 Con Paso 1 Hacer
		Escribir "Página ", paginas;
		Para filas = 0 Hasta tamano_filas - 1 Con Paso 1 Hacer
			Escribir "Fila ", filas, ": " Sin Saltar;
			Para columnas = 0 Hasta tamano_columnas - 1 Con Paso 1 Hacer
				array[paginas, filas, columnas] = contador;
				Escribir array[paginas, filas, columnas], " " Sin saltar;
				contador = contador + 1;
			FinPara
			Escribir "";
		FinPara
		Escribir "";
	FinPara
FinAlgoritmo
