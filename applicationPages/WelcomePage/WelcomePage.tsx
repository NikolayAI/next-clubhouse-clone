import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {Button, Card, H, P, Span} from '../../shared/ui';
import {IWelcome} from './types';

const Welcome: React.FC<IWelcome> = ({className}) => {
  return (
    <div className={`welcome-page-wrapper ${className}`}>
      <Card className="welcome-card" kind="md">
        <div className="welcome-title">
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
        </div>
        <P className="welcome-description" kind="md">
          We’re working hard to get Clubhouse ready for
          everyone! While we wrap up the finishing youches,
          we’re adding people gradually to make sure nothing
          breaks :)
        </P>
        <div className="welcome-button-wrapper">
          <Button
            className="welcome-button-next"
            text="Get your username"
            kind="primary"
            suffixIconUrl="/icons/arrowRight.svg"
          />
        </div>
        <div className="welcome-options">
          <Span className="options-text" kind="xs">
            Have an invite text? Sign in
          </Span>
        </div>
      </Card>
    </div>
  );
};

export const WelcomePage = styled(Welcome)`
  .welcome-card {
    display: grid;
    justify-content: center;
  }

  .welcome-title {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-self: center;
    align-items: center;
  }

  .title-icon-wrapper {
    margin-right: 14px;
  }

  .welcome-description {
    width: 520px;
    text-align: center;
  }
  
  .welcome-button-wrapper {
    display: grid;
    justify-content: center;
  }

  .welcome-button-next {
    margin-bottom: 8px;
  }

  .welcome-options {
    text-align: center;
  }
`;
