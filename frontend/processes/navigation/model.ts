import { forward } from 'effector/compat';

import {
  goToChoosePhoto,
  goToEnterCode,
  goToEnterInfo,
  goToEnterName,
  goToEnterPhone,
  goToHome,
  goToProfile,
  goToRoom,
  goToRooms,
} from '../../features/goToThePath';
import { navigatorModel } from '../../entities/navigator';
import { userModel } from '../../entities/user';
import { Pages } from '../../shared/constants';

forward({
  from: goToHome,
  to: navigatorModel.pushToThePath.prepend(() => Pages.WELCOME),
});

forward({
  from: goToEnterInfo,
  to: navigatorModel.pushToThePath.prepend(() => Pages.ENTER_INFO),
});

forward({
  from: userModel.setUserFx.doneData,
  to: navigatorModel.pushToThePath.prepend(() => Pages.ENTER_NAME),
});

forward({
  from: goToEnterName,
  to: navigatorModel.pushToThePath.prepend(() => Pages.ENTER_NAME),
});

forward({
  from: goToChoosePhoto,
  to: navigatorModel.pushToThePath.prepend(() => Pages.CHOOSE_PHOTO),
});

forward({
  from: goToEnterPhone,
  to: navigatorModel.pushToThePath.prepend(() => Pages.ENTER_PHONE),
});

forward({
  from: goToEnterCode,
  to: navigatorModel.pushToThePath.prepend(() => Pages.ENTER_CODE),
});

forward({
  from: goToRooms,
  to: navigatorModel.pushToThePath.prepend(() => Pages.ROOMS),
});

forward({
  from: goToRoom,
  to: navigatorModel.pushToThePath.prepend(
    ({ id }) => `${Pages.ROOMS}/${id}`
  ),
});

forward({
  from: goToProfile,
  to: navigatorModel.pushToThePath.prepend(() => `${Pages.PROFILE}/1`),
});

export const navigationProcess = {};
