import React from 'react';
import type {NextPage} from 'next';

import {GlobalStyle} from '../shared/styles/globalStyles';
import {EnterInfoPage} from '../applicationPages';

const Home: NextPage = () => {
  return (
    <div>
      <GlobalStyle/>
      <EnterInfoPage/>
    </div>
  );
};

export default Home;
