Algoritmo ejercicio20
	Definir contraseņa como caracter;
	Definir contador como entero;
	contador = 0;
	Repetir
		Escribir "Introduzca su contraseņa";
		Leer contraseņa;
		contador = contador + 1;
	Hasta Que contraseņa == "eureka" o contador == 3;
	Si contraseņa == "eureka" Entonces
		Escribir "Contraseņa correcta";
	SiNo
		Escribir "Contraseņa incorrecta";
	Fin Si
FinAlgoritmo
