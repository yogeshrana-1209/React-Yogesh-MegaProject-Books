import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {

    const [title, setTitle] = useState('');
    const { createBook, books } = useBooksContext();  // Assuming `books` contains the list of books
    const [error, setError] = useState(null);

    const handleChange = (event) => {
      setTitle(event.target.value);
      if (event.target.value.trim()) {
          setError(null);  // Clear error as the user starts typing
      }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the title is blank
        if (!title.trim()) {
            setError('*Please enter a book title');
        } else {
            setError(null);  // Clear error if title is not blank
            createBook(title);
            setTitle('');  // Clear input after submission
        }
    };

    return (
        <>
            <div className="border-white flex flex-col justify-center border-solid bg-blue-900 border-2 rounded-xl shadow-lg shadow-blue-500/50 p-3 m-3">
                <h2 className="border-2 rounded-lg text-center bg-white text-blue-500 px-3 py-3 mb-5">Add a Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center text-center">
                        <label className="text-white pr-2">Book Title:</label>
                        <input 
                            value={title} 
                            onChange={handleChange} 
                            className="mb-3 p-1 rounded border"
                        />
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                        <br />
                        
                        <button className="btn btn-primary">Create!</button>
                    </div>
                </form>
            </div>

            {/* Book List */}
            <div className="my-5 font-mono text-lg">
                <h2 className="text-center text-3xl font-bold mb-4 text-blue-900">Available Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {books && books.map((book) => (
                        <div key={book.id} className="bg-blue-200 text-blue-900 border-2 border-white p-4 rounded-lg shadow-lg">
                            <h3 className="text-center font-semibold">Book id: {book.id}, Book Name : {book.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookCreate;
