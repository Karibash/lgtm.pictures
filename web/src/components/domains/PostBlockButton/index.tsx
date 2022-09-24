import BlockIcon from '@mui/icons-material/Block';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';

import { useSnackbar } from '../../../hooks/useSnackbar';

export type PostBlockButtonProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const PostBlockButton: React.FC<PostBlockButtonProps> = ({
  size,
  ...props
}) => {
  const snackbar = useSnackbar();

  const handleClick = useCallback(() => {
    snackbar.show(
      <Alert severity="success" elevation={6} sx={{ width: '100%' }} onClose={snackbar.close}>
        <Typography>Blocked!</Typography>
      </Alert>,
    );
  }, [snackbar]);

  return (
    <Tooltip title="block the post">
      <IconButton {...props} color="error" size={size} onClick={handleClick}>
        <BlockIcon fontSize={size} />
      </IconButton>
    </Tooltip>
  );
};

export default PostBlockButton;
