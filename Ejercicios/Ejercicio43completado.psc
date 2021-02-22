Algoritmo ejercicio43
	//Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
	//tendrá la estructura horas:minutos:segundos. Ejemplos de salida: 23:15:39
	//Nota: deberás utilizar "Esperar" y "Limpiar pantalla".
	
	Definir segs, mins, hours Como Entero;
	Definir segs_cero, mins_cero, hours_cero Como Caracter;
	
	segs = 59;
	mins = 59;
	hours = 23;
	
	//Bucle infinito
	Mientras Verdadero
		//Comprobamos los límites de los segundos, minutos y horas.		
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
		
		//Comprobamos si tendrán 1 o 2 dígitos para rellenar con 0s.
		Si segs < 10 Entonces
			segs_cero = "0";
		SiNo
			segs_cero = "";
		FinSi
		Si mins < 10 Entonces
			mins_cero = "0";
		SiNo
			mins_cero = "";
		FinSi
		Si hours < 10 Entonces
			hours_cero = "0";
		SiNo
			hours_cero = "";
		FinSi
		
		//Imprimimos reloj digital
		Limpiar Pantalla;
		Escribir hours_cero, hours, ":", mins_cero, mins, ":", segs_cero, segs;
		Esperar 1 Segundos;
		
		segs = segs + 1;
		
	FinMientras

FinAlgoritmo
