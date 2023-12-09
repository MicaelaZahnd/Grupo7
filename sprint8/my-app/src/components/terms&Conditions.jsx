import React from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Link } from "react-router-dom";


function TermsAndConditions() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1>Términos y Condiciones de ITBANK - Home Banking</h1>
              <p>
                <em>Fecha de entrada en vigencia: 24/8/2023</em>
              </p>
              <p>
                Bienvenido a ITBANK Home Banking. Al acceder y utilizar nuestros
                servicios, aceptas los siguientes términos y condiciones. Por
                favor, lee atentamente antes de utilizar nuestros servicios.
              </p>

              <h2>Uso de los Servicios</h2>

              <p>
                Los servicios de home banking de ITBANK están diseñados para
                brindarte acceso a tus cuentas y transacciones financieras. Al
                utilizar nuestros servicios, aceptas cumplir con todas las leyes
                y regulaciones aplicables.
              </p>

              <h2>Acceso y Seguridad</h2>

              <p>
                Es tu responsabilidad mantener la seguridad de tus credenciales
                de acceso. No compartas tus datos de inicio de sesión con
                terceros y notifícanos inmediatamente si sospechas de un acceso
                no autorizado a tu cuenta.
              </p>

              <h2>Responsabilidad</h2>

              <p>
                ITBANK se esfuerza por brindar información precisa y segura,
                pero no garantizamos la exactitud, integridad o actualidad de la
                información proporcionada a través de nuestros servicios. No nos
                hacemos responsables por cualquier pérdida, daño o inconveniente
                causado por el uso de la información proporcionada.
              </p>

              <h2>Privacidad</h2>

              <p>
                Tu privacidad es importante para nosotros. Consulta nuestra{" "}
                <Link to="/politicasDePrivacidad">Política de Privacidad</Link> para obtener información
                detallada sobre cómo recopilamos, utilizamos y protegemos tus
                datos personales.
              </p>

              <h2>Modificaciones</h2>

              <p>
                Nos reservamos el derecho de modificar estos Términos y
                Condiciones en cualquier momento. Las modificaciones serán
                efectivas cuando se publiquen en nuestra plataforma. Es tu
                responsabilidad revisar periódicamente estos términos.
              </p>

              <h2>Contacto</h2>

              <p>
                Si tienes alguna pregunta o inquietud sobre estos Términos y
                Condiciones, por favor contáctanos por
                <Link to="/contacto">aquí</Link>.
              </p>

              <p>
                Al utilizar nuestros servicios, aceptas cumplir con estos
                Términos y Condiciones. Si no estás de acuerdo con estos
                términos, te recomendamos no utilizar nuestros servicios.
              </p>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default TermsAndConditions;
