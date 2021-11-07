import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {useStore} from 'effector-react';

import {
  Button,
  Card,
  Container,
  H,
  P,
  PageWrapper,
  Span,
} from '../../shared/ui';
import {IEnterPhone} from './types';
import {EnterPhoneNumber} from '../../features/enterPhoneNumber/ui';
import {$isNextButtonDisable} from './model';

const EnterPhone: React.FC<IEnterPhone> = ({className}) => {
  return (
    <PageWrapper className={`enter-phone ${className}`}>
      <Container className="enter-phone-title" gridAutoFlow="row">
        <Container className="title-icon">
          <Image
            className="icon"
            src="/images/image1.png"
            alt="phone"
            height={48}
            width={48}
          />
        </Container>
        <Container className="title-heading">
          <H className="heading" tag="h1" kind="md">Enter your phone #</H>
        </Container>
        <Container className="title-description">
          <Span className="description" kind="md" fontWeight="normal">
            We will send you a confirmation code
          </Span>
        </Container>
      </Container>
      <Card className="enter-phone-card" kind="md">
        <Container className="card-phone-input">
          <EnterPhoneNumber/>
        </Container>
        <Container className="card-button-next">
          <Button
            className="button-next"
            kind="primary"
            text="Next"
            suffixIconUrl={'/icons/arrowRight.svg'}
            disabled={useStore($isNextButtonDisable)}
          />
        </Container>
        <Container className="card-description" textAlign="center">
          <P className="description" kind="sm">
            By entering your number, you’re agreeing to our Terms of Service
            and Privacy Policy. Thanks!
          </P>
        </Container>
      </Card>
    </PageWrapper>
  );
};

export const EnterPhonePage = styled(EnterPhone)`
  .enter-phone-title {
    margin-bottom: 40px;
  }

  .card-phone-input {
    margin-bottom: 40px;
  }

  .card-button-next {
    margin-bottom: 20px;
  }

  .card-description {
    width: 330px;
    color: #817F7A;
  }
`;