import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {
  Button,
  Card,
  CodeInput,
  Container,
  H,
  P,
  PageWrapper,
} from '../../shared/ui';
import {IEnterCode} from './types';

const EnterCode: React.FC<IEnterCode> = ({className}) => {
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
          <CodeInput className="enter-code-input"/>
        </Container>
        <Container className="card-actions">
          <Button
            kind="primary"
            text="Activate"
            suffixIconUrl={'/icons/arrowRight.svg'}
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