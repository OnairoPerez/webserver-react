import React from 'react'

//Imagenes
import ubicacion from '../assets/networks/mapas-y-banderas.webp'
import email from '../assets/networks/correo-electronico.webp'
import facebook from '../assets/networks/facebook.webp'
import telefono from '../assets/networks/llamada-telefonica.webp'
import tienda from '../assets/networks/tienda.webp'
import whatsapp from '../assets/networks/whatsapp.webp'

//Estilos css
import '../css/footer.css'

export default function Fooder() {
  return (
    <footer>
      <div>
        <img src={ubicacion} alt="Icono de ubicación"/>
        <p>Dirección</p>
        <span>Sandoná Nariño</span>
      </div>
      <div>
        <img src={telefono} alt="Icono de teléfono"/>
        <p>Teléfono</p>
        <span>+57 300 0000 000</span>
      </div>
      <div>
        <img src={email} alt="Icono de correo electrónico"/>
        <p>Correo Electrónico</p>
        <a href="">ejemplo@email.com</a>
      </div>
      <div>
        <p style={{gridColumn: 'span 2'}}>Redes sociales</p>
        <img src={facebook} alt="Icono de red social Facebook" style={{gridColumnStart: '1', gridRowStart: '2'}}/>
        <a href="" style={{gridColumnStart: '2', gridRowStart: '2'}}>Facebook</a>
        <img src={whatsapp} alt="Icono de red social Whatsapp" style={{gridColumnStart: '1', gridRowStart: '3'}}/>
        <a href="" style={{gridColumnStart: '2', gridRowStart: '3'}}>Whatsapp</a>     
      </div>
      <div>
        <img src={tienda} alt="Icono de una tienda"/>
        <p>Horarios</p>
        <span>
            De lunes a sabado desde 7:00 de la mañana hasta 8:00 de la noche
        </span>
    </div>
    <div>
        <a href="" style={{gridColumnStart: '1', gridColumn: 'span 2'}}>Politicas de envío y devolución</a>
        <a href="" style={{gridRowStart: '2', gridColumn: 'span 2'}}>Formas de pago</a>
    </div>
    </footer>
  )
}