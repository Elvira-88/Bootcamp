Algoritmo ejercicio24
	Definir columnas, filas, tama�o_lado Como Entero;
	Escribir "Introduce el tama�o del cuadrado";
	Leer tama�o_lado;
	Para filas = 1 Hasta tama�o_lado Hacer
		Para columnas = 1 Hasta tama�o_lado Hacer
			Si filas == 1 O filas == tama�o_lado O columnas ==1 O columnas == tama�o_lado Entonces
				Escribir "* " Sin Saltar;
			SiNo Escribir "  " Sin Saltar;
			FinSi
		Fin Para
		Escribir " ";
	FinPara	 
		
FinAlgoritmo
