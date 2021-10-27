import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {H} from '../shared/ui/atoms/H/H';
import {GlobalStyle} from '../shared/styles/globalStyles';
import {Span} from '../shared/ui/atoms/Span/Span';
import {P} from '../shared/ui/atoms/P/P';
import {Button} from '../shared/ui/atoms/Button/Button';
import {Input} from '../shared/ui/atoms/Input/Input';
import {Avatar} from '../shared/ui/molecules/Avatar/Avatar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <GlobalStyle/>
      <H kind="h5">Head</H>
      <Span kind="xxs">Span</Span>
      <P kind="md">Paragraph</P>
      <Button
        kind="secondary"
        text="Activate"
        suffixIcon={
          <Image
            src={'/arrowRight.svg'}
            alt="arrow right"
            height={12}
            width={11}
          />
        }
      />
      <Input />
      <Avatar
        kind="lg"
        src={'https://i.insider.com/5ebf0f16aee6a826327d9111?width=700'}
      />
    </div>
  );
};

export default Home;
