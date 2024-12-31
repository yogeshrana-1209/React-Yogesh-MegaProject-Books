//import { useState, useContext } from "react";
import { useState } from "react";
//import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}) {

    const [title, setTitle] = useState(book.title);
    //const {editBookById} = useContext(BooksContext);
    const {editBookById} = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('New title', title);
        // onEdit(book.id, title);
        // onSubmit(book.id, title);
        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <div className="rounded-lg text-center text-blue-500 mb-5">
            <h2 className="pt-3 pb-3">Edit Book</h2>
            <form className="text-black"
         onSubmit={handleSubmit} >
            <label className="mr-2 text-black" for="title">Title : </label>
            <input name="title" className="text-black mr-2 mb-5" value={title} onChange={handleChange} />
            <button className="btn btn-success">
                Save
            </button>
        </form>
        </div>
        
    );
}

export default BookEdit;