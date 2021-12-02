import { forward } from 'effector';

import {
  goToHome,
  goToEnterName,
  goToChoosePhoto,
  goToEnterInfo,
  goToEnterPhone,
  goToEnterCode,
  goToRooms,
  goToProfile,
  goToRoom,
} from '../../features/goToThePath';
import { navigatorModel } from '../../entities/navigator';
import { Pages } from '../../shared/constants';

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

forward({
  from: goToRoom,
  to: navigatorModel.events.pushToThePath.prepend(() => `${Pages.ROOMS}/2314`),
});

export const navigationProcess = {};
