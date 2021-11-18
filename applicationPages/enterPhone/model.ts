import {forward} from 'effector';

import {goToEnterCode} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {userModel} from '../../entities/user';
import {Pages} from '../../shared/constants';

export const $isPhoneNextButtonDisabled = userModel.stores.$phoneNumber.map(
  ({formattedValue}) => {
    return !formattedValue || formattedValue.includes('_');
  },
);

forward({
  from: goToEnterCode,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_CODE),
});