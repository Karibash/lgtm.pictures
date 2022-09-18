import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

import ApplicationHeader from '../../domains/ApplicationHeader';
import ApplicationNavigation from '../../domains/ApplicationNavigation';

export type ApplicationLayoutProps = {
  children: React.ReactElement;
};

const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  children,
}) => {
  return (
    <Container>
      <ApplicationHeader />
      <Toolbar />
      <ApplicationNavigation />
      <Box sx={{ py: 1 }}>
        {children}
      </Box>
    </Container>
  );
};

export default ApplicationLayout;
