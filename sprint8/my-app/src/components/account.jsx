import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://127.0.0.1:8000/api/clients/1";
const baseUrl2 = "http://127.0.0.1:8000/api/accounts/";

function Profile() {
  const [cliente, setCliente] = useState(null);
  const [cuenta, setCuenta] = useState(null);
  const [cuentaCliente, setCuentaCliente] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCliente(response.data);
    });

    axios.get(baseUrl2).then((response) => {
      setCuenta(response.data);
    });
  }, []);

  useEffect(() => {
    if (cliente) {
      const cuentasCliente = cuenta
        ? cuenta.filter((cuenta) => cuenta.cliente === cliente.id)
        : [];
      setCuentaCliente(cuentasCliente);
    }
  }, [cliente, cuenta]);

  return cliente && cuenta ? (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <div>
                <h2>
                  {cliente.apellido}, {cliente.nombre}
                </h2>
                <ul>
                  <li>DNI:{cliente.dni}</li>
                  <li>TIPO: {cliente.tipo_cliente}</li>
                  <li>Fecha de nacimiento: {cliente.fecha_nacimiento}</li>
                </ul>
              </div>

              <div>
                <h3>Cuentas:</h3>
                <ul>
                  {cuentaCliente.map((cuenta) => (
                    <li key={cuenta.id}>
                      {cuenta.tipo} - Balance: {cuenta.balance}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="large"
                color="secondary"
                variant="outlined"
                sx={{ border: 2, borderColor: "secondary.main" }}
              >
                <Link to="/">CERRAR SESIÓN</Link>
              </Button>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  ) : (
    <div>Cargando...</div>
  );
}

export default Profile;
