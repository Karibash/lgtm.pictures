import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line react/display-name
const Inner = React.forwardRef<HTMLAnchorElement, {
  href: string;
}>(({
  href,
  ...props
}, ref) => {
  return (
    <Link ref={ref} href={href}>
      <Box {...props} component="a" />
    </Link>
  );
});

export type TabLinkProps = {
  label: React.ReactNode;
  value: string;
  href: string;
};

const TabLink: React.FC<TabLinkProps> = props => {
  return <Tab {...props} component={Inner} />;
};

export default TabLink;
