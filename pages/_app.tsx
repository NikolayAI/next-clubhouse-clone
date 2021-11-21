import React from 'react';
import type {AppProps} from 'next/app';
import {fork, Scope, serialize} from 'effector';
import {Provider, useGate} from 'effector-react/ssr';
import {useRouter} from 'next/router';

import {navigationProcess} from '../processes';
import {navigatorModel} from '../entities/navigator';
import {GlobalStyle} from '../shared/styles/globalStyles';

const initProcesses = {
  ...navigationProcess,
}

let clientScope: Scope;

const WithRouterComponent = ({Component, pageProps}: AppProps) => {
  const router = useRouter();
  useGate(navigatorModel.events.NavigatorGate, router);
  return <Component {...pageProps} />;
};

export default function App({Component, pageProps}: AppProps) {
  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  });
  if (typeof window !== 'undefined') clientScope = scope;
  console.log('scope', serialize(scope));
  return (
    <Provider value={scope}>
      <GlobalStyle/>
      <WithRouterComponent Component={Component}{...pageProps}/>
    </Provider>
  );
}