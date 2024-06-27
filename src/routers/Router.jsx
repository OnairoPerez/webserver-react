import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Componentes
import Home from '../page/Home';
import BaseTemplate from '../page/BaseTemplate';
import LoginForm from '../components/LoginForm';

export default function router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<BaseTemplate><LoginForm/></BaseTemplate>}/>
        <Route path='*' element={<p><strong>Error 404</strong> Página no encontrada</p>}/>
    </Routes>
  )
}
