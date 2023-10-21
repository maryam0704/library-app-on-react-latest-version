import DeleteBook from "./DeleteBook";
import ReserveBook from "./ReserveBook";
const BookList = ({ books,  onDeleteBook, onReserveBook }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <strong>{book.title}</strong> by {book.author}
                        <DeleteBook onDeleteClick={() => onDeleteBook(index)} />
            <ReserveBook
              onReserveClick={() => onReserveBook(index)}
              isReserved={book.reserved}
            />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
