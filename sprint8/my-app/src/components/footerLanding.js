import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 

function FooterLanding() {
  return (
    <footer>
      <div id="container-footer">
        <div id="container-politica-empresa">
          <Link>Políticas de privacidad.</Link>
          <br />
          <Link>Términos y Condiciones</Link>
          <br />
          <Link>Contacto</Link>
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
      <span id="copy">&copy; 2023 ITBANK. Todos los derechos reservados.</span>
    </footer>
  );
}

export default FooterLanding;