import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react/ssr';

import { IRooms } from './types';
import { Header } from '../../widgets/header';
import { ConversationCard } from '../../widgets/conversationCard';
import { roomsModel } from '../../entities/rooms';
import { Button, Container, H } from '../../shared/ui';

const Rooms: React.FC<IRooms> = ({ className }) => {
  const roomsIds = useStore(roomsModel.$roomsIds);
  return (
    <>
      <Header />
      <div className={`rooms-page ${className}`}>
        <Container className="rooms-navigation" justifyContent="space-between">
          <Container>
            <H className="nav-title" tag="h1" kind="lg">
              All Conversations
            </H>
            <Button
              className="button-explore"
              kind="primary"
              text="Explore"
              leadIconUrl="/images/image9.png"
              disabled
            />
          </Container>
          <Container>
            <Button
              className="button-create-room"
              kind="secondary"
              text="+ Start a room"
            />
          </Container>
        </Container>
        <div className="rooms-content">
          {roomsIds.map((roomId) => {
            return <ConversationCard id={roomId} key={roomId} />;
          })}
        </div>
      </div>
    </>
  );
};

export const RoomsPage = styled(Rooms)`
  & {
    max-width: 1200px;
    margin: 0 auto;
    padding: 44px 100px 100px;
  }

  .rooms-navigation {
    margin-bottom: 44px;
  }

  .nav-title {
    margin: 0 26px 0 0;
  }

  .button-explore .button-lead-icon {
    height: 18px;
    width: 18px;
  }

  .rooms-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
`;
