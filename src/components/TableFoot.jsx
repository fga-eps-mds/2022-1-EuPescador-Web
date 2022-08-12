import React from "react";

const TableFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Rodape: Existem {props.nmbBooks} livros na tabela </td>
        </tr>
    </tfoot>
);

export default TableFoot;