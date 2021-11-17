import {forward} from 'effector';

import {goToEnterCode} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToEnterCode,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_CODE),
});