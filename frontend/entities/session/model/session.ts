import { createEffect } from 'effector/compat';
import Cookies from 'js-cookie';

import { IUserResponse } from '../../../../contracts';

const authGitHubFx = createEffect<void, Window | null, Error>();
const setCookieFx = createEffect<IUserResponse, void, Error>();

authGitHubFx.use(() => {
  return window.open(
    'http://localhost:3001/auth/github',
    'Auth',
    'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no'
  );
});

setCookieFx.use(({ token = '' }) => {
  Cookies.set('token', token);
});

export { authGitHubFx, setCookieFx };
