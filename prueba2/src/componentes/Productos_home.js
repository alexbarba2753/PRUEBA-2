import React from 'react';
import { Link } from 'react-router-dom'; 

const Productos_home = () => {
    return (
        <section className="productos">
            <h2>PRODUCTOS</h2>
            <div className="titulo-productos1">
                <h3>GENERADORES ELÉCTRICOS</h3>
            </div>
            <div className="imagenes-productos">
                <div className="desc-producto">
                    <h3>Briggs & Stratton Sprint</h3>
                    <img src={require('../imagenes/GENERADOR1.jpg')} alt="Generador Briggs & Stratton Sprint" />
                    <Link to="/tienda">
                        <div className="icon-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Adquirir Producto</p>
                        </div>
                    </Link>
                </div>
                <div className="desc-producto">
                    <h3>Hyundai HHY3000M</h3>
                    <img src={require('../imagenes/GENERADOR2.png')} alt="Generador Hyundai HHY3000M" />
                    <Link to="/tienda">
                        <div className="icon-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Adquirir Producto</p>
                        </div>
                    </Link>
                </div>
                <div className="desc-producto">
                    <h3>K&S Könner & Söhnen</h3>
                    <img src={require('../imagenes/generador3.jpg')} alt="Generador K&S Könner & Söhnen" />
                    <Link to="/tienda">
                        <div className="icon-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Adquirir Producto</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="titulo-productos1">
                <h3>BATERÍAS PORTÁTILES</h3>
            </div>
            <div className="imagenes-productos">
                <div className="desc-producto">
                    <h3>Xiaomi Mi Power Bank 3</h3>
                    <img src={require('../imagenes/GENERADOR4.webp')} alt="Batería Xiaomi Mi Power Bank 3" />
                    <Link to="/tienda">
                        <div className="icon-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Adquirir Producto</p>
                        </div>
                    </Link>
                </div>
                <div className="desc-producto">
                    <h3>MOXNICE Power Bank</h3>
                    <img src={require('../imagenes/GENERADOR5.jpg')} alt="Batería MOXNICE Power Bank" />
                    <Link to="/tienda">
                        <div className="icon-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Adquirir Producto</p>
                        </div>
                    </Link>
                </div>
                <div className="desc-producto">
                    <h3>Litionite Hurakan</h3>
                    <img src={require('../imagenes/GENERADOR6.jpg')} alt="Batería Litionite Hurakan" />
                    <Link to="/tienda">
                        <div className="icon-buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Adquirir Producto</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Productos_home;
