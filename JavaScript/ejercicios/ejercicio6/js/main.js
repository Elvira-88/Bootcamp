//Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
//Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
//primeros 20 elementos.

const URL = "https://jsonplaceholder.typicode.com/comments";

const ul = document.getElementById("ul")

function fillList(array) {
    array.slice(0, 20).forEach(element => {
        ul.innerHTML += `<li>${element.name}</li>`
    });
};

fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
       
    })
    .then(data => {
        fillList(data);
    })

    .catch(error => console.log(error));

//Ej 2

const url2 = "https://jsonplaceholder.typicode.com/posts";

const div = document.getElementById("div");

function printPosts(array) {
    array.slice(0, 20).forEach(element => {
        div.innerHTML += `<h2>${element.title}</h2> <p>${element.body}</p>`
    });
};



fetch(url2)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
       
    })
    .then(data => {
        printPosts(data);
    })

    .catch(error => console.log(error));

//Ej 3
////funcion que reicba un array, un tamaño de pg y a partir de ese array que te de los elementos que necesitas

