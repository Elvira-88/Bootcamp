Algoritmo ejercicio18
	Definir contador, N, numero_inicial, suma como entero;
	Escribir "Escribir N";
	Leer N;
	numero_inicial = N;
	contador = 0;
	suma = 0;
	Si numero_inicial mod 2 <> 0 Entonces
		numero_inicial = numero_inicial + 1;
	FinSi
		Mientras contador < N Hacer
			Escribir numero_inicial;
			suma = numero_inicial + suma;
		numero_inicial = numero_inicial + 2;
		contador = contador + 1;
	Fin Mientras
	Escribir suma;
FinAlgoritmo
