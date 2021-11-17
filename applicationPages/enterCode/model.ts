import {forward} from 'effector';

import {goToRooms} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToRooms,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ROOMS),
});