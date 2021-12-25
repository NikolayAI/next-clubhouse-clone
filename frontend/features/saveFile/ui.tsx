import React, { useRef } from 'react';

import { IChooseAvatarPhoto } from './types';

export const SaveFile: React.FC<IChooseAvatarPhoto> = ({
  saveFileHandler,
  className,
  component,
  componentProps,
}) => {
  const Component = component;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) saveFileHandler(file);
    e.target.value = '';
  };

  return (
    <>
      <Component onClick={handleClick} {...componentProps} />
      <input
        ref={inputRef}
        className={className}
        type="file"
        onChange={handleChange}
        hidden
      />
    </>
  );
};
