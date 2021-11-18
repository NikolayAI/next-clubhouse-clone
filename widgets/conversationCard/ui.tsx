import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {IConversationCardComponent} from './types';
import {Avatar} from '../../entities';
import {Card, Container, H, Span} from '../../shared/ui';

const ConversationCardComponent: React.FC<IConversationCardComponent> = ({className}) => {
  return (
    <Card className={`conversation ${className}`} kind="sm">
      <H className="conversation-title" tag="h3" kind="md">Next or Remix?</H>
      <Container justifyContent="start">
        <Container className="speakers-avatars">
          <Avatar kind="sm"/>
          <Avatar kind="sm"/>
        </Container>
        <div className="speakers-description">
          <div className="speakers-names">
            <div className="speaker-name">
              <Span className="name" kind="sm" fontWeight="normal">
                Bruce Lee
                <Image
                  src="/images/image10.png"
                  alt="talk"
                  height={14}
                  width={14}
                />
              </Span>
            </div>
            <div className="speaker-name">
              <Span className="name" kind="sm" fontWeight="normal">
                Chack Noris
                <Image
                  src="/images/image10.png"
                  alt="talk"
                  height={14}
                  width={14}
                />
              </Span>
            </div>
          </div>
          <div className="conversation-statistics">
            <Span className="name" kind="sm" fontWeight="normal">
              87
              <Image
                src="/icons/body.svg"
                alt="body"
                height={14}
                width={14}
              />
            </Span>
            <Span className="name" kind="sm" fontWeight="normal">
              21
              <Image
                src="/icons/dots.svg"
                alt="dots"
                height={14}
                width={14}
              />
            </Span>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export const ConversationCard = styled(ConversationCardComponent)`
  & {
    height: 180px;
    width: 380px;
  }
  
  .speakers-avatars {
    margin-right: 26px;
  }
  
  .name > span {
    margin-left: 8px !important;
  }
  
  .speakers-description {
    display: flex;
    flex-direction: column;
  }
  
  .conversation-statistics {
    margin-top: auto;
  }
`;