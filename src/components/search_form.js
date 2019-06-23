import React, { useState } from 'react'

const SearchForm = (props) => {
    const [queryString, setQueryString] = useState("")
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
        props.cancelAdd()
    }
    const cancelSearch = (event) => {
        event.preventDefault()
        props.cancelSearch()
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="search_term"
                    placeholder="Title or Author"
                    value={queryString}
                    onChange={event => setQueryString(event.target.value)}
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