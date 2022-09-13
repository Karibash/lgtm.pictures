import BlockIcon from '@mui/icons-material/Block';
import Alert from '@mui/material/Alert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import React, { useCallback } from 'react';

import { useSnackbar } from '../../../hooks/useSnackbar';

export type PostBlockButtonProps = {
  size?: IconButtonProps['size'];
};

const PostBlockButton: React.FC<PostBlockButtonProps> = ({
  size,
}) => {
  const snackbar = useSnackbar();

  const handleClick = useCallback(() => {
    snackbar.show(
      <Alert severity="success" elevation={6} sx={{ width: '100%' }} onClose={snackbar.close}>
        <Typography>Blocked!</Typography>
      </Alert>
    );
  }, [snackbar]);

  return (
    <Tooltip enterDelay={1000} title="block the post">
      <IconButton color="error" size={size} onClick={handleClick}>
        <BlockIcon fontSize={size} />
      </IconButton>
    </Tooltip>
  );
};

export default PostBlockButton;
