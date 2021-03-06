import { userModel } from './index';
import { IUserResponse } from '../../../contracts';

export const setUser =
  (authWindow: Window | null, cb: (value: void | PromiseLike<void>) => void) =>
  async ({ data }: MessageEvent<IUserResponse> | MessageEvent) => {
    if (data?.source) return;
    if (authWindow?.closed) {
      userModel.setUser(JSON.parse(data));
      window.removeEventListener('message', setUser(authWindow, cb));
      cb();
    }
  };
