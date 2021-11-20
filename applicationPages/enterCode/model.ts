import {userModel} from '../../entities/user';

export const $isCodeActivateButtonDisabled = userModel.stores.$codeNumber.map(
  (codeNumber) => {
    return !Object.values(codeNumber).every((number) => !!number);
  },
);
