import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

import ApplicationNavigation from '../../domains/ApplicationNavigation';

export type ApplicationLayoutProps = {
  children: React.ReactElement;
};

const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  children,
}) => {
  return (
    <Container>
      <ApplicationNavigation />
      <Box sx={{ py: 1 }}>
        {children}
      </Box>
    </Container>
  );
};

export default ApplicationLayout;
