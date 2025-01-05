import React from 'react';

import retirotienda from '../imagenes/retirotienda.png';
import seguro from '../imagenes/seguro.png';
import enviograt from '../imagenes/enviograt.png';
import generador1 from '../imagenes/GENERADOR1.jpg';
import generador2 from '../imagenes/GENERADOR2.png';
import generador3 from '../imagenes/generador3.jpg';
import generador4 from '../imagenes/GENERADOR4.webp';
import generador5 from '../imagenes/GENERADOR5.jpg';
import generador6 from '../imagenes/GENERADOR6.jpg';

const Main_tienda = () => {
    return (
        <main>
            <div className="product-banner">
                <h2>Adquiere nuestros <br /> Productos</h2>
            </div>
            <section className="services">
                <div className="service">
                    <p>Retiro en Tienda</p>
                    <img src={retirotienda} alt="Retiro en Tienda" />
                </div>
                <div className="service">
                    <p>Tu pedido Llega Seguro</p>
                    <img src={seguro} alt="Tu pedido Llega Seguro" />
                </div>
                <div className="service service2">
                    <p>Envío Gratuito <br /> <span>*aplica para ciertas zonas*</span></p>
                    <img src={enviograt} alt="Envío Gratuito" />
                </div>
            </section>

            <section className="products">
                <div className="text-prod">
                    <h3>GENERADORES</h3>
                    <div className="products2">
                        <div className="product">
                            <img src={generador1} alt="Generador 1" />
                            <h4>Briggs & Stratton Sprint 1200A</h4>
                            <p className="precio">$250 USD</p>
                            <p> Este generador es básico, ideal para electrodomésticos pequeños, con una potencia de 1,200 W y un precio accesible, recomendado para quienes buscan un equipo económico con buena relación calidad-precio​. </p>
                            <button>COMPRAR</button>
                        </div>
                        <div className="product">
                            <img src={generador2} alt="Generador 2" />
                            <h4>Hyundai HHY3000M</h4>
                            <p className="precio">$450 USD</p>
                            <p>Este generador es básico, ideal para electrodomésticos pequeños, con una potencia de 1,200 W y un precio accesible, recomendado para quienes buscan un equipo económico con buena relación calidad-precio​.</p>
                            <button>COMPRAR</button>
                        </div>
                        <div className="product">
                            <img src={generador3} alt="Generador 3" />
                            <h4>K&S Könner & Söhnen KS2900G Dual Fuel</h4>
                            <p className="precio">$870 USD</p>
                            <p>Este generador es básico, ideal para electrodomésticos pequeños, con una potencia de 1,200 W y un precio accesible, recomendado para quienes buscan un equipo económico con buena relación calidad-precio​.</p>
                            <button>COMPRAR</button>
                        </div>
                    </div>
                </div>

                <div className="text-prod">
                    <h3>CARGADORES PORTÁTILES</h3>
                    <div className="products2">
                        <div className="product">
                            <img src={generador4} alt="Cargador 1" />
                            <h4>Xiaomi Mi Power Bank 3 Ultra Compact</h4>
                            <p className="precio">$19.99 USD</p>
                            <p>Este modelo es compacto y ofrece carga rápida de hasta 22.5W, ideal para dispositivos como smartphones y tablets​.</p>
                            <h4>**Capacidad: 10,000 mAh**</h4>
                            <h5>**Puertos: 2 USB-A, 1 USB-C, 1 micro USB**</h5>
                            <button>COMPRAR</button>
                        </div>
                        <div className="product">
                            <img src={generador5} alt="Cargador 2" />
                            <h4>MOXNICE Power Bank</h4>
                            <p className="precio">$28.79 USD</p>
                            <p>Con un diseño ligero y formato cuadrado, es una opción accesible que permite cargar un teléfono al menos una vez.</p>
                            <h4>**Capacidad: 10,000 mAh**</h4>
                            <h5>**Puertos: 2 USB-A, 1 micro USB**</h5>
                            <button>COMPRAR</button>
                        </div>
                        <div className="product">
                            <img src={generador6} alt="Cargador 3" />
                            <h4>Litonite Hurakan</h4>
                            <p className="precio">$79.99 USD</p>
                            <p>Este modelo es potente y adecuado para situaciones de camping o viajes largos, pues permite cargar dispositivos grandes y pequeños.
                            </p>
                            <h4>**Capacidad: 46,400 mAh**</h4>
                            <h5>**Puertos: 1 AC, 1 USB-C, 2 USB-A**</h5>
                            <button>COMPRAR</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main_tienda;
