Algoritmo ejercicio32
	Definir n_bocadillo, n_refresco, n_cerveza, n_pan como entero;
	Definir cuenta como real;
	Escribir "�Cu�ntos bocadillos has consumido?";
	Leer n_bocadillo;
	Escribir "�Cu�ntos refrescos has consumido?";
	Leer n_refresco;
	Escribir "�Cu�ntas cervezas has consumido?";
	Leer n_cerveza;
	Escribir "�Cu�nto pan has consumido?";
	Leer n_pan;
	cuenta = (n_bocadillo * 1.5) + (n_refresco * 1.05) + (n_cerveza * 0.75) + (n_pan * 2);
	Escribir "Tu cuenta es de ", cuenta;
FinAlgoritmo
