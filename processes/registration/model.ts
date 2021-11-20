import {forward} from 'effector';

import {
  goToChoosePhoto,
  goToEnterCode,
  goToEnterInfo,
  goToEnterPhone,
  goToRooms,
} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToEnterInfo,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_INFO),
});

forward({
  from: goToChoosePhoto,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.CHOOSE_PHOTO),
});

forward({
  from: goToEnterPhone,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_PHONE),
});

forward({
  from: goToEnterCode,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_CODE),
});

forward({
  from: goToRooms,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ROOMS),
});

export const registrationProcessModel = {};