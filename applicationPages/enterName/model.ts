import {userModel} from '../../entities/user';

export const $isNextButtonDisabled = userModel.stores.$fullName.map((fullName) => {
  return fullName.length < 1;
});
