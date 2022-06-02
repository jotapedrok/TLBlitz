/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';

export const onClickOutside = (iniitalValue: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(iniitalValue);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return { visible, setVisible, ref };
};
