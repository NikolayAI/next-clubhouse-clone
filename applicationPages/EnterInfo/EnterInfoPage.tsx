import React from 'react';
import styled from 'styled-components';
import {Avatar, Button, Card, Container, H, Span} from '../../shared/ui';
import Image from 'next/image';
import {IEnterInfo} from './types';

const EnterInfo: React.FC<IEnterInfo> = ({className}) => {
  return (
    <div className={`enter-info-page-wrapper ${className}`}>
      <Container className="enter-info-title" gridAutoFlow="row">
        <Container className="title-icon-container">
          <Image
            className="title-icon"
            src="/images/image3.png"
            alt="confetti"
            height={48}
            width={48}
          />
        </Container>
        <Container className="title-text-container">
          <H className="title-text" tag="h1" kind="md">
            Do you want import info from Twitter?
          </H>
        </Container>
      </Container>
      <Card className="enter-info-card" kind="md">
        <Container className="avatar-container">
          <Avatar className="avatar" kind="lg"/>
        </Container>
        <Container className="user-name-container">
          <Span className="user-name" kind="sm">
            User Name
          </Span>
        </Container>
        <Container className="enter-info-actions">
          <Button
            className="action-button-import"
            kind="primary"
            text="Import from Twitter"
            leadIconUrl="/icons/sparrow.svg"
          />
        </Container>
        <Container className="enter-info-actions">
          <Button
            className="action-button-manual"
            kind="link"
            text="Enter my info manually"
            suffixIconUrl="/icons/arrowRight.svg"
          />
        </Container>
      </Card>
    </div>
  );
};

export const EnterInfoPage = styled(EnterInfo)`
  &.enter-info-page-wrapper {
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  .enter-info-title {
    margin-bottom: 20px;
  }
  
  .avatar-container {
    margin-bottom: 14px;
  }
  
  .user-name-container {
    margin-bottom: 50px;
  }
  
  .enter-info-actions + .enter-info-actions {
    margin-top: 14px;
  }
  
  .action-button-manual {
    color: #4F6FA5;
    font-weight: normal;
  }
`;