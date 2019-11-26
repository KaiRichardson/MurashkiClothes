import { useRef, useEffect } from 'react';

export const useExternalClick = (callback: () => any) => {
  // External ref for a single component
  const externalRef = useRef<any>();

  // Internal ref for component calling the hook
  const internalref = useRef<any>();
  useEffect(() => {
    const handleClick = (e: any) => {
      if (externalRef && internalref) {
        if (externalRef.current.contains(e.target) || internalref.current.contains(e.target)) {
          return;
        }

        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [callback]);

  return { internalref, externalRef };
};
