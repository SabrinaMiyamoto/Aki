import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import App from './App';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1D1D1D',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      color: '#ebc502',
    },
    h2: {
      color: '#ebc502',
    },
    h4: {
      color: '#ebc502',
    },
    body1: {
      color: '#f1f1f1',
    },
  },
  breakpoints: {
    values: {
      xs: 0, 
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem', 
          padding: '8px 16px',
          '@media (min-width:600px)': {
            fontSize: '1rem', 
          },
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1D1D1D',
    },
    background: {
      default: '#F1F1F1',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      color: '#E660AC',
    },
    h2: {
      color: '#c7a802',
    },
    h4: {
      color: '#ebc502',
    },
    body1: {
      color: '#1D1D1D',
    },
  },
  breakpoints: {
    values: {
      xs: 0, 
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem', 
          padding: '8px 16px',
          '@media (min-width:600px)': {
            fontSize: '1rem', 
          },
        },
      },
    },
  },
});

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode); 
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
