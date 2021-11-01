import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {Button, Card, H, P, Span} from '../../shared/ui';
import {IWelcome} from './types';
import {Container} from '../../shared/ui';

const Welcome: React.FC<IWelcome> = ({className}) => {
  return (
    <div className={`welcome-page-wrapper ${className}`}>
      <Card className="welcome-card" kind="md">
        <Container className="welcome-title">
          <div className="title-icon-wrapper">
            <Image
              className="title-icon"
              src="/images/image2.png"
              alt="confetti"
              height={28}
              width={28}
            />
          </div>
          <H className="title-text" tag="h1" kind="md">
            Welcome to Clubhouse!
          </H>
        </Container>
        <Container className="welcome-description" textAlign="center">
          <P className="description-text" kind="md">
            We’re working hard to get Clubhouse ready for
            everyone! While we wrap up the finishing youches,
            we’re adding people gradually to make sure nothing
            breaks :)
          </P>
        </Container>
        <Container className="welcome-actions">
          <Button
            className="welcome-button-next"
            text="Get your username"
            kind="primary"
            suffixIconUrl="/icons/arrowRight.svg"
          />
        </Container>
        <Container className="welcome-options">
          <Span className="options-questions" kind="xs" fontWeight="normal">
            Have an invite text?
          </Span>
          <Span className="options-actions" kind="xs">Sign in</Span>
        </Container>
      </Card>
    </div>
  );
};

export const WelcomePage = styled(Welcome)`
  &.welcome-page-wrapper {
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  
  .title-icon-wrapper {
    margin-right: 14px;
  }

  .welcome-description {
    width: 520px;
  }

  .welcome-button-next {
    margin-bottom: 16px;
  }
  
  .welcome-options {
    color: #4F6FA5;
  }
  
  .options-questions {
    margin-right: 4px;
  }
`;
