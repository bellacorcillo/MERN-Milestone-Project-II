import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Food from './pages/food';
import Adventure from './pages/adventure';
import Historical from './pages/historical';
import Shopping from './pages/shopping';
import Nightlife from './pages/nightlife';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/adventure" element={<Adventure />} />
                    <Route path="/shopping" element={<Shopping />} />
                    <Route path="/historical" element={<Historical />} />
                    <Route path="/nightlife" element={<Nightlife />} />
                </Routes>
            </Router>
            <h1 className="App-header"></h1>
        </div>
    );
}

export default App;