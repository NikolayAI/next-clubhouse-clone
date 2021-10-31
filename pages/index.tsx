import React from 'react';
import type {NextPage} from 'next';

import {GlobalStyle} from '../shared/styles/globalStyles';
import {WelcomePage} from '../applicationPages/WelcomePage/WelcomePage';

const Home: NextPage = () => {
  return (
    <div>
      <GlobalStyle/>
      <WelcomePage/>
    </div>
  );
};

export default Home;
