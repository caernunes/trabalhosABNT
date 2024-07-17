import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThemeToggleButton from './ThemeToggleButton';
import SignInDrawer from './SignInDrawer';
import HamburgerMenu from './HamburgerMenu';
import './Navbar.css';

export default function Navbar() {
  const [signInDrawerOpen, setSignInDrawerOpen] = useState(false);

  const toggleSignInDrawer = (open) => () => {
    setSignInDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <HamburgerMenu toggleSignInDrawer={toggleSignInDrawer(true)} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PDF Tools
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">Página Inicial</Button>
            <Button color="inherit" component={Link} to="/trabalhos-academicos">Trabalhos Acadêmicos</Button>
            <Button color="inherit" component={Link} to="/citacoes-documentos">Citações em documentos</Button>
            <Button color="inherit" onClick={toggleSignInDrawer(true)}>Entrar</Button>
            <Button color="inherit" className="register-button" onClick={toggleSignInDrawer(true)}>Registre-se</Button>
          </Box>
          <ThemeToggleButton />
        </Toolbar>
      </AppBar>
      <SignInDrawer isOpen={signInDrawerOpen} toggleDrawer={toggleSignInDrawer} />
    </Box>
  );
}
