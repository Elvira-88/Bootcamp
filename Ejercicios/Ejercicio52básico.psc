Algoritmo ejercicio52
	//Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número
	//introducido por teclado y nos debe decir si está incluido en el array y el índice de su primera
	//coincidencia. 
	
	Definir array, tamano, indice, N, contador Como Entero;
	
	contador = 0;
	tamano = 10;
	Dimension array[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		//Rellenar e imprimir el primer array
		array[indice] = Aleatorio(1,15);
		Escribir array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	Escribir "Introduce un número para comprobar si está incluido";
	Leer N;
	
	Para indice = 0 hasta tamano - 1 Con Paso 1 Hacer
		Si N == array[indice]
			Escribir "El número ha aparecido en el índice ", indice;
			contador = contador + 1;
		FinSi
	FinPara
	
	Escribir "El número ", N, " ha aparecido ", contador, " veces";
	
FinAlgoritmo
