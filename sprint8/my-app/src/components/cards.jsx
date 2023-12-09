import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Button, Card, CardContent, TextField } from "@mui/material";

function Cards() {
  const [apiCards, setApiCards] = useState([]);
  const nombreRef = useRef(null);
  const numeroRef = useRef(null);
  const vencimientoRef = useRef(null);
  const codigoRef = useRef(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/cards/");
        // Filtrar tarjetas solo para el cliente 1
        const cardsCliente1 = response.data.filter(card => card.cliente === 1);
        setApiCards(cardsCliente1);
      } catch (error) {
        console.error("Error fetching cards from the API:", error);
      }
    };

    fetchCards();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // ... (código existente para agregar tarjeta local)

    nombreRef.current.value = "";
    numeroRef.current.value = "";
    vencimientoRef.current.value = "";
    codigoRef.current.value = "";
  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1>Mis Tarjetas</h1>
              {apiCards.map((apiCard) => (
                <div key={apiCard.id} className="card">
                  <h3>{apiCard.numero_tarjeta}</h3>
                  <p>CVV: {apiCard.cvv}</p>
                  <p>Vencimiento: {apiCard.fecha_vencimiento}</p>
                </div>
              ))}
              {/*<div id="tarjetas-container"></div>
              <br />
              
               <Card variant="outlined" sx={{ boxShadow: 5 }}>
                <CardContent>
                  <form onSubmit={handleSubmit} className="form-container">
                    <h1>Agregar nueva tarjeta:</h1>

                    <TextField
                      required
                      label="Nombre del Titular"
                      type="text"
                      id="nombre"
                      ref={nombreRef}
                    />
                    <br />
                    <TextField
                      required
                      label="Número de la tarjeta"
                      type="text"
                      id="numero"
                      ref={numeroRef}
                      maxLength="16"
                    />
                    <br />
                    <TextField
                      required
                      label="Fecha de Vencimiento"
                      type="text"
                      id="vencimiento"
                      ref={vencimientoRef}
                    />
                    <br />
                    <TextField
                      required
                      label="Código de Seguridad"
                      type="password"
                      id="codigo"
                      ref={codigoRef}
                      maxLength="3"
                    />
                    <br />
                    <Button variant="contained" type="submit">
                      Agregar tarjeta
                    </Button>
                  </form>
                </CardContent>
              </Card> */}
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Cards;
