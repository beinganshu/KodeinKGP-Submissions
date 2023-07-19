import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [data,setData]= useState({
    content: 'Quote will appear here.',
    author: 'Author will appear here.',
    tags:['Nice']
  }
  );

  function getQuote(){
    try{
      fetch('https://api.quotable.io/random').then(
      response => response.json()).then(
        (quote)=>{
          setData(quote);
        }
      )
    }
    catch(e){
      console.log(e);
    }
  }

  return(
    <div className="App">
      <header className="App-header">
        <h2 className='text'>Random Quote Generator</h2>
        <h3 className='quote'>Quote:{data.content}</h3>
        <h4 className='author'>Author:{data.author}</h4>
        <h4 className='tags'>Tag: {data.tags[0]}</h4>
        <button className='generator' onClick={getQuote}>GET QUOTE</button>
      </header>
    </div>
  );
}

export default App;
