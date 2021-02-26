Algoritmo ejercicio56
	//Leer y guardar en una matriz las notas de los alumnos de un colegio en funci�n del n�mero de
	//cursos (filas) y del n�mero de alumnos por curso (columnas). El m�ximo de alumnos ser� 5 para
	//cada uno de tres cursos.
	
	Definir notas, cursos, alumnos, n_cursos, n_alumnos Como Entero;
	//notas es la matriz(el array), y cursos y alumnos los �ndices
	n_cursos = 3;
	n_alumnos = 5;
	
	Dimension notas[n_cursos, n_alumnos];
	
	//Generar y rellenar el array 
	Para cursos = 0 Hasta n_cursos - 1 Con Paso 1 Hacer
		Para alumnos = 0 Hasta n_alumnos - 1 Con Paso 1 Hacer
			Escribir "Introduce la nota del alumno ", alumnos, " del curso ", cursos;
			Leer notas[cursos, alumnos];
		FinPara
	FinPara
	
	//Imprimirlo
	Para cursos = 0 Hasta n_cursos - 1 Con Paso 1 Hacer
		Escribir "Curso ", cursos, ":" Sin Saltar;
		Para alumnos = 0 hasta n_alumnos - 1 Con Paso 1 Hacer
			Escribir notas[cursos,alumnos], " " Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
FinAlgoritmo
