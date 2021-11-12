import {createEvent, forward} from 'effector';

import {navigatorModel} from '../../../entities/navigator';
import {Pages} from '../../../shared/constants';

export const goToTheNextAuthStep = createEvent<Pages>();

forward({
  from: goToTheNextAuthStep,
  to: navigatorModel.events.pushToThePath,
})