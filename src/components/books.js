import React from 'react'

const Books = (props) => {
    return (
        <table>
            <tbody>
                {props.books.map(book => (
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Books