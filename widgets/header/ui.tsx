import React from 'react';
import styled from 'styled-components';
import {useEvent} from 'effector-react/ssr';

import {IHeaderComponent} from './types';
import {goToHome, goToProfile, GoToThePathButton} from '../../features';
import {Avatar} from '../../entities';
import {Container} from '../../shared/ui';

const HeaderComponent: React.FC<IHeaderComponent> = ({className}) => {
  const onHomeClick = useEvent(goToHome);
  const onUserClick = useEvent(goToProfile);
  return (
    <Container className={`header ${className}`} justifyContent="space-between">
      <GoToThePathButton
        className="home-button"
        kind="link"
        text="Clubhouse"
        leadIconUrl="/images/image8.png"
        onClick={onHomeClick}
      />
      <Container className="user-info">
        <GoToThePathButton
          className="user-name-button"
          kind="link"
          text="User Name"
          onClick={onUserClick}
        />
        <Avatar kind="sm"/>
      </Container>
    </Container>
  );
};

export const Header = styled(HeaderComponent)`
  & {
    height: 84px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 100px;
    border-bottom: 1px solid #EAE6DA;
  }

  .home-button {
    padding: 0;
    font-size: 22px;
  }

  .button-lead-icon {
    height: 24px;
    width: 24px;
  }
`;