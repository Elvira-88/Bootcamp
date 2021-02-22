Algoritmo ejercicio32
	Definir n_bocadillo, n_refresco, n_cerveza, n_pan como entero;
	Definir cuenta como real;
	Escribir "¿Cuántos bocadillos has consumido?";
	Leer n_bocadillo;
	Escribir "¿Cuántos refrescos has consumido?";
	Leer n_refresco;
	Escribir "¿Cuántas cervezas has consumido?";
	Leer n_cerveza;
	Escribir "¿Cuánto pan has consumido?";
	Leer n_pan;
	cuenta = (n_bocadillo * 1.5) + (n_refresco * 1.05) + (n_cerveza * 0.75) + (n_pan * 2);
	Escribir "Tu cuenta es de ", cuenta;
FinAlgoritmo
