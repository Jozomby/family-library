import React, { useState, useEffect } from "react";
import Header from "./components/header";
import BookList from "./components/book_list";
import AddList from "./components/add_list";
import { db } from "./firestore";
import './css/App.css'

function App() {
  const getAllBooks = async () => {
    const result = await db.collection("books").get();
    return result.docs.map(retrievedBook => {
      return retrievedBook.data();
    });
  };
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function setInitialBooks() {
      const initialBooks = await getAllBooks();
      setBooks(initialBooks);
    }
    setInitialBooks();
  }, books);
  const [addResults, setAddResults] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [shouldClearSearchBar, setShouldClearSearchBar] = useState(false);
  const searchMyBooks = queryString => {
    setIsSearching(true);
    setActiveFilter(queryString);
    // Make a call to FireBase to find by queryString
    setBooks([books[0]]);
  };
  const sortBooks = column => {
    const reversedBooks = books.reduce((accumulator, book) => {
      return [book, ...accumulator];
    }, []);
    // Make a call to FireBase to get books matching activeFilter, sorted by column
    setBooks(reversedBooks);
  };
  const handleAdd = () => {
    setIsAdding(true);
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
    ]);
  };
  const cancelAdd = () => {
    setIsAdding(false);
    setAddResults([]);
  };
  const cancelSearch = async () => {
    setIsSearching(false);
    const initialBooks = await getAllBooks();
    setBooks(initialBooks);
  };
  const handleSelection = async book => {
    db
      .collection("books")
      .add({
        title: book.title,
        author: book.author
      })
      .then(docRef => {
        setBooks([...books, book]);
        setIsAdding(false);
        setShouldClearSearchBar(true);
        setAddResults([]);
      });
  };
  const resetShouldClearSearchBar = () => {
    setShouldClearSearchBar(false);
  };
  return (
    <div className="App">
      <Header
        searchMyBooks={searchMyBooks}
        cancelSearch={cancelSearch}
        onAdd={handleAdd}
        cancelAdd={cancelAdd}
        isAdding={isAdding}
        isSearching={isSearching}
        shouldClearSearchBar={shouldClearSearchBar}
        resetShouldClearSearchBar={resetShouldClearSearchBar}
      />
      {!isAdding && <BookList books={books || []} sortBooks={sortBooks} />}
      {isAdding && (
        <AddList choices={addResults} onSelection={handleSelection} />
      )}
    </div>
  );
}

export default App;
