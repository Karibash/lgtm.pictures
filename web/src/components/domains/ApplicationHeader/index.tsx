import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

import OpenInNewButton from '../../elements/OpenInNewButton';
import BrandIcon from '../../icons/BrandIcon';

const Wrapper = styled(AppBar)`
  backdrop-filter: blur(18px);
  background-color: ${props => alpha(props.theme.palette.background.default, .76)};
  border-bottom: solid thin ${props => alpha(props.theme.palette.divider, .76)};
`;

const ExternalLink = styled(OpenInNewButton)`
  border-radius: 12px;
  border: solid thin ${props => props.theme.palette.divider};
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
        <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
          <IconButton color="primary" size="medium" href="/">
            <BrandIcon fontSize="large" />
          </IconButton>
          <Stack direction="row" gap={1.5}>
            <ExternalLink
              size="small"
              href="https://github.com/Karibash/lgtm.pictures"
              icon={GitHubIcon}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </Wrapper>
  );
};

export default ApplicationHeader;
