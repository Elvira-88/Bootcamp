Algoritmo ejercicio20
	Definir contrase�a como caracter;
	Definir contador como entero;
	contador = 0;
	Repetir
		Escribir "Introduzca su contrase�a";
		Leer contrase�a;
		contador = contador + 1;
	Hasta Que contrase�a == "eureka" o contador == 3;
	Si contrase�a == "eureka" Entonces
		Escribir "Contrase�a correcta";
	SiNo
		Escribir "Contrase�a incorrecta";
	Fin Si
FinAlgoritmo
