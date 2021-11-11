import React, {useRef} from 'react';

import {IChooseAvatarPhoto} from './types';
import {Button} from '../../../shared/ui';

export const ChooseAvatarPhoto: React.FC<IChooseAvatarPhoto> = ({setAvatar}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files ?? [])[0];
    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
    e.target.value = '';
  };

  return (
    <>
      <Button
        className="action-button-different"
        kind="link"
        text="Choose a different photo"
        onClick={handleClick}
      />
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        hidden
      />
    </>
  );
};
