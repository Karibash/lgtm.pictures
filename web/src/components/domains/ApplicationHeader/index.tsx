import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

import ApplicationLogo from '../ApplicationLogo';

const Wrapper = styled(AppBar)`
  backdrop-filter: blur(20px);
  background-color: ${props => alpha(props.theme.palette.background.default, .76)};
  border-bottom: solid thin ${props => alpha(props.theme.palette.divider, .76)};
`;

export type ApplicationHeaderProps = {
  className?: string;
};

const ApplicationHeader: React.FC<ApplicationHeaderProps> = ({
  ...props
}) => {
  return (
    <Wrapper {...props} elevation={0}>
      <Toolbar>
        <IconButton color="primary" size="medium" href="/">
          <ApplicationLogo fontSize="large" />
        </IconButton>
      </Toolbar>
    </Wrapper>
  );
};

export default ApplicationHeader;
