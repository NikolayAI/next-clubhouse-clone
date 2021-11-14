import {createEvent, forward} from 'effector';

import {userModel} from '../../entities/user';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

export const goToNextStep = createEvent();

export const $isNextButtonDisable = userModel.stores.$phoneNumber.map(
  ({formattedValue}) => {
    return !formattedValue || formattedValue.includes('_');
  },
);

forward({
  from: goToNextStep,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_CODE),
});