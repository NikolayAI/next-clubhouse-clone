import React from 'react';
import styled from 'styled-components';

import {IRooms} from './types';
import {ConversationCard, Header} from '../../widgets';
import {Button, Container, H} from '../../shared/ui';

const Rooms: React.FC<IRooms> = ({className}) => {
  return (
    <>
      <Header/>
      <div className={`rooms-page ${className}`}>
        <Container className="rooms-navigation" justifyContent="space-between">
          <Container>
            <H className="nav-title" tag="h1" kind="lg">All Conversations</H>
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
        <Container>
          <ConversationCard/>
        </Container>
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
    margin-right: 26px;
  }

  .button-explore .button-lead-icon {
    height: 18px;
    width: 18px;
  }
`;