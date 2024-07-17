import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './Hero.css';

function Hero() {
  const theme = useTheme();

  return (
    <Box
      className="hero"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Ferramentas online para os amantes de PDF
      </Typography>
      <Typography variant="h6" gutterBottom>
        Ferramenta online é completamente gratuita para juntar PDF, dividir PDF, comprimir PDF,
        converter documentos Office para PDF, conversão de PDF para JPG, e JPG para PDF. Não requer
        instalação.
      </Typography>
      <Button variant="contained" color="primary" className="hero-button">
        Example Button
      </Button>
    </Box>
  );
}

export default Hero;
