import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="icon-elem">
                    <a href="https://www.facebook.com/profile.php?id=100093863242106" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li className="icon-elem">
                    <a href="https://www.tiktok.com/@soymaulozano?_t=8rIc8wMFyNE&_r=1" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </li>
                <li className="icon-elem">
                    <a href="https://www.instagram.com/lightningshoppingec/" target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <ul className="menu-footer">
                <li className="menu-elem">
                    <Link to="/" className="menu-icon">Inicio</Link>
                </li>
                <li className="menu-elem">
                    <Link to="/tienda" className="menu-icon">Tienda</Link>
                </li>
                <li className="menu-elem">
                    <Link to="/quienes-somos" className="menu-icon">¿Quiénes Somos?</Link>
                </li>
                <li className="menu-elem">
                    <Link to="/ubicacion" className="menu-icon">Ubicación</Link>
                </li>
            </ul>
            <p className="text">@2024 | Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;
