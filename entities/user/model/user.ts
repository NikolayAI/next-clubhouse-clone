import {createEvent, createStore, restore} from 'effector';
import {NumberFormatValues} from 'react-number-format';
import {ICodeNumber, ICodeNumberEventParam} from '../types';

const setAvatar = createEvent<string>();
const $avatar = restore<string>(setAvatar, '');

const setPhoneNumber = createEvent<NumberFormatValues>();
const $phoneNumber = restore<NumberFormatValues>(setPhoneNumber, {} as NumberFormatValues);

const setCodeNumber = createEvent<ICodeNumberEventParam>();
const $codeNumber = createStore<ICodeNumber>({
  1: '',
  2: '',
  3: '',
  4: '',
});
$codeNumber.on(setCodeNumber, (state, {id, value}) => {
  return {...state, [id]: value};
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