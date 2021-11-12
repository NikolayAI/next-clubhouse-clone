import React from 'react';
import type {AppProps} from 'next/app';
import {fork, Scope, serialize} from 'effector';
import {Provider} from 'effector-react/scope';

import {GlobalStyle} from '../shared/styles/globalStyles';

let clientScope: Scope

export default function App({Component, pageProps}: AppProps) {
  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  })
  if (typeof window !== 'undefined') clientScope = scope
  console.log('scope', serialize(scope))
  return (
    <Provider value={scope}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Provider>
  )
}