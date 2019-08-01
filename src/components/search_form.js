import React, { useState, useEffect } from 'react'
import '../css/search_form.css'

const SearchForm = (props) => {
    const [queryString, setQueryString] = useState("")
    useEffect(
        () => {
            if (props.shouldClearSearchBar === true) {
                setQueryString('')
                props.resetShouldClearSearchBar()
            }
        },
        [props.shouldClearSearchBar]
    )
    const handleSearch = (event) => {
        event.preventDefault()
        props.searchMyBooks(queryString)
    }
    const handleAdd = (event) => {
        event.preventDefault()
        props.onAdd()
    }
    const cancelAdd = (event) => {
        event.preventDefault()
        setQueryString('')
        props.cancelAdd()
    }
    const cancelSearch = (event) => {
        event.preventDefault()
        setQueryString('')
        props.cancelSearch()
    }
    return (
        <div className="search_form">
            <form>
                <input
                    type="text"
                    name="search_term"
                    placeholder="Title or Author"
                    value={queryString}
                    onChange={event => setQueryString(event.target.value)}
                    className="searchBar"
                />
                { !props.isAdding && (<button onClick={handleSearch} >Search</button>) }
                { props.isAdding && (<button onClick={cancelAdd} >Cancel</button>) }
                { props.isSearching && (<button onClick={cancelSearch} >Cancel</button>)}
                { !props.isSearching && (<button onClick={handleAdd} >Add</button>) }
            </form>
        </div>
    )
}

export default SearchForm