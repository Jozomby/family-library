import React from 'react'
import '../css/Books.css'


const Books = (props) => {
    return (
        <table cellpadding="0" cellspacing="0" width="100%">
            <tbody className="table_body">
                {props.books.map(book => (
                    <tr>
                        <td className="title">{book.title}</td>
                        <td className="author">{book.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Books