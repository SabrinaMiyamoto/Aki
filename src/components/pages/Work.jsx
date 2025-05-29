import { Grid, Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import barbie from "../../assets/img/barbie.png";  
import forYou from "../../assets/img/forYou.png";
import prime from "../../assets/img/prime.png";
import chatBot from "../../assets/img/chatBot.png";
import icon from "../../assets/img/icon.png";
import gs from "../../assets/img/gs.ico"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projects = [
  
  {
    title: "Landing Page de um médico",
    description: "Landing Page para uma médico",
    image: icon,
    link: "https://drmauro.vercel.app/"
  },  
  {
    title: "Single Page Gs Cuidadores de Idosos",
    description: "Um site single page para uma agência de cuidadores de Idosos.",
    image: gs,
    link: "https://www.gscuidadores.com.br/"
  },
  {
    title: "Landing Page",
    description: "Uma landing page moderna e responsiva. Pensada nos fãs da Barbie.",
    image: barbie,  
    link: "https://portfolio-eta-nine-67.vercel.app/",
  },
  {
    title: "Prime Gráfica",
    description: "Landing Page de uma gráfica.",
    image: prime,
    link: "https://prime-inky.vercel.app/",
  },
  {
    title: "For you",
    description: "Loja online para venda de roupas.",
    image: forYou,
    link: "https://foryou-steel.vercel.app/",
  },
  {
    title: "Portfólio próprio",
    description: "ChatBot para demonstrar um pouco mais sobre as minhas habilidades.",
    image: chatBot,
    link: "https://chat-bot-alpha-murex.vercel.app/"
  }
];

const Work = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ p: 3, md: 3 }} id='work'>
      <Typography variant="h2" align="center"  gutterBottom>
        Projetos
      </Typography>

      <Box       sx={{ 
         display: { xs: "block", md: "none" }, 
         width: "100%", 
        overflow: "hidden" 
      }}>
        <Slider {...carouselSettings}>
          {projects.map((project, index) => (
            <Box key={index} textAlign="center" sx={{ width: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card sx={{ 
                  width: "100%", 
                  height: "auto", 
                  maxWidth: "100%", 
                  margin: "auto" 
                }}>
                  <CardMedia
                    component="img"
                    height="300" 
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover", width: "100%" }} 
                  />
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.link}
                      sx={{ mt: 2 }}
                    >
                      Ver Projeto
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Grid para dispositivos maiores */}
      <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            {/* Animação de hover nos cartões */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{ height: "380px", display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    sx={{ mt: 2 }}
                  >
                    Ver Projeto
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
