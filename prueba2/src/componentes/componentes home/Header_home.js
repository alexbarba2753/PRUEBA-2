import React from "react";
import logo from "../../imagenes/foco-removebg-preview.png";
import heroImage from "../../imagenes/imagen generado.jpeg";
import { Link } from 'react-router-dom';

function Header_home() {
    return (
        <header>
            <div className="opacidad">
                <div className="menu">
                    <div className="logo">
                        <img src={logo} alt="logo de la compañia" />
                        <h2 className="nombre-empresa">EnerGy Pure</h2>
                    </div>
                    <nav className="navbar">
                        <Link to="/" className="nav-link">Inicio</Link>
                        <Link to="/tienda" className="nav-link">Tienda</Link>
                        <Link to="/quienes-somos" className="nav-link">¿Quiénes Somos?</Link>
                        <Link to="/ubicacion" className="nav-link">Ubicación</Link>
                    </nav>
                </div>

                {/* Hero Section */}
                <div className="hero">
                    <div className="texto-header">
                        <div className="text-btn">
                        <h1>Soluciones de Energía <br /> <span>para Cada Momento</span></h1>
                        <p>Enfrenta los apagones con tranquilidad. En EnerGy Pure, ofrecemos una línea completa de generadores eléctricos, focos recargables y cargadores portátiles diseñados para que nunca te falte energía cuando más la necesitas. Con soluciones confiables y accesibles, estamos aquí para ayudarte a mantener tu hogar iluminado y tus dispositivos activos, sin importar las circunstancias.</p>
                        <a className="btn-info" href="#sec-vid"><button>Más Información</button></a>
                        </div>
                    </div>
                    <div className="imagen-header">
                        <img src={heroImage} alt="Imagen del Hero" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header_home;
