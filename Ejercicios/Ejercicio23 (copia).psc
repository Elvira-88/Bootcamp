Algoritmo ejercicio23
	Definir d�a, mes, a�o como entero;
	Escribir "Introduce un d�a";
	Leer d�a;
	Escribir "Introduce el mes";
	Leer mes;
	Escribir "Introduce un a�o";
	Leer a�o;
	Si (d�a >= 1 Y d�a <= 31) Y (mes >= 1 Y mes<= 12) Y (a�o > 0) Entonces
		Escribir d�a," de " sin saltar;
		Segun mes Hacer
			1:
				Escribir "enero" sin saltar;
			2:
				Escribir "febrero" sin saltar;
			3:
				Escribir "marzo" sin saltar;
			4:
				Escribir "abril" sin saltar;
			5:
				Escribir "mayo" sin saltar;
			6:
				Escribir "junio" sin saltar;
			7:
				Escribir "julio" sin saltar;
			8:
				Escribir "agosto" sin saltar;
			9: 
				Escribir "septiembre" sin saltar;
			10:
				Escribir "octubre" sin saltar;
			11:
				Escribir "noviembre" sin saltar;
			12:
				Escribir "diciembre" sin saltar;
		Fin Segun
		Escribir  " de ", a�o;
	SiNo
		Escribir "Error en el a�o";
	Fin Si
FinAlgoritmo
