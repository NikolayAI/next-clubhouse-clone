import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {IEnterInfo} from './types';
import {Avatar} from '../../entities/user';
import {Button, Card, Container, H, PageWrapper, Span} from '../../shared/ui';
import ImportInfoButton from '../../features/registration/importInfo/ui';

const EnterInfo: React.FC<IEnterInfo> = ({className}) => {
  return (
    <PageWrapper className={`enter-info ${className}`}>
      <Container className="enter-info-title" gridAutoFlow="row">
        <Container className="title-icon-container">
          <Image
            className="title-icon"
            src="/images/image3.png"
            alt="fork"
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
          <ImportInfoButton/>
        </Container>
        <Container className="enter-info-actions">
          <Button
            className="action-button-manual"
            kind="link"
            text="Enter my info manually"
          />
        </Container>
      </Card>
    </PageWrapper>
  );
};

export const EnterInfoPage = styled(EnterInfo)`
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