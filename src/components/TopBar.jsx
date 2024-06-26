import React from 'react';
import logo from '../assets/image/logo.webp';
import lupa from '../assets/icons/lupa.webp';
import carrito from '../assets/icons/carrito.webp';
import user from '../assets/icons/user.webp';
import '../css/topBar.css';

export default function TopBar() {
  return (
    <nav id="TopBar">
        <div id="right" class="TopBarElements">
            <img id="logo" src={logo} alt="Logo Autoservicio Popular" />
        </div>
        <div id="center" class="TopBarElements">
            <input id="SearchInput" type="text" placeholder="Buscar Producto"/>
            <button id="SearchButton">
                <img id="SearchImg" src={lupa} alt="Lupa color negro" />
            </button>
        </div>
        <div id="left" class="TopBarElements">
            <img src={carrito} class="leftImg" alt="Icono carrito de compras"/>
            <img src={user} class="leftImg" alt="Icono de usuario"/>
        </div>
    </nav>
  )
}
