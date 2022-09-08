import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import { useRouter } from 'next/router';
import React from 'react';

import TabLink from '../../elements/TabLink';

export type ApplicationLayoutProps = {
  children: React.ReactElement;
};

const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  children,
}) => {
  const router = useRouter();

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={router.pathname}>
          <TabLink label="LATEST" value="/" href="/" />
          <TabLink label="TRENDS" value="/trends" href="/trends" />
          <TabLink label="UPLOADS" value="/uploads" href="/uploads" />
          <TabLink label="FAVORITES" value="/favorites" href="/favorites" />
        </Tabs>
      </Box>
      <Box sx={{ py: 1 }}>
        {children}
      </Box>
    </Container>
  );
};

export default ApplicationLayout;