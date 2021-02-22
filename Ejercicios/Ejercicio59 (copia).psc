Algoritmo ejercicio59
	//Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
	//número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
	//media máxima y su centro de pertenencia.
	
	Definir curso, centro, alumno, n_centros, n_cursos, n_alumnos, max_centro Como Entero;
	Definir notas, suma, media, max Como real;
	
	n_cursos = 4;
	n_alumnos = 10;
	n_centros = 5;
		
	Dimension notas[n_centros, n_cursos, n_alumnos];
	
	Para centro = 0 Hasta n_centros - 1 Con Paso 1 Hacer
		Escribir "Centro ", centro;
		
		Para curso = 0 Hasta n_cursos - 1 Con Paso 1 Hacer
			Escribir "Curso ", curso, ":  " Sin Saltar;
			
			suma = 0;
			
			Para alumno = 0 Hasta n_alumnos - 1 Con Paso 1 Hacer
				notas[centro, curso, alumno] = Aleatorio(1,10) - (Aleatorio(0,100) / 100);
				Escribir , notas[centro, curso, alumno] " " Sin saltar;
				
				suma = suma + notas[centro, curso, alumno];
				
			FinPara
			
			media = suma /n_alumnos;
			
			Escribir "  - Media del curso: ", media Sin Saltar;
			
			Si (centro == 0 Y curso == 0) O media > max Entonces
				max = media;
				max_centro = centro;
			FinSi
			
			Escribir "";
		FinPara
		Escribir "";
	FinPara
	
	Escribir "La media más alta es ", max, " del centro ", max_centro;
	
FinAlgoritmo
