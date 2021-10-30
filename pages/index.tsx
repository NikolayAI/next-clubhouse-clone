import type {NextPage} from 'next';

import {GlobalStyle} from '../shared/styles/globalStyles';
import {Welcome} from '../applicationPages/Welcome';
import Image from 'next/image';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <GlobalStyle/>
      <Welcome/>
      <Image src="/image.svg" alt="confetti" height={28} width={28}/>
    </div>
  );
};

export default Home;
