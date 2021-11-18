import {forward} from 'effector';

import {goToEnterInfo} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {userModel} from '../../entities/user';
import {Pages} from '../../shared/constants';

export const $isFullNameNextButtonDisabled = userModel.stores.$fullName.map(
  (fullName) => {
    return fullName.length < 1;
  },
);

forward({
  from: goToEnterInfo,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_INFO),
});