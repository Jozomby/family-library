import React, { useState } from 'react';
import Header from './components/header'
import BookList from './components/book_list'
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
  const [activeFilter, setActiveFilter] = useState(null)
  const searchMyBooks = (queryString) => {
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
  return (
    <div className="App">
      <Header searchMyBooks = {searchMyBooks} />
      <BookList books = {books} sortBooks = {sortBooks} />
    </div>
  );
}

export default App;
