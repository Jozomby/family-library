import React from 'react'
import SearchForm from './search_form'

const Header = (props) => {
    const title = "Family Library"
    return (
        <div>
            <h1>{title}</h1>
            <SearchForm
                searchMyBooks = {props.searchMyBooks}
                onAdd = {props.onAdd}
                cancelAdd = {props.cancelAdd}
                cancelSearch = {props.cancelSearch}
                isAdding = {props.isAdding}
                isSearching = {props.isSearching}
            />
        </div>
    )
}

export default Header