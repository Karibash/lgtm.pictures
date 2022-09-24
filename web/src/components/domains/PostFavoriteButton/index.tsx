import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React, { useCallback } from 'react';

export type PostFavoriteButtonProps = {
  className?: string;
  favorited: boolean;
  size?: 'small' | 'medium' | 'large';
};

const PostFavoriteButton: React.FC<PostFavoriteButtonProps> = ({
  favorited,
  size,
  ...props
}) => {
  const handleClick = useCallback(() => {
    console.log('PostFavoriteButton.handleClick');
  }, []);

  return (
    <Tooltip title={favorited ? 'unfavorite' : 'favorite'}>
      <IconButton
        {...props}
        size={size}
        color={favorited ? 'primary': 'default'}
        onClick={handleClick}
      >
        {favorited ? <FavoriteIcon fontSize={size} /> : <FavoriteBorderIcon fontSize={size} />}
      </IconButton>
    </Tooltip>
  );
};

export default PostFavoriteButton;
