import { Container } from '@mui/material';
import React from 'react';

const ContainerLayout = ({ children }) => {
  return (
    <Container sx={{ px: { xs: '20px', md: '32px', lg: '16px' } }}>
      {children}
    </Container>
  );
};

export default ContainerLayout;
