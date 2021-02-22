Algoritmo ejercicio39
	//Dado dos arrays del mismo tama�o, determinar, elemento a elemento, si ambos son iguales. Con
	//que un elemento sea diferente, se considerar�n los arrays como diferentes. Escribir al final del
	//algoritmo el resultado.
	
	Definir array_1, array_2, tamano, indice Como Entero;
	Definir son_iguales Como Logico;
	tamano = 5;
	Dimension array_1[tamano], array_2[tamano];
	
	array_1[0] = 1;
	array_1[1] = 2;
	array_1[2] = 3;
	array_1[3] = 4;
	array_1[4] = 5;
	
	array_2[0] = 1;
	array_2[1] = 2;
	array_2[2] = 3;
	array_2[3] = 4;
	array_2[4] = 5;
	
	//Apuesto a que son iguales, son iguales hasta que se demuestre lo contrario
	son_iguales = Verdadero;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		//Compruebo elmento a elemento, con que haya uno diferente, sobreescribo mi variable
		Si array_1[indice] <> array_2[indice] Entonces
			//Si verdadero,si son diferentes
			son_iguales = Falso;
		FinSi
	Fin Para
	
	Si son_iguales Entonces
		Escribir "Los arrays son iguales.";
	SiNo
		Escribir "Los arrays son diferentes.";
	FinSi
	
FinAlgoritmo
