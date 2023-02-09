import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Form from './pages/Form/Form';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<List/>}/>
        <Route path='/Form' element ={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
