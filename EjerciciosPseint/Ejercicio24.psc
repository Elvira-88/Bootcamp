Algoritmo sin_titulo
	Definir teor�a, pr�ctica, problemas, nota_final como real;
	Definir nombre_alumno como caracter;
	
	Escribir "Introduce tu nombre";
	Leer nombre_alumno;
	
	Mientras nombre_alumno <> "" Hacer
		Escribir "Indica tus tres notas";
		Leer teor�a, pr�ctica, problemas;
		
		Si (teor�a >= 0 y teor�a <= 10) Y (pr�ctica >= 0 y pr�ctica <= 10) y (problemas >= 0 y problemas <= 10) Entonces
			nota_final = teor�a * 0.4 + pr�ctica * 0.1 + problemas * 0.5 ;
			Escribir "Tu nota final es: ", nota_final;
		SiNo
			Escribir "Las notas introducidas no son correctas";
		Fin Si
		
		Escribir "Introduce tu nombre";
		Leer nombre_alumno;
	Fin Mientras
	
	Escribir "Fin del proceso";
FinAlgoritmo
