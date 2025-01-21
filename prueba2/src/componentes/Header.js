import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/foco-removebg-preview.png'

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="logo de la compañía" />
                    <h2 className="nombre-empresa">EnerGy Pure</h2>
                </div>
                <nav className="navbar">
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/tienda" className="nav-link">Tienda</Link>
                    <Link to="/quienes-somos" className="nav-link">¿Quiénes Somos?</Link>
                    <Link to="/ubicacion" className="nav-link">Ubicación</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
