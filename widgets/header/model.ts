import {createEvent, forward} from 'effector';

import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

export const goToHomePath = createEvent();
export const goToProfilePath = createEvent();

forward({
  from: goToHomePath,
  to: navigatorModel.events.pushToThePath.prepend(() => `/${Pages.WELCOME}`)
})

forward({
  from: goToProfilePath,
  to: navigatorModel.events.pushToThePath.prepend(() => `/${Pages.PROFILE}/1`)
})