import React, {useState} from 'react';
import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useGate} from 'effector-react';

import {
  ChoosePhotoPage,
  EnterCodePage,
  EnterInfoPage,
  EnterNamePage,
  EnterPhonePage,
  WelcomePage,
} from '../applicationPages';
import {navigatorModel} from '../entities/navigator';
import {GlobalStyle} from '../shared/styles/globalStyles';

const stepsComponents: Record<string, React.FC> = {
  0: WelcomePage,
  1: EnterNamePage,
  2: EnterInfoPage,
  3: ChoosePhotoPage,
  4: EnterPhonePage,
  5: EnterCodePage,
};

const Home: NextPage = () => {
  const router = useRouter();
  useGate(navigatorModel.events.NavigatorGate, router);
  const [step, setStep] = useState<number>(5);
  const Component = stepsComponents[step];

  return (
    <div>
      <GlobalStyle/>
      <Component/>
    </div>
  );
};

export default Home;