import React from 'react'

const SortHeader = (props) => {
    const sortByTitle = () => {
        sort('title')
    }
    const sortByAuthor = () => {
        sort('author')
    }
    const sort = (field) => {
        props.sortBooks(field)
    }
    return (
        <div>
            <button onClick={sortByTitle}>Title</button>
            <button onClick={sortByAuthor}>Author</button>
        </div>
    )
}

export default SortHeader