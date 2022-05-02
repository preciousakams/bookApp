class BookList {
  static getList() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addItem(book) {
    const books = BookList.getList();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteItem(title) {
    const books = BookList.getList();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default BookList;