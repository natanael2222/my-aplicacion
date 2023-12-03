import React from 'react';
import Head from 'next/head';



const HtmlContent = () => (
  <>
    <div>
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>cabraslocas</title>
          <link rel="stylesheet" href="../styles/globals.css" />
          <link rel="stylesheet" href="../styles/Home.module.css" />
         
        </Head>
       
        <body>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="four-columns">
                  <h1 className='fourColumns'>
                    Cabras<br />Locas
                  </h1>
                </div>
                <div className="carritoDesplegable">
                  <ul>
                    <li className="submenu">
                      
                      <div id="carrito">
                        <p className="vaciar">Carrito Vacío</p>
                        <table className="u-full-width">
                          <thead>
                            <tr >
                              <th className='nombre-Tabla'>Imagen</th>
                              <th className='nombre-Tabla'>Platillos</th>
                              <th className='nombre-Tabla'>Precio</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img className='imagenDePlatillos' src="https://www.cucinare.tv/wp-content/uploads/2020/11/Disen%CC%83o-sin-ti%CC%81tulo-2020-11-09T171840.167.jpg"/>
                              </td>
                              <td className='opcionDeCompra'>Hamburguesa Helado</td>
                              <td className='opcionDeCompra'>$500</td>
                              <td>
                                <a href="#" className="borrar-platillo"></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img className='imagenDePlatillos' src="https://panel.entretiendas.net/uploads/empresa_2/productos/2.1604102567.png"  />
                              </td>
                              <td className='opcionDeCompra'>Hamburguesa con gaseosa</td>
                              <td className='opcionDeCompra'>$1500</td>
                              <td>
                                <a href="#" className="borrar-platillo"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#" className="estiloBotonVaciar">
                          Vaciar Carrito
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          <div className="hero">
            <div className="container">
              <div className="row">
                <div className="six columns">
                  <div className="contenido-hero">
                    <h2>Prueba una Hamburguesa</h2>
                    <p>Todas nuestras Hamburguesas a $1500</p>
                    <form>
                      <input className="u-full-width" type="text" placeholder="que te gustaria probar?" id="buscador" />
                      <input type="submit" className="submit-buscador" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

 
        </body>
      </html>
    </div>
  </>
);

export default HtmlContent;
