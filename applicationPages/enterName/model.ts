import {createEvent, forward} from 'effector';

import {goToTheNextAuthStep} from '../../features/auth';
import {userModel} from '../../entities/user';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

export const $isNextButtonDisabled = userModel.stores.$fullName.map((fullName) => {
  return fullName.length < 1;
});

forward({
  from: goToNextStep,
  to: goToTheNextAuthStep.prepend(() => Pages.ENTER_INFO),
});