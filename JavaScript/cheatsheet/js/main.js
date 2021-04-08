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




// Object Constructor using functions

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `This ${this.color} ${this.brand} weigths ${this.weight} ` +
        `kilos and can reach up to ${this.topSpeed} km/h. `;
    }
}

const car1 = new Car("Mercedes", "red", 2000, 200);
const car2 = new Car("Volvo", "white", 2500, 180);
const car3 = new Car("Volkswagen", "blue", 1500, 175);

console.log(car1, car2, car3);

console.log(car2.weight);

console.log(car3.getDescription());

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



console.clear();

//Higher Order Functions
//Map
let arr1 = [1, 2, 3];
let arr2 = [];

for (let num of arr1) {
    arr2.push(num * 2);
}

// console.log(arr1, arr2);

arr1 = [1,2,3];

arr2 = arr1.map(num => num * 2);

arr2 = arr1.map(function (num) {
    return num * 2;
})

console.log("Resultado con map: ", arr1, arr2);

//A partir de un array con años de nacimiento, calcular edades

const birthYears = [1980, 1990, 1975, 1970];

const years = birthYears.map(year => 2021 - year);
console.log(birthYears, years);

// Filter
const prices = [150, 50, 49, 51, 15, 237];
const expensives = [];

for (let price of prices) {
    if (price >= 50) {
        expensives.push(price);
    }
};

console.log(expensives);

const prices = [150, 50, 49, 51, 15, 237];
const expensives = prices.filter(price => price >= 50);

console.log(prices, expensives);

const cars = [
    {
        brand: "BMW",
        year: 2010,
        plateNumber: "HGJ1282"
    },
    {
        brand: "Mercedes",
        year: 1990,
        plateNumber: "BXC1234"
    },
    {
        brand: "Volvo",
        year: 2021,
        plateNumber: "LKJ1293"
    },
];

// console.log(cars.filter(car => car.year > 2008));
// // console.log(cars.filter(car => car.plateNumber.includes("L")));

// // //cars = ["BMW", "Mercedes", "Volvo"]
// // console.log(cars.map(car => car.brand));

console.log(cars);

cars.sort((car1, car2) => car1.year - car2.year);

console.log(cars);

// Reduce
const arr = [10, 7, 13, 20];

console.log(arr.reduce((sum, currentNumber) => sum + currentNumber));










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

numbersArray.forEach((value, index) => console.log(`Índice ${index}: ${value}`));

let otherArray = [];

numbersArray.forEach(item => otherArray.push(item));

console.log(otherArray);

//For of
for (let item of numbersArray) {
    console.log(item);
}

//Continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue   //Salta a la siguiente iteración
    }
    console.log("Using continue", i);
}

//Break
let i = 0;
let k;
mainLoop: while (true) {
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainLoop;
        } else if (k === 5) {
            break;
        }
    }
}


// ----------------------- DOM (Document Object Model) ------------------------
// Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
// document.title = "Cheatsheet JavaScript (DOM)";
document.title += "(DOM)";
console.log(document.title);

console.clear();
// Selectors
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = parents[1];

console.log(parent1, parent2);

const children = document.getElementsByClassName ("child");
console.log(children);

let element = document.querySelector("grandparent div");
console.log(element);

parent1.style.backgroundColor = "#333";

children[0].parentNode.style.backgroundColor = "#666";

const changeBackground = (element, color) => element.style.backgroundColor = color;

// changeBackground(children[0], "#333");
// changeBackground(parent1, "red");
// changeBackground(parent2.children[1], "blue");
// changeBackground(children[0].parentNode.parentNode, "#ddd");

// changeBackground(parent1.children[1].previousElementSibling, "red")

// changeBackground(grandParent.children[1].previousElementSibling.lastElementChild, "green");

// Properties
// children[0].innerHTML = "Child 1 v2";
console.log(children[0].innerHTML);
console.log(children[0].textContent);   //Ignora etiquetas
// children[0].textContent += "v2";

console.clear();

console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark");
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-red");
// toogle: Alterna la clase, si no está, la incluye, si está, la elimina

parent1.setAttribute("class", "nombre-parent1");

console.clear();
// Create / Remove elements
let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv);   //Mismo nodo con dos nombres diferentes

myDiv2 = myDiv2.cloneNode(true);  //Creamos un nuevo nodo a partir del original
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5"

myDiv2.remove();

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3);
parent2.after(myDiv.cloneNode());

//Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e ID

function createNode(label, id) {
    let newNode = document.createElement(label);

    newNode.id = id;

    return newNode;
}

let newDiv = createNode("div", "identificador1");
let table = createNode("table", "identificador2");

parent2.appendChild(newDiv);
parent2.appendChild(table);


console.clear();

//Events
const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event) {
    // console.log(event);
    console.log(event.target);
    // console.log(event.target.tagName);

    if (event.ctrlKey) {
        document.body.classList.toggle("bg-red"); 
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput =document.querySelector("#emailInput");
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener(e) {
    console.log("Tipo de evento: ", e.type);
    
    // if (e.type === "focus") {
    //     e.target.classList.add("bg-red");
    
    // } else if(e.type === "blur") {
    //     e.target.classList.remove("bg-red");
    // }
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value;  //Propiedad value
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords(e) {
    const h1 = document.querySelectorAll("h1")[3];
    h1.textContent = `X: ${e.clientX} | Y: ${e.clientY}`; 
}

document.body.addEventListener("mousemove", coords);







// Array.from(family).forEach(item => console.log(item);)  //Construyo un array desde HTML Collection
// for (let familyMember of family) {
//     console.log(familyMember);
// }