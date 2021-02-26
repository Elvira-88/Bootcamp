Algoritmo ejercicio20
	Definir contraseña como caracter;
	Definir contador como entero;
	contador = 0;
	Repetir
		Escribir "Introduzca su contraseña";
		Leer contraseña;
		contador = contador + 1;
	Hasta Que contraseña == "eureka" o contador == 3;
	Si contraseña == "eureka" Entonces
		Escribir "Contraseña correcta";
	SiNo
		Escribir "Contraseña incorrecta";
	Fin Si
FinAlgoritmo
