import { useContext } from 'react';
import BooksContext from '../context/books.jsx';

function useBooksContext() { 
    return useContext(BooksContext);
}

export default useBooksContext;