import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 
//import 'font-awesome/css/font-awesome.min.css';
// footerHB.js y landingP.jsx
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

function Footer() {
  return (
    <footer>
      <div id="container-footer">
        <div id="container-politica-empresa">
          <Link to='/politicasDePrivacidad'>Políticas de privacidad.</Link>
          <br />
          <Link to='/terminos&condiciones'>Términos y Condiciones</Link>
          <br />
          <Link to='/contacto'>Contacto</Link>
          <br/>
          <Link to='/bancos'>Sucursales</Link>
        </div>
        <div id="redes">
          <p>Encontranos en:</p>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#35103d",}} /> 
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareTwitter} size="2xl" style={{color: "#35103d",}} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} size="2xl" style={{color: "#35103d",}} />
          </a>
        </div>
      </div>

      <p id="copy">&copy; 2023 ITBANK. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
