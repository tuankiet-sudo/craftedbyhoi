import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import the necessary tools from MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 2. Create your custom theme
const theme = createTheme({
  typography: {
    fontFamily: [
      'Lora', // The primary font
      'serif', // A fallback font
    ].join(','),
  },
  // You can also customize other theme aspects here
  // palette: {
  //   primary: {
  //     main: '#1976d2',
  //   },
  // },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 3. Wrap your App with the ThemeProvider */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles and applies background color */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);