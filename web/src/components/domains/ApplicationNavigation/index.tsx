import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useRouter } from 'next/router';
import React from 'react';

import TabLink from '../../elements/TabLink';

const ApplicationNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} component="nav">
      <Tabs variant="fullWidth" value={router.pathname}>
        <TabLink label="LATEST" value="/" href="/" />
        <TabLink label="TRENDS" value="/trends" href="/trends" />
        <TabLink label="UPLOADS" value="/uploads" href="/uploads" />
        <TabLink label="FAVORITES" value="/favorites" href="/favorites" />
      </Tabs>
    </Box>
  );
};

export default ApplicationNavigation;
