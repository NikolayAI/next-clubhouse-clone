import React, {useState} from 'react';
import type {NextPage} from 'next';

import {
  ChoosePhotoPage,
  EnterCodePage,
  EnterInfoPage,
  EnterNamePage,
  EnterPhonePage,
  WelcomePage,
} from '../applicationPages';
import {ProfilePage} from '../applicationPages/profile/ProfilePage';

const stepsComponents: Record<string, React.FC> = {
  0: WelcomePage,
  1: EnterNamePage,
  2: EnterInfoPage,
  3: ChoosePhotoPage,
  4: EnterPhonePage,
  5: EnterCodePage,
};

const Home: NextPage = () => {
  const [step, setStep] = useState<number>(5);
  const Component = stepsComponents[step];

  return (
    <div>
      <ProfilePage/>
    </div>
  );
};

export default Home;