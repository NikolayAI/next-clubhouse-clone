import {
  createEffect,
  createEvent,
  createStore,
  restore,
} from 'effector/compat';
import { NumberFormatValues } from 'react-number-format';

import { ICodeNumber, ICodeNumberEventParam } from './types';
import { setUser as setUserHelper } from '../helpers';
import { API, IUserResponse } from '../../../shared/api';

const setUserFromGitHubFx = createEffect<Window | null, void, Error>();
const setUser = createEvent<IUserResponse>();
const $user = restore<IUserResponse>(setUser, {} as IUserResponse);

const $fullName = createStore<string>('');
const setFullName = createEvent<string>();
$fullName.watch((data) => console.log('NAME: ', data));

const setAvatarFx = createEffect<File, string, Error>();
const $avatar = restore<string>(setAvatarFx, '');

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

setUserFromGitHubFx.use(async (authWindow: Window | null) => {
  await new Promise<void>((resolve) => {
    window.addEventListener('message', setUserHelper(authWindow, resolve));
  });
});
setAvatarFx.use(async (file) => {
  const { url } = await API.uploadFile(file);
  return url;
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
  setAvatarFx,
  setPhoneNumber,
  setCodeNumber,
  setUser,
  setUserFromGitHubFx,
};
