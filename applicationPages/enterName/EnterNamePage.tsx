import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {useEvent, useStore} from 'effector-react';

import {IEnterName} from './types';
import {$isFullNameNextButtonDisabled} from './model';
import {
  ChangeRegistrationStepButton,
  goToEnterInfo,
} from '../../features';
import {FullNameInput, userModel} from '../../entities/user';
import {Card, Container, H, PageWrapper, Span} from '../../shared/ui';

const EnterName: React.FC<IEnterName> = ({className}) => {
  const fullName = useStore(userModel.stores.$fullName);
  const setFullName = useEvent(userModel.events.setFullName);
  const isNextButtonDisabled = useStore($isFullNameNextButtonDisabled);
  const goToNextPage = useEvent(goToEnterInfo);
  return (
    <PageWrapper className={`enter-name ${className}`}>
      <Container className="enter-name-title" gridAutoFlow="row">
        <Container className="title-icon-container">
          <Image
            className="title-icon"
            src="/images/image5.png"
            alt="man"
            height={48}
            width={48}
          />
        </Container>
        <Container className="title-text-container">
          <H className="title-text" tag="h1" kind="md">
            What’s your full name?
          </H>
        </Container>
      </Container>
      <Container className="enter-name-description">
        <Span className="description-text" kind="md" fontWeight="normal">
          People use real names on Clubhouse :) Thnx!
        </Span>
      </Container>
      <Card className="enter-name-card" kind="md">
        <FullNameInput
          className="enter-name-input"
          fullName={fullName}
          setFullName={setFullName}
        />
        <Container className="enter-name-actions">
          <ChangeRegistrationStepButton
            className="enter-name-button"
            kind="primary"
            text="Next"
            suffixIconUrl="/icons/arrowRight.svg"
            disabled={isNextButtonDisabled}
            onClick={goToNextPage}
          />
        </Container>
      </Card>
    </PageWrapper>
  );
};

export const EnterNamePage = styled(EnterName)`
  .enter-name-description {
    margin-bottom: 40px;
  }

  .enter-name-input {
    margin-bottom: 32px;
  }
`;