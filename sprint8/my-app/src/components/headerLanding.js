import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

function HeaderLanding() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className="container-header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to= "/"><img src="/logo.webp" height="80px" className="logo-landingpage"></img></Link>
        </Typography>
        <div>
          <ul className="ul-LandingPage"> 
            <li>
              <Link to="/sobreNosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/registro">Registrarse</Link>
            </li>
          </ul>
        </div>
      </Toolbar>
      </div>
    </AppBar>
  );
}

export default HeaderLanding;
