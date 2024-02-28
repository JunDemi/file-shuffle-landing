import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import './asset/Main.scss';
import ScrollTopButton from './components/ScrollTopButton';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <ScrollTopButton/>
    </BrowserRouter>
  );
}

export default App;
