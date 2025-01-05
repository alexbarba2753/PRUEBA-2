import React from 'react';
import './styles/Footer.css'; // Asegúrate de tener el archivo de estilos correspondiente

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="icon-elem">
                </li>
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
                    <a href="#" className="menu-icon">Inicio</a>
                </li>
                <li className="menu-elem">
                    <a href="tienda.html" className="menu-icon">Tienda</a>
                </li>
                <li className="menu-elem">
                    <a href="quienes-somos.html" className="menu-icon">¿Quiénes Somos?</a>
                </li>
                <li className="menu-elem">
                    <a href="ubicacion.html" className="menu-icon">Ubicación</a>
                </li>
            </ul>
            <p className="text">@2024 | Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;
