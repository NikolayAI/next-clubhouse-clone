import React from 'react';
import {useEvent} from 'effector-react';

import {goToRegistration} from './model';
import {Button} from '../../../shared/ui';

export const GoToRegistrationButton: React.FC = () => {
  const pushToThePath = useEvent(goToRegistration);
  return (
    <Button
      className="action-button start-auth"
      kind="primary"
      text="Get your username"
      suffixIconUrl="/icons/arrowRight.svg"
      onClick={pushToThePath}
    />
  );
};
