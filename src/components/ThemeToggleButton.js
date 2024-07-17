import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../ThemeContext';
import { useTheme } from '@mui/material/styles';

export default function ThemeToggleButton() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
      aria-label="toggle light and dark mode"
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
