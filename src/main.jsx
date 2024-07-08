import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importar route
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';

import App from './App.jsx'
import './index.css'
import Collections from './pages/Collections.jsx';
import Order from './pages/Order.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route element={ <App />}>
        <Route path="/" element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/order' element={<Order />} />
        <Route path='/likes' element={<Collections />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Route>

    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
