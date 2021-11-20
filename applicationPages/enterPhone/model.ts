import {userModel} from '../../entities/user';

export const $isPhoneNextButtonDisabled = userModel.stores.$phoneNumber.map(
  ({formattedValue}) => {
    return !formattedValue || formattedValue.includes('_');
  },
);
