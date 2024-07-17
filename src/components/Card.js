import React from 'react';
import { Card as MuiCard, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { InsertDriveFile, Book, Description } from '@mui/icons-material';
import './Card.css';

function Card({ title, description, link, icon }) {
  const renderIcon = () => {
    switch (icon) {
      case 'file':
        return <InsertDriveFile className="card-icon" />;
      case 'book':
        return <Book className="card-icon" />;
      case 'description':
        return <Description className="card-icon" />;
      default:
        return <InsertDriveFile className="card-icon" />;
    }
  };

  return (
    <MuiCard className="card">
      <CardContent>
        {renderIcon()}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" component={Link} to={link} className="card-link">
            Learn More
          </Button>
        </Box>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
