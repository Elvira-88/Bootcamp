Algoritmo ejercicio49
	//Se tienen los costes de producci�n de tres departamentos (dulces, bebidas y conservas)
	//correspondientes a los 12 meses del a�o anterior. Construir algoritmo que proporcione:
	//a) �En qu� mes se registr� el mayor coste de producci�n de dulces?
	//b) Promedio anual de los costes de producci�n de bebidas
	//c) �En qu� mes se registr� el mayor coste de producci�n en bebidas, y en qu� mes el menor coste?
	//d) �Cu�l fue el que tuvo menor coste de producci�n en diciembre?
	
	Definir dulces, bebidas, conservas, tamano, mes, max, mes_max, suma, min, mes_min Como Entero;
	//El mes es el indice
	
	tamano = 12;
	Dimension dulces[tamano], bebidas[tamano], conservas[tamano];
	
	Escribir "Deps     Dulces  Bebidas  Conservas";
	
	Para mes = 0 hasta tamano - 1 Con Paso 1 Hacer		
		dulces[mes] = Aleatorio (50,300);
		bebidas[mes] = Aleatorio (50,300);
		conservas[mes] = Aleatorio (50,300);
		Escribir "Mes ", mes + 1, "     " dulces[mes], "      " bebidas[mes], "      " conservas[mes];
	FinPara
	
	Para mes = 0 hasta tamano-1 Con paso 1 Hacer
		Si mes == 0 O dulces[mes] > max Entonces
			max = dulces[mes];
			mes_max = mes;
		Fin Si
	FinPara
	Escribir "El coste m�ximo de producci�n de dulces fue en el mes ", mes_max + 1;
	
	suma = 0;
	Para mes = 0 Hasta tamano - 1 Con Paso 1 Hacer
		suma = suma + bebidas[mes];
	Fin Para
	Escribir "El promedio anual de los costes de bebidas es ", suma / tamano;
	
	Para mes = 0 hasta tamano-1 Con paso 1 Hacer
		Si mes == 0 O bebidas[mes] > max Entonces
			max = bebidas[mes];
			mes_max = mes;
		Fin Si
		Si mes == 0 O bebidas[mes] < min Entonces
			min = bebidas[mes];
			mes_min = mes;
		Fin Si
	FinPara
	Escribir "El mayor coste de producci�n de bebidas fue en el mes ", mes_max + 1;
	Escribir "El menos coste de producci�n de bebidas fue en el mes ", mes_min + 1;
	
	Si dulces[11] < bebidas[11] Y dulces[11] < conservas[11] Entonces
		Escribir "En diciembre, el departamento de dulces ha tenido el menor coste";
	SiNo
		Si bebidas[11] < conservas[11] Entonces
			Escribir "En diciembre, el departamento de bebidas ha tenido el menor coste";
		SiNo
			Escribir "En diciembre, el departamento de conservas ha tenido el menor coste";
		FinSi
	FinSi
	
FinAlgoritmo
