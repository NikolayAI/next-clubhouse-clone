import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useGate } from 'effector-react/ssr';

import { navigatorModel } from '../../entities/navigator';

// TODO сделать нормальный хок
export const WithRouterComponent = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useGate(navigatorModel.events.NavigatorGate, router);
  return <Component {...pageProps} />;
};
