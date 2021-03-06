import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useEvent, useStore } from 'effector-react/ssr';

import { IEnterInfo } from './types';
import { $isEnterNameButtonDisabled, $isGithubAuthButtonDisabled, $isGithubAuthButtonLoading } from './model';
import { goToEnterName } from '../../features/goToThePath';
import { authGitHub } from '../../features/auth';
import { Avatar } from '../../entities/user';
import { Button, Card, Container, H, PageWrapper, Span } from '../../shared/ui';

const EnterInfo: React.FC<IEnterInfo> = ({ className }) => {
  const isEnterNameButtonDisabled = useStore($isEnterNameButtonDisabled);
  const isGithubAuthButtonDisabled = useStore($isGithubAuthButtonDisabled);
  const isGithubAuthButtonLoading = useStore($isGithubAuthButtonLoading);
  const goToNextPage = useEvent(goToEnterName);
  const goToAuthGitHub = useEvent(authGitHub);
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
            Do you want import info from GitHub?
          </H>
        </Container>
      </Container>
      <Card className="enter-info-card" kind="md">
        <Container className="avatar-container">
          <Avatar className="avatar" kind="lg" />
        </Container>
        <Container className="user-name-container">
          <Span className="user-name" kind="sm">
            User Name
          </Span>
        </Container>
        <Container className="enter-info-actions">
          <Button
            className="enter-info-button"
            kind="primary"
            text="Import from GitHub"
            leadIconUrl="/icons/github.svg"
            leadIconHeight={18}
            leadIconWidth={18}
            suffixIconUrl="/icons/arrowRight.svg"
            onClick={goToAuthGitHub}
            loadingDescription="??????????????????????"
            isLoading={isGithubAuthButtonLoading}
            disabled={isGithubAuthButtonDisabled}
          />
        </Container>
        <Container className="enter-info-actions">
          <Button
            className="action-button-manual"
            kind="link"
            text="Enter my info manually"
            onClick={goToNextPage}
            disabled={isEnterNameButtonDisabled}
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
    color: #4f6fa5;
    font-weight: normal;
  }
`;
