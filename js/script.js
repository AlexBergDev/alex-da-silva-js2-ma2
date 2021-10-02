let listItems = [
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

createList();

function createList() {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    listItems.forEach(function (item) {
        listContainer.innerHTML += `<li>ISBN: <span>${item.isbn}</span> Title: <span>${item.title}</span> <i class="fa fa-trash" data-item="${item}"></li</li>`;
    });

    const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    });
}

function removeFromList() {
    console.log(event);

    const deleteThisItem = event.target.dataset.item;

    const newList = listItems.filter(function (item) {
        if (deleteThisItem !== item) {
            return true;
        }
    });

    listItems = newList;

    createList();
}