import {createEvent, forward} from 'effector';

import {goToTheNextAuthStep} from '../../features/auth';
import {Pages} from '../../shared/constants';

export const goToAuthorization = createEvent();
export const goToSignIn = createEvent();

forward({
  from: goToAuthorization,
  to: goToTheNextAuthStep.prepend(() => Pages.ENTER_NAME),
});
