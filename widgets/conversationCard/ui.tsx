import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {IConversationCardComponent} from './types';
import {Avatar} from '../../entities';
import {Card, Container, H, Span} from '../../shared/ui';

const ConversationCardComponent: React.FC<IConversationCardComponent> = ({
  className,
}) => {
  return (
    <Card className={`conversation ${className}`} kind="sm">
      <Container
        className="conversation-container"
        gridAutoFlow="row"
        justifyContent="start"
      >
        <H className="conversation-title" tag="h3" kind="md">Next or Remix?</H>
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
            {/*<Avatar className="alone-avatar" kind="md"/>*/}
            <Avatar className="first-avatar" kind="sm"/>
            <Avatar className="second-avatar" kind="sm"/>
          </Container>
          <Container
            className="conversation-description"
            gridAutoFlow="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Container gridAutoFlow="row">
              <Span className="name" kind="sm" fontWeight="normal">
                Bruce Lee
                <Image
                  src="/images/image10.png"
                  alt="talk"
                  height={14}
                  width={14}
                />
              </Span>
              <Span className="name" kind="sm" fontWeight="normal">
                Bruce Lee
                <Image
                  src="/images/image10.png"
                  alt="talk"
                  height={14}
                  width={14}
                />
              </Span>
            </Container>
            <Container
              className="conversation-statistics"
              justifyContent="start"
              alignItems="end"
            >
              <Span className="stat" kind="sm" fontWeight="normal">
                87
                <Image
                  src="/icons/body.svg"
                  alt="body"
                  height={14}
                  width={14}
                />
              </Span>
              <Span className="stat" kind="sm" fontWeight="normal">
                21
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
    height: 180px;
    width: 380px;
  }

  .conversation-container,
  .conversation-content,
  .conversation-description,
  .conversation-statistics {
    height: 100%;
  }
  
  .conversation-title {
    margin: 0;
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
    left: 26px
  }

  .name > span,
  .stat > span {
    margin-left: 8px !important;
  }
  
  .stat + .stat {
    margin-left: 16px;
  }
  
  .stat {
    opacity: 0.5;
  }
`;