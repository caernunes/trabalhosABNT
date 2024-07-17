import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              PDF Tools
            </Typography>
            <Typography variant="body2">
              Your go-to platform for managing PDF documents. Join, split, compress, convert, and more.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/trabalhos-academicos" color="inherit">
                  Trabalhos Acadêmicos
                </Link>
              </li>
              <li>
                <Link href="/citacoes-documentos" color="inherit">
                  Citações em Documentos
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: support@pdftools.com
            </Typography>
            <Typography variant="body2">
              Phone: +123 456 7890
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={5} pb={2}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} PDF Tools. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
