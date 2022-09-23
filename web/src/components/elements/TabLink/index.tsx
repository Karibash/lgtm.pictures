import Tab from '@mui/material/Tab';
import React from 'react';

import Inner from './parts/Inner';

export type TabLinkProps = {
  label: React.ReactNode;
  value: string;
  href: string;
};

const TabLink: React.ForwardRefRenderFunction<HTMLAnchorElement, TabLinkProps> = ({
  ...props
}, forwardRef) => {
  return <Tab {...props} ref={forwardRef} component={Inner} />;
};

export default React.forwardRef(TabLink);
