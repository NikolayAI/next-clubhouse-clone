import React from 'react';

import {Button} from '../../../shared/ui';
import {IGoToEnterUserName} from './types';

export const GoToEnterUserName: React.FC<IGoToEnterUserName> = ({onClick, className}) => {
  return (
    <Button
      className={`action-button ${className}`}
      kind="primary"
      text="Get your username"
      suffixIconUrl="/icons/arrowRight.svg"
      onClick={onClick}
    />
  );
};
