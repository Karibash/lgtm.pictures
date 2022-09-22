import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

export type OpenInNewButtonProps = {
  href: string;
  size?: 'small' | 'medium' | 'large';
  icon?: OverridableComponent<SvgIconTypeMap> ;
};

const OpenInNewButton: React.FC<OpenInNewButtonProps> = ({
  href,
  size,
  icon: IconComponent = OpenInNewIcon,
}) => {
  return (
    <Tooltip enterDelay={1000} title="open in new">
      <IconButton target="_blank" rel="noreferrer noopener" href={href} size={size}>
        <IconComponent fontSize={size} />
      </IconButton>
    </Tooltip>
  );
};

export default OpenInNewButton;
