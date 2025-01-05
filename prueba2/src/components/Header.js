// src/components/Header.js
import React from 'react';
import logo from '../assets/imagenes/logo.png'; // Importando la imagen

    const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/about">Nosotros</a></li>
                        <li><a href="/tienda">Tienda</a></li>
                        <li><a href="/ubicacion">Ubicación</a></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;
