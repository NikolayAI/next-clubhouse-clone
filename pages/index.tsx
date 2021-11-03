import React from 'react';
import type {NextPage} from 'next';

import {GlobalStyle} from '../shared/styles/globalStyles';
import {EnterCodePage} from '../applicationPages';

const Home: NextPage = () => {
  return (
    <div>
      <GlobalStyle/>
      <EnterCodePage/>
    </div>
  );
};

export default Home;
