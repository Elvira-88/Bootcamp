Algoritmo ejercicio34b
	//b) Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es mayor
	//o menor que la lectura.
	
	Definir num_aleatorio, num_introducido como entero;
	
	num_aleatorio = Aleatorio (1,100);
	
	Repetir
		Escribir "Introduce un n�mero entre el 1 y el 100";
		Leer num_introducido;
		Si num_introducido < num_aleatorio Entonces
			Escribir "Incorrecto. El n�mero secreto es mayor";
		FinSi
		Si num_introducido > num_aleatorio Entonces
			Escribir "Incorrecto. El n�mero secreto es menor";
		Fin Si
	Mientras Que num_introducido <> num_aleatorio
	Escribir "Correcto. Has acertado";
	
FinAlgoritmo
