import { useState } from "react";
import PropTypes from "prop-types";  // Import PropTypes
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <h3 className="">
      ID :{book.id} | {book.title}{" "}
    </h3>
  );
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="flex flex-col justify-center border-solid bg-blue-500 border-2 rounded-lg shadow-lg border-white shadow-blue-500/50 p-3 m-3">
      <div className="flex justify-center">
        <img
          className="rounded-lg mx-3 my-3"
          alt="books"
          loading="lazy"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
      </div>

      <div className="bg-green-400 rounded-xl px-1 py-1 mb-3 mx-2 my-2 flex flex-col text-lg justify-center border-4 border-white text-blue-800">
        <h2 className="text-center font-mono text-gray-800 pt-3">Book Title</h2>
        <div className="text-center font-mono text-xl">
        {content}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-black mr-3 border-4 border-green-500" onClick={handleEditClick}>
          Edit
        </button>

        <button className="text-black ml-3 border-4 border-green-500" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

// Prop validation
BookShow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookShow;
