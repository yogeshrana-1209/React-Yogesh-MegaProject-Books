import { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books.jsx';



function App() {

  const {fetchBooks} = useContext(BooksContext);

  //const [count, setCount] = useState(0)

  //use State function for handle the Books
  // const [books, setBooks] = useState([]); 

  // const fetchBooks = async () => {
  //     const response = await axios.get('http://localhost:3001/books');
  //     setBooks(response.data);
  // };

  useEffect(() => { 
    fetchBooks();
  }, []);
  

  // const createBook = async (title) => {
  //   const response = await axios.post('http://localhost:3001/books', {
  //     title
  //   });
    //console.log(response);
    
    // console.log('Need to add book with :',title);

    //BAD CODE!
    // books.push({id : 123 , title: title});
    // console.log(books);
    //setBooks(books);

    // const updatedBooks = [
    //   ...books,
    //   response.data
      //Static Data//Custom ID Generator
      // {
      //   id : Math.round(Math.random() * 9999),
      //   title,
      // }
    // ];
    // setBooks(updatedBooks);
  
 
//   const editBookById = async (id,newTitle) => {

//     const response = await axios.put(`http://localhost:3001/books/${id}`, {
//       title : newTitle
//     });

//     console.log(response);
    
//     const updatedBooks = books.map ((book) => {
//       if (book.id === id) {
//         return {...book, ...response.data};
//       }
//     return book;
//   });
//   setBooks(updatedBooks);
// };

//   const deleteBookById = async (id) => {

//     await axios.delete(`http://localhost:3001/books/${id}`);

//     const updatedBooks = books.filter((book) => { 
//       return book.id !== id;
//     });
//     setBooks(updatedBooks);
//   };

  return (
    <>
    <div className="flex flex-col justify-center font-serif">
      <div className='flex flex-col justify-center'>
        <h1 className="border-4 border-blue-900 border-solid mt-8 text-white text-center rounded-md px-3 py-3 bg-blue-500 shadow-lg shadow-blue-500/50">Books Collection Project</h1>
        </div>
        <br/>
        {/* {books.length} */}
        <div className='flex flex-col justify-center'>
        <h2 className='text-center text-white px-3 py-3'>Reading List</h2>
        {/* <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} /> */}
        <BookList  />
        <BookCreate />
       </div>
    </div>
    </>
  ) 
}

export default App;
