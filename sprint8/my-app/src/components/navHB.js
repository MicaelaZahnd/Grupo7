import React, {useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navBar">
      <Box textAlign="center" sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { boxSizing: "border-box" },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#000000",
              width: "250px",
              paddingTop: "25px",
              '@media (max-width: 780px)': { 
                maxWidth:"45px",
                height:"56px",
                paddingTop: "0px",
                backgroundColor: "#35103d",
                border:"none",
              },
            },
          }}          
        >
          <div className= {`nav-items ${isOpen && "open"}`}> <Box sx={{ overflow: "auto" }}><div className="nav-logo">
            <Link to="/inicio">
            <img src="/logo.webp" height="100px"></img>
          </Link></div>
            <ul style={{ listStyleType: "none" }} className="ul-nav">
              <li>
                <Button>
                  <Link to="/estadoDeCuenta">Estado de cuenta</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/transferencias">Transferencias</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/tarjetas">Tarjetas</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/pagos">Pagos</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/préstamos">Préstamos</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/simuladorPlazoFijo">Plazos Fijos</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/convertidorDeMoneda">Convertidor de moneda</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="/movimientos">Mis Movimientos</Link>
                </Button>
              </li>
            </ul>
          </Box></div>
         <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen (!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
         </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        ></Box>
      </Box>
    </div>
  );
}