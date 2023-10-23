import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration';
import Genres from './pages/Genres';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Registration/>}/>
        <Route path='/Genres' element={ <Genres/>}/>
        <Route path='/Profile' element={ <Profile/>}/>
      </Routes>
    </BrowserRouter>
  
   
    </>
  );
}

export default App;
