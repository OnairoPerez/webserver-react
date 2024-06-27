import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Componentes
import Home from '../page/Home';

export default function router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<p><strong>Error 404</strong> Página no encontrada</p>}/>
    </Routes>
  )
}
