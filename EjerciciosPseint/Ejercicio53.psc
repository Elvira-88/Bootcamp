Funcion resultado <- promedio ( array, tamano )
	
	Definir suma, indice, resultado Como Entero;
	
	suma = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		suma = suma + array[indice];
	FinPara
	
	resultado = suma / tamano;
	
Fin Funcion

//Usar una función para calcular el promedio recibiendo un array y su longitud. En el algoritmo
//principal, leer la cantidad de datos que introducirá el usuario y posteriormente los propios datos.
//Escribir el resultado de su promedio.
	

Algoritmo ejercicio53
		
	Definir array, tamano, indice Como Entero;
	
	Escribir "Introduce el tamaño del array";
	Leer tamano;
	Dimension array[tamano];
		
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir "Introduce un número";
		Leer array[indice];
	FinPara
	
	Escribir "El promedio es ", promedio(array, tamano);	
	
FinAlgoritmo
