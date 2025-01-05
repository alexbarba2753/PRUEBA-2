// src/components/Header.js
import React from 'react';
// Importando las imágenes
import logo from '../assets/imagenes/foco-removebg-preview.png';
import menuIcon from '../assets/imagenes/menu.png';
import headerImage from '../assets/imagenes/imagen generado.jpeg';

const Header_home = () => {
    return (
        <header>
            <div className="opacidad">
                <div className="menu">
                    <div className="logo">
                        <img src={logo} alt="logo de la compañía" />
                        <h2 className="nombre-empresa">EnerGy Pure</h2>
                    </div>
                    <input type="checkbox" id="hmbrg" />
                    <label htmlFor="hmbrg">
                        <img src={menuIcon} className="icon-hmbrg" alt="Menú" />
                    </label>
                    <nav className="navbar">
                        <a href="#" className="nav-link">Inicio</a>
                        <a href="tienda.html" className="nav-link">Tienda</a>
                        <a href="quienes-somos.html" className="nav-link">¿Quiénes Somos?</a>
                        <a href="ubicacion.html" className="nav-link">Ubicación</a>
                    </nav>
                </div>

                <div className="hero">
                    <div className="texto-header">
                        <div className="text-btn">
                            <h1>Soluciones de Energía <br /> <span>para Cada Momento</span></h1>
                            <p>Enfrenta los apagones con tranquilidad. En EnerGy Pure, ofrecemos una línea completa de generadores eléctricos, focos recargables y cargadores portátiles diseñados para que nunca te falte energía cuando más la necesitas. Con soluciones confiables y accesibles, estamos aquí para ayudarte a mantener tu hogar iluminado y tus dispositivos activos, sin importar las circunstancias.</p>
                            <a className="btn-info" href="#sec-vid"><button>Más Información</button></a>
                        </div>
                    </div>
                    <div className="imagen-header">
                        <img src={headerImage} alt="Imagen de energía" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header_home;
