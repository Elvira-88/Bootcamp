Algoritmo ejercicio48
	//Almacenar una lista de nombres en un array y luego ordenarlos alfab�ticamente. Para la entrada de
	//datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresar�n.
	//Pista: Los datos alfanum�ricos (strings) tambi�n se pueden comparar con los operadores < y >.
	
	Definir nombre, nombres, aux Como Caracter; //Nombres es el array(la lista de nombres)
	Definir tamano, i, j, contador Como Entero;
	
	tamano = 1000;
	Dimension nombres[tamano];
	
	//Relleno my array de nombres
	contador = 0;
	Escribir "Introduce un nombre";
	Leer nombre;
	
	Mientras nombre <> "" Hacer
		nombres[contador] = nombre;
		contador = contador + 1;
		
		Escribir "Introduce otro nombre o d�jalo vac�o para acabar";
		Leer nombre;
		
	Fin Mientras
	
	//Ordeno el array con el m�todo de la burbuja
	Para i = 0 Hasta contador - 2 Con Paso 1 Hacer //Repite el ordenamiento para todos los nombres
		Para j = 0 Hasta contador - 2 Con Paso 1 Hacer //Ordena un �nico nombre
			Si nombres[j] > nombres[j+1] Entonces
				aux = nombres[j];
				nombres[j] = nombres[j+1];
				nombres[j+1] = aux;
			FinSi
		FinPara
	FinPara
	
	Para i = 0 hasta contador - 1 Con Paso 1 Hacer
		Escribir nombres[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
FinAlgoritmo
