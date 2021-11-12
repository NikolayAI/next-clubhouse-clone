import {userModel} from '../../entities/user';
import {createEvent, forward} from 'effector';
import {goToTheNextAuthStep} from '../../features/auth';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

export const $isActivateButtonDisabled = userModel.stores.$codeNumber.map(
  (codeNumber) => {
    return !Object.values(codeNumber).every((number) => !!number);
  },
);

forward({
  from: goToNextStep,
  to: goToTheNextAuthStep.prepend(() => Pages.ROOMS),
});