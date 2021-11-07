import {userModel} from '../../entities/user';

export const $isNextButtonDisable = userModel.data.$phoneNumber.map(
  ({formattedValue}) => {
    return !formattedValue || formattedValue.includes('_');
  },
);