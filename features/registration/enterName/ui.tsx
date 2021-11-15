import React from 'react';
import {useEvent} from 'effector-react';

import {goToNextStep} from './model';
import {Button, IButtonTag} from '../../../shared/ui';

export const EnterNameButton: React.FC<Pick<IButtonTag, 'disabled'>> = ({disabled}) => {
  const goToNextPage = useEvent(goToNextStep);
  return (
    <Button
      className="action-button-next"
      kind="primary"
      text="Next"
      suffixIconUrl="/icons/arrowRight.svg"
      onClick={goToNextPage}
      disabled={disabled}
    />
  );
};
