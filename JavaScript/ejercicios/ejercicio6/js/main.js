//Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
//Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
//primeros 20 elementos.

// const URL = "https://jsonplaceholder.typicode.com/comments";

// const ul = document.getElementById("ul")

// function fillList(array) {
//     array.slice(0, 20).forEach(element => {
//         ul.innerHTML += `<li>${element.name}</li>`
//     });
// };

// fetch(URL)
//     .then(response => {
//         if(!response.ok) {
//             throw Error("Hay algún problema con la respuesta: " + response.statusText);
//         }
//         return response.json();
       
//     })
//     .then(data => {
//         fillList(data);
//     })

//     .catch(error => console.log(error));

// Haremos una petición GET a esta API y guardaremos todos los Posts. Haremos una 
//paginación en nuestro array, de forma que se muestren sólo 20 artículos en el DOM con 
//un h1 para title y un p para el body. 

// const url2 = "https://jsonplaceholder.typicode.com/posts";

// const div = document.getElementById("div");

// function printPosts(array) {
//     array.slice(0, 20).forEach(element => {
//         div.innerHTML += `<h2>${element.title}</h2> <p>${element.body}</p>`
//     });
// };



// fetch(url2)
//     .then(response => {
//         if(!response.ok) {
//             throw Error("Hay algún problema con la respuesta: " + response.statusText);
//         }
//         return response.json();
       
//     })
//     .then(data => {
//         printPosts(data);
//     })

//     .catch(error => console.log(error));

// 1. Fetch API + DOM – Paginación en el lado del cliente
// Haremos una petición GET a esta API y guardaremos todos los Posts. Haremos una paginación en nuestro array, de forma que se muestren sólo 20 artículos en el 
// DOM con un h1 para title y un p para el body. Al mostrarse sólo 20 artículos, tendremos que “crear” tantas páginas como sea necesario para poder mostrar el 
// número total de posts en diferentes páginas. Podremos ir navegando por las páginas con un par de botones de anterior / siguiente que actualicen los posts y 
// se mostrarán de 20 en 20 hasta que no queden más.Tendremos que tener cuidado con no pasarnos por delante ni por detrás del array.


const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

// Variables
let posts = [];
let currentPage = 1;

// Selectores

const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

// Utilidades

function fillDiv() {
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
    postsDiv.innerHTML = "";
    newPagePosts.forEach(post => postsDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`);
};

function changePage(event) {
    if(event.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if(event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

fetch(POSTS_URL)
.then(response => response.json())
.then(data => {
    posts = [...data];
    fillDiv();
}); 

// 2. Fetch API + DOM – Paginación en el lado del servidor
// Hacer un login sencillo que haga una petición POST a https://reqres.in/api/login con las credenciales (investigar qué objeto espera recibir). Si tenemos éxito, 
// mostraremos una lista con todos los usuarios de este otro punto de la API: https://reqres.in/api/users. Si no tiene éxito, mostrará una alerta avisando con el error.
// Como tiene múltiples páginas, tendremos que ir solicitando todas las páginas de una en una hasta que no haya más páginas. El parámetro para obtener una página 
// específica es ?page=2. Éste se pondrá al final de la URL. Se recomienda hacer las peticiones en un bucle e ir concatenando los usuarios ya sea a un array o 
// directamente al DOM. Considerar hacerlo con async / await. Más información de la API en https://reqres.i

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);
const usersList = document.querySelector("#usersList");

function login(event) {
    event.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    }; 

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers())
};

async function fetchAllUsers() {
  
    let response = await fetch(USERS_URL);
    let data = await response.json();
    
    let users = [];

    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data); // users = [...users, ...newData.data];
    }
    
    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
};

//Alternativa para recuperar todas las páginas de una API utilizando .then()
// let users = [];

// function fetchAllUsersV2(URL) {
//     fetch(URL)
//     .then(response => response.json())
//     .then(newData => {
//         users = users.concat(newData.data);

//         if(newData.page < newData.total_pages) {
//             fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`)
//         } else {
//             usersList.innerHTML = "";
//             users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
//         }
//     });
// }