import Home from "./components/landingP";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import RegistrationForm from "./components/registration";
import SingUpForm from "./components/singUp";

import HomeBanking from "./components/homeBanking";
import AccountStatus from "./components/accountStatus";
import Transfers from "./components/transfers";
import Cards from "./components/cards";
import Payments from "./components/payments";
import Loans from "./components/loan";
import CurrencyConverter from "./components/currencyConverter";
import Movements from "./components/movements";
import Simulator from "./components/simulator";

import PrivacyPolicy from "./components/privacyPolicy";
import TermsAndConditions from "./components/terms&Conditions";
import ContactForm from "./components/contact";
import Profile from "./components/account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BanksPage from "./components/sucursales"; 



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobreNosotros" element={<AboutUs />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/registro" element={<RegistrationForm />} />
          <Route path="/inicioSesión" element={<SingUpForm />} />

          <Route path="/inicio" element={<HomeBanking />} />
          <Route path="/estadoDeCuenta" element={<AccountStatus />} />
          <Route path="/transferencias" element={<Transfers />} />
          <Route path="/tarjetas" element={<Cards />} />
          <Route path="/pagos" element={<Payments />} />
          <Route path="/préstamos" element={<Loans />} />
          <Route path="/simuladorPlazoFijo" element={<Simulator></Simulator>}/>
          <Route path="/convertidorDeMoneda" element={<CurrencyConverter />} />
          <Route path="/movimientos" element={<Movements />} />

          <Route path="/politicasDePrivacidad"element={<PrivacyPolicy></PrivacyPolicy>}/>
          <Route path="/terminos&condiciones" element={<TermsAndConditions></TermsAndConditions>}/>          
          <Route path="/contacto" element={<ContactForm></ContactForm>} />
          <Route path="/cuenta" element={<Profile></Profile>}></Route>

          <Route path="/bancos" element={<BanksPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;