Algoritmo ejercicio52
	//Rellenar un array con 10 n�meros aleatorios entre 1 y 15. Posteriormente, buscar un n�mero
	//introducido por teclado y nos debe decir si est� incluido en el array y el �ndice de su primera
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
	
	Escribir "Introduce un n�mero para comprobar si est� incluido";
	Leer N;
	
	Para indice = 0 hasta tamano - 1 Con Paso 1 Hacer
		Si N == array[indice]
			Escribir "El n�mero ha aparecido en el �ndice ", indice;
			contador = contador + 1;
		FinSi
	FinPara
	
	Escribir "El n�mero ", N, " ha aparecido ", contador, " veces";
	
FinAlgoritmo
