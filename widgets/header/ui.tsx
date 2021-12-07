import React from 'react';
import styled from 'styled-components';
import { useEvent } from 'effector-react/ssr';

import { IHeaderComponent } from './types';
import { goToHome, goToProfile } from '../../features/goToThePath';
import { Avatar } from '../../entities/user';
import { Button, Container } from '../../shared/ui';

const HeaderComponent: React.FC<IHeaderComponent> = ({ className }) => {
  const onHomeClick = useEvent(goToHome);
  const onUserClick = useEvent(goToProfile);
  return (
    <div className={className}>
      <Container className="header" justifyContent="space-between">
        <Button
          className="home-button"
          kind="link"
          text="Clubhouse"
          leadIconUrl="/images/image8.png"
          leadIconHeight={18}
          leadIconWidth={18}
          onClick={onHomeClick}
        />
        <Container className="user-info">
          <Button
            className="user-name-button"
            kind="link"
            text="User Name"
            onClick={onUserClick}
          />
          <Avatar kind="sm" />
        </Container>
      </Container>
      <div className="divider" />
    </div>
  );
};

export const Header = styled(HeaderComponent)`
  .header {
    height: 84px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 100px;
  }

  .home-button {
    padding: 0;
    font-size: 22px;
  }

  .button-lead-icon {
    height: 24px;
    width: 24px;
  }

  .divider {
    height: 1px;
    border-bottom: 1px solid #eae6da;
  }
`;
