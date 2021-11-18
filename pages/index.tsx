import React from 'react';
import type {NextPage} from 'next';

import {WelcomePage} from '../applicationPages';

// 0: WelcomePage,
// 1: EnterNamePage,
// 2: EnterInfoPage,
// 3: ChoosePhotoPage,
// 4: EnterPhonePage,
// 5: EnterCodePage,

const Home: NextPage = () => {
  return (
    <div>
      <WelcomePage/>
    </div>
  );
};

export default Home;