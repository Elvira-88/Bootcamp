//-------------------- Uso de JS externo -----------------------
function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo)

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
    } // ES6
}

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
