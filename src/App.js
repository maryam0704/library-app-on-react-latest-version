import { useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import AddBook from './components/AddBook';
// import DeleteBook from './components/DeleteBook';
// import ReserveBook from './components/ReserveBook';
import BookList from './components/BookList';

function App() {
  const [state, setState] = useState(false);
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
  ]);
  // const [deleteBook, setDelBooks] = useState("");


      // const books = [
      //   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      //   { title: "To Kill a Mockingbird", author: "Harper Lee" },
      //   { title: "1984", author: "George Orwell" },
      // ];

  function handleState() {
    setState(!state);
  }

   function handleDeleteBook(index) {
     const updatedBooks = [...books];
     updatedBooks.splice(index, 1);
     setBooks(updatedBooks);
   }
  function handleReserveBook(index) {
    const updatedBooks = [...books];
    updatedBooks[index].reserved = !updatedBooks[index].reserved;
      alert(`Book "${books[index].title}" reserved!`);
    setBooks(updatedBooks);
  }
  
  return (
    <div className="App">
      <MainComponent onToggle={handleState} isLoggedIn={state} />
      <AddBook setBooks={setBooks} books={books} />
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onReserveBook={handleReserveBook}
      />
      {/* <DeleteBook setDelBooks={setDelBooks} deleteBook={deleteBook} /> */}
      {/* <ReserveBook /> */}
    
    </div>
  );
}

export default App;
