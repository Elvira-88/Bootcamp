Algoritmo ejercicio20
	Definir contraseña como caracter;
	Definir contador como entero;
	Escribir "Introduce una contraseña";
	contador = 0;
	
	Repetir
		Leer contraseña;
		contador = contador + 1;
		
		Si contraseña <> "eureka" Y contador < 3 Entonces
			Escribir "Contraseña incorrecta. Introducela de nuevo.";
		FinSi
		
	Hasta Que contraseña == "eureka" O contador == 3;
	
	Si contraseña == "eureka" Entonces
		Escribir "Contraseña correcta";
	SiNo
		Escribir "Usuario bloqueado";
	Fin Si
FinAlgoritmo
