import { useLayoutEffect } from 'react';

export const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalOverflowSetting = getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflowSetting;
    };
  }, []);
};
