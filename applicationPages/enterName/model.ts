import {createEvent, forward} from 'effector';

import {userModel} from '../../entities/user';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

export const $isNextButtonDisabled = userModel.stores.$fullName.map((fullName) => {
  return fullName.length < 1;
});

forward({
  from: goToNextStep,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_INFO),
});