import { OverridableComponent } from '@mui/material/OverridableComponent';
import SvgIcon, { SvgIconProps, SvgIconTypeMap } from '@mui/material/SvgIcon';
import React from 'react';

export type BrandIconProps = SvgIconProps;

const BrandIcon: React.ForwardRefRenderFunction<SVGSVGElement, BrandIconProps> = ({
  ...props
}, forwardRef) => {
  return (
    <SvgIcon viewBox="0 0 512 512" {...props} ref={forwardRef}>
      <path fill="#F8F8F2" d="M458.256 458.256c-40.498 42.057-112.75 52.36-202.162 53.868-89.413-1.508-161.664-11.811-202.163-53.868C11.875 417.758 1.571 345.506.064 256.094 1.571 166.681 11.875 94.43 53.931 53.931 94.43 11.875 166.681 1.571 256.094.064c89.412 1.507 161.664 11.811 202.162 53.867 42.057 40.499 52.36 112.75 53.868 202.163-1.508 89.412-11.811 161.664-53.868 202.162Z" />
      <path fill="#F82A36" d="M96 153h13v186h103.1v12H96V153Z" />
      <path fill="#28F8F2" d="M108 161h13v186h103.1v12H108V161Z" style={{ mixBlendMode: 'multiply' }} />
      <path fill="#282A36" d="M102 157h13v186h103.1v12H102V157ZM274 157h151.1v11.1H357V355h-14.9V168.1H274V157Z" />
    </SvgIcon>
  );
};

export default React.forwardRef(BrandIcon) as OverridableComponent<SvgIconTypeMap>;
