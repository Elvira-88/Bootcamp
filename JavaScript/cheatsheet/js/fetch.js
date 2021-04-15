const URL = "https://jsonplaceholder.typicode.com/users";

// function printNames(array) {
//     array.forEach(user => console.log(user.name))
// }

// function printAddress(array) {
//     array.forEach(user => console.log(user.address.city))
// }

// const printLats = array => array.forEach(user => console.log(user.address.geo.lat));  

// fetch(URL).then(r => r.json()).then(data => console.log(data));

// fetch(URL)
//     .then(response => {
//         if(!response.ok) {
//             throw Error("Hay algún problema con la respuesta: " + response.statusText);
//         }
//         return response.json();
       
//     })
//     .then(data => {
//         printNames(data);
//         printAddress(data);
//         printLats(data);
//     })

//     .catch(error => console.log(error));

// Async - await (Alternativa a then)

async function requestURL(URL) {

    console.log(2);
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    console.log(4);  
}

console.log(1);
requestURL(URL);
console.log(3);

// Petición con método HTTP POST en lugar de GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body: "mi cuerpo de publicación"
}

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)

};

fetch(POST_URL, http)
.then(response => response.json())
.then(data => console.log(data))
