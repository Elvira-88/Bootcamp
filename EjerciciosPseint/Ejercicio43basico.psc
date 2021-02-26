Algoritmo ejercicio43
	//Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
	//tendrá la estructura horas:minutos:segundos. Ejemplos de salida: 23:15:39
	//Nota: deberás utilizar "Esperar" y "Limpiar pantalla".
	
	Definir segs, mins, hours, contador como entero;
	segs = 0;
	mins = 0;
	hours = 0;
	
	Mientras Verdadero
		Limpiar pantalla;
		
		Escribir hours, ":", mins, ":", segs;
				
		Esperar 1 Milisegundo;
		segs = segs + 1;
		Si segs > 59 Entonces
		    segs = 0;
			mins = mins + 1;
		Fin Si
		Si mins > 59 Entonces
			mins = 0;
			hours = hours + 1;
		FinSi
		Si hours > 23 Entonces
			hours = 0;
		FinSi
		
	FinMientras

FinAlgoritmo
