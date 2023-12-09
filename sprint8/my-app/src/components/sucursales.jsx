// Importa los módulos necesarios
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Card, CardContent } from "@mui/material";

// Define la URL de la API de bancos
const banksApiUrl = "http://127.0.0.1:8000/api/banks/";

// Componente para la nueva página de bancos
function BanksPage() {
  // Estado para almacenar la información de los bancos
  const [banks, setBanks] = useState([]);

  // Efecto para cargar los bancos al montar la página
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        // Realiza la solicitud a la API de bancos
        const response = await axios.get(banksApiUrl);
        // Almacena la información de los bancos en el estado
        setBanks(response.data);
      } catch (error) {
        console.error("Error fetching banks from the API:", error);
      }
    };

    // Llama a la función para cargar los bancos
    fetchBanks();
  }, []);

  // Renderiza la página de bancos
  return (
    <div className="container">
      <NavBar />
      <div className="sub-container">
        <Header />
        <div className="main-container">
          <main>
            <section>
              <h1>Listado de Bancos</h1>
              {/* Mapea la información de los bancos y muestra cada uno como un div */}
              {banks.map((bank) => (
                <div
                  key={bank.id}
                  className="bank-info"
                  style={{ marginBottom: "2rem" }}
                >
                  <h3>{bank.nombre}</h3>
                  <p>Número: {bank.numero}</p>
                  <p>Dirección: {bank.direccion}</p>
                </div>
              ))}
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BanksPage;
