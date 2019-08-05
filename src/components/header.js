import React from 'react'
import SearchForm from './search_form'
import '../css/header.css'

const Header = (props) => {
    const title = "Family Library"
    return (
        <div className="header">
            <h1>{title}</h1>
            <SearchForm
                searchMyBooks = {props.searchMyBooks}
                onAdd = {props.onAdd}
                cancelAdd = {props.cancelAdd}
                cancelSearch = {props.cancelSearch}
                isAdding = {props.isAdding}
                isSearching = {props.isSearching}
                shouldClearSearchBar = {props.shouldClearSearchBar}
                resetShouldClearSearchBar = {props.resetShouldClearSearchBar}
            />
        </div>
    )
}

export default Header