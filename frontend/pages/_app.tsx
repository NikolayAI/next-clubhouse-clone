import React from 'react';
import type { AppProps } from 'next/app';
import { fork, Scope, serialize } from 'effector/compat';
import { Provider } from 'effector-react/ssr';

import { Application } from '../app';
import { navigationProcess } from '../processes';
import { GlobalStyle } from '../shared/styles/globalStyles';

const initProcesses = {
  ...navigationProcess,
};

let clientScope: Scope;

export default function App({ Component, pageProps }: AppProps) {
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
      <GlobalStyle />
      <Application Component={Component} {...pageProps} />
    </Provider>
  );
}
