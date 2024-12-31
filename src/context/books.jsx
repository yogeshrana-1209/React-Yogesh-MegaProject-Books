import { useCallback, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    // const [count, setCount] = useState(5);

    // const valueToShare = {
    //     count,
    //     incrementCount : () => {
    //         setCount(count + 1);
    //     },
    // };

     //use State function for handle the Books
  const [books, setBooks] = useState([]); 

  const fetchBooks = useCallback(async () => {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
  }, []);

  // const stableFetchBooks = useCallback(fetchBooks,[]);

    const editBookById = async (id,newTitle) => {

      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title : newTitle,
      });
  
      //console.log(response);
      
      const updatedBooks = books.map ((book) => {
        if (book.id === id) {
          return {...book, ...response.data};
        }
      return book;
    });
    setBooks(updatedBooks);
  };
  
    const deleteBookById = async (id) => {
  
      await axios.delete(`http://localhost:3001/books/${id}`);
  
      const updatedBooks = books.filter((book) => { 
        return book.id !== id;
      });
      setBooks(updatedBooks);
    };

    const createBook = async (title) => {
      const response = await axios.post('http://localhost:3001/books', {
        title,
      });

      const updatedBooks = [
        ...books,
        response.data
        //Static Data//Custom ID Generator
        // {
        //   id : Math.round(Math.random() * 9999),
        //   title,
        // }
      ];
      setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    };

    // return <BooksContext.Provider value={valueToShare}>
    return (
     <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
    );
}

export { Provider };

export default BooksContext;