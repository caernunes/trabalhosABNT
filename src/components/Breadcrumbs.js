import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box sx={{ padding: '16px' }}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link to="/">Home</Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography color="text.primary" key={to}>
              {value}
            </Typography>
          ) : (
            <Link to={to} key={to}>
              {value}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}

export default Breadcrumbs;
