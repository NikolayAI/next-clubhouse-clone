import React from 'react';

import {Button, IButtonTag} from '../../../shared/ui';

export const ChangeRegistrationStepButton: React.FC<IButtonTag> = ({
  onClick,
  kind,
  text,
  iconUrl,
  iconAlt,
  leadIconUrl,
  leadIconAlt,
  suffixIconUrl,
  suffixIconAlt,
  isLoading,
  loadingDescription,
  className,
  disabled
}) => {
  return (
    <Button
      className={`action-button ${className}`}
      kind={kind}
      text={text}
      iconUrl={iconUrl}
      iconAlt={iconAlt}
      leadIconUrl={leadIconUrl}
      leadIconAlt={leadIconAlt}
      suffixIconUrl={suffixIconUrl}
      suffixIconAlt={suffixIconAlt}
      isLoading={isLoading}
      loadingDescription={loadingDescription}
      disabled={disabled}
      onClick={onClick}
    />
  );
};