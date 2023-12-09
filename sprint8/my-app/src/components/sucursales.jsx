// Importa los módulos necesarios
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Card, CardContent } from "@mui/material";

// Define la URL de la API de bancos
const sucurApiUrl = "http://127.0.0.1:8000/api/sucur/";

// Componente para la nueva página de bancos
function SucurPage() {
  // Estado para almacenar la información de los bancos
  const [sucur, setSucur] = useState([]);

  // Efecto para cargar los bancos al montar la página
  useEffect(() => {
    const fetchSucur = async () => {
      try {
        // Realiza la solicitud a la API de bancos
        const response = await axios.get(sucurApiUrl);
        // Almacena la información de los bancos en el estado
        setSucur(response.data);
      } catch (error) {
        console.error("Error fetching sucur from the API:", error);
      }
    };

    // Llama a la función para cargar los bancos
    fetchSucur();
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
              <h1>Listado de Sucursales</h1>
              {sucur.map((bank) => (
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

export default SucurPage;
