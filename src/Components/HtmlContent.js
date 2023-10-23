import React from 'react';
import Head from 'next/head';

const HtmlContent = () => (
  <>
    <div>
      <html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>cabraslocas</title>
          <link rel="stylesheet" href="css/normalize.css" />
          <link rel="stylesheet" href="css/skeleton.css" />
          <link rel="stylesheet" href="css/style.css" />
        </Head>
        <body>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="four columns">
                  <h1>
                    <img src="../src/images//logo.png" alt="logo" />
                    Cabras<br />Locas
                  </h1>
                </div>
                <div className="two columns u-pull-right">
                  <ul>
                    <li className="submenu">
                      <img src="../src/images/cart.png" alt="cart" />
                      <div id="carrito">
                        <p className="vaciar">carrito vacio</p>
                        <table className="u-full-width">
                          <thead>
                            <tr>
                              <th>imagen</th>
                              <th>platillos</th>
                              <th>precio</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img src="../src/images/platillo1.jpg" width="100" />
                              </td>
                              <td>Hamburguesa helado</td>
                              <td>$500</td>
                              <td>
                                <a href="a" className="borrar-platillo"></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img src="../src/images/platillo3.jpg" width="100" />
                              </td>
                              <td>Hamburguesa con gaseosa</td>
                              <td>$1500</td>
                              <td>
                                <a href="a" className="borrar-platillo"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#" className="button u-full-width">
                          vaciar carrito
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
                    <h2>prueba una hamburguesas</h2>
                    <p>todas las hamburguesas a $15</p>
                    <form>
                      <input className="u-full-width" type="text" placeholder="que te gustaria probar?" id="buscador" />
                      <input type="submit" className="submit-buscador" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ... Otro contenido ... */}

          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="four columns">
                  <nav className="menu">
                    <a className="enlace" href="#">
                      restaurante
                    </a>
                    <a className="enlace" href="#">
                      ubicacion
                    </a>
                    <a className="enlace" href="#">
                      telefono
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </div>
  </>
);

export default HtmlContent;
