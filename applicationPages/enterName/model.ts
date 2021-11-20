import {userModel} from '../../entities/user';

export const $isFullNameNextButtonDisabled = userModel.stores.$fullName.map(
  (fullName) => {
    return fullName.length < 1;
  },
);

