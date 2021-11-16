import {createEvent, forward} from 'effector';

import {navigatorModel} from '../../../entities/navigator';
import {userModel} from '../../../entities/user';
import {Pages} from '../../../shared/constants';

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

forward({
  from: goToEnterName,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_NAME),
});
forward({
  from: goToEnterInfo,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_INFO),
});
forward({
  from: goToChoosePhoto,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.CHOOSE_PHOTO),
});
forward({
  from: goToEnterPhone,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_PHONE),
});
forward({
  from: goToEnterCode,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_CODE),
});
forward({
  from: goToRooms,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ROOMS),
});