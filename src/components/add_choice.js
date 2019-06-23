import React from 'react'

const AddChoice = (props) => {
    const handleClick = () => {
        props.onSelection(props.choice)
    }
    return (
        <tr>
            <td>{props.choice.title}</td>
            <td>{props.choice.author}</td>
            <td><button onClick={handleClick}>Add</button> </td>
        </tr>
    )
}

export default AddChoice