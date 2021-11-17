import {forward} from 'effector';

import {goToEnterName} from '../../features';
import {navigatorModel} from '../../entities/navigator';
import {Pages} from '../../shared/constants';

forward({
  from: goToEnterName,
  to: navigatorModel.events.pushToThePath.prepend(() => Pages.ENTER_NAME),
});
goToEnterName.watch(data => console.log('hello1'))