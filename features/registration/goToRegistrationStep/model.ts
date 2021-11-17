import {createEvent} from 'effector';

import {userModel} from '../../../entities/user';

export const goToEnterName = createEvent<void>();
export const goToEnterInfo = createEvent<void>();
export const goToChoosePhoto = createEvent<void>();
export const goToEnterPhone = createEvent<void>();
export const goToEnterCode = createEvent<void>();
export const goToRooms = createEvent<void>();

export const $isFullNameNextButtonDisabled = userModel.stores.$fullName.map(
  (fullName) => {
    return fullName.length < 1;
  },
);
export const $isPhoneNextButtonDisabled = userModel.stores.$phoneNumber.map(
  ({formattedValue}) => {
    return !formattedValue || formattedValue.includes('_');
  },
);
export const $isCodeActivateButtonDisabled = userModel.stores.$codeNumber.map(
  (codeNumber) => {
    return !Object.values(codeNumber).every((number) => !!number);
  },
);
