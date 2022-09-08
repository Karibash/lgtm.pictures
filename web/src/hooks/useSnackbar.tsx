import MaterialSnackbar, { SnackbarProps } from '@mui/material/Snackbar';
import React, { useCallback, useState } from 'react';

export const useSnackbar = () => {
  const [shows, setShows] = useState(false);
  const [content, setContent] = useState<React.ReactElement>();

  const show = useCallback((content: React.ReactElement) => {
    setContent(content);
    setShows(true);
  }, []);

  const close = useCallback(() => {
    setShows(false);
  }, []);

  const handleClose = useCallback<Exclude<SnackbarProps['onClose'], undefined>>((event, reason) => {
    if (reason === 'clickaway') return;
    close();
  }, [close]);

  const Snackbar = useCallback<React.FC<Omit<SnackbarProps, 'open' | 'onClose'>>>(props => {
    return (
      <MaterialSnackbar {...props} open={shows} onClose={handleClose}>
        {content}
      </MaterialSnackbar>
    );
  }, [content, handleClose, shows]);

  return {
    show,
    close,
    Snackbar,
  } as const;
};
