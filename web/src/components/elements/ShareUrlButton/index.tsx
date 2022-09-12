import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import Alert from '@mui/material/Alert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useCallback, useRef } from 'react';

import { useMenu } from '../../../hooks/useMenu';
import { useSnackbar } from '../../../hooks/useSnackbar';
import Link from './parts/Link';

export type ShareUrlButtonProps = {
  url: string;
  size?: IconButtonProps['size'];
};

const ShareUrlButton: React.FC<ShareUrlButtonProps> = ({
  url,
  size,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { Menu, MenuItem, ...menu } = useMenu(buttonRef);
  const snackbar = useSnackbar();

  const handleClickLinkCopy = useCallback(() => {
    void navigator.clipboard.writeText(url);
    snackbar.show(
      <Alert severity="success" elevation={6} sx={{ width: '100%' }} onClose={snackbar.close}>
        <Typography>Copied!</Typography>
      </Alert>
    );
  }, [snackbar, url]);

  return (
    <>
      <Tooltip enterDelay={1000} title="share url">
        <IconButton color="secondary" ref={buttonRef} size={size} onClick={menu.show}>
          <ShareIcon fontSize={size} />
        </IconButton>
      </Tooltip>
      <Menu>
        <MenuItem>
          <Link href={`https://twitter.com/share?url=${url}&hashtags=LooksToMe`}>
            <Stack direction="row" alignItems="center" gap={1}>
              <TwitterIcon fontSize="small" /> Twitter
            </Stack>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`https://www.facebook.com/share.php?u=${url}`}>
            <Stack direction="row" alignItems="center" gap={1}>
              <FacebookIcon fontSize="small" /> Facebook
            </Stack>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClickLinkCopy}>
          <Stack direction="row" alignItems="center" gap={1}>
            <ContentCopyIcon fontSize="small" /> Link Copy
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ShareUrlButton;
