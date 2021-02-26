Algoritmo sin_titulo
	Definir precio como entero;
	Definir pagado como entero;
	Definir vuelta como entero;
	Leer precio;
	Leer pagado;
	vuelta = pagado - precio;
	Si precio < pagado Entonces
		Escribir "Tu vuelta es ", vuelta;
	SiNo
		Escribir "Te falta dinero";
	Fin Si
FinAlgoritmo
