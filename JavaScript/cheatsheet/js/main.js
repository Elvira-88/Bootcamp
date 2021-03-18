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
let str = String("I'm a string");
let str2 = "I'm another string";  //Recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number (5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5")

// let str = "string" ES IGUAL A "string"
