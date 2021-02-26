Algoritmo Ejercicio11
	Definir compra como entero;
	Definir descuento como real;
	Leer compra;
	Si compra < 500 Entonces
		Escribir "No tienes descuento";
	SiNo
		Si compra <= 1000 Entonces
			Escribir "Descuento 5%, tu precio es ", compra * 1.05; 
		SiNo
			Si compra <= 7000 Entonces
				Escribir "Descuento 10%, tu precio es ", compra * 1.10;
			SiNo
			     Si compra <= 15000 Entonces
					Escribir "Descuento 20%, tu precio es ", compra * 1.20; 
				SiNo
					Escribir "Descuento 25%, tu precio es ", compra * 1.25;
				FinSi
			FinSi
		FinSi
	FinSi
		
				
		
FinAlgoritmo

