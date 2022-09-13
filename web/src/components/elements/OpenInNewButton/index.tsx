import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

export type OpenInNewButtonProps = {
  href: string;
  size?: IconButtonProps['size'];
};

const OpenInNewButton: React.FC<OpenInNewButtonProps> = ({
  href,
  size,
}) => {
  return (
    <Tooltip enterDelay={1000} title="open in new">
      <IconButton target="_blank" rel="noreferrer noopener" href={href} size={size}>
        <OpenInNewIcon fontSize={size} />
      </IconButton>
    </Tooltip>
  );
};

export default OpenInNewButton;
