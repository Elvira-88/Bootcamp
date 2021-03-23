//-------------------- Uso de JS externo -----------------------
function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo)

//-------------------- Depuración / logging -----------------------
// alert("Mensaje");
console.log("Mensaje");

//-------------------- Variables ------------------------------
// var -> function scope
//let / const -> block scope

function saludar () {
    console.log("Inicial: ", contador);

    //Comprobar con var y con let y ver diferencias
    for (var contador = 0; contador < 3; contador++) {
        console.log(contador);

    }
    console.log("Final: ", contador);

}

saludar();

console.clear();

//Inicialización
let day;
day = 5;

let monthName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25]
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //Avanzada
console.log(var1, var2, var3);

// const -> block scope
const x = 1;
//const y; // Error: missing = in const
// x = 2; //Error: invalid assignment to const 'x'

console.clear();
//-------------------------- Tipos de Datos ------------------------
//Datos primitivos
let str = String("I'm a string");
let str2 = "I'm another string";  //Recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number (5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5")

// let str = "string" ES IGUAL A "string"

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; //Limpiar una variable
console.log(selectedColor, typeof selectedColor);

//Objects
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("Mensaje de error"));

console.clear();

// --------------------- Strings --------------------------
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente"));
console.log("La última ocurrencia de 'u' está en el índice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adiós mundo."));
console.log("Hola mundo" + ". Adiós Mundo."); //Equivalente a concat

str = str + ". Adiós Mundo";
str += ". Adiós Mundo.";
console.log(str);

console.log(str.replace("futuro", "Mundo"));
console.log(str.replaceAll("futuro", "Mundo"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es ${day}. `); //String template
console.log("El día de mi cumpleaños es", day, ".");

// Parsing (Conversión de un tipo a otro)
let number = Number("asdasd"); //NaN = Not A Number. No genera error.
console.log(number, typeof number);

number = Number("1000");
console.log(number, typeof number);

number += "1000";  //Entiende que es una concatenación, no una suma.
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);

//--------------------- Objects -----------------------
let person = {
    name: "Jhon",
    age: 30,
    blonde: false,
    walk: function () {
        console.log("Hey, estoy andando");
    }, // Pre-ES6
    jump() {
        console.log("Hey, estoy saltando");
    }, // ES6

    presentarse() {
        console.log(`Me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio" : "soy moreno"}`);
    }
}

person.presentarse();

// Acceso por punto / Dot notation
console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

// Acceso por corchetes / Brackets notation
let propertyName = "age";
console.log(person[propertyName]);

// Ampliación
person.children = ["Martha", "Peter"];
console.log(person);
console.log(person.children[0], person.children[1]);

person.walk();
person.jump();

console.log(typeof {}, typeof [], typeof "");

//This
const person2 = {
    name: "Thomas",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();
person3.talk();

// console.clear();

//--------------------- Arrays -----------------------
let selectedColors = ["red", "blue"];  //Array de strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";  //Si no existe, lo crea
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); //Añade un último elemento
console.log(selectedColors, selectedColors.length);

selectedColors.pop();  //Elimina el último elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); //Añade un elemento al principio
console.log(selectedColors, selectedColors.length);

selectedColors.shift();  //Elimina el primer elemento
console.log(selectedColors, selectedColors.length);

selectedColors.sort();  //Para ordenar arrays
console.log(selectedColors, selectedColors.length);

console.log("El rojo está en el índice", selectedColors.indexOf("red"));

console.log(selectedColors.slice(1, 3));
console.log(selectedColors);

selectedColors.splice(1, 1);  //Para eliminar un elemento

console.log("Los elementos borrados son: ", selectedColors.splice(1, 2));
console.log("El array se ha quedado así: ", selectedColors);

/*
Crear un objeto 'niño' que tenga las propiedades nombre, altura, género
y amigos. Amigos estará inicialmente vacío y añadiremos posteriormente
3 elementos con los nombres. Después, añadiremos uno extra al inicio.
*/

let child = {
    name: "Pepe",
    length: 1.20,
    gender: "masculino",
    friends: [],
    loseFriend() {
        this.friends.pop()
    }
}
 console.log(child);

 child.friends.push("Carmen", "Pablo", "Antonio");
 console.log(child);

 child.friends.unshift("Carlos")
 console.log(child);

 child.loseFriend();
 console.log(child);

 // ------------------------ Condicionales ------------------------
 
 const randomNumber = 9;
 const guessedNumber = "5";

 if (typeof randomNumber !== typeof guessedNumber) {
     console.log("Hey, tienes que introducir el mismo tipo.");
 }

 if (typeof guessedNumber === "string") {
     console.log("");
 }

//  if (randomNumber === guessedNumber) {
//      console.log("Has acertado el número");

//  } else if (randomNumber > guessedNumber) {
//      console.log("El número secreto es mayor");
    
// } else {
//      console.log("El número secreto es mrnod"); 
// }

//Ternary Operator
let variable = 12 < 10 ? "el primero es menor" : "el primero es mayor";
console.log(variable);

//Switch
let option = 5;
switch (option) {
    case 1:
        //Bloque de código para valor 1
        console.log("Option vale 1");
        break;

    case 2:
        //Bloque de código para valor 2
        console.log("Option vale 2");
        break;

    case 3:
        //Bloque de código para valor 3
        console.log("Option vale 3");
        break;
    default: //"De otro modo" de PSeint
    console.log("Otra opción");
    break;
}

console.clear();
//---------------------- Funciones / Functions ------------------------
//Nombradas
function greet (name, lastName) {
    console.log(`Hola, ${name} ${lastName}. ¿Qué tal?`);
}

greet();
greet("Marcos", "Aurelio");

function square (num1) {
    return num1 * num1;
}

console.log(square(5));

//Anónimas
let numbersArray = [5, 51, 1, 15];
console.log(numbersArray);
numbersArray.sort(); //me lo ordena según ASCII
console.log(numbersArray);

function orderNumbers (a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}


// numbersArray.sort(orderNumbers);

numbersArray.sort(function (a, b) {return a - b});

console.log(typeof orderNumbers, typeof function (a, b) {return a - b});

console.log(numbersArray);

//Arrow Functions
let perimeterOfSquare = function (side) { // Función anónima normal
    return side * 4;
    }
    perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
    perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
    perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
    perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.
    
    console.log(perimeterOfSquare(5));

// console.log(typeof function() {});
// console.log(typeof (() => {}));

//Cómo transformar func anónima en func de flecha

numbersArray.sort(function (a, b) {return a - b});

numbersArray.sort((a, b) => a - b); 

let squareV2 = number => number * number;
console.log(squareV2(5));

//------------------------ Loops ------------------------
//For
for (let i = 0; i <= 10; i++) {
    console.log(`Índice: ${i}`);
}

//Definir y rellenar un array con el índice i

array = [];

for (let i = 0; i <= 10; i++) {
    array.push(i);
}

console.log(array);

//While
let contador = 0;
while (contador <= 10) {

    console.log(contador);

    contador++;
}

while (true) {
    break;
}

console.log("No entra en bucle infinito");

//ForEach
console.log(numbersArray);
numbersArray.forEach(function (value, index) {
    console.log(`Índice ${index}: ${value}`);
});


