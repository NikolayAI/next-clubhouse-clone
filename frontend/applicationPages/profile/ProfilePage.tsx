import React from 'react';
import styled from 'styled-components';
import { useEvent } from 'effector-react/ssr';

import { IProfile } from './types';
import { Header } from '../../widgets/header';
import { goToRooms } from '../../features/goToThePath';
import { Avatar } from '../../entities/user';
import { Button, Card, Container, H, P, Span } from '../../shared/ui';

const Profile: React.FC<IProfile> = ({ className }) => {
  const goToMainPage = useEvent(goToRooms);
  return (
    <>
      <Header />
      <div className={`profile-page ${className}`}>
        <Container className="profile-navigation" justifyContent="start">
          <Container className="back-from-profile">
            <Button
              className="button-back"
              kind="link"
              text="Back"
              leadIconUrl="/images/image6.png"
              leadIconHeight={18}
              leadIconWidth={18}
              onClick={goToMainPage}
            />
          </Container>
        </Container>
        <Container className="profile-info" justifyContent="space-between">
          <Container className="user-info">
            <Avatar kind="lg" />
            <Container gridAutoFlow="row">
              <H className="user-name" tag="h1" kind="xl">
                User Name
              </H>
              <Span className="user-alias" kind="md">
                @alias
              </Span>
            </Container>
            <Button className="button-follow" text="Follow" kind="outline" />
          </Container>
          <Card className="follow-info" kind="sm">
            <Container>
              <Container
                className="followers"
                gridAutoFlow="row"
                textAlign="center"
              >
                <Span className="number" kind="xl">
                  2
                </Span>
                <Span className="text" kind="md">
                  followers
                </Span>
              </Container>
              <Container
                className="following"
                gridAutoFlow="row"
                textAlign="center"
              >
                <Span className="number" kind="xl">
                  0
                </Span>
                <Span className="text" kind="md">
                  following
                </Span>
              </Container>
            </Container>
          </Card>
        </Container>
        <Container className="user-description">
          <P kind="md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae ducimus fugiat nemo odio possimus similique ut!
            Delectus dolor dolores ducimus eveniet libero nostrum repudiandae
            saepe tenetur veniam voluptatum! Sunt!
          </P>
        </Container>
      </div>
    </>
  );
};

export const ProfilePage = styled(Profile)`
  & {
    max-width: 1200px;
    margin: 0 auto;
    padding: 44px 100px 100px;
  }

  .profile-navigation,
  .profile-info {
    margin-bottom: 44px;
  }

  .back-from-profile {
    justify-self: start;
  }

  .button-back {
    padding: 0;
    font-size: 26px;

    .button-lead-icon {
      height: 18px;
      width: 18px;
    }
  }

  .avatar {
    margin-right: 36px;
  }

  .button-follow {
    margin-left: 22px;
  }

  .user-name {
    margin: 0;
  }

  .user-alias,
  .follow-info .text {
    opacity: 0.5;
  }

  .followers {
    margin-right: 22px;
  }
`;
