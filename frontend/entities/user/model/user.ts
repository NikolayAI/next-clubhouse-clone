import { createEffect, createEvent, createStore, restore, sample } from 'effector/compat';
import { NumberFormatValues } from 'react-number-format';

import { ICodeNumber, ICodeNumberEventParam } from './types';
import { setUser as setUserHelper } from '../helpers';
import { IUserResponse } from '../../../shared/api';

const setUser = createEvent<IUserResponse>();
const setUserFx = createEffect<Window | null, void, Error>();
const $user = restore<IUserResponse>(setUser, {} as IUserResponse);

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

setUserFx.use(async (authWindow: Window | null) => {
  await new Promise<void>((resolve) => {
    window.addEventListener('message', setUserHelper(authWindow, resolve));
  });
});

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
  setUser,
  setUserFx,
};
