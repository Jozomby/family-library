import React from 'react'
import SortHeader from './sort_header'
import Books from './books'
import '../css/search_form.css'

const BookList = (props) => {
    return (
    <div>
        <SortHeader sortBooks={props.sortBooks} />
        <Books books={props.books} />
    </div>
    )
}

export default BookList
