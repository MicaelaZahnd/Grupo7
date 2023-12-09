import React from "react";
import HeaderLanding from "./headerLanding";
import FooterLanding from "./footerLanding";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function RegistrationForm() {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <section className="sectionLandingPage">
        <Card variant="outlined" sx={{ borderColor: 'primary.main', border: 2 }}>
          <CardContent>
            <h1 align="center">Registrate:</h1>
            <form className="form-container" action="" method="post">
              <TextField
                required
                name="nombre"
                type="text"
                label="Nombre/s"
                maxLength="50"
                variant="standard"
              />
              <br/>
              <TextField
                required
                name="apellido"
                type="text"
                label="Apellido/s"
                maxLength="50"
                variant="standard"
              />
              <br/>
              <TextField
                required
                name="email"
                type="text"
                label="Email"
                maxLength="100"
                variant="standard"
              />
              <br/>
              <InputLabel>Sexo:</InputLabel>
              <Select name="Sexo" >
                <MenuItem value="">Seleccionar:</MenuItem>
                <MenuItem value="Masc">Masculino</MenuItem>
                <MenuItem value="Fem">Femenino</MenuItem>
                <MenuItem value="otro">Otro</MenuItem>
              </Select>
              <br/>
              <InputLabel className="label">Tipo de documento</InputLabel>
              <Select name="Documento">
                <MenuItem value="">Seleccionar:</MenuItem>
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="LC">LC</MenuItem>
                <MenuItem value="LE">LE</MenuItem>
                <MenuItem value="CI">CI</MenuItem>
                <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                <MenuItem value="RENAPER">RENAPER</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </Select>
              <br/>
              <TextField
                required
                name="numero de documento"
                type="number"
                label="Nro de documento"
                variant="standard"
              />
              <br/>
              <TextField
                required
                name="usuario"
                type="text"
                label="Usuario"
                maxLength="45"
                variant="standard"
              />
              <br/>
              <TextField
                required
                name="clave"
                type="password"
                label="Clave digital"
                minLength="8"
                variant="standard"
              />
              <br/>
              <input type="checkbox" name="condiciones" required /> Aceptar los{" "}
              <Link>
                terminos y condiciones.
              </Link>
              <br/>
              <Button variant="outlined" color="secondary" sx={{border: 2}}>
                <Link to='/inicioSesión' >Iniciar sesión </Link>
              </Button>
            </form>
          </CardContent>
        </Card>
        
      </section>
      <FooterLanding></FooterLanding>
    </div>
  );
}

export default RegistrationForm;
