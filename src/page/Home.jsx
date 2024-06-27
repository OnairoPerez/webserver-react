import React from 'react'

//Componentes
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Categories from '../components/Categories';
import HomeProducts from '../components/HomeProducts';

//Imágenes
import banner from '../assets/image/banner.webp'
import moneda from '../assets/image/moneda.webp'

//Estilos css
import '../css/home-page.css';
import '../css/index.css';

//Datos - Esta infomación se debería obtener de la API
const category = require('../data/category.js');
let product = require('../data/products.js');

//Ordenar productos
product = orderProducts(product);

export default function Home() {
  return (
    <main>
      <TopBar/>
      <section id="slogan">
        <div>
          <h1>Autoservicio Popular</h1>
          <p>Descubre los mejores productos para tu hogar al mejor precio, con la calidad, variedad y servicio que solo nosotros te podemos ofrecer.</p>
        </div>
        <img src={banner} alt="Estanterías enfoque central" />
      </section>
      <Categories categoryData={category}/>
      <HomeProducts dataProducts={product}/>
      <section id="cta">
        <img src={moneda} alt="Icono de moneda" />
        <div>
          <h2>Puntos fidelidad</h2>
          <p>
            Aprovecha nuestro sistema de puntos y canjea los 
            mejores productos por tu fidelidad. Regístrate 
            y empieza a acumular puntos con cada compra que 
            hagas.
          </p>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

//Obtener los primeros cuatro productos más comprados
function orderProducts(data) {
  data.sort((a, b) => b.comprados - a.comprados);
  return data.slice(0, 4);
}
