import React from 'react';

function TableRow({ image, first, last, email, phone }) {
    return(
        <tr>
            <td><img src={image} alt="Thumbnail"></img></td>
            <td>{first}</td>
            <td>{last}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default TableRow;
