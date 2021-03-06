import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useEvent, useStore } from 'effector-react/ssr';

import { IChoosePhoto } from './types';
import { chooseAvatar, SaveFile } from '../../features/saveFile';
import { goToEnterPhone } from '../../features/goToThePath';
import { Avatar, userModel } from '../../entities/user';
import { Button, Card, Container, H, PageWrapper, Span } from '../../shared/ui';

const ChoosePhoto: React.FC<IChoosePhoto> = ({ className }) => {
  const userAvatar = useStore(userModel.$avatar);
  const fullName = useStore(userModel.$fullName);
  const setAvatar = useEvent(chooseAvatar);
  const goToNextPage = useEvent(goToEnterPhone);
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
            Okay, {fullName || 'Unknown User'}!
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
          <Avatar className="avatar-photo" kind="lg" imageUrl={userAvatar} />
        </Container>
        <Container className="choose-photo-actions">
          <SaveFile
            className="choose-photo"
            component={Button}
            componentProps={{
              className: 'action-button-choose-photo',
              kind: 'link',
              text: 'Choose a different photo',
            }}
            saveFileHandler={setAvatar}
          />
        </Container>
        <Container className="choose-photo-actions">
          <Button
            className="action-button-next"
            kind="primary"
            text="Next"
            suffixIconUrl="/icons/arrowRight.svg"
            onClick={goToNextPage}
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

  .action-button-choose-photo {
    margin-bottom: 20px;
    color: #4f6fa5;
    font-size: 16px;
    font-weight: normal;
  }
`;
