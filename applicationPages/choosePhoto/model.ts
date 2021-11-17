import {forward} from 'effector';

import {goToEnterPhone} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToEnterPhone,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_PHONE),
});