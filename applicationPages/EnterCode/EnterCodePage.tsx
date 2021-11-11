import React from 'react';
import {useEvent, useStore} from 'effector-react';
import styled from 'styled-components';
import Image from 'next/image';

import {IEnterCode} from './types';
import {$isCodeNumberValid} from './model';
import {CodeInput, userModel} from '../../entities/user';
import {Button, Card, Container, H, P, PageWrapper} from '../../shared/ui';

const EnterCode: React.FC<IEnterCode> = ({className}) => {
  const codes = useStore(userModel.data.$codeNumber);
  const isCodeNumberValid = useStore($isCodeNumberValid);
  const setCodeNumber = useEvent(userModel.events.setCodeNumber);
  return (
    <PageWrapper className={`enter-phone ${className}`}>
      <Container className="enter-code-title" gridAutoFlow="row">
        <Container className="title-icon">
          <Image
            className="icon"
            src="/images/image4.png"
            alt="code"
            height={48}
            width={48}
          />
        </Container>
        <Container className="title-heading">
          <H className="heading" tag="h1" kind="md">Enter your activate code</H>
        </Container>
      </Container>
      <Card className="enter-code-card" kind="md">
        <Container className="card-code-input">
          <CodeInput
            className="enter-code-input"
            codes={codes}
            setCodes={setCodeNumber}
          />
        </Container>
        <Container className="card-actions">
          <Button
            kind="primary"
            text="Activate"
            loadingDescription="Activate in progress..."
            suffixIconUrl={'/icons/arrowRight.svg'}
            disabled={!isCodeNumberValid}
          />
        </Container>
        <Container className="card-description" textAlign="center">
          <P kind="sm">
            By entering your number, you’re agreeing to our Terms of Service
            and Privacy Policy. Thanks!
          </P>
        </Container>
      </Card>
    </PageWrapper>
  );
};

export const EnterCodePage = styled(EnterCode)`
  .title-heading {
    margin-bottom: 40px;
  }

  .card-code-input {
    margin-bottom: 40px;
  }

  .card-actions {
    margin-bottom: 20px;
  }

  .card-description {
    width: 330px;
    color: #817F7A;
  }
`;