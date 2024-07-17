import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log('toggleColorMode called');
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          console.log(`Mode changed from ${prevMode} to ${newMode}`);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  console.log(`ThemeProvider initialized with mode: ${mode}`);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
