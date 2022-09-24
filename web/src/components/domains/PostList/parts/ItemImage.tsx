import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/future/image';
import React, { useCallback } from 'react';

import { useSnackbar } from '../../../../hooks/useSnackbar';
import OpenInNewButton from '../../../elements/OpenInNewButton';
import ViewCount from '../../../elements/ViewCount';
import PostBlockButton from '../../PostBlockButton';

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

    > .footer {
      opacity: 1;
      transform: translateY(0%) scaleY(100%);
    }
  }

  .event {
    pointer-events: auto;
  }
`;

const ImageWrapper = styled(Button)`
  position: relative;
  display: block;
  padding: 0;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Header = styled(Box)`
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
  right: 0;
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;
  transition: ${props => {
    return props.theme.transitions.create(['opacity'], {
      duration: props.theme.transitions.duration.short,
    });
  }};
`;

const Footer = styled(Box)`
  position: absolute;
  z-index: 1;
  opacity: 1;
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
  transform: translateY(50%) scaleY(0%);
  transition: ${props => {
    return props.theme.transitions.create(['opacity', 'transform'], {
      duration: props.theme.transitions.duration.short,
    });
  }};
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
    <Wrapper position="relative">
      <ImageWrapper onClick={handleClickImage}>
        <Image
          src={image.url}
          alt={image.title}
          width={image.width}
          height={image.height}
        />
      </ImageWrapper>
      <Header className="header">
        <PostBlockButton className="event" size="small" />
        <OpenInNewButton className="event" size="small" href={`/posts/${id}`} />
      </Header>
      <Footer className="footer">
        <ViewCount className="event" size="small" count={viewCount} />
      </Footer>
    </Wrapper>
  );
};

export default ItemImage;
