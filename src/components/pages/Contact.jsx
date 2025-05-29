import { Box, TextField, Button, Typography, IconButton, Grid, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import QRCode from 'react-qr-code'; 
import AkiLogo from "../../assets/img/AkiLogo.png";
import Aki from "../../assets/img/Aki.png";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';  // Importando o ícone de seta

const Contact = () => {
  const theme = useTheme();
  const logo = theme.palette.mode === 'dark' ? AkiLogo : Aki;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        minHeight: '100vh',
      }}
      id='contact'
    >
      <Typography variant="h4" gutterBottom>
        Entre em Contato
      </Typography>

      <Grid container spacing={4} sx={{ width: '100%', maxWidth: '1200px', mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: 3,
            }}
          >
            <form
              action="https://formspree.io/f/xrbeqkol"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <TextField label="Nome" name="name" variant="outlined" required fullWidth />
              <TextField label="Telefone" name="phone" variant="outlined" required fullWidth inputProps={{
    inputMode: 'numeric',
    pattern: '[0-9]*'
  }}/>
              <TextField label="Email" name="email" type="email" variant="outlined" required fullWidth />
              <TextField label="Mensagem" name="message" variant="outlined" required multiline rows={4} fullWidth />

              <Button 
                type="submit" 
                variant="contained" 
                sx={{
                  mt: 2,
                  backgroundColor: '#1976d2',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  }
                }}
              >
                Enviar
              </Button>
            </form>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Logo, QR Code e localização */}
          <Box
            sx={{
              height: '100%',
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: 3,
            }}
          >
            <Box sx={{ mb: 3 }}>
              <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
            </Box>

            <Box sx={{ mb: 3 }}>
              <QRCode value="https://wa.me/+5548991448812" size={128} />
            </Box>

            <Typography variant="body2" color="textSecondary">
              Localizado em Florianópolis, SC
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <IconButton
                component="a"
                href="https://wa.me/+5548991448812"
                target="_blank"
                sx={{
                  border: '4px solid #25D366',
                  borderRadius: '4px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#25D366',
                  '&:hover': {
                    backgroundColor: '#128C7E',
                  },
                }}
              >
                <WhatsAppIcon sx={{ color: 'white', mr: 1 }} />
                WhatsApp
              </IconButton>

              <IconButton
                component="a"
                href="https://t.me/+5548991448812"
                target="_blank"
                sx={{
                  border: '4px solid #0088CC',
                  borderRadius: '4px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#0088CC',
                  '&:hover': {
                    backgroundColor: '#0077b3',
                  },
                }}
              >
                <TelegramIcon sx={{ color: 'white', mr: 1 }} />
                Telegram
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Botões de WhatsApp e Telegram para dispositivos móveis */}
        <Box sx={{ mt: 3, gap: '16px', display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexDirection: 'row', margin:'auto' }}>
          <IconButton
            component="a"
            href="https://wa.me/+5548991448812"
            target="_blank"
            sx={{
              border: '4px solid #25D366',
              borderRadius: '4px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#25D366',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
          >
            <WhatsAppIcon sx={{ color: 'white', mr: 1 }} />
            WhatsApp
          </IconButton>

          <IconButton
            component="a"
            href="https://t.me/+5548991448812"
            target="_blank"
            sx={{
              border: '4px solid #0088CC',
              borderRadius: '4px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#0088CC',
              '&:hover': {
                backgroundColor: '#0077b3',
              },
            }}
          >
            <TelegramIcon sx={{ color: 'white', mr: 1 }} />
            Telegram
          </IconButton>
        </Box>
      </Grid>

      {/* Seta para o topo */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: 'transparent',
          color: theme.palette.text.primary, // Cor igual ao do título
          '&:hover': {
            cursor: 'pointer',
            opacity: 0.7,
          },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpwardIcon sx={{ fontSize: 40 }} />
      </Box>
    </Box>
  );
};

export default Contact;
