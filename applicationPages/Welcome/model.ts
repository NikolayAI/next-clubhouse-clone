import {createEvent, sample} from 'effector';

import { navigatorModel } from '../../entities/navigator';

export const goToNextPageEvent = createEvent();
sample({
  clock: goToNextPageEvent,
  source: navigatorModel.data.$navigator,
  fn: (navigator) => navigator.push('enterName'),
})