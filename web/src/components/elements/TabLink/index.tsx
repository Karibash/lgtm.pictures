import Tab from '@mui/material/Tab';
import React from 'react';

import Inner from './parts/Inner';

export type TabLinkProps = {
  label: React.ReactNode;
  value: string;
  href: string;
};

const TabLink: React.FC<TabLinkProps> = props => {
  return <Tab {...props} component={Inner} />;
};

export default TabLink;
