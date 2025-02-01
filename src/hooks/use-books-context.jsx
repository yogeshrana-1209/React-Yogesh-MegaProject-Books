// import { useContext } from 'react';
// import BooksContext from '../context/books.jsx';

// function useBooksContext() { 
//     return useContext(BooksContext);
// }

// export default useBooksContext;

import { useContext } from 'react';
import BooksContext from '../context/BooksContext';

 const useBooks = () => {
  const context = useContext(BooksContext);
  
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  
  return context;
};

export default useBooks;