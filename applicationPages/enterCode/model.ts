import {createEvent, forward} from 'effector';

import {userModel} from '../../entities/user';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

export const $isActivateButtonDisabled = userModel.stores.$codeNumber.map(
  (codeNumber) => {
    return !Object.values(codeNumber).every((number) => !!number);
  },
);

forward({
  from: goToNextStep,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ROOMS),
});