import React from 'react';
import {useEvent} from 'effector-react';

import {goToNextStep} from './model';
import {Button} from '../../../shared/ui';

const ImportInfoButton = () => {
  const goToNextPage = useEvent(goToNextStep);
  return (
    <Button
      className="action-button-import"
      kind="primary"
      text="Import from Twitter"
      leadIconUrl="/icons/sparrow.svg"
      suffixIconUrl="/icons/arrowRight.svg"
      onClick={goToNextPage}
    />
  );
};

export default ImportInfoButton;