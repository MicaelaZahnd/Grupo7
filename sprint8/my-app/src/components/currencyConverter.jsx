import React, { useState, useEffect } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import { Card, CardContent, Button, Select, MenuItem } from "@mui/material";


function CurrencyConverter() {
  const [amountOne, setAmountOne] = useState("");
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("ARS");
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [currencyOne]);

  const calculateEvent = () => {
    console.log("Swapping currencies");
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(currencyOne);
  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section className="converter">
              <h1>Convertidor de moneda</h1>

              <Card sx={{boxShadow: 5}}> 
                <CardContent>
                  <div className="invert-container form-container">
                    <Select
                      variant="outlined"
                      color="secondary"
                      name="currencyOne"
                      id="currencyOne"
                      value={currencyOne}
                      onChange={(e) => setCurrencyOne(e.target.value)}
                    >
                      <MenuItem value="AED">AED</MenuItem>
                      <MenuItem value="ARS">ARS</MenuItem>
                      <MenuItem value="AUD">AUD</MenuItem>
                      <MenuItem value="BGN">BGN</MenuItem>
                      <MenuItem value="BRL">BRL</MenuItem>
                      <MenuItem value="BSD">BSD</MenuItem>
                      <MenuItem value="CAD">CAD</MenuItem>
                      <MenuItem value="CHF">CHF</MenuItem>
                      <MenuItem value="CLP">CLP</MenuItem>
                      <MenuItem value="CNY">CNY</MenuItem>
                      <MenuItem value="COP">COP</MenuItem>
                      <MenuItem value="CZK">CZK</MenuItem>
                      <MenuItem value="DKK">DKK</MenuItem>
                      <MenuItem value="DOP">DOP</MenuItem>
                      <MenuItem value="EGP">EGP</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="FJD">FJD</MenuItem>
                      <MenuItem value="GBP">GBP</MenuItem>
                      <MenuItem value="GTQ">GTQ</MenuItem>
                      <MenuItem value="HKD">HKD</MenuItem>
                      <MenuItem value="HRK">HRK</MenuItem>
                      <MenuItem value="HUF">HUF</MenuItem>
                      <MenuItem value="IDR">IDR</MenuItem>
                      <MenuItem value="ILS">ILS</MenuItem>
                      <MenuItem value="INR">INR</MenuItem>
                      <MenuItem value="ISK">ISK</MenuItem>
                      <MenuItem value="JPY">JPY</MenuItem>
                      <MenuItem value="KRW">KRW</MenuItem>
                      <MenuItem value="KZT">KZT</MenuItem>
                      <MenuItem value="MXN">MXN</MenuItem>
                      <MenuItem value="MYR">MYR</MenuItem>
                      <MenuItem value="NOK">NOK</MenuItem>
                      <MenuItem value="NZD">NZD</MenuItem>
                      <MenuItem value="PAB">PAB</MenuItem>
                      <MenuItem value="PEN">PEN</MenuItem>
                      <MenuItem value="PHP">PHP</MenuItem>
                      <MenuItem value="PKR">PKR</MenuItem>
                      <MenuItem value="PLN">PLN</MenuItem>
                      <MenuItem value="PYG">PYG</MenuItem>
                      <MenuItem value="RON">RON</MenuItem>
                      <MenuItem value="RUB">RUB</MenuItem>
                      <MenuItem value="SAR">SAR</MenuItem>
                      <MenuItem value="SEK">SEK</MenuItem>
                      <MenuItem value="SGD">SGD</MenuItem>
                      <MenuItem value="THB">THB</MenuItem>
                      <MenuItem value="TRY">TRY</MenuItem>
                      <MenuItem value="TWD">TWD</MenuItem>
                      <MenuItem value="UAH">UAH</MenuItem>
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="UYU">UYU</MenuItem>
                      <MenuItem value="VND">VND</MenuItem>
                      <MenuItem value="ZAR">ZAR</MenuItem>
                    </Select>
                    <br/>
                    <input
                      type="text"
                      className="borderless campo-form"
                      name="amountOne"
                      id="amountOne"
                      value={amountOne}
                      placeholder="0"
                      onChange={(e) => {
                        setAmountOne(e.target.value);
                      }}
                    />
                    <br></br>
                    <Button
                      title="Swap currencies"
                      variant="contained"
                      size="small"
                      id="swapButton"
                      onClick={calculateEvent}
                    >
                      Intercambiar
                    </Button>
                    <br></br>
                    <Select
                      variant="outlined"
                      color="secondary"
                      name="currencyTwo"
                      id="currencyTwo"
                      value={currencyTwo}
                      onChange={(e) => setCurrencyTwo(e.target.value)}
                    >
                      <MenuItem value="AED">AED</MenuItem>
                      <MenuItem value="ARS">ARS</MenuItem>
                      <MenuItem value="AUD">AUD</MenuItem>
                      <MenuItem value="BGN">BGN</MenuItem>
                      <MenuItem value="BRL">BRL</MenuItem>
                      <MenuItem value="BSD">BSD</MenuItem>
                      <MenuItem value="CAD">CAD</MenuItem>
                      <MenuItem value="CHF">CHF</MenuItem>
                      <MenuItem value="CLP">CLP</MenuItem>
                      <MenuItem value="CNY">CNY</MenuItem>
                      <MenuItem value="COP">COP</MenuItem>
                      <MenuItem value="CZK">CZK</MenuItem>
                      <MenuItem value="DKK">DKK</MenuItem>
                      <MenuItem value="DOP">DOP</MenuItem>
                      <MenuItem value="EGP">EGP</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="FJD">FJD</MenuItem>
                      <MenuItem value="GBP">GBP</MenuItem>
                      <MenuItem value="GTQ">GTQ</MenuItem>
                      <MenuItem value="HKD">HKD</MenuItem>
                      <MenuItem value="HRK">HRK</MenuItem>
                      <MenuItem value="HUF">HUF</MenuItem>
                      <MenuItem value="IDR">IDR</MenuItem>
                      <MenuItem value="ILS">ILS</MenuItem>
                      <MenuItem value="INR">INR</MenuItem>
                      <MenuItem value="ISK">ISK</MenuItem>
                      <MenuItem value="JPY">JPY</MenuItem>
                      <MenuItem value="KRW">KRW</MenuItem>
                      <MenuItem value="KZT">KZT</MenuItem>
                      <MenuItem value="MXN">MXN</MenuItem>
                      <MenuItem value="MYR">MYR</MenuItem>
                      <MenuItem value="NOK">NOK</MenuItem>
                      <MenuItem value="NZD">NZD</MenuItem>
                      <MenuItem value="PAB">PAB</MenuItem>
                      <MenuItem value="PEN">PEN</MenuItem>
                      <MenuItem value="PHP">PHP</MenuItem>
                      <MenuItem value="PKR">PKR</MenuItem>
                      <MenuItem value="PLN">PLN</MenuItem>
                      <MenuItem value="PYG">PYG</MenuItem>
                      <MenuItem value="RON">RON</MenuItem>
                      <MenuItem value="RUB">RUB</MenuItem>
                      <MenuItem value="SAR">SAR</MenuItem>
                      <MenuItem value="SEK">SEK</MenuItem>
                      <MenuItem value="SGD">SGD</MenuItem>
                      <MenuItem value="THB">THB</MenuItem>
                      <MenuItem value="TRY">TRY</MenuItem>
                      <MenuItem value="TWD">TWD</MenuItem>
                      <MenuItem value="UAH">UAH</MenuItem>
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="UYU">UYU</MenuItem>
                      <MenuItem value="VND">VND</MenuItem>
                      <MenuItem value="ZAR">ZAR</MenuItem>
                    </Select>
                    <br/>
                    <h4 className="price" id="price">
                      {amountOne} {currencyOne} es igual a {(amountOne * exchangeRates[currencyTwo]).toFixed(2)}{" "}
                      {currencyTwo}{" "}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CurrencyConverter;
