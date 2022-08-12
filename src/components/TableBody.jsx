import React from "react";

const TableBody = (props) => (
  <tbody>
    { props.books.map( (book, index ) => (
      <tr key = {book.id} >
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <button 
            className="botao remover"
            onClick={ () => props.removeRow(book.id)}
            >Remover</button>
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
