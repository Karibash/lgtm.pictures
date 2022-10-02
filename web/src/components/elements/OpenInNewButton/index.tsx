import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

export type OpenInNewButtonProps = {
  className?: string;
  title: string;
  href: string;
  size?: 'small' | 'medium' | 'large';
  icon?: OverridableComponent<SvgIconTypeMap> ;
};

const OpenInNewButton: React.ForwardRefRenderFunction<HTMLAnchorElement, OpenInNewButtonProps> = ({
  title,
  href,
  size,
  icon: IconComponent = OpenInNewIcon,
  ...props
}, forwardRef) => {
  return (
    <Tooltip title={title}>
      <IconButton {...props} ref={forwardRef} target="_blank" rel="noreferrer noopener" href={href} size={size}>
        <IconComponent fontSize={size} />
      </IconButton>
    </Tooltip>
  );
};

export default React.forwardRef(OpenInNewButton);
