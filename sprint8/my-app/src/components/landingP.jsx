import HeaderLanding from "./headerLanding";
import Footer from "./footerLanding";
import Box from "@mui/material/Box";
//import 'font-awesome/css/font-awesome.min.css';
import ImagenBanner from "./ImagenBanner.js";
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
// footerHB.js y landingP.jsx
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';


function Feature({ icon, title, description }) {
  return (
    <div className="feature">
      <i className={icon}></i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  const featuresData = [
    {
      icon: <FontAwesomeIcon icon={faUserShield} />,
      title: "Transferencias Seguras",
      description: "Realiza transferencias con total confianza y seguridad.",
    },
    {
      icon: <FontAwesomeIcon icon={faCartPlus} />,
      title: "Pagos en Línea",
      description:
        "Paga tus facturas y realiza compras en línea de forma conveniente.",
    },
    {
      icon: <FontAwesomeIcon icon={faIdCard} />,
      title: "Administración de Cuentas",
      description: "Administra tus cuentas y finanzas personales fácilmente.",
    },
  ];

  return (
    <section id="features">
      {featuresData.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
}

function Home() {
  return (
    <div>
      <HeaderLanding />
      <ImagenBanner />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Features />
        </Box>
      <Footer></Footer>
    </div>
  );
}

export default Home;