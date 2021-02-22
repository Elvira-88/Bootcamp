Algoritmo ejercicio24
	Definir columnas, filas, tamaño_lado Como Entero;
	Escribir "Introduce el tamaño del cuadrado";
	Leer tamaño_lado;
	Para filas = 1 Hasta tamaño_lado Hacer
		Para columnas = 1 Hasta tamaño_lado Hacer
			Si filas == 1 O filas == tamaño_lado O columnas ==1 O columnas == tamaño_lado Entonces
				Escribir "* " Sin Saltar;
			SiNo Escribir "  " Sin Saltar;
			FinSi
		Fin Para
		Escribir " ";
	FinPara	 
		
FinAlgoritmo
