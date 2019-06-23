import React, { useState } from 'react'

const SearchForm = (props) => {
    const [queryString, setQueryString] = useState("")
    const handleSearch = (event) => {
        event.preventDefault()
        props.searchMyBooks(queryString)
    }
    const handleAdd = (event) => {
        event.preventDefault()
        setQueryString("")
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
                <button onClick={handleSearch} >Search</button>
                <button onClick={handleAdd} >Add</button>
            </form>
        </div>
    )
}

export default SearchForm