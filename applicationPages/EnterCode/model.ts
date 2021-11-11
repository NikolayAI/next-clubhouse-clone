import {userModel} from '../../entities/user';

export const $isCodeNumberValid = userModel.data.$codeNumber.map(
  (codeNumber) => {
    return Object.values(codeNumber).every((number) => !!number);
  },
);