import { useInViewport, useUpdateEffect } from 'ahooks';
import { useCallback, useRef } from 'react';

import type { RefObject } from 'react';

export type UseReachEventOptions = {
  target?: RefObject<HTMLElement | undefined>;
  startReached?: () => void;
  endReached?: () => void;
  threshold?: number;
};

export const useReachEvent = ({
  target,
  startReached,
  endReached,
  threshold = 320,
}: UseReachEventOptions) => {
  const startTriggerRef = useRef<HTMLDivElement>(null);
  const endTriggerRef = useRef<HTMLDivElement>(null);

  const startTrigger = useCallback(() => <div ref={startTriggerRef} />, []);
  const endTrigger = useCallback(() => <div ref={endTriggerRef} />, []);

  const useInViewportOptions = {
    root: target,
    rootMargin: `${threshold}px`,
  };
  const [inViewportStartTrigger] = useInViewport(startTriggerRef, useInViewportOptions);
  const [inViewportEndTrigger] = useInViewport(endTriggerRef, useInViewportOptions);

  useUpdateEffect(() => {
    if (!inViewportStartTrigger) return;
    startReached?.();
  }, [inViewportStartTrigger]);

  useUpdateEffect(() => {
    if (!inViewportEndTrigger) return;
    endReached?.();
  }, [inViewportEndTrigger]);

  return {
    TriggerComponent: {
      Start: startTrigger,
      End: endTrigger,
    },
  };
};
