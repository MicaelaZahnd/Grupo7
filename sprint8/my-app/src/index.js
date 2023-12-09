import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/400-italic.css";

let theme = createTheme ({
  palette: {
    mode: 'light',
    primary: {
      main: '#35103d',
      dark: '#220829',
    },
    secondary: {
      main: '#ff6431',
    },
    error: {
      main: '#e42617',
      light: '#f53424',
    },
    info: {
      main: '#ba68c8',
      contrastText: '#000000',
    },
    warning: {
      main: '#ff6431',
      contrastText: 'rgba(255,255,255,0.87)',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);