function Book(id, titulo, autor, ventas, precio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
};

const books = [
    new Book("1", "The Selfish Gene", "Richard Dawkins", "740120","12"),
    new Book("2", "The God Delusion", "Richard Dawkins", "610120", "15"),
    new Book("3", "La nueva mente del emperador", "Roger Penrose", "120000", "17"),
    new Book("4", "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "910120", "16"),
    new Book("5", "The Selfish Gene", "Richard Dawkins", "740120","12"),
    new Book("6", "A tres más un destello cada veinte segundos", "José Antonio García García", "20000", "12"),
    new Book("7", "La choza del seppuku", "José Antonio García García", "40000", "15"),
    new Book("8", "El triunfo de la locura", "José Antonio García García", "15000", "16"),
    new Book("9", "100 años de Soledad", "Gabriel García Márquez", "824620", "20"),
    new Book("10", "Divinas Palabras","Ramón María del Valle-Inclán","936540", "22"),
  ];

//   const bookRow = document.querySelector("newrow");
//   const bookProperty = document.querySelector("properties");
const table = document.querySelector("#bodytable");

books.forEach(book => {
    const newBook = document.createElement("tr")
    newBook.textContent = book;
    table.appendChild(newbook);
});

  for (const propertyBooks in book) {
      const value = book[propertyBooks];
      console.log(`propertyBooks: ${propertyBooks}, value: ${value}`);
  }
