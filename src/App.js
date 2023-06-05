import React, { Fragment } from 'react'
import Home from './Pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Products from './Pages/Products/Products';


const App = () => {

  return (
   
      <Fragment>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/link' />
          <Route path='/products' element={<Products />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<div className='text-center text-danger'>page not found</div>}/>
        </Routes>

      </Fragment>
      
  )
}

export default App;
