import Box from '@mui/material/Box';
import Link from 'next/link';
import React from 'react';

export type InnerProps = {
  href: string;
};

const Inner: React.ForwardRefRenderFunction<HTMLAnchorElement, InnerProps> = ({
  href,
  ...props
}, ref) => {
  return (
    <Link ref={ref} href={href}>
      <Box {...props} component="a" />
    </Link>
  );
};

export default React.forwardRef<HTMLAnchorElement, InnerProps>(Inner);
