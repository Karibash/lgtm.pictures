import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import React, { useCallback } from 'react';

export type FavoriteButtonProps = {
  favorited: boolean;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  favorited,
}) => {
  const handleClick = useCallback(() => {
    console.log('FavoriteButton.handleClick');
  }, []);

  return (
    <IconButton
      title={favorited ? 'unfavorite' : 'favorite'}
      color={favorited ? 'primary': 'default'}
      onClick={handleClick}
    >
      {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
