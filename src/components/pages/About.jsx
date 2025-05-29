import { Typography, Box } from "@mui/material";
import akiLogo from "../../assets/img/AkiLogo.png";
import Aki from "../../assets/img/Aki.png";

const About = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        flexDirection: { xs: "column", md: "row" },
        boxSizing: "border-box",
        mb: 4,
      }}
    >
      <Box sx={{ flex: 2, textAlign: { xs: "center", md: "left" }, justifyContent:'center' }}>
        <Typography variant="h2" gutterBottom>
          Bem-vindo à Aki
        </Typography>
        <Typography variant="h6" paragraph>
          A Aki é uma empresa especializada em marketing digital, criação de landing pages e gestão de social media. Com soluções inovadoras, buscamos impulsionar sua marca no ambiente digital.
        </Typography>
        <Typography variant="body1" paragraph>
          Nossa missão é oferecer serviços de alta qualidade, que ajudem sua empresa a se destacar no mercado. Estamos aqui para transformar suas ideias em resultados através de estratégias personalizadas e criativas.
        </Typography>
        <Typography variant="body1" paragraph>
          Se você está procurando aumentar sua presença online ou criar uma landing page de impacto, a Aki é a escolha certa para você.
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        <img
          src={isDarkMode ? akiLogo : Aki} 
          alt="Aki Logo"
          style={{
            maxWidth: "200px",
            marginRight: '1rem',
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
