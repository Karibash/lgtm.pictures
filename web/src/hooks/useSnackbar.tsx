import MaterialSnackbar, { SnackbarProps } from '@mui/material/Snackbar';
import { atom, Provider, useAtom, useSetAtom } from 'jotai';
import React, { useCallback } from 'react';
import { v4 as uuid } from 'uuid';

const snackbarScope = Symbol();
const snackbarPropsAtom = atom<SnackbarProps>({});

const Snackbar: React.FC<Omit<SnackbarProps, 'children'>> = props => {
  const [snackbarProps, setSnackbarProps] = useAtom(snackbarPropsAtom, snackbarScope);

  const handleClose = useCallback<Exclude<SnackbarProps['onClose'], undefined>>(() => {
    setSnackbarProps(props => ({
      ...props,
      open: false,
    }));
  }, [setSnackbarProps]);

  return <MaterialSnackbar {...props} {...snackbarProps} onClose={handleClose} />;
};

export const SnackbarProvider: React.FC<Omit<SnackbarProps, 'children'> & { children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <Provider scope={snackbarScope}>
      {children}
      <Snackbar {...props} />
    </Provider>
  );
};

export const useSnackbar = () => {
  const setSnackbarProps = useSetAtom(snackbarPropsAtom, snackbarScope);

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
