import {createEvent, restore} from 'effector';
import {NumberFormatValues} from 'react-number-format';
import {ICodeNumber} from '../types';

const setAvatar = createEvent<string>();
const $avatar = restore<string>(setAvatar, '');

const setPhoneNumber = createEvent<NumberFormatValues>();
const $phoneNumber = restore<NumberFormatValues>(setPhoneNumber, {} as NumberFormatValues);

const setCodeNumber = createEvent<ICodeNumber>();
const $codeNumber = restore<ICodeNumber>(setCodeNumber, {
  1: '',
  2: '',
  3: '',
  4: '',
});

export const events = {
  setAvatar,
  setPhoneNumber,
  setCodeNumber,
};

export const data = {
  $avatar,
  $phoneNumber,
  $codeNumber,
};