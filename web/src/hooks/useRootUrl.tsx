import { useMemo } from 'react';

export const useRootUrl = (): string => {
  return useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window.location.protocol}//${window.location.hostname}`
  }, []);
};
