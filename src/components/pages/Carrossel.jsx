import { Box, Typography } from "@mui/material";

const Carrossel = ({ isDarkMode }) => {
  const frases = [
    "Desenvolvimento de Site",
    "Marketing Digital",
    "Social Media",
  ];

  const renderFrases = () =>
    frases.map((frase, index) => (
      <Typography
        key={index}
        component="span"
        sx={{
          color: isDarkMode ? "#000" : "#fff", 
          fontWeight: "bold",
          fontSize: "2rem",
          display: "inline-block",
          mx: 4,
        }}
      >
        {frase}
      </Typography>
    ));

  return (
    <Box
      sx={{
        
        width: "99vw",
        overflow: "hidden",
        position: "relative",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", 
        pl: 2,
        backgroundColor: isDarkMode ? "#fff" : "#000",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          animation: "marquee 12s linear infinite",
        }}
      >
         {Array.from({ length: 3 }, renderFrases).flat()}

      </Box>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default Carrossel;
