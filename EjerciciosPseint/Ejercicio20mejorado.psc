Algoritmo ejercicio20
	Definir contraseņa como caracter;
	Definir contador como entero;
	Escribir "Introduce una contraseņa";
	contador = 0;
	
	Repetir
		Leer contraseņa;
		contador = contador + 1;
		
		Si contraseņa <> "eureka" Y contador < 3 Entonces
			Escribir "Contraseņa incorrecta. Introducela de nuevo.";
		FinSi
		
	Hasta Que contraseņa == "eureka" O contador == 3;
	
	Si contraseņa == "eureka" Entonces
		Escribir "Contraseņa correcta";
	SiNo
		Escribir "Usuario bloqueado";
	Fin Si
FinAlgoritmo
