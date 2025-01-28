import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme(); // Para acessar o tema atual (light/dark)

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
        backgroundColor: theme.palette.background.default, // Cor de fundo igual ao da página
        color: theme.palette.text.primary, // Cor do texto, dependendo do tema
      }}
    >
      {/* Texto de copyright */}
      <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '14px' }}>
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
