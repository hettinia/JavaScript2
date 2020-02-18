//array of objects store books details
const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      alreadyRead: true
    }
  ];

//creat header DOM for page header
const body = document.querySelector('body');
const header = document.createElement('h1');
header.innerText = "Books List";
body.appendChild(header);

//creat the ul DOM to show the books
const listBook = document.createElement('ul');
listBook.style = "list-style: none; display: flex; flex-wrap: wrap; padding: 20px; width: calc( 100% - 41px);";
body.appendChild(listBook);


//loop through books array to manipulate li for each one
for (let i=0; i<books.length; i++){

  //creat li DOM for each book
  const book = document.createElement('li');
  book.style = "width: calc(25% - 51px); margin: 15px; padding: 10px; min-width: 350px;"
  listBook.appendChild(book);

  //set the book title and author for each book
  const bookTitle = document.createElement('p');
  bookTitle.innerText = books[i].title +', '+ books[i].author;
  bookTitle.style.textAlign = "center";
  book.appendChild(bookTitle);

  //set book img for each book
  const bookImg = document.createElement('img');
  bookImg.src = i+".jpg"; //books images stored in local storage
  bookImg.style = "margin: auto; display: block;";
  book.appendChild(bookImg);

  //if the book is readed set green border and if not set red border
  if (books[i].alreadyRead === true){
    book.style.border = "6px solid green"
  }
  else {
    book.style.border = "6px solid red"
  }

}






