import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#66431b', // Brand brown
      contrastText: '#fff',
    },
    secondary: {
      main: '#A48560', // Lighter brown for secondary elements
    },
    background: {
      default: '#FFFFFF', // Main page background
      paper: '#FAF9EE',
    },
    text: {
      primary: '#001524', // Denim Dive
      secondary: '#66431b', // Use for muted/section headers
    },
    error: {
      main: '#C4412B',
    },
    info: {
      main: '#ECD7BE', // For chip backgrounds, light callouts, borders
    }
  },
  typography: {
    fontFamily: 'Lora', // Swap in your brand fonts here
    h1: { color: '#66431b', fontWeight: 700 },
    h2: { color: '#66431b', fontWeight: 700 },
    h3: { color: '#66431b', fontWeight: 700 },
    h4: { color: '#66431b', fontWeight: 700 },
    h5: { color: '#66431b', fontWeight: 700 },
    h6: { color: '#66431b', fontWeight: 700 },
    body1: { color: '#001524' },
    body2: { color: '#001524' }
  },
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