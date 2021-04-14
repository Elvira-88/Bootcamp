//Apartado 1
//Partimos de un HTML con un div vacío.
// Con JS, añadir dos elementos p con un texto dentro.

let addElements = document.querySelector("div");

let p1 = document.createElement("p");
p1.textContent = "Hola";
addElements.appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = "Adiós";
addElements.appendChild(p2);

//Apartado 2
//Al pulsar un botón, cambiar el color del fondo del cuerpo del HTML.

let colorPage = document.querySelector("button");
colorPage.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
});

//Apartado 3
//Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. 
//Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.

// const listItems = document.getElementsByTagName("li");
// const image = document.querySelector("img");

// function changeImage(e) {
//         image.src = e.target.textContent;    
// };

// const changeImage = (e) => image.src = e.target.textContent;

// listItems[0].addEventListener("click", changeImage);
// listItems[1].addEventListener("click", changeImage);
// listItems[2].addEventListener("click", changeImage);

// v2 - Autoría Juan Alberto
const list = document.querySelector("ul");
const image = document.querySelector("img");

// const changeImage = e => image.src = e.target.textContent;

// list.addEventListener("click", function changeImage(e) {
//         image.src = e.target.textContent;
// });

list.addEventListener("click", (e) => image.src = e.target.textContent);

//Apartado 4
//Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input
//en un párrafo. 

const ap4Paragraph = document.getElementById("fillableParagraph");
const ap4Input = document.querySelector("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click",() => {
       ap4Paragraph.textContent = ap4Input.value;
       ap4Input.value = "";
});

//4.2. Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.

const ap42Paragraph = document.getElementById("fillableParagraph2");
const ap42Input = document.querySelectorAll("input")[1];

ap42Input.addEventListener("input",() => ap42Paragraph.textContent = ap42Input.value);

//5. Similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres.

const textarea = document.querySelector("#textareaToValidate");
textarea.addEventListener("input", e => {
        // if (e.target.value.length > 15) {
        //     e.target.style.color = "red";
        // } else {
        //     e.target.style.color = "green";  
        // }

        e.target.style.color = e.target.value.length > 15 ? "red" : "green";
});

//6. Añadir un input de tipo texto con leyenda: "Escribir un número par". Añadir un botón. Al pulsar
//el botón nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a
//rojo. Para revertir el estado de una propiedad, podemos utilizar el valor "revert" o dejarlo vacío.

const evenInput = document.querySelector("#evenNumberInput");
const evenButton = document.getElementById("evenButton")
evenButton.addEventListener("click", () => {
        if (evenInput.value % 2 !== 0) {
                evenInput.style.border = "2px solid red";
        } else {
                evenInput.style.border = "";
        }
});

//7. Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento ("Elemento X")
//usando un bucle for.

const ul = document.getElementById("listToFill");

for (let i= 1; i <= 10; i++) {
        const newLi = document.createElement("li");
        newLi.textContent = `Elemento ${i}`;
        ul.appendChild(newLi);
}
       
//8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página.
//Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.

const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");
newTabButton.addEventListener("click", () => link.target = "_blank");

//9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde
//y azul. Al seleccionar un color del select, cambiar el color del párrafo.

const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
        ap9Paragraph.style.color = e.target.value;
});

//10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualizada el
//número de elementos que se han generado, los que son pares y los que son impares.

const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        currentRandom.textContent = randomNumber;

        // totalNumbers.textContent = Number(totalNumbers.textContent) + 1;
        totalNumbers.textContent++;

        randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;

};

//11. Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón.
//Al pulsar el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe,
//lo añadirá al principio.

const ulAptll = document.getElementById("ulAptll");
const inputAptll = document.getElementById("inputAptll");
const buttonAptll = document.getElementById("buttonAptll");
let numberList = [13, 27, 54, 86];

function fillList() {
        ulAptll.innerHTML = "";
        for (let number of numberList) {
                newLi = document.createElement("li");
                newLi.textContent = number;
                ulAptll.appendChild(newLi);
        }
};

console.log(fillList());

function addToList() {
        let numberToJoin = Number(inputAptll.value);
        if (numberList.indexOf(numberToJoin) === -1) {
                numberList.push(numberToJoin);
                fillList();
        } else {
                window.alert("Este número ya está en la lista");
        }
};

fillList();
buttonAptll.addEventListener("click", addToList);


//12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer click en el botón
//haremos “toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, 
//la añadiremos.

document.querySelector("#toggler").onclick = (e) => e.target.classList.toggle("btn");

//13. El código siguiente, añade un eventListener a cada botón para que cuando se haga click en cada uno de 
//ellos, le cambie el backgroundColor.
//Refactorizar el código para hacerlo con un único forEach.
//Nota: 
//1. Para transformar un HTMLCollection a un array, podemos hacer: Array.from(HTMLCollection);
//2. Para acceder al elemento que “disparó” el evento, podemos usar evento.target.

const buttons = document.getElementsByClassName("btn-red");  //Devuelve HTMLCollection

// buttons[0].addEventListener("click", () => {
//     buttons[0].style.backgroundColor = "red";
// });

// buttons[1].addEventListener("click", () => {
//     buttons[1].style.backgroundColor = "red";
// });

// buttons[2].addEventListener("click", () => {
//     buttons[2].style.backgroundColor = "red";
// });

Array.from(buttons).forEach(button => {
        button.addEventListener("click", function (e) {
              e.target.style.backgroundColor = "red";   
        });      
});





