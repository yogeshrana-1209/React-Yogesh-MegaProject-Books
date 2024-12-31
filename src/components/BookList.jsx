//import { useContext } from 'react';
import BookShow from './BookShow';
//import BooksContext from '/src/context/books.jsx';
//import { useBooksContext } from '../hooks/use-books-context';
import useBooksContext from '../hooks/use-books-context.jsx';


// function BookList({books, onDelete, onEdit}) {
function BookList(){

    //const { books } = useContext(useBooksContext);
    const { books } = useBooksContext();
    
    // const {count, incrementCount} = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return  (
        <BookShow key={book.id} book={book} />
        );
    });

    return <div className="flex justify-center text-white">
        <div className='text-center justify-center pt-3 pb-3'>
            BookList : {renderedBooks}
            <br/>
            {/* Count: {count}
            <button className='text-black ml-3' onClick={incrementCount}>Increment</button> */}
        </div>
        </div>;
}

export default BookList;