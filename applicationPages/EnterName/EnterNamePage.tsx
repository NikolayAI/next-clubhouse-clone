import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {
  Button,
  Card,
  Container,
  H,
  Input,
  PageWrapper,
  Span,
} from '../../shared/ui';
import {IEnterName} from './types';

const EnterName: React.FC<IEnterName> = ({className}) => {
  return (
    <PageWrapper className={`enter-name ${className}`}>
      <Container className="enter-name-title" gridAutoFlow="row">
        <Container className="title-icon-container">
          <Image
            className="title-icon"
            src="/images/image5.png"
            alt="man"
            height={48}
            width={48}
          />
        </Container>
        <Container className="title-text-container">
          <H className="title-text" tag="h1" kind="md">
            What’s your full name?
          </H>
        </Container>
      </Container>
      <Container className="enter-name-description">
        <Span className="description-text" kind="md" fontWeight="normal">
          People use real names on Clubhouse :) Thnx!
        </Span>
      </Container>
      <Card className="enter-name-card" kind="md">
        <Input className="enter-name-input"/>
        <Container className="enter-name-actions">
          <Button
            className="action-button-next"
            kind="primary"
            text="Next"
            suffixIconUrl="/icons/arrowRight.svg"
          />
        </Container>
      </Card>
    </PageWrapper>
  );
};

export const EnterNamePage = styled(EnterName)`
  .enter-name-description {
    margin-bottom: 40px;
  }

  .enter-name-input {
    margin-bottom: 32px;
  }
`;