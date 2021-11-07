import React, {useRef} from 'react';
import {useEvent} from 'effector-react';

import {Button} from '../../shared/ui';
import {userModel} from '../../entities/user';

export const ChooseAvatarPhoto = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setAvatar = useEvent(userModel.events.setAvatar);

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
