Algoritmo ejercicio30
	Definir n_filas, filas, columnas, contador como entero;
	Escribir "Pon el número de filas";
	Leer n_filas;
	Escribir "a)";
	Para filas = 1 Hasta n_filas Con Paso 1 Hacer
		Para columnas = 1 Hasta filas Con Paso 1 Hacer
			Escribir columnas Sin Saltar;
		FinPara
		Escribir "";
	Fin Para
	Escribir "b)";
	Para filas = 1 Hasta n_filas Con Paso 1 Hacer
		Para columnas = 1 Hasta filas Con Paso 1 Hacer
			Escribir filas Sin Saltar;
		FinPara
		Escribir "";
	Fin Para
	Escribir "c)";
	contador = 1;
	Para filas = 1 Hasta n_filas Con Paso 1 Hacer
		Para columnas = 1 Hasta filas Con Paso 1 Hacer
			Escribir contador, " " Sin Saltar;
			contador = contador + 1;
		FinPara
		Escribir "";
	FinPara
FinAlgoritmo
