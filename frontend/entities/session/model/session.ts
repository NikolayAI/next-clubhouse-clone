import { createEffect } from 'effector/compat';const authGitHubFx = createEffect<void, Window | null, Error>();authGitHubFx.use(() => {  return window.open(    'http://localhost:3001/auth/github',    'Auth',    'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',  );});export {  authGitHubFx,};