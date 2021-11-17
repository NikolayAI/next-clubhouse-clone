import {forward} from 'effector';

import {goToChoosePhoto} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToChoosePhoto,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.CHOOSE_PHOTO),
});