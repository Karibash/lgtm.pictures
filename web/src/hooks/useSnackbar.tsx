import MaterialSnackbar, { SnackbarProps } from '@mui/material/Snackbar';
import { atom, useAtom, useSetAtom } from 'jotai';
import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';

const snackbarPropsAtom = atom<SnackbarProps>({});

export const Snackbar: React.FC<SnackbarProps> = props => {
  const [snackbarProps, setSnackbarProps] = useAtom(snackbarPropsAtom);

  const handleClose = useCallback<Exclude<SnackbarProps['onClose'], undefined>>(() => {
    setSnackbarProps(props => ({
      ...props,
      open: false,
    }));
  }, [setSnackbarProps]);

  return <MaterialSnackbar {...props} {...snackbarProps} onClose={handleClose} />;
};

export const useSnackbar = () => {
  const setSnackbarProps = useSetAtom(snackbarPropsAtom);

  const show = useCallback((content: React.ReactElement, options?: SnackbarProps) => {
    setSnackbarProps({
      ...options,
      key: uuid(),
      open: true,
      children: content,
    });
  }, [setSnackbarProps]);

  const close = useCallback(() => {
    setSnackbarProps(props => ({
      ...props,
      open: false,
    }));
  }, [setSnackbarProps]);

  return {
    show,
    close,
  } as const;
};
