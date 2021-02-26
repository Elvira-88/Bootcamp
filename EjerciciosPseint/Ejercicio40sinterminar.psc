Algoritmo ejercicio40
	//Generar un array de 20 elementos con números aleatorios no repetidos entre sí
	
	Definir array, indice, tamano Como Entero;
	Definir son_iguales Como Logico;
	
	tamano = 20;
	Dimension array[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		//Rellenar e imprimir el primer array
		array[indice] = Aleatorio(1,100);
		Escribir array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	
	
FinAlgoritmo
