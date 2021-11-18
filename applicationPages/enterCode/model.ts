import {forward} from 'effector';

import {goToRooms} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {userModel} from '../../entities/user';
import {Pages} from '../../shared/constants';

export const $isCodeActivateButtonDisabled = userModel.stores.$codeNumber.map(
  (codeNumber) => {
    return !Object.values(codeNumber).every((number) => !!number);
  },
);

forward({
  from: goToRooms,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ROOMS),
});