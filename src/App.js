import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './Components/Navbar';
import { Food } from './pages/Food';
import { Retail } from './pages/Retail';
import { Community } from './pages/Community';
import './css/main.css';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/food' element={<Food />} />
          <Route path='/retail' element={<Retail />} />
          <Route path='/community' element={<Community />} />
        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
