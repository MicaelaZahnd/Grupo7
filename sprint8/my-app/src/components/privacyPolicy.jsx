import React from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Link } from "react-router-dom";


function PrivacyPolicy() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1>Política de Privacidad de ITBANK - Home Banking</h1>
              <p>
                <em>Fecha de entrada en vigencia: 24/8/2023</em>
              </p>
              <p>
                En ITBANK, valoramos la privacidad de nuestros usuarios y
                cumplimos con las disposiciones de la Ley Nacional de Protección
                de Datos Personales (Ley 25.326) de la República Argentina. Esta
                Política de Privacidad describe cómo recopilamos, usamos,
                compartimos y protegemos la información personal que obtenemos a
                través de nuestro servicio de home banking.
              </p>

              <h2>Información que Recopilamos</h2>

              <ol>
                <li>
                  <strong>Información de la Cuenta</strong>: Recopilamos la
                  información necesaria para crear y administrar tu cuenta de
                  home banking, como tu nombre, dirección de correo electrónico,
                  número de teléfono y datos de acceso.
                </li>
                <li>
                  <strong>Información Financiera</strong>: Cuando utilizas
                  nuestros servicios de home banking, recopilamos información
                  sobre tus transacciones financieras, balances, movimientos de
                  cuentas y otra información relacionada.
                </li>
                <li>
                  <strong>Información de Dispositivos</strong>: Podemos
                  recopilar información sobre el dispositivo que utilizas para
                  acceder a nuestro servicio, incluyendo la dirección IP, tipo
                  de navegador, sistema operativo y datos de conexión.
                </li>
              </ol>

              <h2>Uso de la Información</h2>

              <ol>
                <li>
                  Utilizamos la información recopilada para brindarte y mejorar
                  nuestros servicios de home banking, procesar transacciones,
                  personalizar tu experiencia y brindarte atención al cliente.
                </li>
                <li>
                  Podemos utilizar tu información para enviarte actualizaciones,
                  alertas de seguridad y otra información relevante sobre tu
                  cuenta y nuestros servicios.
                </li>
              </ol>

              <h2>Compartir Información</h2>

              <ol>
                <li>
                  <strong>Proveedores de Servicios</strong>: Podemos compartir
                  información con proveedores de servicios que nos ayudan a
                  operar y mejorar nuestros servicios, como procesadores de
                  pagos y servicios de seguridad.
                </li>
                <li>
                  <strong>Cumplimiento Legal</strong>: Podemos divulgar
                  información si creemos de buena fe que es necesario para
                  cumplir con la ley, regulaciones, procesos legales o
                  solicitudes gubernamentales.
                </li>
              </ol>

              <h2>Seguridad de la Información</h2>

              <p>
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger tu información personal contra el acceso no autorizado,
                la pérdida y la alteración, de acuerdo con las regulaciones
                aplicables.
              </p>

              <h2>Tus Derechos</h2>

              <p>
                De acuerdo con la Ley 25.326, tienes derecho a acceder,
                corregir, actualizar o suprimir tu información personal. También
                puedes optar por no recibir comunicaciones de marketing.
              </p>

              <h2>Cambios a esta Política</h2>

              <p>
                Nos reservamos el derecho de modificar esta Política de
                Privacidad en cualquier momento. Cualquier cambio entrará en
                vigencia cuando se publique la política revisada.
              </p>

              <p>
                Si tienes preguntas o inquietudes sobre esta Política de
                Privacidad o sobre tus derechos de privacidad en virtud de las
                leyes argentinas, no dudes en ponerte en{" "}
                <Link to="/contacto">contacto</Link> con nuestro
                equipo de privacidad.
              </p>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
