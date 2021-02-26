Algoritmo ejercicio45
	//Teniendo un vector con los números naturales que queramos, 
	//meter en otro de la misma longitud aquellos que sean pares y mayores de 25
	//Despues, mostrar el vector de origen completo y el de destino solo los números introducidos
	
	Definir array1, array2, indice, tamano, indice_array_2 Como Entero;
	tamano = 10;
	Dimension array1[tamano], array2[tamano];
	
	indice_array_2 = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		//Rellenar e imprimir el primer array
		array1[indice] = Aleatorio(1,50);
		Escribir array1[indice], " " Sin Saltar;
		
		//Rellenar el segundo array
		Si array1[indice] mod 2 == 0 Y array1[indice] > 25 Entonces
			array2[indice_array_2] = array1[indice];
			indice_array_2 = indice_array_2 + 1;
		FinSi
	Fin Para
	Escribir "";
	
	Si indice_array_2 < 1 Entonces
		Escribir "El segundo array está vacío.";
	SiNo
		Para indice = 0 Hasta indice_array_2 - 1 Hacer
			Escribir array2[indice], " " Sin Saltar;
		FinPara
		Escribir "";
	FinSi
	
FinAlgoritmo
