import {createEvent, forward} from 'effector';

import {navigatorModel} from '../../../entities/navigator';
import {Pages} from '../../../shared/constants';

export const goToNextStep = createEvent();

forward({
  from: goToNextStep,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_INFO),
});