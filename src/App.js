import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration';
import Genres from './pages/Genres';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Registration/>}/>
        <Route path='/Genres' element={ <Genres/>}/>
      </Routes>
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
