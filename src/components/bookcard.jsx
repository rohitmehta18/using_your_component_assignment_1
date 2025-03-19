// write the book component code here
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
};

export default BookCard;
