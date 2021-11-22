import {forward} from 'effector';

import {
  goToHome,
  goToEnterName,
  goToChoosePhoto,
  goToEnterInfo,
  goToEnterPhone,
  goToEnterCode,
  goToRooms,
  goToProfile,
} from '../../features';
import {navigatorModel} from '../../entities';
import {Pages} from '../../shared/constants';

forward({
  from: goToHome,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.WELCOME),
});

forward({
  from: goToEnterName,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_NAME),
});

forward({
  from: goToProfile,
  to: navigatorModel.events.pushToThePath.prepend(() => `${Pages.PROFILE}/1`),
});

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

export const navigationProcess = {};