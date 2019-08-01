import React from 'react'
import '../css/search_form.css'

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
        <div className="sort_buttons"> 
            <button onClick={sortByTitle}>Sort By Title</button>
            <button onClick={sortByAuthor}>Sort By Author</button>
        </div>
    )
}

export default SortHeader