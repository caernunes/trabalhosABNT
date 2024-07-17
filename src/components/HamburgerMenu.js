import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    top: '64px', // Adjust if your navbar height is different
    height: 'calc(65% - 64px)', // Adjust if your navbar height is different
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px 20px 20px 20px',
    transition: 'all 0.3s ease-in-out',
  },
}));

export default function HamburgerMenu({ toggleSignInDrawer }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMouseEnter = () => {
    if (!isMobile) {
      setDrawerOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Página Inicial" />
        </ListItem>
        <ListItem button component={Link} to="/trabalhos-academicos">
          <ListItemIcon><BookIcon /></ListItemIcon>
          <ListItemText primary="Trabalhos Acadêmicos ABNT NBR 14724" />
        </ListItem>
        <ListItem button component={Link} to="/citacoes-documentos">
          <ListItemIcon><DescriptionIcon /></ListItemIcon>
          <ListItemText primary="Citações em documentos ABNT NBR 10520" />
        </ListItem>
        <ListItem>
          <Button variant="contained" color="primary" fullWidth onClick={() => toggleSignInDrawer(true)}>
            Registre-se
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={isMobile ? toggleDrawer(!drawerOpen) : undefined}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={300}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {drawerList}
        </div>
      </StyledDrawer>
    </div>
  );
}
