import {createEvent, forward} from 'effector';

import {navigatorModel} from '../../../entities/navigator';
import {Pages} from '../../../shared/constants';

export const goToRegistration = createEvent();

forward({
  from: goToRegistration,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_NAME),
});