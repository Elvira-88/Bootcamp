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

const listItems = document.getElementsBytagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);





