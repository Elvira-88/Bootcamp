Algoritmo ejercicio44
//Partir del ejercicio 2 y a�adir la siguiente funcionalidad:
//El usuario tendr� un men� num�rico en pantalla para poder elegir entre las operaciones a realizar.
//Si da una opci�n incorrecta (no existe), el programa avisar� al usuario y volver� a mostrar el men�.
//Har� esto hasta que el usuario elija la opci�n de salir del programa. Ejemplo de men� impreso por
//pantalla:
//Seleccione el n�mero de una de las siguientes opciones:
//1: Sumar
//2: Restar
//3: Multiplicar
//4: Dividir
//5: Salir del programa.
	
	Definir N1, N2, option Como Entero;
	
	Repetir
		Escribir "Introduce dos n�meros";
		Leer N1, N2;
		Escribir "Seleccione una de las siguientes opciones";
		Escribir "Si quieres sumar escribe 1";
		Escribir "Si quieres restar escribe 2";
		Escribir "Si quieres multiplicar escribe 3";
		Escribir "Si quieres dividir escribe 4";
		Escribir "Si quieres salir del programa escribe 5";
		Leer option;
		
		Segun option Hacer
			1:
				Escribir "La suma de ", N1, " m�s ", N2, " es ", N1 + N2;
			2:
				Escribir "La resta de ", N1, " menos ", N2, " es ", N1 - N2;
			3:
				Escribir "La multiplicaci�n de ", N1, " por ", N2, " es ", N1 * N2;
			4:
				Escribir "La divisi�n de ", N1, " entre ", N2, " es ", N1 / N2;
			5: 	
				Escribir "Gracias por usar esta calculadora. Hasta la pr�xima";
			De Otro Modo:
				Escribir "Ha seleccionado una opci�n incorrecta";
		Fin Segun
		
	Mientras Que option <> 5;
			
FinAlgoritmo
