import { useState } from "react";
// import BookList from "./BookList";

let newBook = 0;

export default function AddBook({ setBooks, books }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    // const [books, setBooks] = useState([]);
    
    return (
        <>
            <h1>
                new book list
            </h1>

            <input  placeholder="book name"  value={title}
                onChange={e => setTitle(e.target.value)} />
            <br/>
            <input  placeholder="author name" value={author}
                onChange={e => setAuthor(e.target.value)} />
            
            <button onClick={() => {
                setBooks([...books,
                    { id: newBook++, title: title, author: author }
                ]);
            
        }}> add books
                
            </button>

            <ul>

                {/* {books.map(book => (
                    <li key={book.id}>{book.title}  by {book.author }</li>
                ))} */}
                {/* <BookList books={books} /> */}
            </ul>
            
              </>
    )
}