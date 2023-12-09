import React, { useEffect, useState } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import BasicTable from "./basicTable";
import { Button, Card, CardContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function Transfers() {
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const [formularioVisible, setFormularioVisible] = useState(true);

  useEffect(() => {
    const botonForm = document.querySelector(".boton-form");

    botonForm.addEventListener("click", function () {
      setFormularioVisible(false);

      // Mostrar el mensaje y luego ocultarlo después de 3 segundos
      setMensajeVisible(true);
      setTimeout(() => {
        setMensajeVisible(false);
        setFormularioVisible(true);
      }, 3000);
    });
  }, []);

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <h1 className="h1-center">Transferencias</h1>
            <br/>
            {/* Transfer form */}
            <div id="container-form">
              {formularioVisible && (
                <Card sx={{boxShadow: 5}}>
                  <CardContent>
                    <form className="form-container">
                      <h2>Formulario de Transferencia</h2>
                      <InputLabel>Nueva transferencia a:</InputLabel>
                      <Select required name="accountFrom" variant="standard">
                        <MenuItem value="otro">Otro ITBANK</MenuItem>
                        <MenuItem value="cbu">CBU</MenuItem>
                        <MenuItem value="alias">Alias</MenuItem>
                      </Select>
                      <br/>
                      <TextField
                        required
                        label="Cuenta de destino"
                        type="text"
                        variant="standard"
                        name="amount"
                        placeholder="Ingrese CBU, Alias o nombreITBANK"
                      />
                      <br/>
                      <TextField
                        required
                        type="text"
                        label="Monto"
                        className="campo-form"
                        name="amount"
                        variant="standard"
                        placeholder="Ingrese el monto"
                      />
                      <br/>
                      <TextField
                        required
                        type="text"
                        className="campo-form"
                        name="description"
                        label="Referencia"
                        placeholder="Ingrese una descripción de referencia"
                        variant="standard"
                      />
                      <br/>
                      <Button type="button" className="boton-form" variant="contained">
                        Transferir
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {mensajeVisible && (
                <p>
                  Transferencia enviada con éxito &#10004; 
                </p>
              )}
            </div>

            <h2>Transferencias realizadas</h2>
            <BasicTable />
          </main>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Transfers;
