import React from 'react';
import styled from 'styled-components';
import { useEvent, useStore } from 'effector-react/ssr';

import { IRoomPage } from './types';
import { Header } from '../../widgets/header';
import { goToRooms } from '../../features/goToThePath';
import { roomsModel } from '../../entities/rooms';
import { Button, Card, Container, H } from '../../shared/ui';

export const Room: React.FC<IRoomPage> = ({ className }) => {
  const room = useStore(roomsModel.$currentRoom);
  const goToRoomsPage = useEvent(goToRooms);
  return (
    <>
      <Header />
      <div className={`room-page ${className}`}>
        <Container className="room-navigation" justifyContent="space-between">
          <Container>
            <Button
              className="button-back"
              kind="link"
              text="All rooms"
              leadIconUrl="/images/image6.png"
              leadIconHeight={18}
              leadIconWidth={18}
              onClick={goToRoomsPage}
            />
          </Container>
        </Container>
        <Container className="room-content-container" justifyContent="stretch">
          <Card className="room-content" kind="lg" fullWidth>
            <Container className="content-nav" justifyContent="space-between">
              <H tag="h1" kind="lg">
                {room.title}
              </H>
              <Button
                className="button-leave"
                kind="ghost"
                text="Leave quietly"
                leadIconUrl="/images/image11.png"
                leadIconHeight={18}
                leadIconWidth={18}
                onClick={goToRoomsPage}
              />
            </Container>
          </Card>
        </Container>
      </div>
    </>
  );
};

export const RoomPage = styled(Room)`
  & {
    max-width: 1200px;
    margin: 0 auto;
    padding: 44px 100px;
  }

  .room-navigation {
    width: 100%;
    margin: 0 auto 44px;
  }

  .nav-title {
    margin-right: 26px;
  }

  .button-back {
    padding: 0;
    font-size: 26px;
  }

  .button-leave {
    margin-left: 24px;

    .button-text {
      color: #ff656d;
    }
  }
`;
