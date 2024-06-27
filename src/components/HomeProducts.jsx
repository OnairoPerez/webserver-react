import React from 'react'

//Estilos css
import '../css/products.css';

export default function HomeProducts({dataProducts}) {
  return (
    <section id="productos">
      <div>
        <h2>Productos</h2>
        <p style={{textAlign: 'center'}}>
          No te puedes perder nuestra <br/> selección de los productos más <br/> 
          comprados por nuestros clientes, <br/> que incluye desde alimentos <br/>
          y bebidas hasta artículos de <br/> limpieza e higiene. Todos ellos <br/>
          de la mejor calidad y con la <br/> garantía de nuestra tienda
        </p>
      </div>
      <div>
        {dataProducts.map((product) => (
          <ProductsCard img={product.image} name={product.nombre}/>
        ))}
      </div>
    </section>
  )
}

function ProductsCard({img, name}) {
  return (
    <article>
      <img src={img} alt={name} />
      <p>{name}</p>
      <button>Carrito</button>
    </article>
  )
}
