import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { styled } from '@mui/material/styles';

Amplify.configure(awsExports);

const theme = createTheme();

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    top: '64px', // Adjust if your navbar height is different
    height: 'calc(100% - 64px)', // Adjust if your navbar height is different
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px 20px 20px 20px',
    transition: 'all 0.3s ease-in-out',
  },
}));

export default function SignInDrawer({ isOpen, toggleDrawer }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  useEffect(() => {
    console.log('SignInDrawer props:', { isOpen, toggleDrawer });
  }, [isOpen, toggleDrawer]);

  return (
    <ThemeProvider theme={theme}>
      <StyledDrawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={isOpen}
        onClose={() => toggleDrawer(false)()}
        PaperProps={{
          style: {
            width: isMobile ? '100%' : '500px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            position: 'relative',
          }}
        >
          <CssBaseline />
          <IconButton
            onClick={() => toggleDrawer(false)()}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Authenticator>
            {({ signOut, user }) => (
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {user ? (
                  <div>
                    <Typography variant="h6">Hello, {user.username}</Typography>
                    <Button onClick={signOut} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  </>
                )}
              </Box>
            )}
          </Authenticator>
        </Box>
      </StyledDrawer>
    </ThemeProvider>
  );
}
