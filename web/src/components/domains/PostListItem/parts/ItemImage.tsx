import { Fade } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useHover } from 'ahooks';
import Image from 'next/future/image';
import React, { useCallback, useRef } from 'react';

import { useSnackbar } from '../../../../hooks/useSnackbar';
import OpenInNewButton from '../../../elements/OpenInNewButton';
import ViewCount from '../../../elements/ViewCount';
import PostBlockButton from '../../PostBlockButton';

const Wrapper = styled(Box)`
  position: relative;
  display: block;
  padding: 0;
  width: 100%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Overlay = styled(Box)`
  position: absolute;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => alpha(props.theme.palette.background.default, .48)};

  .MuiButton-root {
    position: absolute;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.palette.text.primary};
    font-size: ${props => props.theme.typography.h5.fontSize};

    &:hover {
      background-color: transparent;
    }

    .MuiTouchRipple-root {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;

const Header = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

const Footer = styled(Box)`
  position: absolute;
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

  > * {
    pointer-events: auto;
  }
`;

export type ItemImageProps = {
  id: string;
  image: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  viewCount: number;
};

const ItemImage: React.FC<ItemImageProps> = ({
  id,
  image,
  viewCount,
}) => {
  const ref = useRef<HTMLDivElement>();
  const isHovering = useHover(ref);
  const snackbar = useSnackbar();

  const handleClickImage = useCallback(() => {
    void navigator.clipboard.writeText(`![LGTM](${image.url})`);
    snackbar.show(
      <Alert severity="success" elevation={6} sx={{ width: '100%' }} onClose={snackbar.close}>
        <Typography>Copied!</Typography>
      </Alert>,
    );
  }, [image.url, snackbar]);

  return (
    <Wrapper ref={ref}>
      <Image
        priority
        src={image.url}
        alt={image.title}
        width={image.width}
        height={image.height}
      />
      <Fade in={isHovering}>
        <Box>
          <Overlay>
            <Button onClick={handleClickImage}>
              Copy
            </Button>
          </Overlay>
          <Header>
            <PostBlockButton size="small" />
            <OpenInNewButton size="small" title="image url" href={`/posts/${id}`} />
          </Header>
          <Slide direction="up" in={isHovering} container={ref.current}>
            <Footer>
              <ViewCount size="small" count={viewCount} />
            </Footer>
          </Slide>
        </Box>
      </Fade>
    </Wrapper>
  );
};

export default ItemImage;
