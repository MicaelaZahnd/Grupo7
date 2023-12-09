import React, { useEffect } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import BasicTable from "./basicTable";
import { Alert, Button, Card, CardContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function Payments() {
  // ...

useEffect(() => {
  const form = document.querySelector('.form-container');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const payment = form.querySelector('[name="paymentMethod"]').value;
    const amountInput = form.querySelector('[name="amount"]');
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount)) {
      alert(`Pago realizado con éxito!\nServicio: ${payment}\nMonto: $${amount.toFixed(2)}`);
      form.reset();
    } else {
      amountInput.focus(); 
    }
  });
}, []);

// ...


  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section>
              <h1>Pagos</h1>
              <div className="anotherContainer">
                <div id="container-form">
                  <Card sx={{boxShadow: 5}}>
                    <CardContent>

                      <h1 className="h1-center">Realizar Pago</h1>
                      <form className="form-container">
                        <InputLabel htmlFor="payment">Pago a realizar:</InputLabel>
                        <Select name="paymentMethod" variant="standard"required>
                          <MenuItem value="gas">Gas</MenuItem>
                          <MenuItem value="luz">Luz</MenuItem>
                          <MenuItem value="agua">Agua</MenuItem>
                          <MenuItem value="expensas">Expensas</MenuItem>
                        </Select>
                        <br />
                        <TextField
                          variant="standard"
                          label="Monto"
                          type="number"
                          name="amount"
                          step="0.01"
                          required
                        />
                        <br />
                        <InputLabel htmlFor="paymentMethod">Método de Pago:</InputLabel>
                        <Select variant="standard" name="paymentMethod" required>
                          <MenuItem value="debito">Débito</MenuItem>
                          <MenuItem value="credito">Crédito</MenuItem>
                          <MenuItem value="transferencia">Transferencia</MenuItem>
                        </Select>
                        <br />
                        <Button type="submit" variant="contained">
                          Realizar Pago
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                </div>
                <div>
                  <h2>Pagos realizados</h2>
                  <BasicTable />
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Payments;
