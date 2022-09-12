import MaterialMenu, { MenuProps } from '@mui/material/Menu';
import MaterialMenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { atom, useAtom, useSetAtom } from 'jotai';
import React, { useCallback } from 'react';

const menuPropsAtom = atom<MenuProps>({ open: false });

const Menu: React.FC<Omit<MenuProps, 'open' | 'anchorEl' | 'onClose'>> = props => {
  const [menuProps, setMenuProps] = useAtom(menuPropsAtom);

  const handleClose = useCallback(() => {
    setMenuProps({ open: false });
  }, [setMenuProps]);

  return (
    <MaterialMenu
      {...menuProps}
      {...props}
      onClose={handleClose}
    />
  );
};

const MenuItem: React.FC<MenuItemProps> = props => {
  const setMenuProps = useSetAtom(menuPropsAtom);

  const handleClick = useCallback<Exclude<MenuItemProps['onClick'], undefined>>(event => {
    props.onClick?.(event);
    setMenuProps({ open: false });
  }, [props, setMenuProps]);

  return (
    <MaterialMenuItem
      {...props}
      onClick={handleClick}
    />
  );
};

export const useMenu = (elementRef: React.RefObject<Element>) => {
  const setMenuProps = useSetAtom(menuPropsAtom);

  const show = useCallback(() => {
    setMenuProps({ open: true, anchorEl: elementRef.current });
  }, [elementRef, setMenuProps]);

  const close = useCallback(() => {
    setMenuProps({ open: false });
  }, [setMenuProps]);

  return {
    show,
    close,
    Menu,
    MenuItem,
  } as const;
};
