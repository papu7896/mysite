import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/home';
import About from './component/about'
import Skills from './component/skills';
import Experience from './component/experience'
import Contact from './component/contact'

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path='/home' element={<Home />} />
  
    
          <Route path='/about' element={<About />} />
    
    
      <Route path='/skills' element={<Skills />} />
      <Route path='/experience' element={<Experience />} />
  
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Home />} />
    </Routes>

   </BrowserRouter>
  );
}

export default App;
