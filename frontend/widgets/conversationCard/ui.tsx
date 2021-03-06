import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useEvent, useStore } from 'effector-react/ssr';

import { IConversationCardComponent } from './types';
import { goToRoom } from '../../features/goToThePath';
import { Avatar } from '../../entities/user';
import { roomsModel } from '../../entities/rooms';
import { Card, Container, H, Span } from '../../shared/ui';

const ConversationCardComponent: React.FC<IConversationCardComponent> = ({
  id,
  className,
}) => {
  const room = useStore(roomsModel.$rooms)[id] ?? {};
  const goToRoomPage = useEvent(goToRoom);
  return (
    <Card
      className={`conversation ${className}`}
      kind="sm"
      onClick={() => goToRoomPage({ id })}
    >
      <Container
        className="conversation-container"
        gridAutoFlow="row"
        justifyContent="start"
      >
        <H className="conversation-title" tag="h3" kind="md">
          {room.title}
        </H>
        <Container
          className="conversation-content"
          justifyContent="start"
          alignItems="start"
        >
          <Container
            className="speakers-avatars"
            justifyContent="start"
            alignItems="start"
          >
            {room.avatars?.length === 1 && (
              <Avatar
                className="alone-avatar"
                kind="md"
                imageUrl={room.avatars[0]}
              />
            )}
            {room.avatars?.length > 1 && (
              <>
                <Avatar
                  className="first-avatar"
                  kind="sm"
                  imageUrl={room.avatars[0]}
                />
                <Avatar
                  className="second-avatar"
                  kind="sm"
                  imageUrl={room.avatars[1]}
                />
              </>
            )}
          </Container>
          <Container
            className="conversation-description"
            gridAutoFlow="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Container gridAutoFlow="row">
              {room.guests.map((guest, i) => (
                <Span
                  key={`${guest}-${i}`}
                  className="name"
                  kind="sm"
                  fontWeight="normal"
                >
                  {guest}
                  <Image
                    src="/images/image10.png"
                    alt="talk"
                    height={14}
                    width={14}
                  />
                </Span>
              ))}
            </Container>
            <Container
              className="conversation-statistics"
              justifyContent="start"
              alignItems="end"
            >
              <Span className="stat" kind="sm" fontWeight="normal">
                {room.guestsCount}
                <Image
                  src="/icons/body.svg"
                  alt="body"
                  height={14}
                  width={14}
                />
              </Span>
              <Span className="stat" kind="sm" fontWeight="normal">
                {room.speakersCount}
                <Image
                  src="/icons/dots.svg"
                  alt="dots"
                  height={14}
                  width={14}
                />
              </Span>
            </Container>
          </Container>
        </Container>
      </Container>
    </Card>
  );
};

export const ConversationCard = styled(ConversationCardComponent)`
  & {
    width: auto;
    cursor: pointer;
  }

  .conversation-container,
  .conversation-content,
  .conversation-description,
  .conversation-statistics {
    height: 100%;
  }

  .conversation-title {
    margin-top: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .speakers-avatars {
    height: 80px;
    width: 80px;
    margin-right: 20px;
    position: relative;
  }

  .second-avatar {
    position: absolute;
    top: 26px;
    left: 26px;
  }

  .name > span,
  .stat > span {
    margin-left: 8px !important;
  }

  .conversation-description {
    margin-bottom: 26px;
  }

  .stat + .stat {
    margin-left: 16px;
  }

  .stat {
    opacity: 0.5;
  }
`;
