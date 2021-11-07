import {createEvent, restore} from 'effector';
import {NumberFormatValues} from 'react-number-format';

const setAvatar = createEvent<string>();
const $avatar = restore<string>(setAvatar, '');

const setPhoneNumber = createEvent<NumberFormatValues>();
const $phoneNumber = restore<NumberFormatValues>(setPhoneNumber, {} as NumberFormatValues);

export const events = {
  setAvatar,
  setPhoneNumber,
};

export const data = {
  $avatar,
  $phoneNumber,
};