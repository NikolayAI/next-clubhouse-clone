import {createEvent, restore} from 'effector';
import {useStore} from 'effector-react';

const setUserAvatar = createEvent<string>();
const $userAvatar = restore(setUserAvatar, '');
const useUserAvatar = (): string => {
  return useStore($userAvatar);
};

export const events = {
  setUserAvatar,
};

export const selectors = {
  useUserAvatar,
};