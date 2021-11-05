import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {Button, Card, Container, H, PageWrapper, Span} from '../../shared/ui';
import {IChoosePhoto} from './types';
import {ChooseAvatarPhoto} from '../../features/chooseAvatarPhoto';
import {Avatar, userModel} from '../../entities/user';

const ChoosePhoto: React.FC<IChoosePhoto> = ({className}) => {
  const userAvatar = userModel.selectors.useUserAvatar();

  return (
    <PageWrapper className={`choose-photo ${className}`}>
      <Container className="choose-photo-title" gridAutoFlow="row">
        <Container className="title-icon-container">
          <Image
            className="title-icon"
            src="/images/image2.png"
            alt="confetti"
            height={48}
            width={48}
          />
        </Container>
        <Container className="title-text-container">
          <H className="title-text" tag="h1" kind="md">
            Okay, User Name!
          </H>
        </Container>
        <Container className="title-description">
          <Span className="description-text" kind="md" fontWeight="normal">
            How’s this photo?
          </Span>
        </Container>
      </Container>
      <Card className="choose-photo-card" kind="md">
        <Container className="avatar-container">
          <Avatar className="avatar" kind="lg" imageUrl={userAvatar}/>
        </Container>
        <Container className="choose-photo-actions">
          <ChooseAvatarPhoto/>
        </Container>
        <Container className="choose-photo-actions">
          <Button
            className="action-button-next"
            kind="primary"
            text="Next"
            suffixIconUrl={'/icons/arrowRight.svg'}
          />
        </Container>
      </Card>
    </PageWrapper>
  );
};

export const ChoosePhotoPage = styled(ChoosePhoto)`
  .choose-photo-title {
    margin-bottom: 40px;
  }

  .action-button-different {
    margin-bottom: 20px;
    color: #4F6FA5;
    font-size: 16px;
    font-weight: normal;
  }
`;