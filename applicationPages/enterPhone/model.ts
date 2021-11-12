import {createEvent, forward} from 'effector';

import {goToTheNextAuthStep} from '../../features/auth';
import {userModel} from '../../entities/user';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

export const $isNextButtonDisable = userModel.stores.$phoneNumber.map(
  ({formattedValue}) => {
    return !formattedValue || formattedValue.includes('_');
  },
);

forward({
  from: goToNextStep,
  to: goToTheNextAuthStep.prepend(() => Pages.ENTER_CODE),
});