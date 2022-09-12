import MaterialLink, { LinkProps } from '@mui/material/Link';
import React from 'react';

const Link: React.FC<Pick<LinkProps, 'href' | 'children'>> = props => {
  return (
    <MaterialLink
      color="inherit"
      underline="none"
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    />
  );
};

export default Link;
