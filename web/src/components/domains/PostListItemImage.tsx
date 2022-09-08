import BlockIcon from '@mui/icons-material/Block';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { useCallback } from 'react';

import { useSnackbar } from '../../hooks/useSnackbar';

const Wrapper = styled(Box)`
  &:after {
    content: 'Copy';
    position: absolute;
    display: flex;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.typography.h5.fontSize};
    color: ${props => props.theme.palette.getContrastText(props.theme.palette.background.default)};
    transition: ${props => {
      return props.theme.transitions.create(['opacity', 'background-color'], {
        duration: props.theme.transitions.duration.short,
      });
    }};
  }

  &:hover {
    &:after {
      opacity: 1;
      pointer-events: none;
      background-color: ${props => alpha(props.theme.palette.background.default, .48)};
    }

    > .header {
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled(Button)`
  position: relative;
  display: block;
  padding: 0;
  width: 100%;
`;

const Header = styled(Box)`
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
  right: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: ${props => {
    return props.theme.transitions.create(['opacity'], {
      duration: props.theme.transitions.duration.short,
    });
  }};
`;

const Footer = styled(Box)`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;
  pointer-events: none;
  background-color: ${props => alpha(props.theme.palette.background.default, .48)};

  .MuiButtonBase-root {
    pointer-events: auto;
  }
`;

export type PostListItemImageProps = {
  id: string;
  image: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  viewCount: number;
};

const PostListItemImage: React.FC<PostListItemImageProps> = ({
  id,
  image,
  viewCount,
}) => {
  const { Snackbar, ...snackbar } = useSnackbar();

  const handleClickImage = useCallback(() => {
    void navigator.clipboard.writeText(`![LGTM](${image.url})`);
    snackbar.show(
      <Alert severity="success" elevation={6} sx={{ width: '100%' }} onClose={snackbar.close}>
        <Typography>Copied!</Typography>
      </Alert>
    );
  }, [image.url, snackbar]);

  const handleClickBlock = useCallback(() => {
    snackbar.show(
      <Alert severity="success" elevation={6} sx={{ width: '100%' }} onClose={snackbar.close}>
        <Typography>Blocked!</Typography>
      </Alert>
    );
  }, [snackbar]);

  return (
    <Wrapper position="relative">
      <ImageWrapper onClick={handleClickImage}>
        <Image
          layout="responsive"
          src={image.url}
          alt={image.title}
          width={image.width}
          height={image.height}
        />
      </ImageWrapper>
      <Header className="header">
        <IconButton size="small" color="error" title="投稿をブロックする" onClick={handleClickBlock}>
          <BlockIcon fontSize="small" />
        </IconButton>
      </Header>
      <Footer>
        <Stack direction="row" ml={.25}>
          <VisibilityIcon fontSize="small" />
          <Typography fontSize="small" ml={.5}>{viewCount}</Typography>
        </Stack>
        <IconButton size="small" target="_blank" rel="noreferrer noopener" title="詳細画面を開く" href={`/posts/${id}`}>
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Footer>
      <Snackbar autoHideDuration={2000} />
    </Wrapper>
  );
};

export default PostListItemImage;
