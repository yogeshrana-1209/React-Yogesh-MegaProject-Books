import { useState } from "react";
//import BooksContext from "../context/books";
import  useBooksContext  from "../hooks/use-books-context";

// function BookCreate({ onCreate }) {
  function BookCreate() {

    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      createBook(title);
      setTitle('');
    }; 

  return (
    <>
      <div className="border-white flex flex-col justify-center border-solid bg-blue-500 border-2 rounded-xl shadow-lg shadow-blue-500/50 p-3 m-3"> 
        <h2 className="border-2 rounded-lg text-center bg-white text-blue-500 px-3 py-3 mb-5">Add a Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center">
          <label className="text-white pr-2">Book Title:</label>
            
            <input value={title} onChange={handleChange}/>
            <br/>
            <button >Create !</button>
          </div>
            
        </form>
    </div>
    </>
  );
}

export default BookCreate;
