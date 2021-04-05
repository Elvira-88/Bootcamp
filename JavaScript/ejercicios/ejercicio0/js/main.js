//1. Define e inicializa un array con 5 elementos string en una sola línea.

let trastornos = ["ansioso", "depresivo", "bipolar", "de la personalidad", "por estrés postraumático"];
console.log(trastornos);

//2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente.
//Elimina por completo el primero y añade dos nuevos números al inicio. En cada paso,
//imprime la longitud y el array entero por consola utilizando un string template del
//tipo: `Longitud: ${}`. 

let numbers = [];
console.log(numbers);
console.log(`Longitud: ${numbers.length}`);
numbers.push(1, 2, 3);
console.log(numbers);
console.log(`Longitud: ${numbers.length}`);
numbers.shift(1);
console.log(numbers);
console.log(`Longitud: ${numbers.length}`);
numbers.unshift(4, 5);
console.log(numbers);
console.log(`Longitud: ${numbers.length}`);

//3. Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean
//y false en caso contrario.

function trueorfalse(argument) {
    if (typeof argument === "boolean") {
        return true;
    }
    else {
        return false;
    }
};

console.log(trueorfalse(false));

console.log(trueorfalse(5));


//4. Escribe una función que devuelva la longitud de un string recibido por argumento.

function lettersnumbers(word) {
    console.log(word.length);
};

lettersnumbers("Elvira");

//5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva
//convertido en segundos.

time = min => min * 60;
console.log(time(5));

//6. Crea una función que reciba un número y devuelva el siguiente número par.
//(Si él es par, lo devolverá directamente).

function par(num) {
    if (num / 2 === 0) {
        return num;
    }
    else {
        return num + 1;
    }
};

console.log(par(4));
console.log(par(5));

//7. Crea una función que reciba una edad y devuelva la cantidad de días que esa
//persona ha vivido. Puedes obviar los años bisiestos.

function age(years) {
    return years * 365;
};

console.log(age(30));

//8. Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios
//arrays de diferentes longitudes.

function myarray(array) {
    return array[array.length-1];
};

console.log(myarray([1,2,3]));
console.log(myarray([1,2]));

//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy frecuentemente,
//pero tiene tres especies: pollos(2 patas), vacas (4 patas) y cerdos (4 patas). Tu función recibirá la cantidad
//de animales en ese orden y devolverá la cantidad de patas totales.

function animals(chickens, cows, pigs) {
    let chickensLegs = chickens * 2;
    let cowsLegs = cows * 4;
    let pigsLegs = pigs * 4;
    return chickensLegs + cowsLegs + pigsLegs;
};

console.log(animals(2,3,4));

//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function myfunction(argument1, argument2) {
    if (typeof argument1 === typeof argument2) {
        console.log("Los argumentos son del mismo tipo");
    }
    else {
        console.log("Los argumentos son de distinto tipo");
    }
};

myfunction(1, 2);
myfunction(3, true);

//11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.

function phrase(words) {
    return words.split(" ");
};

console.log(phrase("Hola, buenos días"));


//12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta y número de puerta.

let address1 = {
    provincia: "Cádiz",
    ciudad: "El Puerto de Santa María",
    municipio: "Poblado Naval",
    código_postal: 11500,
    calle: "Fuentebravía",
    número: 2312,
    planta: "bajo",
    número_puerta: 1,
};

console.log(address1);

let address2 = {
    provincia: "Málaga",
    ciudad: "Málaga",
    municipio: "",
    código_postal: 23009,
    calle: "Luchana",
    número: 7,
    planta: 3,
    número_puerta: 2,
};

console.log(address2);

//13. Los dominios en la web, se componen del nombre del dominio (codespaceacademy) y de un TLD (top- level domain)
//como, por ejemplo .com/ .es/ .org, etc. Crea una función que se llame parseDomain() que reciba por argumento
//un string y devuelva un objeto con dos propiedades: domain y tld. 

const parseDomain = function (x) {
    const array = x.split(".");
    const object = {
        Domain: array[0],
        TLD: array[1],
    }
    return object;    
};

console.log(parseDomain("codespaceacademy.com"));

//14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando dicha
//funcionallidad. Crea una función que devuelva true si dos números tienen el mismo valor y el mismo tipo de dato.
//Debemos usar el operador lógico "&&"

function same(a, b) {
    if (a == b && typeof a == typeof b) {
        return true;
    } 
    else {
        return false;
    }
};

console.log(same(5, 5));
console.log(same("5", 5));

//15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario.

function samelength(s1, s2) {
    if (s1.length === s2.length) {
        return true;
    }
    else {
        return false;
    }
};

console.log(samelength("Hola", "Adiós"));
console.log(samelength("Adiós", "Mundo"));

//16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function empty(str) {
    return str === "";
};

console.log(empty(""));
console.log(empty());
console.log(empty("Something"));

//17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: 
//while, for, for of, forEach.

// let trastornos = ["ansioso", "depresivo", "bipolar", "de la personalidad", "por estrés postraumático"];
// console.log(trastornos);

let e = 0;
while (e < trastornos.length) {
    console.log(`Índice ${e}: ${trastornos[e]}`);
    e++;
};

for (let e = 0; e < trastornos.length; e++){
    console.log(`Index ${e}: ${trastornos[e]}`);
};

for(let trastorno of trastornos) {
    console.log(trastorno);
};

trastornos.forEach((item, index) => console.log(`index ${index}: ${item}`));

//18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.

function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString("No haré memes sobre el profesor ", 3));

//19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
//la cuenta final.

const getVoteCount = function (obj) {
    return obj.upVotes - obj.downVotes;
    }
    
    // const votes = {upVotes: 35, downVotes: 15};
    // console.log(getVoteCount(votes));
    console.log(getVoteCount({upVotes: 35, downVotes: 15}));

//20. Crea una función que recibe un array de dos tipos de datos mezclados y que devuelva otro array con el tipo 
//de cada uno de los elementos.

function getTypes(array) {
    const arrayTypes = [];

    array.forEach(element => {
        arrayTypes.push(typeof element);
    });
    
    return arrayTypes;
};

console.log(getTypes(["I'm learning JS in a Bootcamp", 7.5, {}, 0, undefined, [], "codespace"]));

//21. Función que dado un array de números con formato string devuelva un array con los números
//ya parseados.

function getParsedNumbers(array) {
    const parsedArray = [];

    array.forEach(element => {
        parsedArray.push(Number(element));
    });
    
    return parsedArray;
};

console.log(getParsedNumbers(["1.5", "10", "0"]));

//22. Crea una función de flecha que devuelva "Positivo" si el número que recibe por argumento es mayor o igual
//que cero y "Negativo" en caso contrario. Usa el operador ternario.

positiveOrNegative = num => num >= 0 ? "Positive" : "Negative";

console.log(positiveOrNegative(2));
console.log(positiveOrNegative(-1));
console.log(positiveOrNegative(0));

//23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

const removeItem = (array, index) => array.splice(index,1);

console.log(removeItem([1, 2, 3, 4], 0));

//24. Usando la función del apartado anterior, crea otra función que dado un array de números y un
//número a filtrar, devuelva un array borrando todas las apariciones de dicho número.

const filterItem = (array, numberToFilter) => {
    
    array.forEach((element, index) => {

        if (element === numberToFilter) {
            removeItem(array, index);
        }

    });
}
const arrayFiltered = [1, 5, 6, 7, 5];
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);

//25. Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de
//todas sus propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.

function figuras1(obj) {
    const object1 = {
        color: "blanco",
        forma: "círculo",
    };
    return Object.keys(object1);
};

console.log(figuras1());

function figuras2(obj) {
    const object2 = {
        color: "negro",
        forma: "cuadrado",
    };
    return Object.values(object2);
};

console.log(figuras2());


//26. Crea una función que invierta un string.

function stringReverse(str) {
    return str.split("").reverse().join("");
}
 
console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));

//27. Crea una función que compare strings sin tener en cuenta las mayúsculas/minúsculas.

function compareStrings(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log(compareStrings("Darth CODER", "darth coder"));
console.log(compareStrings("Hola", "adiós"));

//28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado.
//El apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalize("comprobaré"));

//29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

const logicalValue = (Boolean) => !Boolean;

console.log(logicalValue(true));
console.log(logicalValue(false));
