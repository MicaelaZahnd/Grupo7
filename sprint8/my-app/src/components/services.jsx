import React from "react";
import HeaderLanding from "./headerLanding";
import FooterLanding from "./footerLanding";

function Service({ title, description, imageUrl }) {
  return (
    <div className="service">
      <h3>{title}</h3>
      <p>{description}</p>
      <img className="img-service" src={imageUrl} alt={`Imagen de ${title}`} />
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      title: "Transferencias Seguras",
      description:
        "Realiza transferencias seguras a cualquier parte del mundo.",
      imageUrl: "../imagenes/transferencias.jpg",
    },
    {
      title: "Pagos en Línea",
      description:
        "Paga tus facturas y realiza compras en línea de forma conveniente.",
      imageUrl: "../imagenes/pago-linea.jpg",
    },
    {
      title: "Administración de Cuentas",
      description:
        "Administra tus cuentas y finanzas personales de manera eficiente.",
      imageUrl: "../imagenes/administracion-cuentas.jpg",
    },
    {
      title: "Préstamos",
      description: "Hacemos préstamos sin o con intereses bajos.",
      imageUrl: "../imagenes/prestamos.jpg",
    },
  ];

  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <section className="sectionLandingPage">
        <h1>Nuestros Servicios</h1>
        <div>
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </section>
      <FooterLanding></FooterLanding>
    </div>
    
  );
}

export default Services;
