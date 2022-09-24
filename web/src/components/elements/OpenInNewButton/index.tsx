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

const OpenInNewButton: React.ForwardRefRenderFunction<HTMLAnchorElement, OpenInNewButtonProps> = ({
  href,
  size,
  icon: IconComponent = OpenInNewIcon,
  ...props
}, forwardRef) => {
  return (
    <Tooltip title="open in a new tab">
      <IconButton {...props} ref={forwardRef} target="_blank" rel="noreferrer noopener" href={href} size={size}>
        <IconComponent fontSize={size} />
      </IconButton>
    </Tooltip>
  );
};

export default React.forwardRef(OpenInNewButton);
