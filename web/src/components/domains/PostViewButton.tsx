import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import React, { useCallback } from 'react';

export type PostFavoriteButtonProps = {
  viewed: boolean;
};

const PostViewButton: React.FC<PostFavoriteButtonProps> = ({
  viewed,
}) => {
  const handleOnClick = useCallback(() => {
    console.log('PostViewButton.handleOnClick');
  }, []);

  return (
    <IconButton aria-label="view post" color={viewed ? 'secondary': 'default'} onClick={handleOnClick}>
      <VisibilityIcon />
    </IconButton>
  );
};

export default PostViewButton;
