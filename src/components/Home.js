import React from 'react';
import { Box, Grid } from '@mui/material';
import Card from './Card';
import Hero from './Hero';
import './Card.css';

function Home() {
  return (
    <Box>
      <Hero />
      <Box className="card-container">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              title="Trabalhos Acadêmicos ABNT NBR 14724"
              description="Manage your academic works according to ABNT NBR 14724 standards."
              link="/trabalhos-academicos"
              icon="book"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              title="Citações em documentos ABNT NBR 10520"
              description="Handle citations in documents according to ABNT NBR 10520 standards."
              link="/citacoes-documentos"
              icon="description"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
