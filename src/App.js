import React, { useState, useEffect } from 'react';
import './App.scss';
import Papa from 'papaparse';
import AnimeQuotes from './AnimeQuotes.csv';
import QuoteBox from './components/QuoteBox';
import Character from './components/Character';

function App() {
  const [quote, setQuote] = useState('If You Win You Live If You Lose You Die If You Don t Fight You Can t Win')
  const [author, setAuthor] = useState('Eren')
  const [quotesArray, setQuotesArray] = useState(null)

  const fetchAnimeQuotes = async () => {
    Papa.parse(AnimeQuotes, {
      download: true,
      delimiter: ',',
      complete: ((result) => {
        setQuotesArray(result.data.slice(1).filter(Quote => {
          return Quote[2] === 'Attack on Titan'
        }))
      })
    })
  }

  useEffect(() => {
    fetchAnimeQuotes()
  }, [])

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setAuthor(quotesArray[randomInteger][1])
    setQuote(quotesArray[randomInteger][0])
  }

  return (
    <div className="App">
      <header className="App-header">
        <QuoteBox quote={quote} author={author} getRandomQuote={getRandomQuote}/>
        <Character author={author}/>
      </header>
    </div>
  );
}

export default App;