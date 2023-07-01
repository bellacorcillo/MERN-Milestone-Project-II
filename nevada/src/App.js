import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <h1>Hello, World!</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <link to='/library'>Library</link>
        </li>
      </ul>
      </Router>
    </div>
  );
}

export default App;


