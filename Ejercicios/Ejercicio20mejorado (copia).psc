Algoritmo ejercicio20
	Definir contrase�a como caracter;
	Definir contador como entero;
	Escribir "Introduce una contrase�a";
	contador = 0;
	
	Repetir
		Leer contrase�a;
		contador = contador + 1;
		
		Si contrase�a <> "eureka" Y contador < 3 Entonces
			Escribir "Contrase�a incorrecta. Introducela de nuevo.";
		FinSi
		
	Hasta Que contrase�a == "eureka" O contador == 3;
	
	Si contrase�a == "eureka" Entonces
		Escribir "Contrase�a correcta";
	SiNo
		Escribir "Usuario bloqueado";
	Fin Si
FinAlgoritmo
