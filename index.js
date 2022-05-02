import { DateTime } from './node_modules/luxon/build/es6/luxon.js';
import Book from './modules/bookClass.js';
import BookList from './modules/getBookClass.js';

const listLink = document.querySelector('#list-link');
const addNewLink = document.querySelector('#addNew-link');
const contact = document.querySelector('#contact-link');

const listSection = document.querySelector('.list');
const addNewSection = document.querySelector('.addNew');
const contactSection = document.querySelector('.contact');

listLink.addEventListener('click', () => {
  listLink.classList.add('active');
  listLink.classList.remove('inActive');
  addNewLink.classList.remove('active');
  addNewLink.classList.add('inctive');
  contact.classList.remove('active');
  contact.classList.add('inActive');
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewLink.addEventListener('click', () => {
  listLink.classList.remove('active');
  listLink.classList.add('inActive');
  addNewLink.classList.add('active');
  addNewLink.classList.remove('inActive');
  contact.classList.remove('active');
  contact.classList.add('inActive');
  listSection.style.display = 'none';
  addNewSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contact.addEventListener('click', () => {
  listLink.classList.remove('active');
  listLink.classList.add('inActive');
  addNewLink.classList.remove('active');
  addNewLink.classList.add('inActive');
  contact.classList.add('active');
  contact.classList.remove('inActive');
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

const dateTime = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');
document.querySelector('.dateNtime').textContent = dateTime;

class BookUI {
  static displayBooks() {
    const books = BookList.getList();
    books.forEach((book) => BookUI.addBooks(book));
  }

  static addBooks(book) {
    const list = document.querySelector('#book-Collection');
    const bookRow = document.createElement('tr');
    bookRow.innerHTML = `<th id="th1">${book.title}</th>
      <th id="th2">${`by ${book.author}`}</th>
     <th id="th3"> <button class="delete">Remove</button></th>
      `;
    list.appendChild(bookRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFilds() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', BookUI.displayBooks);
document.querySelector('#bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);
  BookUI.addBooks(book);
  BookList.addItem(book);
  BookUI.clearFilds();
});
document.getElementById('book-Collection').addEventListener('click', (e) => {
  BookUI.deleteBook(e.target);
  // eslint-disable-next-line max-len
  BookList.deleteItem(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});