import React from 'react';
import Image from 'next/image';

import {Button, Card, H, P, Span} from '../../shared/ui';

export const Welcome: React.FC = () => {
  return (
    <div>
      <Card className="welcome-card" kind="md">
        <Image
          className="welcome-icon"
          src="/images/image2.png"
          alt="confetti"
          height={28}
          width={28}
        />
        <H className="welcome-title" tag="h1" kind="md">
          Welcome to Clubhouse!
        </H>
        <P className="welcome-description" kind="md">
          We’re working hard to get Clubhouse ready for
          everyone! While we wrap up the finishing youches,
          we’re adding people gradually to make sure nothing
          breaks :)
        </P>
        <Button
          className="welcome-button-next"
          title="Get your username"
          kind="primary"
        />
        <Span className="welcome-options" kind="xs">
          Have an invite text? Sign in
        </Span>
      </Card>
    </div>
  );
};
