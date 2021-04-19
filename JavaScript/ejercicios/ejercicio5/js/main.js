class Book {
    constructor(id, titulo, autor, ventas, precio) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ventas = ventas;
        this.precio = precio;
    }
};

let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "A tres más un destello cada veinte segundos", "José Antonio García García", 20000, 12),
    new Book(7, "La choza del seppuku", "José Antonio García García", 40000, 15),
    new Book(8, "El triunfo de la locura", "José Antonio García García", 15000, 16),
    new Book(9, "100 años de Soledad", "Gabriel García Márquez", 824620, 20),
    new Book(10, "Divinas Palabras","Ramón María del Valle-Inclán",936540, 22),
];

let displayedBooks = Array.from(books);  // [...books]

const booksTbody = document.querySelector("#tablebody");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

const tfoot = document.querySelector("tfoot");

function updateTable() {
    booksTbody.innerHTML = "";  //Vacía el tbody por completo

    //Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.ventas}</td>
            <td>${book.precio}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;
         
    });

    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.precio, 0);
    tfoot.textContent = `Precio total ${totalPrice}`;
};

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
}; 

updateTable();

addBookButton.addEventListener("click", e => {
    e.preventDefault();

    const newId = books[books.length-1].id + 1;

    const newBook = new Book(
        newId,
        titleInput.value,
        authorInput.value,
        salesInput.value,
        Number(priceInput.value));
    
    books.push(newBook);
    displayedBooks.push(newBook);
    

    updateTable();

    // titleInput.value = "",
    // authorInput.value = "",
    // salesInput.value = "",
    // priceInput.value = "",

    addBookButton.parentNode.reset();

});


// Ejercicio 5


const filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true;

//Apartado 1
filterInput.addEventListener("input", e => {
    //Teniendo en cuenta las mayúsculas (case sensitive)
    // displayedBooks = books.filter(book => book.titulo.includes(e.target.value));

    //Sin tener en cuenta las mayúsculas
    displayedBooks = books.filter(book => {
        // const upperTitle = book.titulo.toUpperCase();
        // const upperInputValue = e.target.value.toUpperCase();
        
        // return upperTitle.includes(upperInputValue);

        return book.title.toUpperCase().includes(e.target.value.toUpperCase());

    });

    updateTable();
});

//Apartado 2
priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    displayedBooks.sort((book1, book2) => {
        return ascendingOrder   ? book1.precio - book2.precio
                                : book2.precio - book1.precio;
    });

    updateTable();

});


