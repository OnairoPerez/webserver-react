import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Estilos css
import './css/index.css';

//Componentes
import Topbar from './components/TopBar';
import Footer from './components/Footer';
import Categories from './components/Categories';
import HomeProducts from './components/HomeProducts.jsx';

//Datos - Esta infomación se debería obtener de la API
const category = require('./data/category.js');
let product = require('./data/products.js');

//Ordenar productos
product = orderProducts(product);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    <Categories categoryData={category}/>
    <HomeProducts dataProducts={product}/>
    <Footer />
  </React.StrictMode>
);

//Obtener los primeros cuatro productos más comprados
function orderProducts(data) {
  data.sort((a, b) => b.comprados - a.comprados);
  return data.slice(0, 4);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
