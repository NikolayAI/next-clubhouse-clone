import {createEvent, forward} from 'effector';

import {goToTheNextAuthStep} from '../../features/auth';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

forward({
  from: goToNextStep,
  to: goToTheNextAuthStep.prepend(() => Pages.CHOOSE_PHOTO),
});