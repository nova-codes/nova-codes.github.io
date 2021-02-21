import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;