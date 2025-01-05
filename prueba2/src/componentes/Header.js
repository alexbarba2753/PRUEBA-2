import React from 'react';
import './styles/Header_1.css'; // Asegúrate de tener el archivo de estilos correspondiente

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="logo">
                    <img src="imagenes/foco-removebg-preview.png" alt="logo de la compañía" />
                    <h2 className="nombre-empresa">EnerGy Pure</h2>
                </div>
                <nav className="navbar">
                    <a href="index.html" className="nav-link">Inicio</a>
                    <a href="tienda.html" className="nav-link">Tienda</a>
                    <a href="#" className="nav-link">¿Quiénes Somos?</a>
                    <a href="ubicacion.html" className="nav-link">Ubicación</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
