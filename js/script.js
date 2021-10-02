import { emptyList } from "./constants/messages.js"

let books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

createBooks();

function createBooks() {
    const bookContainer = document.querySelector("ul");

    bookContainer.innerHTML = "";

    if (books.length === 0) {
        bookContainer.innerHTML = emptyList;
    }

    books.forEach(function (book) {
        bookContainer.innerHTML += `<li>ISBN: <span>${book.isbn}</span> 
                                        Title: <span>${book.title}</span> 
                                        <i class="fas fa-times" 
                                        data-book="${book.isbn}"></li>`;
    });

    const removeIcon = document.querySelectorAll("li i");

    removeIcon.forEach(function (remove) {
        remove.addEventListener("click", removeBook);
    });
}

function removeBook() {

    const bookToDelete = event.target.dataset.book;

    const UpdatedArray = books.filter(function (book) {
        if (bookToDelete !== book.isbn) {
            return true;
        }
    });

    books = UpdatedArray;

    createBooks();
}