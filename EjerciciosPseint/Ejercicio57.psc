Algoritmo ejercicio57
//Dada un matriz cuadrada A (array de 2 dimensiones con el mismo número de columnas que de
//filas, por ejemplo: 3) construir un algoritmo que permita determinar si dicha matriz es simétrica. Se
//considera que una matriz es simétrica si A[i,j] = A[j,i] para todos los elementos i,j de la matriz.
	
	Definir matriz, fila, columna, tamano Como Entero;
	Definir es_simetrica Como Logico;
	
	tamano = 3;
	
	Dimension matriz[tamano, tamano];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	//Imprimimos la matriz
	Para fila = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Para columna = 0 Hasta tamano - 1 Con Paso 1 Hacer
			Escribir matriz[fila,columna], " " Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	es_simetrica = Verdadero;
	
	Para fila = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Para columna = 0 Hasta tamano - 1 Con Paso 1 Hacer
			Si matriz[fila,columna] <> matriz[columna,fila] Entonces
				es_simetrica = Falso;
			FinSi
		FinPara
	FinPara	
	
	Si es_simetrica Entonces
		Escribir "Es simetrica";
	SiNo
		Escribir "No es simetrica";
	FinSi
	
FinAlgoritmo
