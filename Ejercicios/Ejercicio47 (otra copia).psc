Algoritmo ejercicio47
//Dados un array de 5 elementos con números aleatorios del 1 al 100. 
//Imprimir el estado inicial del array,
//ordenarlo de forma ascendente y volver a imprimir el nuevo estado.
	
	Definir array, indice, tamano, aux, indiceX Como Entero;
	
	tamano = 5;
	Dimension array[tamano];
	
	//Inicializamos e imprimimos el estado inicial
	Escribir "Estado inicial";
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		//Rellenar e imprimir el primer array
		array[indice] = Aleatorio(1,100);
		Escribir array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	//Ordenamos (Sin acabar)
	Para indiceX = 0 Hasta tamano - 2 Hacer
		Para indice = 0 Hasta tamano - 2 Hacer
		     Si array[indice] < array[indice+1] Entonces
			     aux = array[indice];
			     array[indice] = array[indice+1];
			     array[indice+1] = aux;
		     FinSi
	     FinPara
	FinPara
		 
	//Imrpimimos estado FinAlgoritmo
	Escribir "Estado final";
	Para indice = 0 Hasta tamano - 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	FinPara
	
	
FinAlgoritmo
