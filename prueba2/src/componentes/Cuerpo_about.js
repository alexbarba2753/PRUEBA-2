import React from 'react';

const Cuerpo_about = () => {
    return (
        <section className="cuerpo">
            <div className="opacidad">
                <div className="arriba">
                    <div className="arriba2">
                        <div className="imagenes">
                            <img src="imagenes/vela2.jpg" alt="Imagen de energía portátil" className="imagen1" />
                        </div>
                        <div className="parrafo2">
                            <p>
                                Proveer soluciones accesibles y confiables de energía portátil
                                a la población ecuatoriana, mitigando los efectos de los apagones
                                prolongados. A través de la venta de generadores y cargadores
                                portátiles, nuestro objetivo es mejorar la calidad de vida de las
                                personas y apoyar a las pequeñas empresas para que puedan continuar
                                sus actividades sin interrupciones, contribuyendo al bienestar
                                y seguridad energética del país.
                            </p>
                        </div>
                        <h2>MISIÓN</h2>
                    </div>
                </div>

                <div className="medio">
                    <div className="medio2">
                        <h2>VISIÓN</h2>
                        <div className="parrafo2">
                            <p>
                                Ser una empresa estudiantil reconocida en el mercado ecuatoriano
                                por ofrecer soluciones accesibles y efectivas de energía portátil,
                                adaptadas a las necesidades diarias de la población frente a la crisis
                                energética. Aspiramos a convertirnos en un proveedor confiable y cercano,
                                ayudando a las personas y pequeños negocios a enfrentar las interrupciones
                                de energía con productos innovadores y de calidad.
                            </p>
                        </div>
                        <div className="imagenes">
                            <img src="imagenes/vela2.jpg" alt="Imagen de visión energética" className="imagen1" />
                        </div>
                    </div>
                </div>

                <div className="abajo">
                    <div className="parraf-tittle">
                        <div className="textoxd">
                            <h3>Atención al Cliente</h3>
                            <div className="parrafo3">
                                <ul>
                                    <li>Asesoría en selección de productos</li>
                                    <li>Servicio de instalación y mantenimiento</li>
                                    <li>Garantías y soporte técnico</li>
                                </ul>
                            </div>
                        </div>
                        <div className="textoxd">
                            <h3>Soluciones Energéticas</h3>
                            <div className="parrafo3">
                                <ul>
                                    <li>Kits personalizados para hogares y negocios</li>
                                    <li>Productos para continuidad de operaciones</li>
                                    <li>Soluciones de energía para exteriores</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cuerpo_about;
