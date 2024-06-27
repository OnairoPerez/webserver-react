import React from 'react';
import { Helmet } from 'react-helmet';

//Imágenes
import logo from '../assets/image/logo.webp';
import lupa from '../assets/icons/lupa.webp';
import carrito from '../assets/icons/carrito.webp';
import user from '../assets/icons/user.webp';

export default function TopBar() {
  return (
    <nav id="TopBar">
        <Helmet>
            <link rel="stylesheet" href="/css/topBar.css" />
        </Helmet>
        <div id="right" class="TopBarElements">
            <img loading='lazy' id="logo" src={logo} alt="Logo Autoservicio Popular" />
        </div>
        <div id="center" class="TopBarElements">
            <input id="SearchInput" type="text" placeholder="Buscar Producto"/>
            <button id="SearchButton">
                <img loading='lazy' id="SearchImg" src={lupa} alt="Lupa color negro" />
            </button>
        </div>
        <div id="left" class="TopBarElements">
            <img loading='lazy' src={carrito} class="leftImg" alt="Icono carrito de compras"/>
            <img loading='lazy' src={user} class="leftImg" alt="Icono de usuario"/>
        </div>
    </nav>
  );
}
