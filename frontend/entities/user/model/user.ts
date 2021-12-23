import { createEffect, createEvent, createStore, restore } from 'effector/compat';
import { NumberFormatValues } from 'react-number-format';

import { ICodeNumber, ICodeNumberEventParam } from './types';
import { IUserResponse } from '../../../shared/api';

const setUserFx = createEffect<IUserResponse, IUserResponse, Error>();
const $user = restore<IUserResponse>(setUserFx.doneData, {} as IUserResponse);

const $fullName = createStore<string>('');
const setFullName = createEvent<string>();
$fullName.watch(data => console.log('FULLNAME: ', data));

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

setUserFx.use((user) => user);

const $isFullNameValid = $fullName.map((fullName) => {
  return fullName?.length > 0;
});


const $isPhoneNumberValid = $phoneNumber.map(({ formattedValue }) => {
  return formattedValue?.length === 18 && !formattedValue?.includes('_');
});

const $isCodeNumberValid = $codeNumber.map((codeNumber) => {
  return Object.values(codeNumber).every((number) => !!number);
});

$fullName
  .on(setFullName, (_, fullName) => fullName)
  .on($user, (_, { fullname, username }) => fullname ?? username);

$codeNumber.on(setCodeNumber, (state, { id, value }) => {
  return { ...state, [id]: value };
});

export {
  $user,
  $avatar,
  $fullName,
  $isFullNameValid,
  $phoneNumber,
  $isPhoneNumberValid,
  $codeNumber,
  $isCodeNumberValid,
  setFullName,
  setAvatar,
  setPhoneNumber,
  setCodeNumber,
  setUserFx,
};
