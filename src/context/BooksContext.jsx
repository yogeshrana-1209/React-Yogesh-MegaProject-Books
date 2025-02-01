import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { booksApi } from '../api/booksApi';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    try {
      const data = await booksApi.fetchBooks();
      setBooks(data);
    } catch (error) {
      // Handle error appropriately
      console.error('Failed to fetch books:', error);
    }
  }, []);

  const createBook = async (title) => {
    try {
      const newBook = await booksApi.createBook(title);
      setBooks([...books, newBook]);
      return newBook;
    } catch (error) {
      console.error('Failed to create book:', error);
      throw error;
    }
  };

  const editBookById = async (id, newTitle) => {
    try {
      const updatedBook = await booksApi.updateBook(id, newTitle);
      const updatedBooks = books.map((book) => 
        book.id === id ? { ...book, ...updatedBook } : book
      );
      setBooks(updatedBooks);
      return updatedBook;
    } catch (error) {
      console.error('Failed to edit book:', error);
      throw error;
    }
  };

  const deleteBookById = async (id) => {
    try {
      await booksApi.deleteBook(id);
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Failed to delete book:', error);
      throw error;
    }
  };

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

// Add prop validation
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider };
export default BooksContext;