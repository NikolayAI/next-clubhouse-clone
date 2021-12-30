import { createEvent, forward } from 'effector/compat';

import { sessionModel } from '../../../entities/session';
import { userModel } from '../../../entities/user';

export const authGitHub = createEvent();

forward({
  from: authGitHub,
  to: sessionModel.authGitHubFx,
});
forward({
  from: sessionModel.authGitHubFx.doneData,
  to: userModel.setUserFromGitHubFx,
});
forward({
  from: userModel.setUser,
  to: sessionModel.setCookieFx,
});
