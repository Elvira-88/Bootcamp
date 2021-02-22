Algoritmo ejercicio34b
	//b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
	//o menor que la lectura.
	
	Definir num_aleatorio, num_introducido como entero;
	
	num_aleatorio = Aleatorio (1,100);
	
	Repetir
		Escribir "Introduce un número entre el 1 y el 100";
		Leer num_introducido;
		Si num_introducido < num_aleatorio Entonces
			Escribir "Incorrecto. El número secreto es mayor";
		FinSi
		Si num_introducido > num_aleatorio Entonces
			Escribir "Incorrecto. El número secreto es menor";
		Fin Si
	Mientras Que num_introducido <> num_aleatorio
	Escribir "Correcto. Has acertado";
	
FinAlgoritmo
