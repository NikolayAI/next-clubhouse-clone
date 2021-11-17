import {forward} from 'effector';

import {goToEnterInfo} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToEnterInfo,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_INFO),
});