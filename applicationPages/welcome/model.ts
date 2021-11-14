import {createEvent, forward} from 'effector';

import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

export const goToAuthorization = createEvent();
export const goToSignIn = createEvent();

forward({
  from: goToAuthorization,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_NAME),
});
