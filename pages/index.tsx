import React, {useState} from 'react';
import type {NextPage} from 'next';

import {GlobalStyle} from '../shared/styles/globalStyles';
import {
  ChoosePhotoPage,
  EnterInfoPage,
  EnterNamePage,
  WelcomePage,
} from '../applicationPages';

const stepsComponents: Record<string, React.FC> = {
  0: WelcomePage,
  1: EnterNamePage,
  2: EnterInfoPage,
  3: ChoosePhotoPage,
};

const Home: NextPage = () => {
  const [step, setStep] = useState<number>(3);
  const Component = stepsComponents[step];

  return (
    <div>
      <GlobalStyle/>
      <Component/>
    </div>
  );
};

export default Home;