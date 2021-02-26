Algoritmo Ejercicio10
		Definir sueldo,categoría como entero;
		Escribir "Introduce tu sueldo.";
		Leer sueldo;
		Escribir "Introduce tu categoría.";
		Leer categoría;
	Si categoría == 1 Entonces
		Escribir "Categoría ", categoría, ". Tu nuevo sueldo es: ", sueldo * 1.15;
	Fin Si
	Si categoría == 2 Entonces
		Escribir "Categoría ", categoría, ". Tu nuevo sueldo es: ", sueldo * 1.10;
	Fin Si
	Si categoría == 3 Entonces
		Escribir "Categoría ", categoría, ". Tu nuevo sueldo es: ", sueldo * 1.06;
	Fin Si
	Si categoría == 4 Entonces
		Escribir "Categoría ", categoría, ". Tu nuevo sueldo es: ", sueldo * 1.03;
	Fin Si
FinAlgoritmo
