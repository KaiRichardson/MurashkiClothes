import { useRef, useEffect } from 'react';

export const useExternalClick = setStateAction => {
  // External ref for a single component
  const externalRef = useRef();

  // Internal ref for component calling the hook
  const internalref = useRef();
  useEffect(() => {
    const handleClick = e => {
      if (externalRef && internalref) {
        if (externalRef.current.contains(e.target) || internalref.current.contains(e.target)) {
          return;
        }

        setStateAction(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.remove('mousedown', handleClick);
  }, [setStateAction]);

  return { internalref, externalRef };
};
