import { createEvent, createStore, restore } from 'effector';
import { NumberFormatValues } from 'react-number-format';

import { ICodeNumber, ICodeNumberEventParam } from './types';

const setFullName = createEvent<string>();
const $fullName = restore<string>(setFullName, '');

const setAvatar = createEvent<string>();
const $avatar = restore<string>(setAvatar, '');

const setPhoneNumber = createEvent<NumberFormatValues>();
const $phoneNumber = restore<NumberFormatValues>(
  setPhoneNumber,
  {} as NumberFormatValues
);

const setCodeNumber = createEvent<ICodeNumberEventParam>();
const $codeNumber = createStore<ICodeNumber>({
  1: '',
  2: '',
  3: '',
  4: '',
});

$codeNumber.on(setCodeNumber, (state, { id, value }) => {
  return { ...state, [id]: value };
});

const $isFullNameValid = $fullName.map((fullName) => {
  return fullName.length > 0;
});

const $isPhoneNumberValid = $phoneNumber.map(({ formattedValue }) => {
  return formattedValue?.length === 18 && !formattedValue?.includes('_');
});

const $isCodeNumberValid = $codeNumber.map((codeNumber) => {
  return Object.values(codeNumber).every((number) => !!number);
});

export const events = {
  setFullName,
  setAvatar,
  setPhoneNumber,
  setCodeNumber,
};

export const stores = {
  $avatar,
  $fullName,
  $isFullNameValid,
  $phoneNumber,
  $isPhoneNumberValid,
  $codeNumber,
  $isCodeNumberValid,
};
