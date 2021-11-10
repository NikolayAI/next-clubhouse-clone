import {userModel} from '../../entities/user';

export const $isActivateButtonDisable = userModel.data.$codeNumber.map(
  (codeNumber) => {
    return !Object.values(codeNumber).every((number) => !!number);
  },
);