import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Food from './pages/food';
import Adventure from './pages/adventure';
import Historical from './pages/historical';
import Shopping from './pages/shopping';
import Nightlife from './pages/nightlife';

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/food' element={<Food />} />
                <Route path='/adventure' element={<Adventure />} />
                <Route path='/shopping' element={<Shopping />} />
                <Route path='/historical' element={<Historical />} />
                <Route path='/nightlife' element={<Nightlife />} />
            </Routes>
        </Router>
    );
}
 
export default App;