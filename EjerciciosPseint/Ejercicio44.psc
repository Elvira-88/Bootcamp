Algoritmo ejercicio44
//Partir del ejercicio 2 y añadir la siguiente funcionalidad:
//El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
//Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
//Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
//pantalla:
//Seleccione el número de una de las siguientes opciones:
//1: Sumar
//2: Restar
//3: Multiplicar
//4: Dividir
//5: Salir del programa.
	
	Definir N1, N2, option Como Entero;
	
	Repetir
		Escribir "Introduce dos números";
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
				Escribir "La suma de ", N1, " más ", N2, " es ", N1 + N2;
			2:
				Escribir "La resta de ", N1, " menos ", N2, " es ", N1 - N2;
			3:
				Escribir "La multiplicación de ", N1, " por ", N2, " es ", N1 * N2;
			4:
				Escribir "La división de ", N1, " entre ", N2, " es ", N1 / N2;
			5: 	
				Escribir "Gracias por usar esta calculadora. Hasta la próxima";
			De Otro Modo:
				Escribir "Ha seleccionado una opción incorrecta";
		Fin Segun
		
	Mientras Que option <> 5;
			
FinAlgoritmo
