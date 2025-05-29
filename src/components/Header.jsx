import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <div
      style={{
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '1rem',
        width: '100%',
        position: 'relative',
        color: isDarkMode ? "#000" : "#fff",
        backgroundColor: isDarkMode ? "#fff" : "#000",
      }}
    >
      <div className="nav-bar">
        <a href='/' style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
          Sobre nós
        </a>
        <a href='#work' style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
          Trabalhos
        </a>
        <a href="#contact" style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
          Contatos
        </a>

      </div>

      {/* Botão de Alternância de Tema */}
      <Button
        onClick={toggleTheme}
        variant="contained"
        startIcon={isDarkMode ? <FaMoon size={12} /> : <FaSun size={12} />}
        sx={{
          width: '32px',
          height: '32px',
          padding: '0',
          minWidth: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          '& .MuiButton-startIcon': {
            margin: 0,
          },
        }}
      />
    </div>
  );
};

export default Header;
