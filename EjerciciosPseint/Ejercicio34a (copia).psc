Algoritmo ejercicio34a
	//a) Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
	
	Definir num_aleatorio, num_introducido como entero;
	
	num_aleatorio = Aleatorio (1,10);
	
	Repetir
		Escribir "Introduce un número entre el 1 y el 10";
		Leer num_introducido;
	Mientras Que num_introducido <> num_aleatorio
	
	//b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
	//o menor que la lectura.
	
	Definir num_aleatorio, num_introducido como entero;
	
	num_aleatorio = Aleatorio (1,100);
	
	Repetir
		Escribir "Introduce un número entre el 1 y el 10";
		Leer num_introducido;
	Mientras Que num_introducido <> num_aleatorio
	Si num_introducido < num_aleatorio Entonces
		Escribir "Incorrecto. El número secreto es mayor";
	SiNo
		Escribir "Incorrecto. El número secreto es menor";
	Fin Si
FinAlgoritmo
