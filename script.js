const bookshelf = {};
bookshelf.books = [];

bookshelf.addBook = function (title, author) {
  let book = {};
  book.title = title;
  book.author = author;
  this.books.push(book);
};

bookshelf.addBook("a", "b");
bookshelf.addBook("d", "c");
bookshelf.addBook("f", "b");
// console.log(bookshelf.books);

bookshelf.listBooks = function () {
  let list1Books = [];
  this.books.forEach((book) => {
    list1Books.push(book.title);
  });
  //   console.log(list1Books);
  return list1Books;
};

let list = bookshelf.listBooks();
console.log(list);

bookshelf.removeBook = function (titleToRemove) {
  this.books.forEach((book, index) => {
    if (titleToRemove == book.title) {
      this.books.splice(index, 1);
    }
  });
};

bookshelf.removeBook("f");

/* Задача
console.log(bookshelf.listBooks());
Давайте создадим объект bookshelf (книжная полка) с тремя методами:<br>
addBook() - запрашивает название книги и автора, затем добавляет их в массив книг на полке.<br>
listBooks() - выводит список всех книг на полке.<br>
removeBook() - запрашивает название книги, затем удаляет её из полки, если она есть.<br>
*/

// Новый функционал

// Получаем кнопки и инпуты

const btnAddBook = document.getElementById("btn-add-book");

const addBookAuthor = document.getElementById("add-book-author");
const addBookTitle = document.getElementById("add-book-title");

const btnRemoveBook = document.getElementById("btn-remove-book");

const removeBookAuthor = document.getElementById("remove-book-author");
const removeBookTitle = document.getElementById("remove-book-title");

const btnShowList = document.getElementById("btn-show-list");
const textArea = document.getElementById("textarea-show");

// Слушаем событие клика и вешаем на него разблокировку input

function unlockInputsAddBook() {
  console.log("Кнопку 'добавить книгу' нажали");
  addBookAuthor.disabled = false;
  addBookTitle.disabled = false;
  removeBookAuthor.disabled = true;
  removeBookTitle.disabled = true;
  textArea.disabled = true;
}

btnAddBook.addEventListener("click", unlockInputsAddBook);

function unlockInputsRemoveBook() {
  console.log("Кнопку 'удалить книгу' нажали");
  removeBookAuthor.disabled = false;
  removeBookTitle.disabled = false;
  addBookAuthor.disabled = true;
  addBookTitle.disabled = true;
  textArea.disabled = true;
}

btnRemoveBook.addEventListener("click", unlockInputsRemoveBook);

function showList() {
  console.log("Кнопку 'показать список' нажали");
  textArea.disabled = false;
  removeBookAuthor.disabled = true;
  removeBookTitle.disabled = true;
  addBookAuthor.disabled = true;
  addBookTitle.disabled = true;
}

btnShowList.addEventListener("click", showList);
