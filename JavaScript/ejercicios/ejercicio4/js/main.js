function Book(id, titulo, autor, ventas, precio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
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

const booksTbody = document.querySelector("#tablebody");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

function updateTable() {
    booksTbody.innerHTML = "";  //Vacía el tbody por completo

    //Generamos de nuevo todas las filas
    books.forEach(book => {
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
};

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        updateTable();
    }
}; 

updateTable();

addBookButton.addEventListener("click", e => {
    e.preventDefault();

    const newId = books[books.length-1].id + 1;

    books.push(new Book(
        newId,
        titleInput.value,
        authorInput.value,
        salesInput.value,
        priceInput.value,

    ));

    updateTable();

    titleInput.value = "",
    authorInput.value = "",
    salesInput.value = "",
    priceInput.value = "",

});

