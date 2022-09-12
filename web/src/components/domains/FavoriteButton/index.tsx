import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React, { useCallback } from 'react';

export type FavoriteButtonProps = {
  favorited: boolean;
  size?: IconButtonProps['size'];
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  favorited,
  size,
}) => {
  const handleClick = useCallback(() => {
    console.log('FavoriteButton.handleClick');
  }, []);

  return (
    <Tooltip enterDelay={1000} title={favorited ? 'unfavorite' : 'favorite'}>
      <IconButton
        size={size}
        color={favorited ? 'primary': 'default'}
        onClick={handleClick}
      >
        {favorited ? <FavoriteIcon fontSize={size} /> : <FavoriteBorderIcon fontSize={size} />}
      </IconButton>
    </Tooltip>
  );
};

export default FavoriteButton;
