Algoritmo sin_titulo
	Definir teoría, práctica, problemas, nota_final como real;
	Definir nombre_alumno como caracter;
	
	Escribir "Introduce tu nombre";
	Leer nombre_alumno;
	
	Mientras nombre_alumno <> "" Hacer
		Escribir "Indica tus tres notas";
		Leer teoría, práctica, problemas;
		
		Si (teoría >= 0 y teoría <= 10) Y (práctica >= 0 y práctica <= 10) y (problemas >= 0 y problemas <= 10) Entonces
			nota_final = teoría * 0.4 + práctica * 0.1 + problemas * 0.5 ;
			Escribir "Tu nota final es: ", nota_final;
		SiNo
			Escribir "Las notas introducidas no son correctas";
		Fin Si
		
		Escribir "Introduce tu nombre";
		Leer nombre_alumno;
	Fin Mientras
	
	Escribir "Fin del proceso";
FinAlgoritmo
