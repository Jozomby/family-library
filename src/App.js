import React, { useState } from 'react';
import Header from './components/header'
import BookList from './components/book_list'
import AddList from './components/add_list'
import './App.css';

function App() {
  // Populate this from Firebase
  const [books, setBooks] = useState(
    [
      {
          title: 'Mistborn',
          author: 'Brandon Sanderson'
      },
      {
          title: 'The Hero and the Crown',
          author: 'Robin McKinley'
      },
      {
          title: 'The Seer and the Sword',
          author: 'Victoria Hanley'
      }
    ]
  )
  const [addResults, setAddResults] = useState([])
  const [activeFilter, setActiveFilter] = useState(null)
  const [isAdding, setIsAdding] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const searchMyBooks = (queryString) => {
    setIsSearching(true)
    setActiveFilter(queryString)
    // Make a call to FireBase to find by queryString
    setBooks([books[0]])
  }
  const sortBooks = (column) => {
    const reversedBooks = books.reduce((accumulator, book) => {
      return [book, ...accumulator]
    }, [])
    // Make a call to FireBase to get books matching activeFilter, sorted by column
    setBooks(reversedBooks)
  }
  const handleAdd = () => {
    setIsAdding(true)
    // Make a call to Google Books to get books matching activeFilter
    setAddResults([
      {
        title: "Fall of a Kingdom",
        author: "Hilari Bell"
      },
      {
        title: "Five Kingdoms",
        author: "Brandon Mull"
      }
    ])
  }
  const cancelAdd = () => {
    setIsAdding(false)
    setAddResults([])
  }
  const cancelSearch = () => {
    setIsSearching(false)
    // Make a call to Firebase to get all the books
    setBooks([
      {
          title: 'Mistborn',
          author: 'Brandon Sanderson'
      },
      {
          title: 'The Hero and the Crown',
          author: 'Robin McKinley'
      },
      {
          title: 'The Seer and the Sword',
          author: 'Victoria Hanley'
      }
    ])
  }
  const handleSelection = (book) => {
    // Make a call to FireBase to add the book
    setBooks([...books, book])
    setIsAdding(false)
    setAddResults([])
  }
  return (
    <div className="App">
      <Header
        searchMyBooks = {searchMyBooks}
        cancelSearch = {cancelSearch}
        onAdd = {handleAdd}
        cancelAdd = {cancelAdd}
        isAdding = {isAdding}
        isSearching = {isSearching}
      />
      {!isAdding && (<BookList books = {books} sortBooks = {sortBooks} />)}
      {isAdding && (<AddList choices = {addResults} onSelection = {handleSelection} />)}
    </div>
  );
}

export default App;
